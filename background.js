// A generic onclick callback function.
chrome.contextMenus.onClicked.addListener((info, tab) => {
	if (info.menuItemId === 'copy-selection') {
		// Send a message to the content script
		chrome.tabs.sendMessage(tab.id, { action: 'copyParagraphText', text: info.selectionText });
	}
})

chrome.runtime.onInstalled.addListener(function () {
	chrome.contextMenus.create({
		title: 'Copy paragraph text',
		contexts: ['selection'],
		id: 'copy-selection',
	});
});
