var n=document.getElementById("root")
var r=document.createElement("div")
import c from '../img/webLogo.png'
import d from '../img/webpackLogo.png'
import e from '../img/12.jpg'
import f from '../img/gif.gif'
import './index.scss'
r.innerText="webpack"
n.append(r)
var img = document.createElement("img")
var img2 = document.createElement("img")
var img3 = document.createElement("img")
img.src = '../img/webLogo.png';
img2.src = e;
img3.src = f;
//样式  h5新特性  给节点添加class名  对应的还有clssList.add 添加  .remove 删除  .toggle 替换
img.classList.add('imgOne');
img2.classList.add('imgTwo');
img3.classList.add('imgThree');


n.append(img);
n.append(img2);
n.append(img3);