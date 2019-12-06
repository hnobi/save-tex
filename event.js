const contextMenuInfo = {
  "id" : "saveText",
  "title": "SaveText",
  "contexts" : ["selection"]
}

chrome.contextMenus.create(contextMenuInfo);

chrome.contextMenus.onClicked.addListener(function (selectedData) {
  console.log('-------------')
  if (selectedData.menuItemId =='saveText' && selectedData.selectionText){
    chrome.storage.sync.set({ 'datasaved': selectedData })}
   
  
});