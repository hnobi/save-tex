// var documentHtml = document.documentElement.outerHTML;

// chrome.runtime.onMessage.addListener(
//   function (request, sender, sendResponse) {
//     if (request.message === "clicked_browser_action") {
//     const getPageUrl = () => window.location.href; 
//     console.log("===================", getPageUrl()); 
//       // This line is new!
//       chrome.runtime.sendMessage({ "message": "open_new_tab", "url": firstHref });
//     }
//   }
// )



// document.addEventListener('copy', (event) => {
//   const selection = document.getSelection();
//   const selectedText = selection.toString();
//   event.clipboardData.setData('text/plain', selection.toString().toUpperCase());
//   event.preventDefault();
//   console.log(event.target, '------=================',event)

// });


// const aaa = document.querySelectorAll('h4.u-t-light-3.u-font-bold');
// const m = Array.from(aaa).find(e => e.textContent === 'Sign in to continue');
// console.log(aaa,'++++++++++', m);
// chrome.storage.sync.get('datasaved', (a) => console.log(a, '-----------------'))

function hello() {
  chrome.storage.sync.get('datasaved', (a) => {
    document.getElementById('vv').innerHTML = a.datasaved.selectionText;
    console.log(a, '-----------------')
  })

 ='love';
  console.log('okkkkkkkk')
}
window.addEventListener('load',hello);
// document.getElementById('clickme').addEventListener('click', hello);