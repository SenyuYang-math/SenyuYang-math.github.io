// 文章列表
var btitle = new Array(); var bdate = new Array(); var bintro = new Array();
btitle[0] = "null"; bdate[0] = "null"; bintro[0] = "null";
btitle[1] = "不确定性原理，Cauchy-Davenport定理与分圆数"; bdate[1] = "01/01"; bintro[1] = "Z/pZ的调和分析，以及与代数数论和加性组合的奇妙联系.";
btitle[2] = "递推数列的微扰与稳定性"; bdate[2] = "01/14"; bintro[2] = "来自H. Poincaré的结果，关键在于刻画递推向量各个分量的渐进行为";
btitle[3] = "Erdös方法与Hausdorff-Young不等式的反例"; bdate[3] = "01/20"; bintro[3] = "随机化思想在调和分析的又一体现.";
btitle[4] = "解析Fredholm理论 (Ⅰ) : 主要结论"; bdate[4] = "02/22"; bintro[4] = "复分析对Fredholm算子的精细刻画.";
btitle[5] = "解析Fredholm理论 (Ⅱ) : 应用"; bdate[5] = "03/14"; bintro[5] = "在紧算子谱理论的进一步应用.";
btitle[6] = 'Fubini的梦魇: 一个奇异的例子'; bdate[6] = "04/10"; bintro[6] = "从一个圆周动力系统出发的巧妙构造.";
btitle[7] = "散度方程的 $L^{\\infty}$ 解"; bdate[7] = "05/31"; bintro[7] = "Bourgain和Brezis的洞察：通过对偶与Sobolev嵌入联系起来.";
btitle[8] = "输运方程的 $C^1$ 不稳定性"; bdate[8] = "06/12"; bintro[8] = "核心在于对粒子路径和流映射直观而精妙的几何刻画.";
btitle[9] = "指数和的Littlewood猜想"; bdate[9] = "06/22"; bintro[9] = "频率的分布对指数和的影响，关键是将问题对偶为如何构造合适的波包."
btitle[10] = "圆盘有Fourier正交基吗？"; bdate[10] = "06/30"; bintro[10] = "一段振荡积分-距离集问题-关联几何的奇幻旅程.";
btitle[11] = "Cauchy函数方程的可测解"; bdate[11] = "07/05"; bintro[11] = "我们给出可测解连续的两个证明.";
// btitle[] = ""; bdate[] = ""; bintro[] = "";
var amount = btitle.length;

  var classify = document.createElement('script');
  classify.src = '../../js/blog/class.js';
  classify.async = true;
  document.body.appendChild(classify);
