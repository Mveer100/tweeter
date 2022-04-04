/*
* Client-side JS logic goes here
* jQuery is already loaded
* Reminder: Use (and do all your DOM work in) jQuery's document ready function

} * Client-side JS logic goes here
*/
//const $tweet = $("<article class='tweet'> Hello world</article>");
$(document).ready(function () {
  $('div#nothingPost').hide();
  //take the tweet object and use its data to flil in the tweet template from tweet template

  //this requires the following data to be filled:

  // --username,  user avatars,   user handle. text body (content:text) and creation time

  const escape = function (str) {
    let div = document.createElement("div");
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  };

  const createTweetElement = (tweetObj) => {

    const tweet = 
      `<article class="tweet">
        <header class="tweetsHeader">
          <div>
            <div class="posterPic">
              <img src="/images/profile-hex.png"><strong>
              ${tweetObj.user.name}
              </strong>
          </div>
          <aside><strong>${tweetObj.user.handle} </strong></aside>
          </div>
        </header>
        <article class="tweetbody">
          ${escape(tweetObj.content.text)}
        </article>
        <footer class='tweetsFooter'>
          <span>
            ${timeago.format(tweetObj.created_at)}
          </span>  
          <div>      
          <i class="fa-solid fa-flag"></i>
          <i class="fa-solid fa-retweet"></i>
          <i class="fa-solid fa-lungs"></i>       
          </div>
        </footer>
      </article>`;
    return tweet;
  }
    //  $('main').prepend($tweet); 

  //loop through our tweets, 

  //

  const renderTweets = function (tweets) {
    tweets.forEach(element => {
      $('.tweeterPosts').prepend(createTweetElement(element))
    });
  }
  const loadTweet = function () {
    $.ajax('/tweets/', { method: 'GET' })
      .then(function (tweets) {
        console.log("we made it dude", tweets);
        renderTweets(tweets);
      });
  }
  loadTweet();
  //renderTweets(data);
  // use jQuery to create a listener for our tweet submission
  //create a post request to send form data
  $("#tweetform").submit(function (event) {
    //alert("Handler for .submit() called.");
    event.preventDefault();
    const logging = $("#tweetform").serialize();
    //we weill render a message in an alert if the characters remaining is less than 0
    console.log(logging.length)
    //render a message to the user if the form was submitted empty. 145 used below as it is our limit 140 + 5 to account for serializer.
    if (logging.length > 145) {
      event.stopPropogation()
    } if (logging.length <= 5) {
      $('#nothingPost').slideToggle('slow');
      event.stopPropogation()
    }

    console.log(logging.length)// take away 5 from logging.length as it is serialized as: text=
    const url = '/tweets/';
    const settings = {
      method: 'POST',
      data: logging   
    };

    $.ajax(url, settings)
      .then(function (apiResponse) {
        console.log("this ajaxcallworks")
        loadTweet();
      });
      //
    }); 
  //use jquery to make an ajax get request to tweets, this data is going to be rendered once this is completed using our previously declared function.(l.50)
});