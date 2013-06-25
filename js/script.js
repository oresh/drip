(function($) {

  $(document).ready(function() {

    if ($('body.front').length) {
      $('.social-icons-large').addClass('animate');

      $('body').animate({'border':'0'},4500,function() {
        $('.social-icons-large').removeClass('animate');
      });
    }

    if ($('body.pricing').length) {
      $('.social-arrow-left').addClass('animate');

      $('body').animate({'border':'0'},4500,function() {
        $('.social-arrow-left').removeClass('animate');
      });
    }
    
    if ($('.button.large.yellow, .contact-details-right a').length) {
      $('.button.large.yellow, .contact-details-right a').wrap('<span class="large-sparkle" />');
      $('.large-sparkle').append('<span class="sparkle">');
      $('.large-sparkle .sparkle').delay(1000).animate({'left':'100%'},600, function() {
        console.log('work?');
          $('.large-sparkle .sparkle').css('left','-120px');
        });
      setInterval(function(){
        $('.large-sparkle .sparkle').animate({'left':'100%'},600, function() {
          $('.large-sparkle .sparkle').css('left','-120px');
        });
        },4500);
    }

    var questionList = $('.questions-list');
    if (questionList.length) {
      questionList.find('h3').click(function() {
        var $this = $(this);
        $this.parent().siblings().removeClass('active');
        $this.parent().siblings().find('.answear').slideUp();
        $this.parent().toggleClass('active');
        $this.siblings().slideToggle();
      })
    }

    var subscribeForm = $('form.start-free-trial');
    if (subscribeForm.length) {
      subscribeForm.click(function() {
        subscribeForm.find('.start-free-trial-submit').click(function(e) {
          e.preventDefault();
          var $this = $(this);
          console.log($this.siblings('.start-free-trial-name').val());
          if ($this.siblings('.start-free-trial-name').val() == '') {
            $this.siblings('.start-free-trial-name').addClass('error').attr('placeholder', 'Name is required');
            return false;
          }
          if ($this.siblings('.start-free-trial-email').val() == '') {
            $this.siblings('.start-free-trial-email').addClass('error').attr('placeholder', 'Email is required');
            return false;
          }
        });
      });
    }

    var userBar = $('.userbar-actions'),
      greyBg = $('.grey-bg');
    if (userBar.length) {
      userBar.find('a').click(function() {
        var $this = $(this);
        greyBg.toggle();
        if ($this.hasClass('user-register')) {
          $('.register-popup').toggleClass('active-popup');
        } else {
          $('.login-popup').toggleClass('active-popup');;
        }
      });
      $('.popup .close, .grey-bg').click(function() {
        greyBg.hide();
        $('.popup').removeClass('active-popup');
      })
    }

    var slider = $('.bottom-slider');
    if (slider.length) {
      setInterval(function(){
        $('.bottom-slide').first().animate({'margin-left':'-100%'},1200, function() {
          $('.bottom-slide').first().css('margin-left',0).insertAfter($('.bottom-slide').last());
        });
      },3500);
    }

    var headerslider = $('.header-slider');
    if (slider.length) {
      setInterval(function(){
        $('.header-slider h1').first().animate({'margin-left':'-100%'},1600, function() {
          $('.header-slider h1').first().css('margin-left',0).insertAfter($('.header-slider h1').last());
        });
      },5500);
    }

        var $cases = $('.cases-wrapper');
    if ($cases.length) {
      var $this = $cases.find('.cases-item');
        $expander = $this.children('.cases-expand').find('.cases-more'),
        $collapser = $this.find('.cases-hidden .cases-expand .cases-more');

        $expander.click(function() {
          var _this = $(this),
            expandStr = _this.text() == 'see more' ? 'close' : 'see more';

          $('html, body').animate({
            scrollTop: _this.parents('.cases-item').offset().top - 20
          }, 500);

          _this.text(expandStr).toggleClass('is-active');
          _this.parents('.cases-item').siblings()
            .find('.cases-hidden').hide()
          _this.parents('.cases-item').siblings()
            .children('.cases-expand').find('.cases-more')
              .text('see more').removeClass('is-active');
          _this.parents('.cases-item').find('.cases-hidden').slideToggle(350);
        });
        
        $collapser.click(function() {
          var _this = $(this);

          $('html, body').animate({
            scrollTop: _this.parents('.cases-item').offset().top - 20
          }, 500);

          _this.parents('.cases-item').children('.cases-expand')
            .find('.cases-more').text('see more')
              .removeClass('is-active');
          _this.parents('.cases-item').find('.cases-hidden').slideUp(350);
        });

    }

    var $buttons = $('.getyourrisk-trial-button, .price-sign-up, .sign-up.large');
    if ($buttons.length) {
      $buttons.append('<span class="sparkle" />');

      $buttons.hover(function() {
        var $this = $(this),
          $sparkle = $this.find('.sparkle')

        if (!$sparkle.hasClass('processed')) {
          $sparkle.addClass('processed').animate({'left':'180'}, 500, function () {
            $sparkle.removeClass('processed').css('left','-60px');
          });
        }        
      });

    }

    
    $('.register-popup input[type="checkbox"], .login-popup input[type="checkbox"]').ezMark();

    $('.forgot-password-action').click(function(e) {
      e.preventDefault();
      $(this).parents('.popup').removeClass('active-popup')
      .siblings('.forget-passoword-popup').addClass('active-popup')
    });

    $('.forget-passowrd .login-submit').click(function(e) {
      e.preventDefault();
      var $this = $(this);
      if ($this.siblings('input').val() != '') {
        $this.parents('.active-popup').removeClass('active-popup')
      .siblings('.reset-passoword-popup').addClass('active-popup');
      } else {
        $this.siblings('input').addClass('error');
      }
    });

    $('.register-popup .login-submit').click(function(e) {
      e.preventDefault();
      var $this = $(this);    
      $this.parents('.active-popup').removeClass('active-popup')
      .siblings('.thanks-registration-popup').addClass('active-popup');
    });

    $('.popup').bind('click', 'input.error', function(e) {
      $(e.target).removeClass('error');
    })


  });
})(jQuery)