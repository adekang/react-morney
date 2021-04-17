import React from 'react';

// SVG 引入
// require 一个目录
let importAll = (requireContext: __WebpackModuleApi.RequireContext) => requireContext.keys().forEach(requireContext);
try {importAll(require.context('icons', true, /\.svg$/));} catch (error) {console.log(error);}


// 声明类型 类型大写
type Props = {
  name: string
}

const Icon = (props: Props) => {
  return (
    <svg className="icon">
      <use xlinkHref={'#' + props.name}/>
    </svg>
  );
};
export default Icon;