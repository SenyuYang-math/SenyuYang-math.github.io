// 文章列表
var btitle = new Array(); var bdate = new Array(); var bintro = new Array();
btitle[0] = "null"; bdate[0] = "null"; bintro[0] = "null";
btitle[1] = "分析学家的Szemerédi正则引理"; bdate[1] = "01/26"; bintro[1] = "用对称函数的L^2理论和cut norm刻画图的弱正则性.";
btitle[2] = "环面上的Kiselev-Sverak引理"; bdate[2] = "03/30"; bintro[2] = "二维Euler方程速度场的分解，对应了一种双曲流的拉伸效应.";
btitle[3] = "调和函数的频率"; bdate[3] = "05/02"; bintro[3] = "调和函数在球面上的振荡频率控制了径向的增长.";
btitle[4] = "非平凡铺满欧氏空间的直线族"; bdate[4] = "09/17"; bintro[4] = "考古UyHiP上的一道趣题.";
btitle[5] = "一个Pólya定理(与Hardy的改进)"; bdate[5] = "09/20"; bintro[5] = "整函数在算术集上的取值给出了增长行为的分类.";
btitle[6] = "一个点能落在多少三角形中"; bdate[6] = "09/23"; bintro[6] = "多项式剖分的一个平面特例.";
btitle[7] = "多孔介质的相变尺度"; bdate[7] = "10/20"; bintro[7] = "多孔介质上Poisson方程的均质化，洞的尺度在临界值两侧给出不同的极限.";
// btitle[8] = "振荡测试函数方法"; bdate[8] = "10/12"; bintro[8] = "周期系数椭圆方程的均匀化，振荡测试函数方法、能量收敛与校正子.";
// btitle[10] = "Šverák的反例：秩一凸但不quasiconvex的函数"; bdate[10] = "10/12"; bintro[10] = "秩一凸性不蕴含quasiconvexity，反例把一个三线性函数沿秩一直线延拓到整个矩阵空间.";
// btitle[11] = "Bourgain的魔法：逐点遍历定理"; bdate[11] = "09/25"; bintro[11] = "多项式遍历平均的逐点收敛，以及圆法、转移原理与多频率熵估计.";
// btitle[] = ""; bdate[] = ""; bintro[] = "";
var amount = btitle.length;

  var classify = document.createElement('script');
  classify.src = '../../js/blog/class.js';
  classify.async = true;
  document.body.appendChild(classify);
