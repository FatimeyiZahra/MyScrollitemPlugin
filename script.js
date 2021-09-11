(function ($) {
    $(function () {
      var appElins = {
        events: {
          scroll: {
            init: function () {
              this.testInit();
              this.activeSection();
            },
            testInit: function () {
              console.log('scroll event is active');
            },
            activeSection: function () {
              var agScreenDetect = $('.js-feature-block');
  
              fnScreenActivate(agScreenDetect, $(window).scrollTop());
  
              $(window).scroll(function () {
                fnScreenActivate(agScreenDetect, $(this).scrollTop());
              });
  
              function fnScreenActivate(argScreens, argTop) {
                var agTop = argTop || $(window).scrollTop();
  
                if (argScreens.length > 0) {
                  argScreens.each(function (argKey, argVal) {
                    var agScreenStart = parseInt($(argVal).offset().top),
                      agOffset = 200,
                      agOffsetStartActivation = parseInt($(window).height() - agOffset);
  
                    if ((agTop + agOffsetStartActivation) >= agScreenStart) {
                      $(argVal).addClass('js-ag-active');
                    } else {
                      $(argVal).removeClass('js-ag-active');
                    }
                  });
                }
              }
            }
          }
        }
      };
  
      function initApp(parent, arr) {
        for (var item in parent) {
          parent[item].init();
        }
      }
  
      // init events
      initApp(appElins.events, ['scroll']);
  
  
    });
  })(jQuery);