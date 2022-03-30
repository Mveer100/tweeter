//const { redirect } = require("express/lib/response");

$(document).ready(function() {
  // --- our code goes here ---
  console.log('we are working now')
  
  const maximumLength = 140;
  //point/target the element containing the counter.
  $('#tweet-text').on('input', (event) => {
    //console.log(this)
    const output = event.target.value
    let charRemaining = maximumLength - output.length;
    //console.log(charRemaining, this)
    if (charRemaining <= 0) {
      $('.counter').css("color", "rgb(247 34 3)")
      $('.counter').html('-' +charRemaining)
    }
    $('.counter').html(charRemaining)
    //return output;
  })
});
  //finding the length of the text, listen for how many characters have been input
  //
  //

