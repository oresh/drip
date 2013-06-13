(function($) {

  $(document).ready(function() {
    
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


  });
})(jQuery)