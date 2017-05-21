$(function () {


  $('.search-button').on ('click', function(event) {
    event.preventDefault();
    $('.movie-search-results').empty();
    $('.movie-list').empty();
    var ajax = $.get('http://www.omdbapi.com/?apikey=d31f1a94&s='+$('.searchEntry').val())
      .done(function(data){
        $('.movie-search-results').prepend('<h2>Your Search Found the Following Results:</h2>');
        if(ajax.responseJSON.Search) {
          for (var i=0; i<ajax.responseJSON.Search.length; i++) {
            $('.movie-list').append('<a class="searchResult" href="#"><div class="movie-container"><span class="Title">'+ajax.responseJSON.Search[i].Title+'</span> (<span class="Year">'+
                                    ajax.responseJSON.Search[i].Year+'</span>)<img class="Poster" src='+
                                    ajax.responseJSON.Search[i].Poster+'></a><button class="favorite-button">Add to Favorites</button></div>');
            }
        } else {
          $('.movie-search-results').html('Your Search Found No Results');
        };
      });
  });


  $('.movie-list').on('click', 'button.favorite-button', function (event) {
    $.post('http://localhost:3000/favorites', {
      Title : $(event.target.parentNode.childNodes[0]).html(),
      Year : $(event.target.parentNode.childNodes[2]).html(),
      Poster : $(event.target.parentNode.childNodes[4]).attr('src')
      }, function() {
        location.href = "http://localhost:3000/favorites"
    });
  });

  $('.movie-list').on('click', '.searchResult', function(event) {
    console.log('searchResult clicked');
  });

});
