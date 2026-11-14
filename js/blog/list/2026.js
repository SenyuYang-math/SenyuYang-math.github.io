// 文章列表
var btitle = new Array(); var bdate = new Array(); var bintro = new Array();
btitle[0] = "null"; bdate[0] = "null"; bintro[0] = "null";
btitle[1] = "分析学家的Szemerédi正则引理"; bdate[1] = "01/26"; bintro[1] = "用对称函数的L^2理论和cut norm刻画图的弱正则性.";
btitle[2] = "环面上的Kiselev-Sverak引理"; bdate[2] = "03/30"; bintro[2] = "二维Euler方程速度场的分解，对应了一种双曲流的拉伸效应.";
btitle[3] = "调和函数的频率"; bdate[3] = "05/02"; bintro[3] = "调和函数在球面上的振荡频率控制了径向的增长.";
btitle[4] = "非平凡铺满欧氏空间的直线族"; bdate[4] = "09/17"; bintro[4] = "考古UyHiP上的一道趣题.";
btitle[5] = "一个Pólya定理(与Hardy的改进)"; bdate[5] = "09/20"; bintro[5] = "整函数在算术集上的取值给出了增长行为的分类.";
btitle[6] = "一个点能落在多少三角形中"; bdate[6] = "09/23"; bintro[6] = "多项式剖分的一个平面特例.";
btitle[7] = "多孔介质的相变尺度"; bdate[7] = "10/20"; bintro[7] = "Tartar的振荡测试方法在均质化理论的应用.";
btitle[8] = "Bourgain的魔法：Birkhoff遍历定理的新证明"; bdate[8] = "11/12"; bintro[8] = "介绍Bourgain多项式遍历定理的第一篇，引入变差判别和Fourier分析.";
// btitle[10] = "Šverák的反例：秩一凸但不quasiconvex的函数"; bdate[10] = "10/12"; bintro[10] = "秩一凸性不蕴含quasiconvexity，反例把一个三线性函数沿秩一直线延拓到整个矩阵空间.";
// btitle[11] = "Bourgain的魔法：多项式遍历定理与Hardy–Littlewood圆法"; bdate[11] = "11/14"; bintro[11] = "系列第二期，多项式平均的有理频率、Weyl和与圆法分解.";
// btitle[12] = "Bourgain的魔法：多频率引理与多项式遍历定理"; bdate[12] = "11/14"; bintro[12] = "系列第三期，多频率熵估计、稀疏变差与逐点收敛的证明.";
// btitle[] = ""; bdate[] = ""; bintro[] = "";
var amount = btitle.length;

  var classify = document.createElement('script');
  classify.src = '../../js/blog/class.js';
  classify.async = true;
  document.body.appendChild(classify);
