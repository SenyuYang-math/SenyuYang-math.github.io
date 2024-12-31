// 创建导航栏和页脚模块
const headnav = document.getElementById('body');
headnav.insertAdjacentHTML('afterbegin', '<div id="headnav" class="head"></div>');
const footbar = document.getElementById('body');
footbar.insertAdjacentHTML('beforeend', '<div id="footbar" class="foot"></div>');
// 调用html模板
fetch('https://senyuyang-math.github.io/temp/head.html')
            .then(response => response.text())
            .then(data => {
                document.querySelector('#headnav').innerHTML = data;
            });
async function footHTML() {
  await fetch('https://senyuyang-math.github.io/temp/foot.html').then(response => response.text()).then(data => {
                document.querySelector('#footbar').innerHTML = data;
              });
  document.getElementById('sign').innerHTML = '&copy; 2024-' + new Date().getFullYear() + ' Senyu Yang';
}
footHTML();

