$(function() {
  var flavors = ["chocolate", "stawberry", "lemon", "limon"]

  flavors.forEach(function(flavor) {
    $("ul").append("<li>" + flavor + "</li>")
  });
});
