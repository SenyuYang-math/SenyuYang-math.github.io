// 创建文章标题
const date = document.getElementById('container');
date.insertAdjacentHTML('afterbegin', '<span id="bloginfo"><i class="fa-regular fa-calendar-days"></i> 2024/' + bdate[number] + '&emsp;<i class="fa-solid fa-pencil"></i> Ysy</span><hr class="titleline">');
const title = document.getElementById('container');
title.insertAdjacentHTML('afterbegin', '<h1 id="blogtitle">' + btitle[number] + '</h1>');

  // 创建跳转模块
  // const nextlink = document.getElementById('bottom');
  // nextlink.insertAdjacentHTML('beforeend', '<div id="nextlink"></div>');
  // let nexturl = './blog' + String(number + 1) + '.html';
  // let prevurl = './blog' + String(number - 1) + '.html';
    // 插入跳转网址
  // if (number < 2) {
  //   document.getElementById('nextlink').innerHTML = '<div style="width: 25%; float:left; padding:30px 0px; color:grey"><i class="fa-solid fa-arrow-left"></i>&nbsp;<span>无</span></div><div style="float:right; padding:30px 0px; text-align:right"><a style="text-decoration:none" href="' + nexturl + '">&nbsp;<i class="fa-solid fa-arrow-right"></i></a></div><div style="width:25%; float:right; padding:30px 0px; text-align:right; color:grey">'+ btitle[number+1] + '</div><div style="margin:0 auto; width:20%; padding:30px 0px; position:relative; text-align:center"><a href="../blog.html" style="text-decoration: none">Home</a></div>';
  // }
  // else if (number+2 > amount) {
  //   document.getElementById('nextlink').innerHTML = '<div style="float:left; padding:30px 0px; text-align:right"><a style="text-decoration:none" href="' + prevurl + '"><i class="fa-solid fa-arrow-left"></i>&nbsp;</a></div><div style="width:25%; float:left; padding:30px 0px; text-align:left; color:grey">' + btitle[number-1] + '</div><div style="float:right; padding:30px 0px; text-align:right">&nbsp;<i class="fa-solid fa-arrow-right"></i></div><div style="width:25%; float:right; padding:30px 0px; text-align:right; color:grey">无</div><div style="margin:0 auto; width:20%; padding:30px 0px; position:relative; text-align:center"><a href="../blog.html" style="text-decoration: none">Home</a></div>';  
  // } else {
  //   document.getElementById('nextlink').innerHTML = '<div style="float:left; padding:30px 0px; text-align:right"><a style="text-decoration:none" href="' + prevurl + '"><i class="fa-solid fa-arrow-left"></i>&nbsp;</a></div><div style="width:25%; float:left; padding:30px 0px; text-align:left; color:grey">' + btitle[number-1] + '</div><div style="float:right; padding:30px 0px; text-align:right"><a style="text-decoration:none" href="' + nexturl + '">&nbsp;<i class="fa-solid fa-arrow-right"></i></a></div><div style="width:25%; float:right; padding:30px 0px; text-align:right; color:grey">' + btitle[number+1] + '</div><div style="margin:0 auto; width:20%; padding:30px 0px; position:relative; text-align:center"><a href="../blog.html" style="text-decoration: none">Home</a></div>';
  // }