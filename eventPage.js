var menuItem = {
    "id": "Saveit",
    "title": "Saveit",
    "contexts": ["selection"]
};

chrome.contextMenus.create(menuItem);

chrome.contextMenus.onClicked.addListener(function(clickData){ 
  
    if (clickData.menuItemId == "Saveit" && clickData.selectionText){ 
	    chrome.storage.sync.get('wordArray', function(vocab){
                var curWordarray= [];
				
                if (vocab.wordArray){					
					
                    curWordarray= vocab.wordArray
                }
				curWordarray.push(clickData.selectionText)
        	
	    chrome.storage.sync.set({'wordArray':curWordarray}, function(){});
        
        });           
              
    }
	});
