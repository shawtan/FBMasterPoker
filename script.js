javascript:
(function(){
  divs = document.getElementsByTagName("div");
  for (var i = 0; i < divs.length; i++){
    if ((divs[i].id).match("poke_live_item_") != null){
      var id;
      id = (divs[i].id).substring(15);
      var e = document.getElementById("poke_live_item_"+id);
      var index = (e.innerHTML).indexOf("ajaxify");
      var end = (e.innerHTML).indexOf("\"", (index+9));
      var link = "http:\\\\www.facebook.com"+((e.innerHTML).substring(index+9,end)).replace(/amp;/g,"");
      var w = window.open(link);
    }
  }
})();
