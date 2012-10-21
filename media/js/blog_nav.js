$(function() {
  var loading = false;
  $(".main.container").delegate("button.blog_nav", "click", function (e){
    e.preventDefault();
    var page = $(this).attr("href");

    $('#blog_content').load(page + ' #grab', function(response, status, xhr){
        if (response){
            $('.list-view').hide().fadeIn("slow");
        } else {

        }
    });
  });
});
