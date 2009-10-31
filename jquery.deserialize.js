/**
 * jQuery Deserialize plugin
 *
 * Deserializes a query string (taken for example from window.location.hash string) into the appropriate form elements.
 *
 * Usage
 * $("form").deserialize(string);
 *
**/
$.fn.deserialize = function(s) {
  var data = s.split("&");
  for (var i = 0; i < data.length; i++) {
    var pair = decodeURIComponent(data[i]).split("=");
    $("[name='" + pair[0] + "']", this).val(pair[1]);
  }
};