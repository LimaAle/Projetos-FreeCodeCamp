var quoteText = '';
var quoteAuthor = '';
function newQuote() {
    $.ajax({
        url: 'https://andruxnet-random-famous-quotes.p.mashape.com/?cat=movies',
        type: 'GET',
        dataType: 'json',
        success: function (quote) {
            quoteText = quote.quote;
            quoteAuthor = quote.author;
            document.getElementById("quote").innerHTML = "\"" + quoteText + "\"";
            document.getElementById("author").innerHTML = quoteAuthor;
        },
        error: function (err) {
            alert(err);
        },
        beforeSend: function (xhr) {
            xhr.setRequestHeader("X-Mashape-Authorization", "27a6K0kt89mshcSv5S46qGHsKA54p1y48WojsnA3XLJzOorLKw");
        }
    });
}
;
function tweetQuote() {
    var url = 'https://twitter.com/home?status=' + encodeURIComponent("\"" + quoteText + "\"" + " -" + quoteAuthor);
    window.open(url, 'twitter');
}
;
$(document).ready(function () {
    newQuote();
    $("#newQuote").on("click", newQuote);
    $("#tweet").on("click", tweetQuote);
});


