chrome.extension.onRequest.addListener(
function(request, sender, sendResponse) {
	if (request.localstorage == "settings")
		sendResponse({'settings': localStorage.settings});
	else
		sendResponse({}); // snub them.
});