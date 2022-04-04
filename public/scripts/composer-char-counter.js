(($) => {
  $(() => {
    charCounter();
  });
  
  const charCounter = () => {
    const maximumLength = 140;
    //point/target the element containing the counter.
    $('#tweet-text').on('input', (event) => {
      //console.log(this)
      const output = event.target.value
      let charRemaining = maximumLength - output.length;
      
      //console.log(charRemaining, this)
      if (charRemaining < 0) {
        $('.counter').css("color", "rgb(247 34 3)")
        $('.counter').html('-' + charRemaining)
      } else if (charRemaining > 0) {
        $('.counter').css("color", "#545149")
      }

      $('.counter').html(charRemaining)
    })
  
  }
})(jQuery);
