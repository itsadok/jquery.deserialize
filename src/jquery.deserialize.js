/**
 * jQuery Deserialize plugin
 *
 * Deserializes a query string (taken for example from window.location.hash string) into the appropriate form elements.
 *
 * Usage
 * $("form").deserialize(string);
 *
**/
(function($) {
    $.fn.deserialize = function(s) {
      var data = {};
      var parts = s.split("&");
      for (var i = 0; i < parts.length; i++) {
        var pair = decodeURIComponent(parts[i]).split("=");
        data[pair[0]] = pair[1];
        $("[type!=radio][name='" + pair[0] + "']", this).val(pair[1]);
        $("[type=radio][name='" + pair[0] + "'][value='" + pair[1] + "']", this).attr("checked", true);
      }

      // checkboxes are not serialized -> missing means unchecked
      $("input[type=checkbox]", this).each(function() {
        var oldState = $(this).is(":checked")
        var newState = ($(this).attr("name") in data)
        $(this).attr("checked", newState);
        if(oldState != newState) $(this).trigger('change')
      });
    };
})(jQuery);
