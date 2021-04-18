import Layout from '../components/Layout';
import React from 'react';
import {useTags} from '../useTags';
import styled from 'styled-components';
import Icon from '../components/Icon';


const TagList = styled.ol`
  font-size: 16px;
  background: #fff;

  > li {
    line-height: 20px;
    border-bottom: 1px solid #d5d5d5;
    margin: 0 16px;
    padding: 12px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;
const Button = styled.button`
  font-size: 18px;
  border: none;
  padding: 8px 12px;
  background-color: #767676;
  border-radius: 4px;
  color: #FFF;
`;

const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Space = styled.div`
  height: 32px;
`;

function Tags() {
  const {tags, setTags} = useTags();

  return (
    <Layout>
      <TagList>
        {tags.map(t =>
          <li key={t}>
            <span className="oneLine">{t}</span>
            <Icon name="right"/></li>
        )}
      </TagList>
      <Center>
        <Space/>
        <Button>新增标签</Button>
      </Center>
    </Layout>
  );
}


export default Tags;