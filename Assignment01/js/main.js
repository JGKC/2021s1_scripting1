/**************************************************
    2020S1 DM5212 Scripting Interactivity 1
    Assignment 1

    Author:     Jerwin Goh Kai Cheng (202983C)
    Date:       05/06/2021
    File Name:  main.js
**************************************************/
function Background(){}
Background()
/**************************************************
LANGAUGE SETTINGS
**************************************************/
// EN = English(Defualt) | CN = Chinese
var EN = true
var CN = false
// Delacre EN as shown Language
function EN_Delcare(){
    EN = true; CN = false;
    // Enable all Buttons/Captions in EN
    $(".EN").css({"display": "block"});
    $(".CN").css({"display": "none"});
    // EN/CN State for Start Button
    $("#start_EN").css({"display": "block"});
    $("#start_CN").css({"display": "none"});
    // EN Active/Inactive Language Button
    $("#language_EN_active").css({"display": "block"});
    $("#language_EN_inactive").css({"display": "none"});
    // CN Active/Inactive Language Button
    $("#language_CN_active").css({"display": "none"});
    $("#language_CN_inactive").css({"display": "block"});
    // console.log("EN:"+EN)
    // console.log("CN:"+CN)
}
// Delacre CN as shown Language
function CN_Delcare(){
    EN = false; CN = true;
    // Enable all Buttons/Captions in CN
    $(".EN").css({"display": "none"});
    $(".CN").css({"display": "block"});
    // EN/CN State for Start Button
    $("#start_EN").css({"display": "none"});
    $("#start_CN").css({"display": "block"});
    // EN Active/Inactive Language Button
    $("#language_EN_active").css({"display": "none"});
    $("#language_EN_inactive").css({"display": "block"});
    // CN Active/Inactive Language Button
    $("#language_CN_active").css({"display": "block"});
    $("#language_CN_inactive").css({"display": "none"});
    // console.log("EN:"+EN)
    // console.log("CN:"+CN)
}

/**************************************************
SCENE ANIMATION & AUDIO
**************************************************/   
function Scene01A(){
    // Secene1A - CNY Audio
    var backgroundAudio = document.createElement("audio");
    // startAudio.setAttribute("src","audio/RickRoll_mp3.mp3");
    backgroundAudio.setAttribute("src","audio/CNY_BGmusic.mp3");
    backgroundAudio.volume = 0.4; backgroundAudio.loop=true;

    var Scene01A = gsap.timeline();
        // Scene1A - Buttons leaving the Screen
        Scene01A.to(".start div", {duration:0.3, right:-80, 
            // onStart:backgroundAudio.play()
        },"Start");
        Scene01A.to(".language", {duration:0.3, bottom:-40}, "Start");
        // Scene1A - Background Zooming Effect
        Scene01A.fromTo("#house",
        {scale:1, transformOrigin:"0% left"},
        {scale:0.2, top:0, left:0, duration:1}); 
        // Scene1A - Family Coming In
        Scene01A.to("#familyA",{duration:1, x:150}, "Entering");
        Scene01A.to("#familyB",{duration:1, x:-150},"Entering");

        Scene01A.to("#caption1, #caption1 div",{duration:1, opacity:1,zIndex:10},"Entering+=1");  
}

function Scene01B(){
    // Scene1B - CNY Greetings Audio
    if (EN==true){var GreetingsAudio=document.createElement("audio");GreetingsAudio.setAttribute("src","http://www.hscripts.com/tutorials/html/music.wav");}
    else if (CN==true){var GreetingsAudio=document.createElement("audio");GreetingsAudio.setAttribute("src","audio/RickRoll_mp3.mp3");}
    console.log("EN:"+EN)
    console.log("CN:"+CN)
    console.log(GreetingsAudio)

    

    var Scene01B = gsap.timeline();
        // Scene1B - CNY Greetings
        Scene01B.to("#caption1, #caption1 div",{duration:1, opacity:0,zIndex:-1},"Greetings");
        Scene01B.to("#caption2, #caption2 div",{duration:1, opacity:1,zIndex:10},"Greetings"); 
        Scene01B.to("#familyA1, #familyB1",{duration:1, opacity:0, onStart:GreetingsAudio.play()}, "Greetings");
        Scene01B.to("#familyA2, #familyB2",{duration:1, opacity:1}, "Greetings");
        // Scene1B - Kid get AngBao
        Scene01B.to("#familyA2, #familyB2",{duration:1, opacity:0}, "Greetings+=5");
        Scene01B.to("#familyA3, #familyB3",{duration:1, opacity:1}, "Greetings+=5");
}

function Scene02(){
    var Scene02 = gsap.timeline({onComplete: Scene03});
    // Scene2A - Change of Background
    Scene02.to(".frame01",{opacity:0}, "SwitchBackground");
    Scene02.to(".frame02",{opacity:1}, "SwitchBackground");
    // Scene 2A - Background Zoom Effect
    Scene02.fromTo("#hdb",
    {scale:1, transformOrigin:"0% left"},
    {scale:0.2, top:0, left:0, duration:1},"SwitchBackground"); 
    Scene02.fromTo("#hdb",
    {scale:1, transformOrigin:"0% left"},
    {scale:1, bottom:0, left:0, duration:1},"SwitchBackground+1"); 
}

function Scene03(){};