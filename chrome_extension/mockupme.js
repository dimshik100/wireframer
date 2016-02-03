
(function (document) {


  // change all images
  var images = document.getElementsByTagName('img');
  var length = images.length;

  for (var i = 0; i < length; i++) {
    var width = images[i].width;
    var height = images[i].height;
    if (width != height) {
      images[i].src = 'http://placehold.it/' + width + 'x' + height;
    } else {
      images[i].src = 'http://placehold.it/' + width;
    }
  }




  // find all background images
  var tags = document.getElementsByTagName('*');
  var el;

  for (var i = 0, len = tags.length; i < len; i++) {
    el = tags[i];
    if (el.currentStyle) {
      if (el.currentStyle['backgroundImage'] !== 'none')
        el.className += ' bg_found';
    }
    else if (window.getComputedStyle) {
      if (document.defaultView.getComputedStyle(el, null).getPropertyValue('background-image') !== 'none')
        el.className += ' bg_found';
    }
  }




})(document);
