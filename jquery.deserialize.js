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
  var data = {};
  var parts = s.split("&");
  for (var i = 0; i < parts.length; i++) {
    var pair = decodeURIComponent(parts[i]).split("=");
    data[pair[0]] = pair[1];
    $("[type!=radio][name='" + pair[0] + "']", this).val(pair[1]);
    $("[type=radio][name='" + pair[0] + "'][value='" + pair[1] + "']", this).attr("checked", true);
  }
  $("input[type=checkbox]", this).each(function() {
    $(this).attr("checked", $(this).attr("name") in data);
  });
};
