$('ul li').each(n, el, function() {
  setTimeout(function() {
    $(el).addClass('showing');
  }, 350 + 64 * n);
})
