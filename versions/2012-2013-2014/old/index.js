   // When the document has loaded...
$(document).ready(function() {
  // Bind this action as a function to be executed when the button is clicked...
  $('input[type="button"][value="submit"]').click(function() {
    $.post('http://contest.phoenixamd.com/ANDROIDTEST/callsheet.php', {


      MessageText: $('#msg').val()

      // HTML function

      }, function (html) {
          // Place the HTML in a astring
          var response=html;

          // PHP was done and email sent
          if (response=="Success") {
            alert("Message sent!"); 
          } else {

            // Error postback
            alert("Please fill all fields!"); 
            return false;
          }
    });
  });
});