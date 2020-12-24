const contextMenuInfo = {
  "id" : "saveText",
  "title": "SaveText",
  "contexts" : ["selection"]
}

chrome.contextMenus.create(contextMenuInfo);

chrome.contextMenus.onClicked.addListener(function (selectedData) {
  selectedData.icon ='hello';
  console.log(selectedData, '{{{{}}}}}')
  if (selectedData.menuItemId =='saveText' && selectedData.selectionText){
    chrome.storage.sync.get(["storagekey"], function (result) {
      
     let array = []
    if (result['storagekey']){
      array = result['storagekey']
    }

      array.unshift(selectedData);
     chrome.storage.sync.set({"storagekey": array });
     });
  }   
  
});
  