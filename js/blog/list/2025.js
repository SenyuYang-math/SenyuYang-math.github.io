// 文章列表
var btitle = new Array(); var bdate = new Array(); var bintro = new Array();
btitle[0] = "null"; bdate[0] = "null"; bintro[0] = "null"; 
// btitle[] = ""; bdate[] = ""; bintro[] = "";
var amount = btitle.length;

// 博客文章标题
if (urllength < 20) {
  document.getElementById('blogtitle').innerHTML = btitle[number];
  document.getElementById('blogdate').innerHTML = '<a href="./archive.html" style="text-decoration:none">2025</a>/' + bdate[number];
} else {
// 该年份目录
  var homepage = document.createElement('script');
  homepage.src = '../../js/blog/content.js';
  homepage.async = true;
  document.body.appendChild(homepage);
}
