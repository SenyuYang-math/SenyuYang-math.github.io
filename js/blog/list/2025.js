// 文章列表
var btitle = new Array(); var bdate = new Array(); var bintro = new Array();
btitle[0] = "null"; bdate[0] = "null"; bintro[0] = "null";
btitle[1] = "不确定性原理，Cauchy-Davenport定理与分圆数"; bdate[1] = "01/01"; bintro[1] = "Z/pZ的调和分析，以及与代数数论和加性组合的奇妙联系.";
btitle[2] = "递推数列的微扰与稳定性"; bdate[2] = "01/14"; bintro[2] = "来自H. Poincaré，关键在于刻画递推向量各个分量的渐进行为";
btitle[3] = "Erdős方法与Hausdorff-Young不等式的反例"; bdate[3] = "01/20"; bintro[3] = "随机化思想在调和分析的又一体现.";
btitle[4] = "解析Fredholm理论 (Ⅰ) : 主要结论"; bdate[4] = "02/22"; bintro[4] = "复分析对Fredholm算子的精细刻画.";
btitle[5] = "解析Fredholm理论 (Ⅱ) : 应用"; bdate[5] = "03/14"; bintro[5] = "在紧算子谱理论的进一步应用.";
btitle[6] = 'Fubini的梦魇: 一个奇异的例子'; bdate[6] = "04/10"; bintro[6] = "从一个圆周动力系统出发的巧妙构造.";
btitle[7] = "散度方程的 $L^{\\infty}$ 解"; bdate[7] = "05/31"; bintro[7] = "Bourgain和Brezis的洞察：通过对偶联系了Sobolev嵌入.";
btitle[8] = "输运方程的 $C^1$ 不稳定性"; bdate[8] = "06/12"; bintro[8] = "对粒子路径和流映射直观而精妙的几何刻画.";
btitle[9] = "指数和的Littlewood猜想"; bdate[9] = "06/22"; bintro[9] = "频率的分布对指数和的影响，将问题对偶为如何构造合适的波包."
btitle[10] = "圆盘有Fourier正交基吗？"; bdate[10] = "06/30"; bintro[10] = "一段振荡积分-距离集问题-关联几何的奇幻旅程.";
btitle[11] = "提升弱收敛性的Baire纲方法"; bdate[11] = "07/29"; bintro[11] = "具有凸积分背景的一个实用想法，与弱解非唯一性有关.";
btitle[12] = "用熵计数"; bdate[12] = "08/25"; bintro[12] = "计数问题转化为熵的估计，Shearer引理将整体投影为局部.";
btitle[13] = "Erdős子集和问题：倒数和"; bdate[13] = "09/08"; bintro[13] = "数学分析在极值组合的巧妙应用.";
btitle[14] = "一维NLS的散射与波包测试"; bdate[14] = "10/24"; bintro[14] = "Ifrim-Tataru从驻相原理出发得到非线性散射的定量结果.";
btitle[15] = "Erdős子集和问题：下界估计"; bdate[15] = "11/14"; bintro[15] = "Hypercube等周不等式的神之一手.";
btitle[16] = "凸体的截面"; bdate[16] = "11/26"; bintro[16] = "Brunn-Minkowski不等式的一个应用.";
// btitle[] = ""; bdate[] = ""; bintro[] = "";
var amount = btitle.length;

  var classify = document.createElement('script');
  classify.src = '../../js/blog/class.js';
  classify.async = true;
  document.body.appendChild(classify);
