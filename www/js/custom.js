//Geolocation
var lat, lon;

// App Open Counter
var appOpenCount = window.localStorage.getItem("loadCount");

// Story Progress Counter
var progressCounter = window.localStorage.getItem("alertNumber"); 
var alertNumber; 

var page;
var as = audiojs;
var audios = document.getElementsByTagName('audio');

var contentLoaders = [
                      function loadContent1(){
                      document.getElementById('alertConvoLink').style.display = 'block';
                      document.getElementById('carolineConvoLink').style.display = 'block';
                      document.getElementById('breif1link').style.display = 'block';
                      if (firstListened == true){
                      document.getElementById('lacyConvoLink').style.display = 'block';
                      document.getElementbyId('breif2link').style.display = 'block';
                        }
                      },
                      
                      
                      function loadContent2(){
                      document.getElementById('georgeMomConvoLink').style.display = 'block';
                      document.getElementById('breif3link').style.display = 'block';
                      document.getElementById('breif4link').style.display = 'block';

                      if (secondListened == true){
                      document.getElementById('lacyText2').style.display = 'block';
                      document.getElementbyId('breif5link').style.display = 'block';
                        }
                      },
                      
                      function loadContent3(){
                      document.getElementById('lacyText3').style.display = 'block';
                      document.getElementById('breif6link').style.display = 'block';
                      document.getElementById('georgeConvoLink').style.display = 'block';
                      document.getElementById('georgeText2').style.display = 'block';
                      document.getElementbyId('georgeText3').style.display = 'block';
                      
                      if (thirdListened == true){
                      document.getElementById('lacyText2').style.display = 'block';
                      document.getElementbyId('georgeText4').style.display = 'block';
                      document.getElementbyId('georgeText5').style.display = 'block';
                      document.getElementById('breif7link').style.display = 'block';
                                            }
                      },
                      
                      
                      function loadContent4(){
                      document.getElementById('georgeText6').style.display = 'block';
                      document.getElementById('georgeText7').style.display = 'block';
                      document.getElementById('breif8link').style.display = 'block';
                      document.getElementById('persisConvoLink').style.display = 'block';
                      document.getElementById('persisText2').style.display = 'block';
                      
                      if (fourthListened == true){
                      document.getElementById('carolineText2').style.display = 'block';
                      document.getElementById('gerogeText9').style.display = 'block';
                      document.getElementbyId('persisText3').style.display = 'block';
                      document.getElementbyId('breif9link').style.display = 'block';
                        }
                      },
                      
                      function loadContent5(){
                      document.getElementById('lacyText4').style.display = 'block';
                      document.getElementById('breif10link').style.display = 'block';
                      
                      if (fifthListened == true){
                      document.getElementById('gerogeText10').style.display = 'block';
                      document.getElementbyId('carolineText3').style.display = 'block';
                      document.getElementbyId('breif11link').style.display = 'block';
                        }
                      },
                      
                      function loadContent6(){
                      document.getElementById('persisText4').style.display = 'block';
                      document.getElementById('breif12link').style.display = 'block';
                      document.getElementById('ragutnerConvoLink').style.display = 'block';
                      
                      
                      if (fifthListened == true){
                      document.getElementbyId('lacyText5').style.display = 'block';
                      document.getElementbyId('breif13link').style.display = 'block';
                        }
                      },
                      
                      function loadContent7(){
                      document.getElementByid('stormAlert2').style.display = 'block';
                      document.getElementbyId('brief14link').style.display = 'block';
                      }
                      
];



var firstListened, secondListened, thirdListened, fourthListened, fifthListened, sixthListened = false; 

document.addEventListener("deviceready", onDeviceReady, false);
document.addEventListener("resume", onResume, false);

//first load swipe handlers 
$( document ).on( "pageinit", "[data-role='page'].demo-page", function() {
                 
                 
                page = "#" + $( this ).attr( "id" ),
                 // Get the filename of the next page that we stored in the data-next attribute
                 next = $( this ).jqmData( "next" ),
                 // Get the filename of the previous page that we stored in the data-prev attribute
                 prev = $( this ).jqmData( "prev" );
                 
                 // Check if we did set the data-next attribute
                 if ( next ) {
                 // Prefetch the next page
                 $.mobile.loadPage( next + ".html" );
                 // Navigate to next page on swipe left
                 $( document ).on( "swipeleft", page, function() {
                                  $.mobile.changePage("#" + next);
                                  });
                 // Navigate to next page when the "next" button is clicked
                 $( ".control .next", page ).on( "click", function() {
                                                $.mobile.changePage( "#" + next );
                                                });
                 }
                 // Disable the "next" button if there is no next page
                 else {
                 $( ".control .next", page ).addClass( "ui-disabled" );
                 }
                 // The same for the previous page (we set data-dom-cache="true" so there is no need to prefetch)
                 if ( prev ) {
                 $( document ).on( "swiperight", page, function() {
                                  $.mobile.changePage( "#" + prev, { reverse: true } );
                                  });
                 $( ".control .prev", page ).on( "click", function() {
                                                $.mobile.changePage( "#" + prev, { reverse: true } );
                                                });
                 }
                 else {
                 $( ".control .prev", page ).addClass( "ui-disabled" );
                 }
                 
                 if (page == "#Intro5"){
                    window.setTimeout('playVideo()', 5000);
                 }
                 
                 
                 });



// NOTE TO SELF: REPLACE THE GELOPLOCATION HANDLER!
//$(document).live("pagecreate", function() {
  //               navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);
    //             });


//Geolocaiton Handlers
//

function onGeoSuccess(position) {
    lat = position.coords.latitude;
    lon = position.coords.longitude;
    
    
    var currentposition = new google.maps.LatLng(lat,lon);
    
    var mapoptions = {
    zoom: 12,
    center: currentposition,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    mapTypeControl: false,
    streetViewControl: false,
    };
    
    var map = new google.maps.Map(document.getElementById("map_canvas"), mapoptions);
    
    
    var marker = new google.maps.Marker({
                                        position: currentposition,
                                        map: map
                                        
                                        });
}

function onGeoError(error) {
    if( error == 1) {
        alert('Turn on Geolocation services.');
    }
}


//Local Storage Handler
//

function appOpenCounterHandler() {
    if (appOpenCount > 0){
        appOpenCount++;
        window.localStorage.setItem("loadCount", appOpenCount);
    } else {
        window.localStorage.setItem("loadCount", 1);
        onFirstLoad();
    }
}


//Content Population




as.events.ready(function() {
                     progressCounter = window.localStorage.getItem("alertNumber");
                     
                     var a1 = audiojs.create(audios[0], {
                                             //first end handler
                                             trackEnded: function(){
                                             if (progressCounter == 1){
                                             $.mobile.changePage("#briefs");
                                             firstListened = true;
                                             secondLocalNotification();
                                             }
                                             }
                                        });
                     
                     
                });


function playTime(){
    progressCounter = window.localStorage.getItem("alertNumber");
    $.mobile.changePage("#audio");
    var audio = document.getElementById("scene"+progressCounter+"player");
    audio.play();
}



function showFirstAlert() {
    navigator.notification.alert(
                                 'You now have access to Etta Wheatons Transmitter',  // message
                                 playTime,         // callback
                                 'Access Granted',            // title
                                 'Listen'                  // button Name
                                 );
}



function secondAlertDismissed(){
    
    progressCounter = window.localStorage.getItem("alertNumber");
    var a2 = audiojs.create(audios[1], {
                            trackEnded: function(){
                            secondListened = true;
                            thirdLocalNotification();
                            }
                            });
    playTime();
}

function showSecondAlert() {
    navigator.notification.alert(
                                 'You now have access to Etta Wheatons Transmitter',  // message
                                 secondAlertDismissed,         // callback
                                 'Access Granted',            // title
                                 'Listen'                  // button Name
                                 );
}


function thirdAlertDismissed(){
    
    progressCounter = window.localStorage.getItem("alertNumber");
    var a3 = audiojs.create(audios[2], {
                            trackEnded: function(){
                            thirdListened = true;
                            fourthLocalNotification();
                            }
                            });
    playTime(); 
}

function showThirdAlert() {
    navigator.notification.alert(
                                 'You now have access to Etta Wheatons Transmitter',  // message
                                 thirdAlertDismissed,         // callback
                                 'Access Granted',            // title
                                 'Listen'                  // button Name
                                 );
}


function fourthAlertDismissed(){
    
    progressCounter = window.localStorage.getItem("alertNumber");
    var a4 = audiojs.create(audios[3], {
                            trackEnded: function(){
                            fourthListened = true;
                            fourthLocalNotification();
                            }
                            });
    playTime();
}

function showFourthAlert() {
    navigator.notification.alert(
                                 'You now have access to Etta Wheatons Transmitter',  // message
                                 fourthAlertDismissed,         // callback
                                 'Access Granted',            // title
                                 'Listen'                  // button Name
                                 );
}


function fifthAlertDismissed(){
    
    progressCounter = window.localStorage.getItem("alertNumber");
    var a5 = audiojs.create(audios[4], {
                            trackEnded: function(){
                            fifthListened = true;
                            sixthLocalNotification();
                            }
                            });
    playTime();
}

function showFifthAlert() {
    navigator.notification.alert(
                                 'You now have access to Etta Wheatons Transmitter',  // message
                                 fifthAlertDismissed,         // callback
                                 'Access Granted',            // title
                                 'Listen'                  // button Name
                                 );
}



function sixthAlertDismissed(){
    
    progressCounter = window.localStorage.getItem("alertNumber");
    var a6 = audiojs.create(audios[5], {
                            trackEnded: function(){
                            sixthListened = true;
                            seventhLocalNotification();
                            }
                            });
    playTime();
}

function showSixthAlert() {
    navigator.notification.alert(
                                 'You now have access to Etta Wheatons Transmitter',  // message
                                 sixthAlertDismissed,         // callback
                                 'Access Granted',            // title
                                 'Listen'                  // button Name
                                 );
}


function seventhAlertDismissed(){
    
    progressCounter = window.localStorage.getItem("alertNumber");
    var a7 = audiojs.create(audios[6], {
                            trackEnded: function(){
                            seventhListened = true;
                            }
                            });
    playTime();
}

function showSeventhAlert() {
    navigator.notification.alert(
                                 'You now have access to Etta Wheatons Transmitter',  // message
                                 seventhAlertDismissed,         // callback
                                 'Access Granted',            // title
                                 'Listen'                  // button Name
                                 );
}







//Custom Local Notification Handlers
//

function firstLocalNotification(){
    window.addNotification({
                           fireDate        : Math.round(new Date().getTime()/1000 + 13),
                           alertBody       : "You now have access to Etta Wheaton's Transmitter",
                           repeatInterval  : "0",
                           soundName       : "horn.caf",
                           badge           : 0,
                           notificationId  : 1,
                           callBack        : function(notificationId){
                                    showFirstAlert();
                           }
                           });
    alertNumber= 1;
    window.localStorage.setItem("alertNumber", alertNumber);
    contentLoaders[0]();
    window.plugins.badge.set(alertNumber);

}

function secondLocalNotification(){
    window.addNotification({
                           fireDate        : Math.round(new Date().getTime()/1000 + 60),
                           alertBody       : "You now have access to Etta Wheaton's Transmitter",
                           repeatInterval  : "0",
                           soundName       : "horn.caf",
                           badge           : 0,
                           notificationId  : 2,
                           callBack        : function(notificationId){
                                    showSecondAlert();
                                    contentLoaders[1]();
                           
                           }
                           });
    alertNumber = 2;
    window.localStorage.setItem("alertNumber", alertNumber);
}

function thirdLocalNotification(){
    window.addNotification({
                           fireDate        : Math.round(new Date().getTime()/1000 + 60),
                           alertBody       : "You now have access to Etta Wheaton's Transmitter",
                           repeatInterval  : "0",
                           soundName       : "horn.caf",
                           badge           : 0,
                           notificationId  : 3,
                           callBack        : function(notificationId){
                           showThirdAlert();
                           contentLoaders[2]();
                           }
                           });
    alertNumber = 3;
    window.localStorage.setItem("alertNumber", alertNumber);
}

function fourthLocalNotification(){
    window.addNotification({
                           fireDate        : Math.round(new Date().getTime()/1000 + 60),
                           alertBody       : "You now have access to Etta Wheaton's Transmitter",
                           repeatInterval  : "0",
                           soundName       : "horn.caf",
                           badge           : 0,
                           notificationId  : 4,
                           callBack        : function(notificationId){
                           showFourthAlert();
                           contentLoaders[3]();
                           }
                           });
    alertNumber = 4;
    window.localStorage.setItem("alertNumber", alertNumber);
}

function fifthLocalNotification(){
    window.addNotification({
                           fireDate        : Math.round(new Date().getTime()/1000 + 60),
                           alertBody       : "You now have access to Etta Wheaton's Transmitter",
                           repeatInterval  : "0",
                           soundName       : "horn.caf",
                           badge           : 0,
                           notificationId  : 5,
                           callBack        : function(notificationId){
                           showFifthAlert();
                           contentLoaders[4]();
                           }
                           });
    alertNumber = 5;
    window.localStorage.setItem("alertNumber", alertNumber);
}


function sixthLocalNotification(){
    window.addNotification({
                           fireDate        : Math.round(new Date().getTime()/1000 + 60),
                           alertBody       : "You now have access to Etta Wheaton's Transmitter",
                           repeatInterval  : "0",
                           soundName       : "horn.caf",
                           badge           : 0,
                           notificationId  : 6,
                           callBack        : function(notificationId){
                           showSixthAlert();
                           contentLoaders[5]();
                           }
                           });
    alertNumber = 6;
    window.localStorage.setItem("alertNumber", alertNumber);
}

function seventhLocalNotification(){
    window.addNotification({
                           fireDate        : Math.round(new Date().getTime()/1000 + 60),
                           alertBody       : "You now have access to Etta Wheaton's Transmitter",
                           repeatInterval  : "0",
                           soundName       : "horn.caf",
                           badge           : 0,
                           notificationId  : 7,
                           callBack        : function(notificationId){
                           showSeventhAlert();
                           contentLoaders[6]();
                           }
                           });
    alertNumber = 7;
    window.localStorage.setItem("alertNumber", alertNumber);
}


//First Load Sequence
//

function onFirstLoad(){
    //placeholder - this will be the "this app is best experienced with headphones

    //Preamble - image fading handled on page itself 
    $.mobile.changePage("#Intro1");
    alertNumber = 0;
}



function playVideo(){
    $.mobile.changePage("#breakVid");
    firstLocalNotification(); 
    var video = document.getElementById("video");
    video.addEventListener('ended', function() {
                           $.mobile.changePage("#home");
                           });
}





//Execution
//

function onDeviceReady() {
    appOpenCounterHandler();
    progressCounter = window.localStorage.getItem("alertNumber");
    for (var i = 0; i < progressCounter; i++){
    
        contentLoaders[i]();
    }
}


function onResume(){
    progressCounter = window.localStorage.getItem("alertNumber");
    alert(progressCounter);
    for (var i = 0; i < progressCounter; i++){
    contentLoaders[i]();
    }
  //  for (i = 0; i > progressCounter; i++){
  //      contentLoaders[i]();
  //  }
}





