/**
 * jQuery Deserialize plugin
 *
 * Deserializes a query string (taken for example from window.location.hash string) into the appropriate form elements.
 *
 * Usage
 * $("form").deserialize(string);
 *
 * do not trigger change events on elements
 * $("form").deserialize(string, {noEvents: true});
**/
(function($) {
    $.fn.deserialize = function(s, options) {
      function trigger(element,event){
        if(options.noEvents)return
        element.trigger(event)
      }

      function changeChecked($input, newState){
        var oldState = $input.is(":checked")
        $input.attr("checked", newState);
        if(oldState != newState) trigger($input, 'change')
      }

      options = options || {}
      var data = {};
      var parts = s.split("&");
      for (var i = 0; i < parts.length; i++) {
        var pair = decodeURIComponent(parts[i]).split("=");
        data[pair[0]] = pair[1];

        var $input = $("[name='" + pair[0] + "']", this)
        var type = $input.attr('type')

        if(type == 'radio'){
          $input = $input.filter("[value='" + pair[1] + "']")
          changeChecked($input, true)
        } else if(type == 'checkbox') { // see below
        } else {
          var oldVal = $input.val()
          var newVal = pair[1]
          $input.val(newVal);
          if(oldVal != newVal)trigger($input, 'change')
        }
      }

      // checkboxes are not serialized -> missing means unchecked
      $("input[type=checkbox]", this).each(function() {
        var $input = $(this)
        changeChecked($input, ($input.attr("name") in data))
      });
    };
})(jQuery);
