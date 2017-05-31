$(function () {

  //  $.get('http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&rating=pg')

$('.new-gif-button').on ('click', function () {
 var ajax = $.get('http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&rating=pg')
    .done(function(data){
      console.log(ajax.responseJSON.data.image_url);
      $('.gif').attr('src', ajax.responseJSON.data.image_url)
    });
})



  // console.log(ajax.responseJSON.data.image_url);
  // $.get('/')
  //   .done(function(data){
  //     console.log(data);
  //   });

});
