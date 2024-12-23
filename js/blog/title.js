//文章标题区块
  const titleblock = document.getElementById('container');
  titleblock.insertAdjacentHTML('afterbegin', '<div id="titleblock"></div>');
  fetch('../../temp//blog/title.html')
    .then(response => response.text())
    .then(data => {
    document.querySelector('#titleblock').innerHTML = data;
    });
// 导入文章信息
  function titleinput() {
    var blogtitle = document.createElement('script');
    blogtitle.src = '../../js/blog/list/' + year + '.js';
    blogtitle.async = true;
    document.body.appendChild(blogtitle);
  };
};
