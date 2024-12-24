document.getElementById('blogindex').insertAdjacentHTML('beforebegin', '<p style="padding:10px 0; display:table-cell; vertical-align:bottom"><span style="float:right"><a href="../home.html"><b>返回主页</b></a></span><span style="font-size:29px"><b>' + archYear + '</b></span></p>');
for (i=1; i < amount; i++) {
    document.getElementById('blogindex').insertAdjacentHTML('afterbegin', '<div class="card"><div class="cardcontent"><a href="./' + i + '.html"><div class="cardlink"><p class="time">' + bdate[i] + '</p><p class="title">' + btitle[i] + '</p><p class="intro">' + bintro[i] + '</p></div></a></div></div>');
  } 
