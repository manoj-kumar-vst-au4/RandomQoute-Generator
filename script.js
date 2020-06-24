$(document).ready(function(){

    $.ajax({
        method: "GET",
        url: "quotes.json",
        success: function(data){
           
            var getRandomQuotes = function(){
                var randomNumber = Math.floor( Math.random() * 102 );
                var randomQuotes = data.quotes[randomNumber].quote;
                var randomQuotesAuthor = data.quotes[randomNumber].author;
                $("#random").append("<h4>"+randomQuotes+"</h4>");
                $("#random").append("<h6><i>"+"By : "+randomQuotesAuthor+"</i></h6>");
            };
            getRandomQuotes();

            $("#changeQuote").on('click',function(){
                $("#random").empty();
                getRandomQuotes();
            })

        },
        error: function (error){
            console.log(error);
        }
    });
})