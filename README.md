# radioWithCallback

In every situation then one radio are checked 'true' you can call an optional callback method.

JQuery is required.

## Example

```code

radioWithCallback(eventElement,callback);

With test parameter

radioWithCallback("input[name='currency']");

radioWithCallback("input[name='currency']", function(){

		alert("Hi");

	}

);

radioWithCallback(".currency");

radioWithCallback(".currency", function(){

		alert("Hi");

	}

);

```