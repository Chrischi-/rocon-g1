var _=require("underscore"),assert=require("assert"),exec=require("child_process").exec,fs=require("fs"),Beagle=function(a,b){assert(a),_.bindAll(this),this._eepromPath=a,this._versionFile=b};Beagle.prototype.getId=function(a){var b=this;this.id?a(null,this.id):"dev"==process.env.NODE_ENV?(this.id="TheBeagleDummyInstallationId",a(null,this.id)):exec("/sbin/ifconfig eth0",function(c,d,e){if(c)throw new Error("could not get beagle id");b.id=d.match(/(?:[a-z0-9]{1,2}[:\-]){5}[a-z0-9]{1,2}/i)[0],b.id=b.id.replace(/[^0-9a-zA-Z]/g,""),b.id=b.id.toUpperCase(),b.getId(a)})},Beagle.prototype.getSecret=function(a){var b=this;if(b.secret)a(null,b.secret);else if("dev"==process.env.NODE_ENV)a(null,"OtxrzxIsfpFjA7SwPzILwy8Bw21TLhquhboDYROV");else{var c=require("./eeprom"),d=c.fetchEepromData(b._eepromPath),e=c.parseCapeEeprom(d);b.secret=e.additional,b.getSecret(a)}},Beagle.prototype.getBrand=function(){if(this.brand)return this.brand;if("dev"==process.env.NODE_ENV)return"rotex";var a=require("./eeprom"),b=a.fetchEepromData(this._eepromPath),c=a.parseCapeEeprom(b);return this.brand=-1!=c.boardName.toLowerCase().indexOf("daikin")?"daikin":"rotex"},Beagle.prototype.getVersion=function(a){fs.readFile(this._versionFile,function(b,c){b?a(b):a(null,parseInt(c))})},module.exports=Beagle;