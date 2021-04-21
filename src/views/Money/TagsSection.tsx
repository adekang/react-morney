import styled from 'styled-components';
import React from 'react';
import {useTags} from '../../hooks/useTags';


const Wrapper = styled.section`
  background-color: #FFFFFF;
  padding: 12px 16px;
  flex-grow: 1;
  flex-shrink: 1;
  overflow: auto;
  display: flex;
  flex-direction: column;
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
  value: number[],
  onChange: (selected: number[]) => void
}
// 简写 FC
const TagsSection: React.FunctionComponent<Props> = (props) => {

  const {tags, addTag} = useTags();
  const selectedTagIds = props.value;


  // 选中切换 tag
  const onToggleTag = (tagId: number) => {
    const index = selectedTagIds.indexOf(tagId);
    if (index >= 0) {
      // 已被选中，取消选中
      // 如果tag已被选中就复制所有没有被选中的 tagId 作为新的selectedTags
      props.onChange(selectedTagIds.filter(t => t !== tagId));
    } else {
      // 没有选中，增加选中
      props.onChange([...selectedTagIds, tagId]);
    }
  };

  const getClass = (tagId: number) => selectedTagIds.indexOf(tagId) >= 0 ? 'selected' : '';


  return (
    <Wrapper>
      <button onClick={addTag}>新增标签</button>
      <ol>
        {tags.map(tag =>
          <li key={tag.id}
              onClick={() => {onToggleTag(tag.id);}}
              className={getClass(tag.id)}>
            {tag.name}</li>
        )}
      </ol>
    </Wrapper>
  );
};

export {TagsSection};
