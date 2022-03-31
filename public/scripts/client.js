  /*
  * Client-side JS logic goes here
  * jQuery is already loaded
  * Reminder: Use (and do all your DOM work in) jQuery's document ready function

  } * Client-side JS logic goes here
  */
  //const $tweet = $("<article class='tweet'> Hello world</article>");
    const EXAMPLEdata = {
        "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png",
        "handle": "@SirIsaac"
      },
    "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
    "created_at": 1461116232227
    };

    //take the tweet object and use its data to flil in the tweet template from prev. html
    //this requires the following data to be filled:
      // --username,  user avatars,   user handle. text body (content:text) and creation time
    const createTweetElement = (tweetObj) => {
      const tweetElement = `<section class="tweeterPosts">
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
        this will be the tweet text there will be a poster name above me, also the person's tweeter handle. Below will be buttons, the recency of the post as well as a bottom bar for style, and mini profile pic.
      </article>
      <footer>
        <span>
          SOON ILL TELL YA THE DATE
        </span>
      </footer>
    </section>`
    }
    
  const $tweet = createTweetElement(tweetData);

  // Test / driver code (temporary)
console.log($tweet); // to see what it looks like
$('#tweets-container').append($tweet); 