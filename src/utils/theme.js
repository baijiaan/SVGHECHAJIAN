import axios from "axios";
import { colorMap, colorTables } from "@/common/common.js";
import color from "css-color-function"; // 基于主色填充不同程度的白色
import rgbHex from "rgb-hex"; // 转换16进制
// 生成最终的样式
export const generateNewStyle = async (primary) => {
  console.log(primary);
  //  1.请求所有的element样式
  const originalStyle = await getOriginalStyle();
  // 2.分析原始样式 找出需要替换的颜色 打上标记
  let newStyle = getStyleTemplate(originalStyle);
  // console.log(newStyle);
  // 3.根据主色生成对应的情景色
  const newColors = generateColors(primary);
  // console.log(newColors, "color");
  // 4.将已经生成的请景色打入到之前生成的标识
  Object.keys(newColors).forEach((key) => {
    // key值和打入css样式的标识一样 通过查找key替换成生成的相对应的主色以及请景色
    newStyle = newStyle.replace(
      new RegExp("(:|\\s+)" + key, "g"),
      "$1" + newColors[key]
    );
  });
  return newStyle;
};
const getOriginalStyle = async () => {
  const url = "http://localhost:8081/element-plus.css";
  const { data } = await axios.get(url);
  // console.log(data);
  return data;
};
const getStyleTemplate = (Style) => {
  Object.keys(colorMap).forEach((key) => {
    const value = colorMap[key];
    Style = Style.replace(new RegExp(key, "gi"), value);
  });
  return Style;
};
export const generateColors = (primary) => {
  // 根据主色生成对应的请景色 也就是加白
  const colors = {
    primary,
  };
  Object.keys(colorTables).forEach((key) => {
    // 将主色应用到color 函数中   利用正则查找colorTables中所有的primary字符串 并替换primary变量
    const value = colorTables[key].replace(new RegExp(/primary/g), primary);
    // console.log(value, "222");
    //  rgbHex 是生成十六进制的颜色  color.convert是基于主色添加不同的白色
    colors[key] = "#" + rgbHex(color.convert(value));
  });
  return colors;
};

// 将生成的样式写到head标签中 原生的方法
export const writeStyleToHearTag = (newStyle) => {
  const style = document.createElement("style");
  style.innerHTML = newStyle;
  // appendChild是插入到最后
  document.head.appendChild(style);
};
