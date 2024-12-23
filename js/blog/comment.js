// 创建评论区块
const comment = document.getElementById('bottom');
comment.insertAdjacentHTML('afterend', '<div id="vcomments" class="comment"></div>');
valineConfig = {
  el: '#vcomments',
  appId: 'KIRTzIJqIQCgA2ZWFd7x9GFz-gzGzoHsz',
  appKey: '7lOrkZbew2sPJDrj1b9ROcbX'
};
var loadValine = function(){
              if('Valine' in window) new Valine(valineConfig);
              else setTimeout(loadValine)
            };
loadValine()
