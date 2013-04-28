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
var listenedNumber = 0; 


    var contentLoaders = [
                      function loadContent1(){
                      document.getElementById('alertConvoLink').style.visibility = 'visible';
                      document.getElementById('breif1link').style.visibility = 'visible';
                      if (listenedBools[0] == true){
                      document.getElementById('carolineConvoLink').style.visibility = 'visible';
                      document.getElementById('breif2link').style.visibility = 'visible';
                        }
                      },
                      
                      
                      function loadContent2(){
                      document.getElementById('lacyConvoLink').style.visibility = 'visible';
                      document.getElementById('breif3link').style.visibility = 'visible';
                      document.getElementById('breif4link').style.visibility = 'visible';

                      if (listenedBools[1] == true){
                      document.getElementById('georgeMomConvoLink').style.visibility = 'visible';
                      document.getElementById('breif5link').style.visibility = 'visible';
                        }
                      },
                      
                      function loadContent3(){
                      document.getElementById('lacyText2').style.visibility = 'visible';
                      document.getElementById('breif6link').style.visibility = 'visible';
                      document.getElementById('carolineText2').style.visibility = 'visible';

                      
                      if (listenedBools[2] == true){
                          document.getElementById('georgeConvoLink').style.visibility = 'visible';
                          document.getElementById('georgeText2').style.visibility = 'visible';
                          document.getElementById('georgeText3').style.visibility = 'visible';
                          document.getElementById('georgeText4').style.visibility = 'visible';
                          document.getElementById('georgeText5').style.visibility = 'visible';
                          document.getElementById('breif7link').style.visibility = 'visible';
                                            }
                      },
                      
                      
                      function loadContent4(){
                      document.getElementById('lacyText3').style.visibility = 'visible';
                      document.getElementById('georgeText6').style.visibility = 'visible';
                      document.getElementById('georgeText7').style.visibility = 'visible';
                      document.getElementById('breif8link').style.visibility = 'visible';
                        
                      if (listenedBools[3] == true){
                          document.getElementById('georgeText8').style.visibility = 'visible';
                          document.getElementById('persisConvoLink').style.visibility = 'visible';
                          document.getElementById('persisText2').style.visibility = 'visible';
                          document.getElementById('breif9link').style.visibility = 'visible';
                        }
                      },
                      
                      function loadContent5(){
                          document.getElementById('persisText3').style.visibility = 'visible';
                      document.getElementById('breif10link').style.visibility = 'visible';
                      
                      if (listenedBools[4] == true){
                          document.getElementById('lacyText4').style.visibility = 'visible';
                          document.getElementById('carolineText3').style.visibility = 'visible';
                          document.getElementById('breif11link').style.visibility = 'visible';
                          document.getElementById('georgeText9').style.visibility = 'visible';

                        }
                      },
                      
                      function loadContent6(){
                      document.getElementById('breif12link').style.visibility = 'visible';
                      document.getElementById('ragutnerConvoLink').style.visibility = 'visible';
                      
                      
                      if (listenedBools[5] == true){
                          document.getElementById('persisText4').style.visibility = 'visible';
                          document.getElementById('breif13link').style.visibility = 'visible';
                        }
                      },
                      
                      function loadContent7(){
                          document.getElementById('lacyText5').style.visibility = 'visible';
                          document.getElementById('stormAlert2').style.visibility = 'visible';
                          document.getElementById('breif14link').style.visibility = 'visible';
                      }
            
];



var listenedBools = [false, false, false, false, false, false, false];

$(document).live("pagecreate", function() {
                 navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);
                 });

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
        loopForContent(); 
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
                                             listenedBools[0] = true;
                                             listenedNumber--;
                                             window.plugins.badge.set(listenedNumber);
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
                            listenedBools[1] = true;
                            listenedNumber--;
                            window.plugins.badge.set(listenedNumber);
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
                            listenedBools[2] = true;
                            listenedNumber--;
                            window.plugins.badge.set(listenedNumber);
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
                            listenedBools[3] = true;
                            listenedNumber--;
                            window.plugins.badge.set(listenedNumber);
                            fifthLocalNotification();
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
                            listenedBools[4] = true;
                            listenedNumber--;
                            window.plugins.badge.set(listenedNumber);
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
                            listenedBools[5] = true;
                            listenedNumber--;
                            window.plugins.badge.set(listenedNumber);
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
                            listenedBools[6] = true;
                            listenedNumber--;
                            window.plugins.badge.set(listenedNumber);
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
                           fireDate        : Math.round(new Date().getTime()/1000 + 11),
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
    listenedNumber++;
    window.plugins.badge.set(listenedNumber);
}

function secondLocalNotification(){
    window.addNotification({
                           fireDate        : Math.round(new Date().getTime()/1000 + 600),
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
    listenedNumber++;
    window.localStorage.setItem("alertNumber", alertNumber);
    window.plugins.badge.set(listenedNumber);
}

function thirdLocalNotification(){
    window.addNotification({
                           fireDate        : Math.round(new Date().getTime()/1000 + 900),
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
    listenedNumber++;
    window.plugins.badge.set(listenedNumber);
    window.localStorage.setItem("alertNumber", alertNumber);
}

function fourthLocalNotification(){
    window.addNotification({
                           fireDate        : Math.round(new Date().getTime()/1000 + 1200),
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
    listenedNumber++;
    window.plugins.badge.set(listenedNumber);
    window.localStorage.setItem("alertNumber", alertNumber);
}

function fifthLocalNotification(){
    window.addNotification({
                           fireDate        : Math.round(new Date().getTime()/1000 + 1200),
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
    listenedNumber++;
    window.plugins.badge.set(listenedNumber);
    window.localStorage.setItem("alertNumber", alertNumber);
}


function sixthLocalNotification(){
    window.addNotification({
                           fireDate        : Math.round(new Date().getTime()/1000 + 1200),
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
    listenedNumber++;
    window.plugins.badge.set(listenedNumber);
    window.localStorage.setItem("alertNumber", alertNumber);
}

function seventhLocalNotification(){
    window.addNotification({
                           fireDate        : Math.round(new Date().getTime()/1000 + 1200),
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
    listenedNumber++;
    window.plugins.badge.set(listenedNumber);
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


function loopForContent(){
    var j = 0;
    var v = 0;
    var k = progressCounter - 1;
    for (j = 0; j< k; j++){
        listenedBools[j] = true;
        contentLoaders[j]();
        if (progressCounter > 0){
        var a = audiojs.create(audios[j]);
        }
    }
    if (progressCounter == 7){
        contentLoaders[6]();
        var a = audiojs.create(audios[6]);
    }
 //   alert("hi");
}


//Execution
//

function onDeviceReady() {
    progressCounter = window.localStorage.getItem("alertNumber");
    appOpenCounterHandler();
 //   alert(progressCounter);
}


function onResume(){
    progressCounter = window.localStorage.getItem("alertNumber");
  //  alert(progressCounter);
    loopForContent();
}





