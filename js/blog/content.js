document.getElementById('blogindex').insertAdjacentHTML('beforebegin', '<span style="float:right; display: table-cell; vertical-align:bottom"><a href="../home.html"><b>返回主页</b></a></span><div id="year"><h2>' + archYear + '</h2></div>');
for (i=1; i < amount; i++) {
    document.getElementById('blogindex').insertAdjacentHTML('afterbegin', '<div class="card"><div class="cardcontent"><a href="./' + i + '.html"><div class="cardlink"><p class="time">' + bdate[i] + '</p><p class="title">' + btitle[i] + '</p><p class="intro">' + bintro[i] + '</p></div></a></div></div>');
  } 
