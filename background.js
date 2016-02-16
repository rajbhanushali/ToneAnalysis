alert("Extension loaded");


var settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://tone-analyzer-demo-raj.mybluemix.net/tone",
  "method": "POST",
  "headers": {
    "cache-control": "no-cache",
    "content-type": "application/x-www-form-urlencoded"
  },
  "data": {
    "text": "potato"
  }
};

var emotiontones = [];
var writingtones = [];
var socialtones = [];
var destinationURL = "bg.html"

 analyzeText = function(word){
    var query = word.selectionText;
    alert(query);
    settings.data.text = query;

	$.ajax(settings).done(function (response) {

    //alert(response.children[0].children[0].normalized_score);

    emotiontones =[ 
                    response.children[0].children[0].normalized_score,
                    response.children[0].children[1].normalized_score,
                    response.children[0].children[2].normalized_score
                  ];

    writingtones =[response.children[1].children[0].normalized_score,
                   response.children[1].children[1].normalized_score,
                   response.children[1].children[2].normalized_score];

    socialtones =[response.children[2].children[0].normalized_score,
                  response.children[2].children[1].normalized_score,
                  response.children[2].children[2].normalized_score];            

    localStorage.emotions = JSON.stringify(emotiontones);
    localStorage.writing = JSON.stringify(writingtones);
    localStorage.social = JSON.stringify(socialtones);

    chrome.tabs.create({ url: destinationURL});

	});

 };

chrome.contextMenus.create({
 title: "Tone Analysis",
 contexts:["selection"],  // ContextType
 onclick: analyzeText // A callback function
});