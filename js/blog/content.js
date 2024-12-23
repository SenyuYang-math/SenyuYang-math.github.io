for (i=1; i < amount; i++) {
    document.getElementById('blogindex').insertAdjacentHTML('afterbegin', '<div class="card"><div class="cardcontent"><a href="./' + currYear + '/' + i + '.html"><div class="cardlink"><p class="time">' + bdate[i] + '</p><p class="title">' + btitle[i] + '</p><p class="intro">' + bintro[i] + '</p></div></a></div></div>');
    if (i+2 > amount) {
    document.getElementById('blogindex').insertAdjacentHTML('afterbegin', '<div id="year"><h2>2024</h2></div>');
    }
  } 
