$(document).ready(function (){
var $thread = "aww";

$("button").click(function(){
  $thread = $(this).text();
  console.log($thread);
  redditLink = "http://www.reddit.com/r/" + $thread + "/.json";
  $.getJSON(redditLink, function(data) {
    postHTML = "<div class='reddit-content'>"
      $.each(data.data.children, function(i,item){
        var title = item.data.title;
        var author = item.data.author;
        var imgurLink = item.data.url;
        var postLink =  '<a href="http://www.reddit.com/' + item.data.permalink + '" target="_blank">' + title + '</a>';
        /* Add default photo if no thumbnail exists in json */
        if (item.data.thumbnail === "self"){
          var imgUrl = "images/default.png"
        } else {
          imgUrl = item.data.thumbnail;
        };
        postHTML += '<div class = "row">';
        postHTML += '<div class = "col-md-2 img align-right">';
        postHTML += '<a href="'+ imgurLink + '"><img src="' + imgUrl + '"></a></div>';
        postHTML += '<div class = "col-md-10 info">';
        postHTML += '<ul><li><h2>' + postLink +  '</h2></li><li><h3>' + author + '</h3></li></ul></div>';
            postHTML += '</div>';
      });
      $('#reddit-content').html(postHTML);
  });


  }); //end get JSON

  });
