$(function(){
    		
		chrome.extension.sendRequest({localstorage:"settings"}, function(response) {
			
			var settings = $.parseJSON(response['settings']);
			
			$('input').each(function(n, el){
			//alert($(el).attr('name') + ' ' + $(el).attr('class'));
				var name = $(el).attr('name');
				
				if(name in settings)
					if($(el).attr('type') == 'checkbox')
						$(el).attr('checked', true);
					else
						$(el).val(settings[name]);
			});
		});
});