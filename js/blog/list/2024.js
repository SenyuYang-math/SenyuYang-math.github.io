// 文章列表
var btitle = new Array(); var bdate = new Array(); var bintro = new Array();
btitle[0] = "null"; bdate[0] = "null"; bintro[0] = "null"; 
btitle[1] = "照亮球的外表面需要多少盏灯"; bdate[1] = "02/12"; bintro[1] = "一个中学立体几何问题的背后隐藏着Bosuk-Ulam定理.";
btitle[2] = "多项式方法与有限域Kakeya猜想"; bdate[2] = "02/19"; bintro[2]= "详细展示了Dvir的proof from the Book.";
btitle[3] = "Gronwall不等式的bootstrap式证明"; bdate[3] = "03/08"; bintro[3] = "Bootstrap method的一个简单而普遍的应用范例.";
btitle[4] = "Cauchy积分定理的几何风证明"; bdate[4] = "03/14"; bintro[4] = "用微分流形的语言自然地将定理与Stokes公式联系起来.";
btitle[5] = "Littlewood-Paley定理的随机化证明"; bdate[5] = "05/12"; bintro[5] = "将分析对象随机化的一个美妙范例.";
btitle[6] = "Bourgain的魔法：一道2024年丘赛题与bilinear Strichartz"; bdate[6] = "06/28"; bintro[6] = "令人惊喜的试题，深刻的研究背景.";
btitle[7] = "Bourgain的魔法：一个Szemerédi型定理的调和分析证明"; bdate[7] = "07/03"; bintro[7] = "Bourgain的两个好工具：定量化和抽屉原理.";
btitle[8] = "Brezis-Lieb引理与一个变分问题"; bdate[8] = "07/17"; bintro[8] = "纪念H. Brezis，介绍一道实分析经典习题的背景.";
btitle[9] = "Van der Corput不等式"; bdate[9] = "07/18"; bintro[9] = "记录一个内积不等式.";
btitle[10] = "线代作业题：1维Ising模型的配分函数"; bdate[10] = "08/01"; bintro[10] = "来自统计物理的计算题，一个漂亮的观察.";
btitle[11] = "等宽曲线与Crofton公式"; bdate[11] = "08/16"; bintro[11] = "等宽曲线的Barbier定理，以及Crofton公式的一个分析式证明.";
btitle[12] = "集中紧性原理 (Ⅰ) : 动机，主要结果"; bdate[12] = "08/31"; bintro[12] = "讨论Sobolev嵌入的紧性缺失，叙述了bubble decomposition.";
btitle[13] = "集中紧性原理 (Ⅱ) : 大bubble的尺度和位置"; bdate[13] = "09/06"; bintro[13] = "用频率精细化的Sobolev不等式确定大bubble, 并建立迭代格式.";
btitle[14] = "Schroeder-Bernstein定理的不动点证明"; bdate[14] = "09/26"; bintro[14] = "以格论的语言叙述了一个清爽、直观的证明.";
btitle[15] = "Schroeder-Bernstein定理：构造不动点"; bdate[15] = "10/20"; bintro[15] = "基于上一篇的不动点证明给出直接构造双射的算法.";
btitle[16] = "近期随想 (1)"; bdate[16] = "10/24"; bintro[16] = "球面的测地线；正交性的应用；重整化(baby ver) ."; 
btitle[17] = "Bourgain的魔法：环面Schrödinger方程与格点计数"; bdate[17] = "10/26"; bintro[17] = "PDE, 调和分析与数论的美妙联系，Fourier decoupling的先声.";
btitle[18] = "Bourgain的魔法：有限度量空间的Euclidean嵌入"; bdate[18] = "11/17"; bintro[18] = "软几何的硬分析：随机化的思想和尺度分离-平均的技巧.";
btitle[19] = "null form的Strichartz估计 (Ⅰ) : 引子, tube分解"; bdate[19] = "11/26"; bintro[19] = "介绍了主要结果，以及核心工具：tube分解.";
btitle[20] = "(20th纪念) Sylvester-Gallai定理的拓扑证明"; bdate[20] = "11/28"; bintro[20] = "对偶，图论与Euler示性数合奏的乐章."
btitle[21] = "null form的Strichartz估计 (Ⅱ) : 尺度归纳，透射项的几何"; bdate[21] = "12/07"; bintro[21] = "引入透射/共振两类作用项，对透射项完成尺度归纳的证明.";
btitle[22] = "null form的Strichartz估计 (Ⅲ) : 向量场方法，局部化与色散"; bdate[22] = "12/15"; bintro[22] = "发轫于Klainerman的几何杰作，并与Fourier视角相结合."
btitle[23] = "null form的Strichartz估计 (Ⅳ) : 控制共振项，局部拼接整体"; bdate[23] = "12/27"; bintro[23] = "系列的正篇内容完结，证明了主要结果.";
// btitle[] = ""; bdate[] = "";
var amount = btitle.length;

var classify = document.createElement('script');
  classify.src = '../../js/blog/class.js';
  classify.async = true;
  document.body.appendChild(classify);
