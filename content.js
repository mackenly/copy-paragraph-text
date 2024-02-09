// receive copy message from background.js
chrome.runtime.onMessage.addListener(async (request, sender, sendResponse) => {
    if (request.action === 'copyParagraphText') {
        // Get the paragraph text from the storage
        if (request.text) {
            // Copy the paragraph text to the clipboard
            await navigator.clipboard.writeText(request.text);
        }
    }
});