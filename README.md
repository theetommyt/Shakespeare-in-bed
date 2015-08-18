# Shakespeare... in Bed
#### A General Assembly - Chicago, Web Development Immersive project started and completed for class the afternoon of April 3, 2015. It was cloned into my personal GitHub repository August 14, 2015 in order to add basic css styling, and a Sinatra back-end for Heroku deployment.

## AJAX
This site completes a jQuery AJAX call to a markov-chain random Shakespeare line API.


## Let's have some fun!
In order to personalize what was the first "project" for the Web Development Immersive program, I included the fun with fortune cookies style ending "in bed" to the click event function. Also, a form was created so that users could specify a name to display with the random generated line and "in bed" phrase.

## Code Highlight
The most important part of the project code contains the click event and ajax call.
```
$("#form-name").on("submit", function(e){
  e.preventDefault();


  $.ajax({
    method: "get",
    url: "http://shakeitspeare.com/api/sentence",
    success: function(sentenceData){
      $("#my-line").text(sentenceData.sentence.replace(/[\.?!]/,"") + " ");
    }
  });

  var name = $("#name").val();
  $("#line2").text(" with " + name + " in bed.")

});

```

## Technologies Used

### Front-End
- HTML 5
- CSS 3
- Responsive Design & Media Query
- JavaScript
- jQuery
- AJAX
- RegEx

### Back-End
- Ruby
- Sinatra
- Heroku

## Screenshots
#### When Page loads:
![initial view](https://raw.github.com/theetommyt/Shakespeare-in-bed/master/images/initialView.png)
<br>
#### After a name is entered:
![updated view](https://raw.github.com/theetommyt/Shakespeare-in-bed/master/images/updatedView.png)
![mobile view](https://raw.github.com/theetommyt/Shakespeare-in-bed/master/images/mobileView.png)
