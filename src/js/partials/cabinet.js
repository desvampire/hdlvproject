//////////////////////////
// CABINET JQUERY PLUGINS
//////////////////////////


$(document).ready(function() {
  // Cabinet navigation
  $('.cab-nav > ul > li:has(ul)').addClass("has-sub");

  $('.cab-nav > ul > li > a').click(function() {
    var checkElement = $(this).next();
    
    $('.cab-nav li').removeClass('active-dropdown');
    $(this).closest('li').addClass('active-dropdown');   
    
    
    if((checkElement.is('ul')) && (checkElement.is(':visible'))) {
      $(this).closest('li').removeClass('active-dropdown');
      checkElement.slideUp('normal');
    }
    
    if((checkElement.is('ul')) && (!checkElement.is(':visible'))) {
      $('.cab-nav ul ul:visible').slideUp('normal');
      checkElement.slideDown('normal');
    }
    
    if (checkElement.is('ul')) {
      return false;
    } else {
      return true;  
    }       
  });

//Cabinet tables sorting
$("#user-ravecharts").tablesorter(); 
$("#myTable").tablesorter(); 

$(".user-ravechart--person").click(function() {
        window.document.location = $(this).data("href");
});



//Cabinet add new ravechart
$('#ravechart-category').change(function(event) {
     $('#selected-category').html($('#ravechart-category option:selected').text());       
});

$("#add-new-cat").click(function () {
    
    $('#selected-category').html($('#new-ravechart-category').val());
    
});


//Adding height to dashboard sidebar
var heightright = $('#dashboard').height();
$('.cab-nav').css('height', heightright);

//Cabinet print ravechart
$("#btn-print-ravechart").click(function(){
        $("#mapresult").printMe();
       });

});// .end $(document).ready(function()



// CK EDITOR HD FEEDBACK
CKEDITOR.replace( 'hd-feedback' );