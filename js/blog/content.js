document.getElementById('blogindex').insertAdjacentHTML('beforebegin', '<p style="margin:20px 0; padding:0"><span style="font-size:25px"><b>' + archYear + '</b></span>&emsp;&emsp;<a href="./home.html"><b>返回主页</b></a></p>');
for (i=1; i < amount; i++) {
    document.getElementById('blogindex').insertAdjacentHTML('afterbegin', '<div class="card"><div class="cardcontent"><a href="./' + archYear + '/' + i + '.html"><div class="cardlink"><p class="time">' + bdate[i] + '</p><p class="title">' + btitle[i] + '</p><p class="intro">' + bintro[i] + '</p></div></a></div></div>');
  } 
