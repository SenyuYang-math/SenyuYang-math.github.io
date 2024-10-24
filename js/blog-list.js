// 文章列表
var btitle = new Array(); var bdate = new Array(); 
btitle[0] = "null"; bdate[0] = "null"; 
btitle[1] = "照亮球的外表面需要多少盏灯"; bdate[1] = "2024/02/12"; 
btitle[2] = "多项式方法与有限域Kakeya猜想"; bdate[2] = "2024/02/19"; 
btitle[3] = "Bootstrap Method(baby ver.)"; bdate[3] = "2024/03/08"; 
btitle[4] = "Cauchy积分定理的几何风证明"; bdate[4] = "2024/03/14"; 
btitle[5] = "Littlewood-Paley定理的随机化证明"; bdate[5] = "2024/05/12"; 
btitle[6] = "Bourgain的魔法：一道2024年丘赛题与双线性Strichartz估计"; bdate[6] = "2024/06/28"; 
btitle[7] = "Bourgain的魔法：一个Szemerédi型定理的调和分析证明"; bdate[7] = "2024/07/03"; 
btitle[8] = "Brezis-Lieb引理与一个变分问题"; bdate[8] = "2024/07/17"; 
btitle[9] = "Van der Corput不等式"; bdate[9] = "2024/07/18"; 
btitle[10] = "线代作业题：1维Ising模型的配分函数"; bdate[10] = "2024/08/01"; 
btitle[11] = "等宽曲线与Crofton公式"; bdate[11] = "2024/08/16"; 
btitle[12] = "集中紧性原理 (Ⅰ) : 动机，主要结果"; bdate[12] = "2024/08/31";
btitle[13] = "集中紧性原理 (Ⅱ) : 大bubble的尺度和位置"; bdate[13] = "2024/09/06";
btitle[14] = "Schroeder-Bernstein定理的不动点证明"; bdate[14] = "2024/09/26";
btitle[15] = "Schroeder-Bernstein定理：构造不动点"; bdate[15] = "2024/10/20";
btitle[16] = "近期随想 (1)"; bdate[16] = "2024/10/24";
// btitle[] = ""; bdate[] = "";
var amount = btitle.length;
// 获取网址
var blogurl = window.location.pathname;
var urltxt = blogurl.toString();
var urllength = urltxt.length;
// 获取文章序数
var number = Number(urltxt.substring(10,urllength-5));
// 博客文章页面
if (urllength > 12) {
// 创建文章标题
const date = document.getElementById('container');
date.insertAdjacentHTML('afterbegin', '<span id="blogdate" class="blogdate">' + bdate[number] + '</span><hr class="titleline">');
const title = document.getElementById('container');
title.insertAdjacentHTML('afterbegin', '<h1 id="blogtitle" style="margin-bottom: 10px;">' + btitle[number] + '</h1>');
// 创建版权许可
const blogcopy = document.getElementById('container');
blogcopy.insertAdjacentHTML('beforeend', '<div id="copyright"></div>');
fetch('../temp/copyright.html')
  .then(response => response.text())
  .then(data => {
  document.querySelector('#copyright').innerHTML = data;
});
// 创建跳转模块
const nextlink = document.getElementById('container');
nextlink.insertAdjacentHTML('beforeend', '<div id="nextlink"></div>');
let nexturl = './blog' + String(number + 1) + '.html';
let prevurl = './blog' + String(number - 1) + '.html';
// 插入跳转网址
if (number < 2) {
  document.getElementById('nextlink').innerHTML = '<div style="width: 25%; float:left; padding:30px 0px; color:grey"><i class="fa-solid fa-arrow-left"></i>&nbsp;<span>无</span></div><div style="float:right; padding:30px 0px; text-align:right"><a style="text-decoration:none" href="' + nexturl + '">&nbsp;<i class="fa-solid fa-arrow-right"></i></a></div><div style="width:25%; float:right; padding:30px 0px; text-align:right; color:grey">'+ btitle[number+1] + '</div><div style="margin:0 auto; width:20%; padding:30px 0px; position:relative; text-align:center"><a href="../blog.html" style="text-decoration: none">Home</a></div>';}
else if (number+2 > amount) {
  document.getElementById('nextlink').innerHTML = '<div style="float:left; padding:30px 0px; text-align:right"><a style="text-decoration:none" href="' + prevurl + '"><i class="fa-solid fa-arrow-left"></i>&nbsp;</a></div><div style="width:25%; float:left; padding:30px 0px; text-align:left; color:grey">' + btitle[number-1] + '</div><div style="float:right; padding:30px 0px; text-align:right">&nbsp;<i class="fa-solid fa-arrow-right"></i></div><div style="width:25%; float:right; padding:30px 0px; text-align:right; color:grey">无</div><div style="margin:0 auto; width:20%; padding:30px 0px; position:relative; text-align:center"><a href="../blog.html" style="text-decoration: none">Home</a></div>';  
} else {
  document.getElementById('nextlink').innerHTML = '<div style="float:left; padding:30px 0px; text-align:right"><a style="text-decoration:none" href="' + prevurl + '"><i class="fa-solid fa-arrow-left"></i>&nbsp;</a></div><div style="width:25%; float:left; padding:30px 0px; text-align:left; color:grey">' + btitle[number-1] + '</div><div style="float:right; padding:30px 0px; text-align:right"><a style="text-decoration:none" href="' + nexturl + '">&nbsp;<i class="fa-solid fa-arrow-right"></i></a></div><div style="width:25%; float:right; padding:30px 0px; text-align:right; color:grey">' + btitle[number+1] + '</div><div style="margin:0 auto; width:20%; padding:30px 0px; position:relative; text-align:center"><a href="../blog.html" style="text-decoration: none">Home</a></div>';
}
} else {
  // 博客主页目录
  for (i=1; i < amount; i++) {
    document.getElementById('blogindex').insertAdjacentHTML('afterbegin', '<div class="card"><div class="cardcontent"><a href="blog/blog' + i + '.html"><div class="cardlink"><p class="time">' + bdate[i].toString().substring(5) + '</p><p class="title">' + btitle[i] + '</p><p class="intro">' + bintro[i] + '</p></div></a></div></div>');
    if (i+2 > amount || Number(bdate[i].toString().substring(0,4)) < Number(bdate[i+1].toString().substring(0,4))) {
      document.getElementById('blogindex').insertAdjacentHTML('afterbegin', '<div id="' + bdate[i].toString().substring(0,4) + '" class="year"><h2>' + bdate[i].toString().substring(0,4) +'</h2></div>');
    }
  }
}
