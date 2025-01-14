// 文章列表
var btitle = new Array(); var bdate = new Array(); var bintro = new Array();
btitle[0] = "null"; bdate[0] = "null"; bintro[0] = "null";
btitle[1] = "不确定性原理，Cauchy-Davenport定理与分圆数"; bdate[1] = "01/01"; bintro[1] = "Z/pZ的调和分析，以及与代数数论和加性组合的奇妙联系.";
btitle[2] = "递推数列的微扰与稳定性"; bdate[2] = "01/14"; bintro[2] = "来自H. Poincaré的结果，关键在于刻画递推向量各个分量的渐进行为";
// btitle[] = ""; bdate[] = ""; bintro[] = "";
var amount = btitle.length;

  var classify = document.createElement('script');
  classify.src = '../../js/blog/class.js';
  classify.async = true;
  document.body.appendChild(classify);
