  (function($) {
    $(document).ready(function() {
      var mySlidebars = new $.slidebars();
      $('.my-button').on('click', function() {
        mySlidebars.slidebars.open('left');
      });
      $('.my-other-button').on('click', function() {
        mySlidebars.slidebars.toggle('right');
      });
      $('.my-third-button').click(mySlidebars.slidebars.close);
    });
  }) (jQuery);