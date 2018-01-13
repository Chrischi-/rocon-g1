var _=require("underscore"),assert=require("assert"),async=require("async"),config=require("../../config/config.js"),CanFacade=function(a,b,c,d){assert(a),assert(b),assert(c),_.bindAll(this),this._canChannel=a,this._messageTransformer=b,this._eventEmitter=c,this._parameterRepository=d,this._request=null,this._requestQueue=async.queue(this._workRequestQueue,1),this._canChannel.addListener("onMessage",this._handleCanMessage)};CanFacade.prototype.work=function(a){this._workCallback=a},CanFacade.prototype.request=function(a,b){this._requestQueue.push(a,b)},CanFacade.prototype._handleCanMessage=function(a){var b=this._messageTransformer.toParameter(a);if(b){this._eventEmitter.emit("ValueReceived",b.parameter,b.value);var c={p:b.parameter.hash,v:b.value};this._handleWorkCallback(b),this._handleRequestCallback(c)}},CanFacade.prototype.send=function(a,b,c){var d=this._messageTransformer.toSetMessage(a,b);this._canChannel.send(d),this.request(a,c)},CanFacade.prototype._handleWorkCallback=function(a){this._workCallback&&this._workCallback(null,a)},CanFacade.prototype._handleRequestCallback=function(a){var b=a.p;if(this._request&&this._request.parameter.hash==b){clearTimeout(this._request.timeout);var c=this._request.callback;this._request=null,setTimeout(function(){c(null,a.v)},config.can.getInterval)}},CanFacade.prototype._workRequestQueue=function(a,b){var c=this;this._request={},this._request.parameter=a,this._request.callback=b,this._request.timeout=setTimeout(function(){var a=c._request.callback;c._request=null,a(null,null)},config.can.requestTimout);var d=this._messageTransformer.toGetMessage(a);d?this._canChannel.send(d):console.warn("requesting unknown parameter",a)},module.exports=CanFacade;