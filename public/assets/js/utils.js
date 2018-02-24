$(function() {

  $(".deleteBurger").on("click", function(event) {
    var id = $(this).data("burgerId");

    // Send the DELETE request.
    $.ajax("/burgers/" + id, {
      type: "DELETE"
    }).then(
      function() {
        console.log("deleted id ", id);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $("#createBurger").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
      burger: $("#createBurger [name=burger]").val().trim()
    };

    // Send the POST request.
    $.ajax("/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("created new burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $("#updateBurger").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var id = $("[name=id]").val().trim();

    var updatedBurger = {
      burger: $("#updateBurger [name=burger]").val().trim()
    };

    // Send the PUT request.
    $.ajax("/burger/" + id, {
      type: "PUT",
      data: updatedBurger
    }).then(
      function() {
        console.log("updated id ", id);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

})