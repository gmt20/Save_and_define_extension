document.addEventListener("DOMContentLoaded", function(){
	
chrome.storage.sync.get(['wordArray'], function(result) {
          console.log(result.wordArray[1]);
        
    //....
const app = document.getElementById('start')
result.wordArray.forEach(function(element) {
  console.log(element);



//const logo = document.createElement('img')
//logo.src = 'logo.png'
const container = document.createElement('div')
container.setAttribute('class', 'container')
//app.appendChild(logo)
app.appendChild(container)
/// HTTP Request
var request = new XMLHttpRequest()
word = element
url = 'https://googledictionaryapi.eu-gb.mybluemix.net/?define='+word
//requests.get(url, headers = {'app_id': app_id, 'app_key': app_key})
// Open a new connection, using the GET request on the URL endpoint
request.open('GET', url, true)
request.onload = function() {
  // Begin accessing JSON data here
  var data = JSON.parse(this.response)
  if (request.status >= 200 && request.status < 400) {
	console.log(data[0]['meaning'])
	var meanobj = data[0]['meaning']
	var sortedKeys = Object.keys(meanobj).sort();
	var first = meanobj[sortedKeys[0]];
    console.log(first[0].definition)
	const card = document.createElement('div')
    card.setAttribute('class', 'card')
	card.style.outline = "thick outset #009999";

    var label = document.createElement('label')
    label.textContent = element;
	label.style.fontWeight = 'bold';
	

    var p = document.createElement('p')
    p.textContent = first[0].definition
	container.appendChild(card)
    card.appendChild(label)
    card.appendChild(p)
	
    
  } else {
    console.log('error')
  }
}

request.send()
});
});
});
