$(function(){
	chrome.storage.sync.get('wordArray',function(vocab){
        $('#word').text(vocab.wordArray);
        
    });
	document.getElementById("openDict").onclick = function () {
		var win = window.open("dict.html", '_blank');
        win.focus();
        
    };
    
});