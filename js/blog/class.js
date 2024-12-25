// 博客文章标题
if (urllength < 20) {
  document.getElementById('blogtitle').innerHTML = btitle[number];
  document.getElementById('blogdate').innerHTML = '<a href="./archive.html" style="text-decoration:none">2024</a>/' + bdate[number];
} else {
// 该年份目录
  var caseArchive = document.createElement('script');
  caseArchive.src = '../../js/blog/content.js';
  caseArchive.async = true;
  document.body.appendChild(caseArchive);
}
