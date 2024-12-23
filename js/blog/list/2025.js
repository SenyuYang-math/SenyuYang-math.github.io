// 文章列表
var btitle = new Array(); var bdate = new Array(); var bintro = new Array();
btitle[0] = "null"; bdate[0] = "null"; bintro[0] = "null"; 
// btitle[] = ""; bdate[] = ""; bintro[] = "";
var amount = btitle.length;

// 博客文章页面
if (urllength > 15) {
document.getElementById('blogtitle').innerHTML = btitle[number];
document.getElementById('blogdate').innerHTML = '2025/' + bdate[number];
} else {
// 博客主页目录
  var homepage = document.createElement('script');
  homepage.src = '../../js/blog/content.js';
  homepage.async = true;
  document.body.appendChild(homepage);
}
