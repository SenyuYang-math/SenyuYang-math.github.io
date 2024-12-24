// 整体样式
(function () {
  var meta = document.createElement('meta');
  meta.charset = 'utf-8';
  meta.name = 'viewport';
  meta.content = 'width=device-width, initial-scale=1.0';
  document.head.appendChild(meta);
  var style = document.createElement('link');
  style.rel = 'stylesheet';
  style.type = 'text/css';
  style.href = '../css/style.css';
  document.head.appendChild(style);
})();
// 配置Mathjax
var mathjax = document.createElement('script');
mathjax.src = '../js/math-config.js';
mathjax.async = true;
document.body.appendChild(mathjax);
// 导航栏，页脚
(function () {
  var headfoot = document.createElement('script');
  headfoot.src = '../js/head-foot.js';
  headfoot.async = true;
  document.body.appendChild(headfoot);
})();
var currYear = new Date().getFullYear();
var laList = document.createElement('script');
laList.src = '../js/blog/list/' + currYear + '.js';
(async function() {
  await document.body.appendChild(laList);
  document.getElementById('laLink').href = './' + currYear + '/' + (amount-1) + '.html';
    document.getElementById('laTime').insertAdjacentHTML('afterbegin', bdate[amount-1]);
    document.getElementById('laTitle').insertAdjacentHTML('afterbegin', btitle[amount-1]);
    document.getElementById('laIntro').insertAdjacentHTML('afterbegin', bintro[amount-1]);
});
  var i = 1;
  for (i=2024; i < 2050; i++) {
    document.getElementById('archive').insertAdjacentHTML('afterbegin', '<div class="card"><div class="cardcontent"><a href="./' + i + '/archive.html"><div class="cardlink"><p class="title" style="font-size:22px">' + i + '</p></div></a></div></div>')
  }
