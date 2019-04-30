$(function(){
	chrome.storage.sync.get('wordArray',function(vocab){
        $('#word').text(vocab.wordArray);
        
    });
	document.getElementById("openDict").onclick = function () {
		var win = window.open("dict.html", '_blank');
        win.focus();
        
    };
	document.getElementById("clearList").onclick = function () {
		chrome.storage.sync.set({'wordArray':[]}, function(){});
		$('#word').text("No word saved!");
    };
    
});