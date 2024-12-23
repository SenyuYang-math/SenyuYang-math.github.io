// 网页数据
var urltxt = window.location.pathname.toString();
var urllength = urltxt.length;
// 获取文章序数
var year = Number(urltxt.substring(6, 10));
var number = Number(urltxt.substring(11,urllength-5));
// 整体样式
  var meta = document.createElement('meta');
  meta.charset = 'utf-8';
  meta.name = 'viewport';
  meta.content = 'width=device-width, initial-scale=1.0';
  document.head.appendChild(meta);
  var style = document.createElement('link');
  style.rel = 'stylesheet';
  style.type = 'text/css';
  style.href = '../../css/style.css';
  document.head.appendChild(style);
// 导航栏，页脚
  var headfoot = document.createElement('script');
  headfoot.src = '../../js/head-foot.js';
  headfoot.async = true;
  document.body.appendChild(headfoot);
//文章标题区块
function titlesetup() {
  return new Promise((resolve) => {
    const titleblock = document.getElementById('container');
    titleblock.insertAdjacentHTML('afterbegin', '<div id="titleblock"></div>');
    fetch('../../temp//blog/title.html')
            .then(response => response.text())
            .then(data => {
                document.querySelector('#titleblock').innerHTML = data;
    });
  resolve();
});
}
// 文章标题, 正文末尾
function titleinput() {
  var blogtitle = document.createElement('script');
  blogtitle.src = '../../js/blog/list/' + year + '.js';
  blogtitle.async = true;
  document.body.appendChild(blogtitle);
}
titlesetup().then(titleinput);
// 配置Mathjax
var mathjax = document.createElement('script');
mathjax.src = '../../js/math-config.js';
mathjax.async = true;
document.body.appendChild(mathjax);
//创建文末功能区
const bottom = document.getElementById('container');
bottom.insertAdjacentHTML('afterend','<div id="bottom"></div>');  
  // 创建版权许可
  const blogcopy = document.getElementById('bottom');
  blogcopy.insertAdjacentHTML('beforeend', '<div id="copyright"></div>');
  fetch('../../temp/blog/copyright.html')
    .then(response => response.text())
    .then(data => {
    document.querySelector('#copyright').innerHTML = data;
  });
// valine评论系统
var valine = document.createElement('script');
valine.src = 'https://unpkg.com/valine/dist/Valine.min.js';
valine.async = true;
document.head.appendChild(valine);
window.onload = (function () {
  var comment = document.createElement('script');
  comment.src = '../../js/blog/comment.js';
  comment.async = true;
  document.body.appendChild(comment);
})();
