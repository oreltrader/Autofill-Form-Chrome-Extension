function restore_options()
{
	var jsonString = localStorage['settings'];
	$("textarea").val(jsonString);
}

function save_options()
{
	var json = $("textarea").val();
	
	if(json = $.parseJSON(json)) {
		var jsonString = ObjectToString(json);
		$("textarea").val(jsonString);
		localStorage['settings'] = jsonString;
		show_message('Settings saved');
	}
	else
		show_message('error', true);
}

function ObjectToString(obj, n)
{
	var str = "{\r";
	if(!n) n = 2;
	for(key in obj)
	{
		if(key)
		{
			if(typeof(obj[key]) == 'object') {
				str = str + spaces(n) + '"' + key + '" : ' + ObjectToString(obj[key], n + 2);
			}
			else if(typeof(obj[key]) == 'number') {
				str = str + spaces(n) + '"' + key + '" : ' +  obj[key];
			}
			else {
				str = str + spaces(n) + '"' + key + '" : "' +  obj[key] + '"';
			}
			str = str + ',\r';
		}
	}
	str = str.substr(0, str.length-2);
	return str + '\r' + spaces(n - 2) + '}';
}

function show_message(msg, error)
{
	if(!error)
		msg = '<div class="message success">' + msg + '</div>';
	else
		msg = '<div class="message error">' + msg + '</div>';
	
	$("body").append(msg);
	$(".message").delay(2000).fadeOut('slow');
}

function spaces(n)
{
	var str = '';
	while(n-- > 0) str = str + ' ';
	return str;
}

// Add event listeners once the DOM has fully loaded by listening for the
// `DOMContentLoaded` event on the document, and adding your listeners to
// specific elements when it triggers.
document.addEventListener('DOMContentLoaded', function () {
	restore_options();
	document.querySelector('button').addEventListener('click', save_options);
});