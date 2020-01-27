//Smoooth scroll to the anchored section (HomeSection)
//ensures that the JavaScript code is only triggered once the page has fully loaded
$(function(){
  //check whether the Home button in the navigation bar has been pressed.
  $(document).on('click','.navButton', function(event){
    //scroll within the website
 $('html,body').animate(
   {
     //sets which element to scroll to by getting its position from the top
     scrollTop: $($(this).attr('href')).offset().top
   },2000
 );
 //prevent default functionality
 event.preventDefault();
  });
  $(document).on('click','.navLi',function(event){
    $('.navLi').removeClass('active');
    $(this).addClass('active')
  })
});

