import styled from 'styled-components';

const TagsSection = styled.section`
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
      margin: 0 12px;
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

export {TagsSection};