var tintAlpha = 0.5;
var tintArray = [ "(255,255,150,0.8)", "(100,100,255,0.8)", "(100,255,100,0.8)", "(255,100,100,0.8)",
                  "(168,148,108,0.8)", "(255,100,255,0.8)"];
var industriesDropDownArray = [ "Solar", "Wind", "Nuclear", "Storage", "Oil and Gas" ];
var counter = Math.floor(Math.random(6));
var path = "../Assets/";
var type = ".jpg";
var rgba = "rgba";
var goto = "goTo";
var currentDropdown = 0;

function dropdown( input )  {
  if ( input == 0 && currentDropdown!=0 ) {
    console.log( "0" );
    var list = document.getElementById("INDUSTRIES");
    var items = document.getElementsByClassName("listItem");
    console.log( list.firstChild );
    // while ( list.firstChild ) {
    while ( list.childNodes.length > 1 ) {
      console.log( "removing" );
      list.removeChild( list.lastChild );
    }
    currentDropdown = 0;
  }
  if ( input == "industries" && currentDropdown!=1 )  {
    currentDropdown = 1;
    var list = document.getElementById("INDUSTRIES");

    var entry = document.createElement('li');
    entry.setAttribute("onclick","goTo(6)");
    entry.classList.add( "listItem" );
    entry.appendChild( document.createTextNode( industriesDropDownArray[0].valueOf() ) );
    list.appendChild(entry);

    var entry = document.createElement('li');
    entry.setAttribute("onclick","goTo(3)");
    entry.classList.add( "listItem" );
    entry.appendChild( document.createTextNode( industriesDropDownArray[1].valueOf() ) );
    list.appendChild(entry);

    var entry = document.createElement('li');
    entry.setAttribute("onclick","goTo(1)");
    entry.classList.add( "listItem" );
    entry.appendChild( document.createTextNode( industriesDropDownArray[2].valueOf() ) );
    list.appendChild(entry);

    var entry = document.createElement('li');
    entry.setAttribute("onclick","goTo(2)");
    entry.classList.add( "listItem" );
    entry.appendChild( document.createTextNode( industriesDropDownArray[3].valueOf() ) );
    list.appendChild(entry);

    var entry = document.createElement('li');
    entry.setAttribute("onclick","goTo(0)");
    entry.classList.add( "listItem" );
    entry.appendChild( document.createTextNode( industriesDropDownArray[4].valueOf() ) );
    list.appendChild(entry);
  }
}
function replaceImages()  {
  var slideshowArray = [ document.getElementById("slideshow1"), document.getElementById("slideshow2"),
                        document.getElementById("slideshow3"), document.getElementById("slideshow4"),
                        document.getElementById("slideshow5"), document.getElementById("slideshow6"),
                        document.getElementById("slideshow7")];
  var infoArray = [ document.getElementById("slideshow2-1"), document.getElementById("slideshow2-2"),
                          document.getElementById("slideshow2-3"), document.getElementById("slideshow2-4"),
                          document.getElementById("slideshow2-5"), document.getElementById("slideshow2-6"),
                          document.getElementById("slideshow2-7") ];
  if ( counter<slideshowArray.length-1 )  {
    counter++;
  }  else {
    counter = 0;
  }
  for ( var i=0 ; i<slideshowArray.length-1 ; i++ ) {
    if ( i != counter ) {
      slideshowArray[i].style.opacity = 0;
      infoArray[i].style.opacity = 0;
    } else {
      infoArray[i].style.opacity = 1;
      slideshowArray[i].style.opacity = 1;

    }
  }
  document.getElementById("transparency").style.fill = rgba.concat(tintArray[counter]);
}
function goTo( input )  {
  var currentDescription = document.getElementById('currentDescription');
  var slideshowArray = [ document.getElementById("slideshow1"), document.getElementById("slideshow2"),
                          document.getElementById("slideshow3"), document.getElementById("slideshow4"),
                          document.getElementById("slideshow5"), document.getElementById("slideshow6"),
                          document.getElementById("slideshow7") ];
  var descriptionArray = [ document.getElementById("OilAndGasDescription"), document.getElementById("NuclearDescription"),
                          document.getElementById("StorageDescription"), document.getElementById("WindDescription"),
                          document.getElementById("AbousUsDescription"), document.getElementById("ServicesDescription"),
                          document.getElementById("SolarDescription") ];
  if ( input == "random") {
    input = getRandomInt(0,slideshowArray.length-1);
  }
  counter=input;
  for ( var i=0 ; i<slideshowArray.length ; i++ ) {
    if ( i != counter ) {
      slideshowArray[i].style.opacity = 0;
    } else {
      slideshowArray[i].style.opacity = 1;
      console.log( true );
      currentDescription.innerHTML = descriptionArray[i].innerHTML;
    }
  }
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}