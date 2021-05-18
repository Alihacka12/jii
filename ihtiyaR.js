const Discord = require('discord.js');
const chalk = require('chalk');
const moment = require('moment');
const figlet = require('figlet');
const ayarlar = require("./ihtiyaR.json");

const log = message => {
  
  console.log(`${message}`); 
};

//----------------------------CLIENT LIST----------------------------\\

const client = new Discord.Client();
require("./util/eventLoader.js")(client)

const client1 = new Discord.Client();
const client2 = new Discord.Client();
const client3 = new Discord.Client();
const client4 = new Discord.Client();
const client5 = new Discord.Client();
const client6 = new Discord.Client();
const client7 = new Discord.Client();
const client8 = new Discord.Client();
const client9 = new Discord.Client();
const client10 = new Discord.Client();
const client11 = new Discord.Client();

//----------------------------CLIENT LIST----------------------------\\

var süreler = ["19000", "19500" , "20000", "20500" , "21000", "21500" , "22000", "22500" ,"23000", "23500" ,"24000" , "24500" , "25000"]  


var süre1 = süreler[Math.floor(Math.random() * süreler.length)];
var süre2 = süreler[Math.floor(Math.random() * süreler.length)];
var süre3 = süreler[Math.floor(Math.random() * süreler.length)];
var süre4 = süreler[Math.floor(Math.random() * süreler.length)];
var süre5 = süreler[Math.floor(Math.random() * süreler.length)];
var süre6 = süreler[Math.floor(Math.random() * süreler.length)];
var süre7 = süreler[Math.floor(Math.random() * süreler.length)];
var süre8 = süreler[Math.floor(Math.random() * süreler.length)];
var süre9 = süreler[Math.floor(Math.random() * süreler.length)];
var süre10 = süreler[Math.floor(Math.random() * süreler.length)];
var süre11 = süreler[Math.floor(Math.random() * süreler.length)];

//----------------------------TOKEN LIST----------------------------\\

client1.login(ayarlar.Tokenler.t1)
client1.on('ready', ()=>{
    try {
     setInterval(function() {      
       let kanal = client1.channels.find(x => x.id === ayarlar.Tokenler.kanal)
       kanal.send("owo") 
        }, süre1);
         }
    catch(e) {
        console.error(e);
    }
})

client2.login(ayarlar.Tokenler.t2)
client2.on('ready', ()=>{
    try {
     setInterval(function() {      
       let kanal = client2.channels.find(x => x.id === ayarlar.Tokenler.kanal)
       kanal.send("owo") 
        }, süre2);
         }
    catch(e) {
        console.error(e);
    }
})

client3.login(ayarlar.Tokenler.t3)
client3.on('ready', ()=>{
    try {
     setInterval(function() {      
       let kanal = client3.channels.find(x => x.id === ayarlar.Tokenler.kanal)
       kanal.send("owo") 
        }, süre3);
         }
    catch(e) {
        console.error(e);
    }
})

client4.login(ayarlar.Tokenler.t4)
client4.on('ready', ()=>{
    try {
     setInterval(function() {      
       let kanal = client4.channels.find(x => x.id === ayarlar.Tokenler.kanal)
       kanal.send("owo") 
        }, süre4);
         }
    catch(e) {
        console.error(e);
    }
})

client5.login(ayarlar.Tokenler.t5)
client5.on('ready', ()=>{
    try {
     setInterval(function() {      
       let kanal = client5.channels.find(x => x.id === ayarlar.Tokenler.kanal)
       kanal.send("owo") 
        }, süre5);
         }
    catch(e) {
        console.error(e);
    }
})

client6.login(ayarlar.Tokenler.t6)
client6.on('ready', ()=>{
    try {
     setInterval(function() {      
       let kanal = client6.channels.find(x => x.id === ayarlar.Tokenler.kanal)
       kanal.send("owo") 
        }, süre6);
         }
    catch(e) {
        console.error(e);
    }
})

client7.login(ayarlar.Tokenler.t7)
client7.on('ready', ()=>{
    try {
     setInterval(function() {      
       let kanal = client7.channels.find(x => x.id === ayarlar.Tokenler.kanal)
       kanal.send("owo") 
        }, süre7);
         }
    catch(e) {
        console.error(e);
    }
})

client8.login(ayarlar.Tokenler.t8)
client8.on('ready', ()=>{
    try {
     setInterval(function() {      
       let kanal = client8.channels.find(x => x.id === ayarlar.Tokenler.kanal)
       kanal.send("owo") 
        }, süre8);
         }
    catch(e) {
        console.error(e);
    }
})

client9.login(ayarlar.Tokenler.t9)
client9.on('ready', ()=>{
    try {
     setInterval(function() {      
       let kanal = client9.channels.find(x => x.id === ayarlar.Tokenler.kanal)
       kanal.send("owo") 
        }, süre9);
         }
    catch(e) {
        console.error(e);
    }
})

client10.login(ayarlar.Tokenler.t10)
client10.on('ready', ()=>{
    try {
     setInterval(function() {      
       let kanal = client10.channels.find(x => x.id === ayarlar.Tokenler.kanal)
       kanal.send("owo") 
        }, süre10);
         }
    catch(e) {
        console.error(e);
    }
})

client11.login(ayarlar.Tokenler.t11)
client11.on('ready', ()=>{
    try {
     setInterval(function() {      
       let kanal = client11.channels.find(x => x.id === ayarlar.Tokenler.kanal)
       kanal.send("owo") 
        }, süre11);
         }
    catch(e) {
        console.error(e);
    }
})

//----------------------------TOKEN LIST----------------------------\\

client.login(ayarlar.ihtiyaR.token)