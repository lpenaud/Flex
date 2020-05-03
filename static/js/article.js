(function () {
  var topicTitle = document.querySelector('div.topic > p.topic-title');
  var topicCheckbox = document.createElement('input');
  topicCheckbox.type = 'checkbox';
  topicCheckbox.classList.add('toc-toogle');
  topicTitle.parentElement.insertBefore(topicCheckbox, topicTitle);
  topicTitle.addEventListener('click', function () {
    topicCheckbox.checked = !topicCheckbox.checked;  
  });
})();