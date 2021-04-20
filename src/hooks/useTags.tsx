import {useEffect, useState} from 'react';
import {useUpdate} from './useUpdate';
import {createId} from '../lib/createTd';

// 自定义Hook
const useTags = () => {
  const [tags, setTags] = useState<{ id: number; name: string }[]>([]);
  useEffect(() => {
    let localTags = JSON.parse(window.localStorage.getItem('tags') || '[]');
    if (localTags.length === 0) {
      localTags = [
        {id: createId(), name: '衣'},
        {id: createId(), name: '食'},
        {id: createId(), name: '住'},
        {id: createId(), name: '行'},
      ];
    }
    setTags(localTags);
  }, []);// 组件挂载时执行

  useUpdate(() => {
    window.localStorage.setItem('tags', JSON.stringify(tags));
  }, [tags]);

  const findTag = (id: number) => tags.filter(tag => tag.id === id)[0];
  const findTagIndex = (id: number) => {
    let result = -1;
    for (let i = 0; i < tags.length; i++) {
      if (tags[i].id === id) {
        result = i;
        break;
      }
    }
    return result;
  };
  const updateTag = (id: number, obj: { name: string }) => {
    // 获取要改的下标
    const index = findTagIndex(id);
    // 深拷贝 tags 得到 tagsClone
    const tagsClone = JSON.parse(JSON.stringify(tags));
    // 把 tagsClone 的第 index 删掉，换成 {id:id, name: obj.name}
    tagsClone.splice(index, 1, {id: id, name: obj.name});
    setTags(tagsClone);
  };
  const deleteTag = (id: number) => {
    setTags(tags.filter(tag => tag.id !== id));
  };
  // 新增 tag
  const addTag = () => {
    const tagName = window.prompt('新标签的名称为：');
    if (tagName !== null && tagName !== '') {
      setTags([...tags, {id: createId(), name: tagName}]);
    }
  };
  return {
    tags, setTags, findTag, updateTag, findTagIndex, deleteTag, addTag
  };
};

export {useTags};