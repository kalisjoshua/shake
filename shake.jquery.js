/*jshint */
/*globals jQuery*/
(function ($) {
  "use strict";
  var defaults = {
        "cssClass": "error"
      , "count": 3
      , "distance": 10
      , "event": "click"
      , "speed": 40
    };

  function shake (self, config) {
    return function () {
      var counter = config.count;
      self.addClass(config.cssClass);
      while (counter--) {
        self.animate({left: -config.distance}, config.speed).animate({left: config.distance}, config.speed);
      }
      self.animate({left: 0}, config.speed / 2, function () {
        self.removeClass(config.cssClass);
      });
    };
  }

  $.fn.shake = function (config) {
    config = $.extend({}, defaults, config);

    this.each(function (indx, element) {
      element = $(element);
      element.on(config.event, shake(element, config));
    });

    return this;
  };
}(jQuery));
