function topic(title) {
  console.log(title.textContent);
  var checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  title.parentElement.insertBefore(checkbox, title);
  title.addEventListener('click', function () {
    checkbox.checked = !checkbox.checked;
  });
}

(function () {
  var titles = document.querySelectorAll('div.topic > p.topic-title');
  for (var i = 0; i < titles.length; i++) {
    topic(titles[i]);
  }
})();