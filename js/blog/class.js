// 博客文章标题
if (urllength > 14) {
  document.getElementById('blogtitle').innerHTML = btitle[number];
  document.getElementById('blogdate').innerHTML = year + '/' + bdate[number];
} else {
// 该年份目录
  var caseArchive = document.createElement('script');
  caseArchive.src = '../../js/blog/content.js';
  caseArchive.async = true;
  document.body.appendChild(caseArchive);
}
