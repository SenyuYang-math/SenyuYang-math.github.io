// 文章列表
var btitle = new Array(); var bdate = new Array(); var bintro = new Array();
btitle[0] = "null"; bdate[0] = "null"; bintro[0] = "null";
btitle[1] = "分析学家的Szemerédi正则引理"; bdate[1] = "01/26"; bintro[1] = "用对称函数的L^2理论和cut norm刻画图的弱正则性.";
btitle[2] = "环面上的Kiselev-Sverak引理"; bdate[2] = "03/30"; bintro[2] = "二维Euler方程速度场的分解，对应了一种双曲流的拉伸效应.";
// btitle[] = ""; bdate[] = ""; bintro[] = "";
var amount = btitle.length;

  var classify = document.createElement('script');
  classify.src = '../../js/blog/class.js';
  classify.async = true;
  document.body.appendChild(classify);
