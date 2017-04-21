$(document).ready(function() {
  

$("#myForm").submit(function(event) {
  val = encodeURIComponent(document.getElementById("myId").value);
  myURL = "https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrsearch="+val+"&prop=extracts&exintro&explaintext&exsentences=1&exlimit=max&callback=?";
    
  $.getJSON(myURL, function(data) {
    pages = data.query.pages;
    var titles = [];
    var extracts = [];
    var pageids = [];
    for (var key in pages) {
      titles.push(pages[key].title);
      extracts.push(pages[key].extract);
      pageids.push(pages[key].pageid);
    }
    var html = "";
    for (i = 0; i < titles.length; i++) {
      html += '<div class="panel"> <div class="panel-heading"> <h3 class="panel-title"><a href="https://en.wikipedia.org/?curid=';
      html += pageids[i];
      html += '">'
      html += titles[i];
      html += '</a></h3> </div> <div class="panel-body">';
      html += extracts[i]
      html += '</div></div>'
    }
    $("#myDiv").html(html);
    
    });
  event.preventDefault();
});


  
});