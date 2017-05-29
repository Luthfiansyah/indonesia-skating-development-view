!function(t,e){"use strict";"function"==typeof define&&define.amd?define(["ev-emitter/ev-emitter"],function(i){return e(t,i)}):"object"==typeof module&&module.exports?module.exports=e(t,require("ev-emitter")):t.imagesLoaded=e(t,t.EvEmitter)}(window,function t(e,i){"use strict";function o(t,e){for(var i in e)t[i]=e[i];return t}function r(t){var e=[];if(Array.isArray(t))e=t;else if("number"==typeof t.length)for(var i=0;i<t.length;i++)e.push(t[i]);else e.push(t);return e}function n(t,e,i){if(!(this instanceof n))return new n(t,e,i);"string"==typeof t&&(t=document.querySelectorAll(t)),this.elements=r(t),this.options=o({},this.options),"function"==typeof e?i=e:o(this.options,e),i&&this.on("always",i),this.getImages(),$&&(this.jqDeferred=new $.Deferred),setTimeout(function(){this.check()}.bind(this))}function s(t){this.img=t}function h(t,e){this.url=t,this.element=e,this.img=new Image}var $=e.jQuery,a=e.console;n.prototype=Object.create(i.prototype),n.prototype.options={},n.prototype.getImages=function(){this.images=[],this.elements.forEach(this.addElementImages,this)},n.prototype.addElementImages=function(t){"IMG"==t.nodeName&&this.addImage(t),this.options.background===!0&&this.addElementBackgroundImages(t);var e=t.nodeType;if(e&&d[e]){for(var i=t.querySelectorAll("img"),o=0;o<i.length;o++){var r=i[o];this.addImage(r)}if("string"==typeof this.options.background){var n=t.querySelectorAll(this.options.background);for(o=0;o<n.length;o++){var s=n[o];this.addElementBackgroundImages(s)}}}};var d={1:!0,9:!0,11:!0};return n.prototype.addElementBackgroundImages=function(t){var e=getComputedStyle(t);if(e)for(var i=/url\((['"])?(.*?)\1\)/gi,o=i.exec(e.backgroundImage);null!==o;){var r=o&&o[2];r&&this.addBackground(r,t),o=i.exec(e.backgroundImage)}},n.prototype.addImage=function(t){var e=new s(t);this.images.push(e)},n.prototype.addBackground=function(t,e){var i=new h(t,e);this.images.push(i)},n.prototype.check=function(){function t(t,i,o){setTimeout(function(){e.progress(t,i,o)})}var e=this;if(this.progressedCount=0,this.hasAnyBroken=!1,!this.images.length)return void this.complete();this.images.forEach(function(e){e.once("progress",t),e.check()})},n.prototype.progress=function(t,e,i){this.progressedCount++,this.hasAnyBroken=this.hasAnyBroken||!t.isLoaded,this.emitEvent("progress",[this,t,e]),this.jqDeferred&&this.jqDeferred.notify&&this.jqDeferred.notify(this,t),this.progressedCount==this.images.length&&this.complete(),this.options.debug&&a&&a.log("progress: "+i,t,e)},n.prototype.complete=function(){var t=this.hasAnyBroken?"fail":"done";if(this.isComplete=!0,this.emitEvent(t,[this]),this.emitEvent("always",[this]),this.jqDeferred){var e=this.hasAnyBroken?"reject":"resolve";this.jqDeferred[e](this)}},s.prototype=Object.create(i.prototype),s.prototype.check=function(){if(this.getIsImageComplete())return void this.confirm(0!==this.img.naturalWidth,"naturalWidth");this.proxyImage=new Image,this.proxyImage.addEventListener("load",this),this.proxyImage.addEventListener("error",this),this.img.addEventListener("load",this),this.img.addEventListener("error",this),this.proxyImage.src=this.img.src},s.prototype.getIsImageComplete=function(){return this.img.complete&&void 0!==this.img.naturalWidth},s.prototype.confirm=function(t,e){this.isLoaded=t,this.emitEvent("progress",[this,this.img,e])},s.prototype.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},s.prototype.onload=function(){this.confirm(!0,"onload"),this.unbindEvents()},s.prototype.onerror=function(){this.confirm(!1,"onerror"),this.unbindEvents()},s.prototype.unbindEvents=function(){this.proxyImage.removeEventListener("load",this),this.proxyImage.removeEventListener("error",this),this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},h.prototype=Object.create(s.prototype),h.prototype.check=function(){this.img.addEventListener("load",this),this.img.addEventListener("error",this),this.img.src=this.url,this.getIsImageComplete()&&(this.confirm(0!==this.img.naturalWidth,"naturalWidth"),this.unbindEvents())},h.prototype.unbindEvents=function(){this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},h.prototype.confirm=function(t,e){this.isLoaded=t,this.emitEvent("progress",[this,this.element,e])},n.makeJQueryPlugin=function(t){(t=t||e.jQuery)&&($=t,$.fn.imagesLoaded=function(t,e){return new n(this,t,e).jqDeferred.promise($(this))})},n.makeJQueryPlugin(),n});