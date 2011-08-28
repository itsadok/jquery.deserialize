This is a very simple jQuery plugin providing 'deserialize' functionality to a form elements.
In contrary to some other plugins available it doesn't reinvent the wheel (by utilizing native browser methods) and actually works.

# Usage

    // string = $("#form-id").serialize()
    // string = "foo=1&bar=2"
    $("#form-id").deserialize(string);

    // do not trigger change events
    $("#form-id").deserialize(string, {noEvents: true});

# Demo
For examples please see demo.html
