//Create GLOBAL variable below here on line 2
var global_result;

$(document).ready(function () {
    $('button').click(function () {
        console.log('click initiated');
        $.ajax({
            dataType: 'json',
            url: 'http://ax.itunes.apple.com/WebObjects/MZStoreServices.woa/ws/RSS/topMovies/json',
            method: 'get',
            success: function (result) {
                console.log('AJAX Success function called, with the following result:', result);
                //Feature Set 1
                global_result = result;
                //Feature Set 2
                var all_movies = global_result.feed.entry;
                console.log(all_movies);
                var first_movie_info = all_movies['0']; // First movie all info
                console.log(first_movie_info);
                var first_movie_img = first_movie_info['im:image'][2].label; // Third image in first movie
                console.log(first_movie_img);
                //Feature Set 3
                for (var i=0; i<all_movies.length; i++){
                    $('#main').append($('<img>').attr('src',all_movies[i]['im:image'][2].label));
                    console.log(all_movies[i]['im:image'][2].label);

                }
                //Feature Set 4

            }
        });
        console.log('End of click function');
    });
});