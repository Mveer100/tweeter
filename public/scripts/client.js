  /*
  * Client-side JS logic goes here
  * jQuery is already loaded
  * Reminder: Use (and do all your DOM work in) jQuery's document ready function

  } * Client-side JS logic goes here
  */
  //const $tweet = $("<article class='tweet'> Hello world</article>");
  $(document).ready(function() { const data = [
    {
      "user": {
        "name": "Newton",
        "avatars": "https://i.imgur.com/73hZDYK.png"
        ,
        "handle": "@SirIsaac"
      },
      "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
      "created_at": 1461116232227
    },
    {
      "user": {
        "name": "Descartes",
        "avatars": "https://i.imgur.com/nlhLi3I.png",
        "handle": "@rd" },
      "content": {
        "text": "Je pense , donc je suis"
      },
      "created_at": 1461113959088
    }
  ]

    //take the tweet object and use its data to flil in the tweet template from tweet template
    
    //this requires the following data to be filled:

      // --username,  user avatars,   user handle. text body (content:text) and creation time


    const createTweetElement = (tweetObj) => {
      const $tweet = $(
        `<article class="tweet">
        <header class="tweetsHeader">
          <div>
            <div class="posterPic">
              <img src="/images/profile-hex.png">
              ${tweetObj.user.name}
          </div>
          <aside>${tweetObj.user.handle}</aside>
          </div>
        </header>
        <article class="tweet">
          ${tweetObj.content.text}
        </article>
        <footer>
          <span>
            ${tweetObj.created_at}
          </span>
        </footer>
      </article>`
      );
      return $tweet;
    }
    


//  $('main').prepend($tweet); 

//loop through our tweets, 

//

const renderTweets = function(tweets) {
  tweets.forEach(element => {
    $('.tweeterPosts').prepend(createTweetElement(element))
  });
}

renderTweets(data);

});