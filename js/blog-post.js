// 整体样式
  var meta = document.createElement('meta');
  meta.charset = 'utf-8';
  meta.name = 'viewport';
  meta.content = 'width=device-width, initial-scale=1.0';
  document.head.appendChild(meta);
  var style = document.createElement('link');
  style.rel = 'stylesheet';
  style.type = 'text/css';
  style.href = 'https://senyuyang-math.github.io/css/style.css';
  document.head.appendChild(style);
// 导航栏，页脚
  var headfoot = document.createElement('script');
  headfoot.src = 'https://senyuyang-math.github.io/js/head-foot.js';
  headfoot.async = true;
  document.body.appendChild(headfoot);
// 图标库Font Awesome
var icon = document.createElement('script');
icon.src = 'https://kit.fontawesome.com/c61fec31c6.js';
icon.crossorigin = 'anonymous';
icon.async = true;
document.head.appendChild(icon);
// 文章标题, 正文末尾
  var blogtitle = document.createElement('script');
  blogtitle.src = 'https://senyuyang-math.github.io/js/blog-list.js';
  blogtitle.async = true;
  document.body.appendChild(blogtitle);
// 配置Mathjax
var mathjax = document.createElement('script');
mathjax.src = 'https://senyuyang-math.github.io/js/math-config.js';
mathjax.async = true;
document.body.appendChild(mathjax);
// 打印组件
var pr = document.createElement('script');
pr.src = 'https://printjs-4de6.kxcdn.com/print.min.js';
pr.crossorigin = 'anonymous';
pr.async = true;
document.body.appendChild(pr);
//创建文末功能区
const bottom = document.getElementById('container');
bottom.insertAdjacentHTML('afterend','<div id="bottom"></div>');  
  // 打印按钮
  const print = document.getElementById('bottom');
  print.insertAdjacentHTML('beforeend', '<div><p style="text-align:right"><button id="print-button"><i class="fa-solid fa-print"></i> 打印这篇博客</button></p></div>');
  var button = document.getElementById('print-button');
  button.onclick = function() {
            // printJS({printable: 'container', type: 'html', scanStyles: false, css: 'https://senyuyang-math.github.io/css/style.css', style: `@page { size: A4 portrait; margin: 1.3cm 1.4cm}`);
            var originContents = document.body.innerHTML;
            var actContents = document.getElementById("container").innerHTML;
            document.body.innerHTML = actContents;
            window.print();
            document.body.innerHTML= originContents;
  }
  // 创建版权许可
  const blogcopy = document.getElementById('bottom');
  blogcopy.insertAdjacentHTML('beforeend', '<div id="copyright"></div>');
  fetch('https//senyuyang-math.github.io/temp/copyright.html')
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
  comment.src = 'https://senyuyang-math.github.io/js/comment.js';
  comment.async = true;
  document.body.appendChild(comment);
})();
