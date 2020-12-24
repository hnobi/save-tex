
function getAlltext() {
  chrome.storage.sync.get(["storagekey"], (data) => {
    console.log(data)

   let list = '';
    data.storagekey.forEach(text => {
      list += `
      <div class="item">

      <p> ${text.selectionText} </p>
     
      <a href=${text.pageUrl} target="_blank" > ${text.pageUrl} onclick = "show()"</a>
       </div>
      `
    });
    document.getElementById('text-list').innerHTML = list;

  })

}

const show = ()=> {
  console.log('clicked');
}
window.addEventListener('load', getAlltext);

