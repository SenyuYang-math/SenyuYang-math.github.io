// 博客文章标题
if (urllength > 15) {
  document.getElementById('blogtitle').innerHTML = btitle[number];
  document.getElementById('blogdate').innerHTML = year + '/' + bdate[number];
  document.getElementById('pagetitle').innerHTML = btitle[number];
  // 配置Mathjax
var mathjax = document.createElement('script');
mathjax.src = '../../js/math-config.js';
mathjax.async = true;
document.body.appendChild(mathjax);
} else {
// 该年份目录
  var caseArchive = document.createElement('script');
  caseArchive.src = '../../js/blog/content.js';
  caseArchive.async = true;
  document.body.appendChild(caseArchive);
}
