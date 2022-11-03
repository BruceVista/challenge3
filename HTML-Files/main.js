var winkelmandje = Array();
var products = Array();
var products = {
    "0": {"naam":"Salmon Poké Bowl", "prijs": 10.90},
    "1": {"naam":"Shrimp Poké Bowl", "prijs": 10.90},
    "2": {"naam":"Tuna Poké Bowl", "prijs": 11.90},
    "3": {"naam":"Veggie Gyoza", "prijs": 4.90},
    "4": {"naam":"Edamame", "prijs": 2.90},
    "5": {"naam":"Sunomo Salad", "prijs": 3.90},
    "6": {"naam":"Pork Gyoza", "prijs": 4.90},
    "7": {"naam":"Octupus Poké Bowl", "prijs": 10.90},
  };

  /*
  for(var i=0;i<4;i++) {
    document.write(products[i]['naam']);
    document.write(products[i]['prijs']);
  }
  */

function productClick(id) {
    //alert(id);
    winkelmandje.push(id);
    toonWinkelmandje();
    toonwmid();
}

function toonWinkelmandje() {
    var totaal = 0;
    var html = "";
    var l = winkelmandje.length;
    for(var i = 0; i < l; i++) {
        html += products[winkelmandje[i]]['naam'];
        html += ": € ";
        html += products[winkelmandje[i]]['prijs'];
        html += "<br />";
        totaal += products[winkelmandje[i]]['prijs'];  
    }
    html += "<br><b>Totaalprijs: €  " + totaal + "</b>";
    document.getElementById("winkelmandjeId").innerHTML = html;
}

function toonwmid() {
  var html = "";
  var l = winkelmandje.length;
  if(l>0) {
    for(var i = 0; i < l; i++) {
      html += winkelmandje[i];
    }
    document.getElementById("wmid").innerHTML = html;
  } else {
    document.getElementById("wmid").innerHTML = "Winkelmand is nu nog leeg!";
  }
}

function emptyWM() {
  winkelmandje = Array();
  toonWinkelmandje();
  toonwmid();
}
