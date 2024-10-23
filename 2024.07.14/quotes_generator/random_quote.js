randomQuote();

// $(".btn-new").click(function () {
//   randomQuote();
// });

function randomQuote() {
  $.getJSON("https://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&jsonp=?&lang=ru", function (quoteObj) {
    $("#quote").html(quoteObj.quoteText);
    $("#author").html(quoteObj.quoteAuthor);
    $(".btn-twit").attr('href', 'https://twitter.com/intent/tweet?hashtags=quotes&text=' + quoteObj.quoteText + quoteObj.quoteAuthor);
  });
  return;
}