var _=require("underscore"),assert=require("assert"),ApiKeyController=function(a){assert(a),this.apiKeyRepository=a,_.bindAll(this)};ApiKeyController.prototype.get=function(a,b){this.apiKeyRepository.findBy({user:a.session.user},function(a){return b.render("listApiKey",{apikeyList:a})})},ApiKeyController.prototype.create=function(a,b){this.apiKeyRepository.create(a.session.user,a.body.description,function(c){return c?(a.flash("error","web.apikey.save.failure"),b.redirect("/web/apikey")):(a.flash("success","web.apikey.save.success"),b.redirect("/web/apikey"))})},ApiKeyController.prototype["delete"]=function(a,b){this.apiKeyRepository["delete"](a.params.apikey,function(c){return c?(a.flash("error","web.apikey.delete.failure"),b.redirect("/web/apikey")):(a.flash("success","web.apikey.delete.success"),b.redirect("/web/apikey"))})},module.exports=ApiKeyController;