// 网页数据
var urltxt = window.location.pathname.toString();
var urllength = urltxt.length;
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
  var card = document.createElement('link');
  card.rel = 'stylesheet';
  card.type = 'text/css';
  card.href = '../../css/card.css';
  document.head.appendChild(card);
// 配置Mathjax
var mathjax = document.createElement('script');
mathjax.src = '../../js/math-config.js';
mathjax.async = true;
document.body.appendChild(mathjax);
// 导航栏，页脚
  var headfoot = document.createElement('script');
  headfoot.src = '../../js/head-foot.js';
  headfoot.async = true;
  document.body.appendChild(headfoot);
//导入博客列表
  var archYear = Number(urltxt.substring(6, 10));;
  // var archive = document.createElement('script');
  // archive.id = 'blog-list';
  // archive.src = '../../js/blog/list/' + archYear + '.js';
  // archive.async = true;
  // document.body.appendChild(archive);
  var list = '../../js/blog/modules/' + archYear + '.js'
  let { btitle, bdate, bintro, amount } = await import(list);
//生成目录
document.getElementById('blogindex').insertAdjacentHTML('beforebegin', '<div id="year"><span style="display:table-cell; vertical-align:bottom; float:right"><a href="../home.html"><b>返回主页</b></a></span><h2>' + archYear + '</h2></div>');
var i = 1;
for (i=1; i < amount; i++) {
    document.getElementById('blogindex').insertAdjacentHTML('afterbegin', '<div class="card"><div class="cardcontent"><a href="./' + i + '.html"><div class="cardlink"><p class="time">' + bdate[i] + '</p><p class="title">' + btitle[i] + '</p><p class="intro">' + bintro[i] + '</p></div></a></div></div>');
  } 
