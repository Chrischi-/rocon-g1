var _=require("underscore"),path=require("path"),fs=require("fs"),parameters=fs.existsSync(path.join(__dirname,"/parameters.js"))?require("./parameters.js"):{},config=_.extend({errorCheckInterval:6e5,protocol:"https",reconnectionLimit:3e4,colorPins:{bb:{red:"P8_12",green:"P8_15",blue:"P8_23"},bbb:{red:"P8_12",green:"P8_15",blue:"P8_16"}},refresher:{timeout:500,deviceIdentifier:"cSOFTWARE_NUMMER"},reportTimeout:6e5,eepromPath:{bb:"/sys/bus/i2c/drivers/at24/3-0055/eeprom",bbb:"/sys/devices/ocp.2/4819c000.i2c/i2c-1/1-0055/eeprom",bbbDebian:"/sys/devices/ocp.3/4819c000.i2c/i2c-1/1-0055/eeprom"},rccs:{host:"api.rotex-control.com",port:443,path:""},can:{canInterface:"can0",getInterval:200,writeInterval:500,inactivityTimeout:5e3,requestTimout:2e3},updater:{lockPath:"/tmp/RoconUpdater.lock",checkInterval:2e3,tmpDir:"/var/local/rocon-g1.tmp",tmpFile:"/var/local/rocon-g1.zip",targetDir:"/var/local/rocon-g1"},logger:{loggingConfigPath:"/var/local/rocon-g1/config/loggerconfig.json",logFiles:["/var/log/kern.log","/var/log/syslog","/var/log/messages","/var/log/rocon.log"],roconLogFile:"/var/log/rocon.log",zipPath:"/tmp/Logging.zip"},rebootScheduler:{rebootSettingsPath:"/var/local/rocon-g1/config/settings.json"},web_port:80,web_dataPath:"/home/root/.rocon/"},parameters);module.exports=config;