This is a very simple jQuery plugin providing 'deserialize' functionality to a form elements.
In contrary to some other plugins available it doesn't reinvent the wheel (by utilizing native browser methods) and actually works.

# Usage

    // string = $("#form-id").serialize()
    // string = "foo=1&bar=2"
    $("#form-id").deserialize(string);

    // do not trigger change events
    $("#form-id").deserialize(string, {noEvents: true});

    // expect "true" and "false" values for checkboxes instead of presence/absence of field (see https://gist.github.com/1572512).
    $("#form-id").deserialize(string, {checkboxesAsBools: true});

# Demo
For examples please see demo.html
