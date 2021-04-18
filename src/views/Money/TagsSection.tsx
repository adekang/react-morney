import styled from 'styled-components';
import React, {useState} from 'react';


const Wrapper = styled.section`
  background-color: #FFFFFF;
  padding: 12px 16px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;

  > ol {
    margin: 0 -12px;

    > li {
      display: inline-block;
      background: #D9D9D9;
      border-radius: 18px;
      padding: 3px 18px;
      font-size: 14px;
      margin: 8px 12px;

      &.selected {
        background: #f60;
      }
    }
  }

  > button {
    background: none;
    border: none;
    padding: 2px 4px;
    border-bottom: 1px solid #999999;
    color: #999999;
    margin-top: 8px;
  }
`;
type Props = {
  value: string[],
  onChange: (selected: string[]) => void
}
// 简写 FC
const TagsSection: React.FunctionComponent<Props> = (props) => {

  const [tags, setTags] = useState<string[]>(['衣', '食', '住', '行']);
  const selectedTags = props.value;
  // 新增 tag
  const onAddTag = () => {
    const tagName = window.prompt('新标签的名称为：');
    if (tagName !== null) {
      setTags([...tags, tagName]);
    }
  };

  // 选中切换 tag
  const onToggleTag = (tag: string) => {
    const index = selectedTags.indexOf(tag);
    if (index >= 0) {
      // 已被选中，取消选中
      // 如果tag已被选中就复制所有没有被选中的 tag 作为新的selectedTags
      props.onChange(selectedTags.filter(t => t !== tag));
    } else {
      // 没有选中，增加选中
      props.onChange([...selectedTags, tag]);
    }
  };

  const getClass = (tag: string) => selectedTags.indexOf(tag) >= 0 ? 'selected' : '';


  return (
    <Wrapper>
      <ol>
        {tags.map(tag =>
          <li key={tag}
              onClick={() => {onToggleTag(tag);}}
              className={getClass(tag)}>
            {tag}</li>
        )}
      </ol>
      <button onClick={onAddTag}>新增标签</button>
    </Wrapper>
  );
};

export {TagsSection};
