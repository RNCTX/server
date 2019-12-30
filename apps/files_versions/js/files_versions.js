!function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/js/",n(n.s=28)}([function(e,t,n){"use strict";t.__esModule=!0,t.extend=l,t.indexOf=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},t.escapeExpression=function(e){if("string"!=typeof e){if(e&&e.toHTML)return e.toHTML();if(null==e)return"";if(!e)return e+"";e=""+e}if(!o.test(e))return e;return e.replace(i,a)},t.isEmpty=function(e){return!e&&0!==e||!(!c(e)||0!==e.length)},t.createFrame=function(e){var t=l({},e);return t._parent=e,t},t.blockParams=function(e,t){return e.path=t,e},t.appendContextPath=function(e,t){return(e?e+".":"")+t};var r={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;","=":"&#x3D;"},i=/[&<>"'`=]/g,o=/[&<>"'`=]/;function a(e){return r[e]}function l(e){for(var t=1;t<arguments.length;t++)for(var n in arguments[t])Object.prototype.hasOwnProperty.call(arguments[t],n)&&(e[n]=arguments[t][n]);return e}var s=Object.prototype.toString;t.toString=s;var u=function(e){return"function"==typeof e};u(/x/)&&(t.isFunction=u=function(e){return"function"==typeof e&&"[object Function]"===s.call(e)}),t.isFunction=u;var c=Array.isArray||function(e){return!(!e||"object"!=typeof e)&&"[object Array]"===s.call(e)};t.isArray=c},function(e,t,n){"use strict";t.__esModule=!0;var r=["description","fileName","lineNumber","endLineNumber","message","name","number","stack"];function i(e,t){var n=t&&t.loc,o=void 0,a=void 0,l=void 0,s=void 0;n&&(o=n.start.line,a=n.end.line,l=n.start.column,s=n.end.column,e+=" - "+o+":"+l);for(var u=Error.prototype.constructor.call(this,e),c=0;c<r.length;c++)this[r[c]]=u[r[c]];Error.captureStackTrace&&Error.captureStackTrace(this,i);try{n&&(this.lineNumber=o,this.endLineNumber=a,Object.defineProperty?(Object.defineProperty(this,"column",{value:l,enumerable:!0}),Object.defineProperty(this,"endColumn",{value:s,enumerable:!0})):(this.column=l,this.endColumn=s))}catch(e){}}i.prototype=new Error,t.default=i,e.exports=t.default},function(e,t,n){e.exports=n(10).default},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.HandlebarsEnvironment=u;var i=n(0),o=r(n(1)),a=n(4),l=n(18),s=r(n(20));t.VERSION="4.5.3";t.COMPILER_REVISION=8;t.LAST_COMPATIBLE_COMPILER_REVISION=7;t.REVISION_CHANGES={1:"<= 1.0.rc.2",2:"== 1.0.0-rc.3",3:"== 1.0.0-rc.4",4:"== 1.x.x",5:"== 2.0.0-alpha.x",6:">= 2.0.0-beta.1",7:">= 4.0.0 <4.3.0",8:">= 4.3.0"};function u(e,t,n){this.helpers=e||{},this.partials=t||{},this.decorators=n||{},a.registerDefaultHelpers(this),l.registerDefaultDecorators(this)}u.prototype={constructor:u,logger:s.default,log:s.default.log,registerHelper:function(e,t){if("[object Object]"===i.toString.call(e)){if(t)throw new o.default("Arg not supported with multiple helpers");i.extend(this.helpers,e)}else this.helpers[e]=t},unregisterHelper:function(e){delete this.helpers[e]},registerPartial:function(e,t){if("[object Object]"===i.toString.call(e))i.extend(this.partials,e);else{if(void 0===t)throw new o.default('Attempting to register a partial called "'+e+'" as undefined');this.partials[e]=t}},unregisterPartial:function(e){delete this.partials[e]},registerDecorator:function(e,t){if("[object Object]"===i.toString.call(e)){if(t)throw new o.default("Arg not supported with multiple decorators");i.extend(this.decorators,e)}else this.decorators[e]=t},unregisterDecorator:function(e){delete this.decorators[e]}};var c=s.default.log;t.log=c,t.createFrame=i.createFrame,t.logger=s.default},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.registerDefaultHelpers=function(e){i.default(e),o.default(e),a.default(e),l.default(e),s.default(e),u.default(e),c.default(e)},t.moveHelperToHooks=function(e,t,n){e.helpers[t]&&(e.hooks[t]=e.helpers[t],n||delete e.helpers[t])};var i=r(n(11)),o=r(n(12)),a=r(n(13)),l=r(n(14)),s=r(n(15)),u=r(n(16)),c=r(n(17))},function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t,n){var r=n(2);e.exports=(r.default||r).template({1:function(e,t,n,r,i){var o,a=null!=t?t:e.nullContext||{},l=e.hooks.helperMissing,s=e.escapeExpression;return'\t\t\t\t<div class="version-details">\n\t\t\t\t\t<span class="size has-tooltip" title="'+s("function"==typeof(o=null!=(o=n.altSize||(null!=t?t.altSize:t))?o:l)?o.call(a,{name:"altSize",hash:{},data:i,loc:{start:{line:14,column:43},end:{line:14,column:54}}}):o)+'">'+s("function"==typeof(o=null!=(o=n.humanReadableSize||(null!=t?t.humanReadableSize:t))?o:l)?o.call(a,{name:"humanReadableSize",hash:{},data:i,loc:{start:{line:14,column:56},end:{line:14,column:77}}}):o)+"</span>\n\t\t\t\t</div>\n"},3:function(e,t,n,r,i){var o,a=null!=t?t:e.nullContext||{},l=e.hooks.helperMissing,s=e.escapeExpression;return'\t\t\t<a href="#" class="revertVersion" title="'+s("function"==typeof(o=null!=(o=n.revertLabel||(null!=t?t.revertLabel:t))?o:l)?o.call(a,{name:"revertLabel",hash:{},data:i,loc:{start:{line:19,column:44},end:{line:19,column:59}}}):o)+'"><img src="'+s("function"==typeof(o=null!=(o=n.revertIconUrl||(null!=t?t.revertIconUrl:t))?o:l)?o.call(a,{name:"revertIconUrl",hash:{},data:i,loc:{start:{line:19,column:71},end:{line:19,column:88}}}):o)+'" /></a>\n'},compiler:[8,">= 4.3.0"],main:function(e,t,n,r,i){var o,a,l,s=null!=t?t:e.nullContext||{},u=e.hooks.helperMissing,c="function",d=e.escapeExpression,f=e.hooks.blockHelperMissing,p='<li data-revision="'+d(typeof(a=null!=(a=n.id||(null!=t?t.id:t))?a:u)===c?a.call(s,{name:"id",hash:{},data:i,loc:{start:{line:1,column:19},end:{line:1,column:25}}}):a)+'">\n\t<div>\n\t\t<div class="preview-container">\n\t\t\t<img class="preview" src="'+d(typeof(a=null!=(a=n.previewUrl||(null!=t?t.previewUrl:t))?a:u)===c?a.call(s,{name:"previewUrl",hash:{},data:i,loc:{start:{line:4,column:29},end:{line:4,column:43}}}):a)+'" width="44" height="44"/>\n\t\t</div>\n\t\t<div class="version-container">\n\t\t\t<div>\n\t\t\t\t<a href="'+d(typeof(a=null!=(a=n.downloadUrl||(null!=t?t.downloadUrl:t))?a:u)===c?a.call(s,{name:"downloadUrl",hash:{},data:i,loc:{start:{line:8,column:13},end:{line:8,column:28}}}):a)+'" class="downloadVersion" download="'+d(typeof(a=null!=(a=n.downloadName||(null!=t?t.downloadName:t))?a:u)===c?a.call(s,{name:"downloadName",hash:{},data:i,loc:{start:{line:8,column:64},end:{line:8,column:80}}}):a)+'"><img src="'+d(typeof(a=null!=(a=n.downloadIconUrl||(null!=t?t.downloadIconUrl:t))?a:u)===c?a.call(s,{name:"downloadIconUrl",hash:{},data:i,loc:{start:{line:8,column:92},end:{line:8,column:111}}}):a)+'" />\n\t\t\t\t\t<span class="versiondate has-tooltip live-relative-timestamp" data-timestamp="'+d(typeof(a=null!=(a=n.millisecondsTimestamp||(null!=t?t.millisecondsTimestamp:t))?a:u)===c?a.call(s,{name:"millisecondsTimestamp",hash:{},data:i,loc:{start:{line:9,column:83},end:{line:9,column:108}}}):a)+'" title="'+d(typeof(a=null!=(a=n.formattedTimestamp||(null!=t?t.formattedTimestamp:t))?a:u)===c?a.call(s,{name:"formattedTimestamp",hash:{},data:i,loc:{start:{line:9,column:117},end:{line:9,column:139}}}):a)+'">'+d(typeof(a=null!=(a=n.relativeTimestamp||(null!=t?t.relativeTimestamp:t))?a:u)===c?a.call(s,{name:"relativeTimestamp",hash:{},data:i,loc:{start:{line:9,column:141},end:{line:9,column:162}}}):a)+"</span>\n\t\t\t\t</a>\n\t\t\t</div>\n";return a=null!=(a=n.hasDetails||(null!=t?t.hasDetails:t))?a:u,l={name:"hasDetails",hash:{},fn:e.program(1,i,0),inverse:e.noop,data:i,loc:{start:{line:12,column:3},end:{line:16,column:18}}},o=typeof a===c?a.call(s,l):a,n.hasDetails||(o=f.call(t,o,l)),null!=o&&(p+=o),p+="\t\t</div>\n",a=null!=(a=n.canRevert||(null!=t?t.canRevert:t))?a:u,l={name:"canRevert",hash:{},fn:e.program(3,i,0),inverse:e.noop,data:i,loc:{start:{line:18,column:2},end:{line:20,column:16}}},o=typeof a===c?a.call(s,l):a,n.canRevert||(o=f.call(t,o,l)),null!=o&&(p+=o),p+"\t</div>\n</li>\n"},useData:!0})},function(e,t,n){var r=n(2);e.exports=(r.default||r).template({compiler:[8,">= 4.3.0"],main:function(e,t,n,r,i){var o,a=null!=t?t:e.nullContext||{},l=e.hooks.helperMissing,s=e.escapeExpression;return'<ul class="versions"></ul>\n<div class="clear-float"></div>\n<div class="empty hidden">\n\t<div class="emptycontent">\n\t\t<div class="icon-history"></div>\n\t\t<p>'+s("function"==typeof(o=null!=(o=n.emptyResultLabel||(null!=t?t.emptyResultLabel:t))?o:l)?o.call(a,{name:"emptyResultLabel",hash:{},data:i,loc:{start:{line:6,column:5},end:{line:6,column:25}}}):o)+'</p>\n\t</div>\n</div>\n<input type="button" class="showMoreVersions hidden" value="'+s("function"==typeof(o=null!=(o=n.moreVersionsLabel||(null!=t?t.moreVersionsLabel:t))?o:l)?o.call(a,{name:"moreVersionsLabel",hash:{},data:i,loc:{start:{line:9,column:60},end:{line:9,column:81}}}):o)+'" name="show-more-versions" id="show-more-versions" />\n<div class="loading hidden" style="height: 50px"></div>\n'},useData:!0})},function(e,t){var n;n=OC.Backbone.Model.extend({sync:OC.Backbone.davSync,davProperties:{size:"{DAV:}getcontentlength",mimetype:"{DAV:}getcontenttype",timestamp:"{DAV:}getlastmodified"},revert:function(e){e=e?_.clone(e):{};var t=this;return this.get("client").move("/versions/"+this.get("fileId")+"/"+this.get("id"),"/restore/target",!0).done((function(){e.success&&e.success.call(e.context,t,{},e),t.trigger("revert",t,e)})).fail((function(){e.error&&e.error.call(e.context,t,{},e),t.trigger("error",t,{},e)}))},getFullPath:function(){return this.get("fullPath")},getPreviewUrl:function(){var e=OC.generateUrl("/apps/files_versions/preview"),t={file:this.get("fullPath"),version:this.get("id")};return e+"?"+OC.buildQueryString(t)},getDownloadUrl:function(){return OC.linkToRemoteBase("dav")+"/versions/"+this.get("user")+"/versions/"+this.get("fileId")+"/"+this.get("id")}}),OCA.Versions=OCA.Versions||{},OCA.Versions.VersionModel=n},function(e,t){var n;n=OC.Backbone.Collection.extend({model:OCA.Versions.VersionModel,sync:OC.Backbone.davSync,_fileInfo:null,_currentUser:null,_client:null,setFileInfo:function(e){this._fileInfo=e},getFileInfo:function(){return this._fileInfo},setCurrentUser:function(e){this._currentUser=e},getCurrentUser:function(){return this._currentUser||OC.getCurrentUser().uid},setClient:function(e){this._client=e},getClient:function(){return this._client||new OC.Files.Client({host:OC.getHost(),root:OC.linkToRemoteBase("dav")+"/versions/"+this.getCurrentUser(),useHTTPS:"https"===OC.getProtocol()})},url:function(){return OC.linkToRemoteBase("dav")+"/versions/"+this.getCurrentUser()+"/versions/"+this._fileInfo.get("id")},parse:function(e){var t=this._fileInfo.getFullPath(),n=this._fileInfo.get("id"),r=this._fileInfo.get("name"),i=this.getCurrentUser(),o=this.getClient();return _.map(e,(function(e){return e.fullPath=t,e.fileId=n,e.name=r,e.timestamp=parseInt(moment(new Date(e.timestamp)).format("X"),10),e.id=OC.basename(e.href),e.size=parseInt(e.size,10),e.user=i,e.client=o,e}))}}),OCA.Versions=OCA.Versions||{},OCA.Versions.VersionCollection=n},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}t.__esModule=!0;var o=i(n(3)),a=r(n(21)),l=r(n(1)),s=i(n(0)),u=i(n(22)),c=r(n(23));function d(){var e=new o.HandlebarsEnvironment;return s.extend(e,o),e.SafeString=a.default,e.Exception=l.default,e.Utils=s,e.escapeExpression=s.escapeExpression,e.VM=u,e.template=function(t){return u.template(t,e)},e}var f=d();f.create=d,c.default(f),f.default=f,t.default=f,e.exports=t.default},function(e,t,n){"use strict";t.__esModule=!0;var r=n(0);t.default=function(e){e.registerHelper("blockHelperMissing",(function(t,n){var i=n.inverse,o=n.fn;if(!0===t)return o(this);if(!1===t||null==t)return i(this);if(r.isArray(t))return t.length>0?(n.ids&&(n.ids=[n.name]),e.helpers.each(t,n)):i(this);if(n.data&&n.ids){var a=r.createFrame(n.data);a.contextPath=r.appendContextPath(n.data.contextPath,n.name),n={data:a}}return o(t,n)}))},e.exports=t.default},function(e,t,n){"use strict";(function(r){t.__esModule=!0;var i,o=n(0),a=n(1),l=(i=a)&&i.__esModule?i:{default:i};t.default=function(e){e.registerHelper("each",(function(e,t){if(!t)throw new l.default("Must pass iterator to #each");var n,i=t.fn,a=t.inverse,s=0,u="",c=void 0,d=void 0;function f(t,n,r){c&&(c.key=t,c.index=n,c.first=0===n,c.last=!!r,d&&(c.contextPath=d+t)),u+=i(e[t],{data:c,blockParams:o.blockParams([e[t],t],[d+t,null])})}if(t.data&&t.ids&&(d=o.appendContextPath(t.data.contextPath,t.ids[0])+"."),o.isFunction(e)&&(e=e.call(this)),t.data&&(c=o.createFrame(t.data)),e&&"object"==typeof e)if(o.isArray(e))for(var p=e.length;s<p;s++)s in e&&f(s,s,s===e.length-1);else if(r.Symbol&&e[r.Symbol.iterator]){for(var h=[],m=e[r.Symbol.iterator](),v=m.next();!v.done;v=m.next())h.push(v.value);for(p=(e=h).length;s<p;s++)f(s,s,s===e.length-1)}else n=void 0,Object.keys(e).forEach((function(e){void 0!==n&&f(n,s-1),n=e,s++})),void 0!==n&&f(n,s-1,!0);return 0===s&&(u=a(this)),u}))},e.exports=t.default}).call(this,n(5))},function(e,t,n){"use strict";t.__esModule=!0;var r,i=n(1),o=(r=i)&&r.__esModule?r:{default:r};t.default=function(e){e.registerHelper("helperMissing",(function(){if(1!==arguments.length)throw new o.default('Missing helper: "'+arguments[arguments.length-1].name+'"')}))},e.exports=t.default},function(e,t,n){"use strict";t.__esModule=!0;var r,i=n(0),o=n(1),a=(r=o)&&r.__esModule?r:{default:r};t.default=function(e){e.registerHelper("if",(function(e,t){if(2!=arguments.length)throw new a.default("#if requires exactly one argument");return i.isFunction(e)&&(e=e.call(this)),!t.hash.includeZero&&!e||i.isEmpty(e)?t.inverse(this):t.fn(this)})),e.registerHelper("unless",(function(t,n){if(2!=arguments.length)throw new a.default("#unless requires exactly one argument");return e.helpers.if.call(this,t,{fn:n.inverse,inverse:n.fn,hash:n.hash})}))},e.exports=t.default},function(e,t,n){"use strict";t.__esModule=!0,t.default=function(e){e.registerHelper("log",(function(){for(var t=[void 0],n=arguments[arguments.length-1],r=0;r<arguments.length-1;r++)t.push(arguments[r]);var i=1;null!=n.hash.level?i=n.hash.level:n.data&&null!=n.data.level&&(i=n.data.level),t[0]=i,e.log.apply(e,t)}))},e.exports=t.default},function(e,t,n){"use strict";t.__esModule=!0;var r=/^(constructor|__defineGetter__|__defineSetter__|__lookupGetter__|__proto__)$/;t.dangerousPropertyRegex=r,t.default=function(e){e.registerHelper("lookup",(function(e,t){return e?!r.test(String(t))||Object.prototype.propertyIsEnumerable.call(e,t)?e[t]:void 0:e}))}},function(e,t,n){"use strict";t.__esModule=!0;var r,i=n(0),o=n(1),a=(r=o)&&r.__esModule?r:{default:r};t.default=function(e){e.registerHelper("with",(function(e,t){if(2!=arguments.length)throw new a.default("#with requires exactly one argument");i.isFunction(e)&&(e=e.call(this));var n=t.fn;if(i.isEmpty(e))return t.inverse(this);var r=t.data;return t.data&&t.ids&&((r=i.createFrame(t.data)).contextPath=i.appendContextPath(t.data.contextPath,t.ids[0])),n(e,{data:r,blockParams:i.blockParams([e],[r&&r.contextPath])})}))},e.exports=t.default},function(e,t,n){"use strict";t.__esModule=!0,t.registerDefaultDecorators=function(e){o.default(e)};var r,i=n(19),o=(r=i)&&r.__esModule?r:{default:r}},function(e,t,n){"use strict";t.__esModule=!0;var r=n(0);t.default=function(e){e.registerDecorator("inline",(function(e,t,n,i){var o=e;return t.partials||(t.partials={},o=function(i,o){var a=n.partials;n.partials=r.extend({},a,t.partials);var l=e(i,o);return n.partials=a,l}),t.partials[i.args[0]]=i.fn,o}))},e.exports=t.default},function(e,t,n){"use strict";t.__esModule=!0;var r=n(0),i={methodMap:["debug","info","warn","error"],level:"info",lookupLevel:function(e){if("string"==typeof e){var t=r.indexOf(i.methodMap,e.toLowerCase());e=t>=0?t:parseInt(e,10)}return e},log:function(e){if(e=i.lookupLevel(e),"undefined"!=typeof console&&i.lookupLevel(i.level)<=e){var t=i.methodMap[e];console[t]||(t="log");for(var n=arguments.length,r=Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];console[t].apply(console,r)}}};t.default=i,e.exports=t.default},function(e,t,n){"use strict";function r(e){this.string=e}t.__esModule=!0,r.prototype.toString=r.prototype.toHTML=function(){return""+this.string},t.default=r,e.exports=t.default},function(e,t,n){"use strict";t.__esModule=!0,t.checkRevision=function(e){var t=e&&e[0]||1,n=l.COMPILER_REVISION;if(t>=l.LAST_COMPATIBLE_COMPILER_REVISION&&t<=l.COMPILER_REVISION)return;if(t<l.LAST_COMPATIBLE_COMPILER_REVISION){var r=l.REVISION_CHANGES[n],i=l.REVISION_CHANGES[t];throw new a.default("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version ("+r+") or downgrade your runtime to an older version ("+i+").")}throw new a.default("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version ("+e[1]+").")},t.template=function(e,t){if(!t)throw new a.default("No environment passed to template");if(!e||!e.main)throw new a.default("Unknown template object: "+typeof e);e.main.decorator=e.main_d,t.VM.checkRevision(e.compiler);var n=e.compiler&&7===e.compiler[0];var r={strict:function(e,t,n){if(!(e&&t in e))throw new a.default('"'+t+'" not defined in '+e,{loc:n});return e[t]},lookup:function(e,t){for(var n=e.length,r=0;r<n;r++)if(e[r]&&null!=e[r][t])return e[r][t]},lambda:function(e,t){return"function"==typeof e?e.call(t):e},escapeExpression:i.escapeExpression,invokePartial:function(n,r,o){o.hash&&(r=i.extend({},r,o.hash),o.ids&&(o.ids[0]=!0)),n=t.VM.resolvePartial.call(this,n,r,o);var l=i.extend({},o,{hooks:this.hooks}),s=t.VM.invokePartial.call(this,n,r,l);if(null==s&&t.compile&&(o.partials[o.name]=t.compile(n,e.compilerOptions,t),s=o.partials[o.name](r,l)),null!=s){if(o.indent){for(var u=s.split("\n"),c=0,d=u.length;c<d&&(u[c]||c+1!==d);c++)u[c]=o.indent+u[c];s=u.join("\n")}return s}throw new a.default("The partial "+o.name+" could not be compiled when running in runtime-only mode")},fn:function(t){var n=e[t];return n.decorator=e[t+"_d"],n},programs:[],program:function(e,t,n,r,i){var o=this.programs[e],a=this.fn(e);return t||i||r||n?o=u(this,e,a,t,n,r,i):o||(o=this.programs[e]=u(this,e,a)),o},data:function(e,t){for(;e&&t--;)e=e._parent;return e},nullContext:Object.seal({}),noop:t.VM.noop,compilerInfo:e.compiler};function o(t){var n=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],i=n.data;o._setup(n),!n.partial&&e.useData&&(i=function(e,t){t&&"root"in t||((t=t?l.createFrame(t):{}).root=e);return t}(t,i));var a=void 0,s=e.useBlockParams?[]:void 0;function u(t){return""+e.main(r,t,r.helpers,r.partials,i,s,a)}return e.useDepths&&(a=n.depths?t!=n.depths[0]?[t].concat(n.depths):n.depths:[t]),(u=d(e.main,u,r,n.depths||[],i,s))(t,n)}return o.isTop=!0,o._setup=function(o){if(o.partial)r.helpers=o.helpers,r.partials=o.partials,r.decorators=o.decorators,r.hooks=o.hooks;else{r.helpers=i.extend({},t.helpers,o.helpers),e.usePartial&&(r.partials=i.extend({},t.partials,o.partials)),(e.usePartial||e.useDecorators)&&(r.decorators=i.extend({},t.decorators,o.decorators)),r.hooks={};var a=o.allowCallsToHelperMissing||n;s.moveHelperToHooks(r,"helperMissing",a),s.moveHelperToHooks(r,"blockHelperMissing",a)}},o._child=function(t,n,i,o){if(e.useBlockParams&&!i)throw new a.default("must pass block params");if(e.useDepths&&!o)throw new a.default("must pass parent depths");return u(r,t,e[t],n,0,i,o)},o},t.wrapProgram=u,t.resolvePartial=function(e,t,n){e?e.call||n.name||(n.name=e,e=n.partials[e]):e="@partial-block"===n.name?n.data["partial-block"]:n.partials[n.name];return e},t.invokePartial=function(e,t,n){var r=n.data&&n.data["partial-block"];n.partial=!0,n.ids&&(n.data.contextPath=n.ids[0]||n.data.contextPath);var o=void 0;n.fn&&n.fn!==c&&function(){n.data=l.createFrame(n.data);var e=n.fn;o=n.data["partial-block"]=function(t){var n=arguments.length<=1||void 0===arguments[1]?{}:arguments[1];return n.data=l.createFrame(n.data),n.data["partial-block"]=r,e(t,n)},e.partials&&(n.partials=i.extend({},n.partials,e.partials))}();void 0===e&&o&&(e=o);if(void 0===e)throw new a.default("The partial "+n.name+" could not be found");if(e instanceof Function)return e(t,n)},t.noop=c;var r,i=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(0)),o=n(1),a=(r=o)&&r.__esModule?r:{default:r},l=n(3),s=n(4);function u(e,t,n,r,i,o,a){function l(t){var i=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],l=a;return!a||t==a[0]||t===e.nullContext&&null===a[0]||(l=[t].concat(a)),n(e,t,e.helpers,e.partials,i.data||r,o&&[i.blockParams].concat(o),l)}return(l=d(n,l,e,a,r,o)).program=t,l.depth=a?a.length:0,l.blockParams=i||0,l}function c(){return""}function d(e,t,n,r,o,a){if(e.decorator){var l={};t=e.decorator(t,l,n,r&&r[0],o,a,r),i.extend(t,l)}return t}},function(e,t,n){"use strict";(function(n){t.__esModule=!0,t.default=function(e){var t=void 0!==n?n:window,r=t.Handlebars;e.noConflict=function(){return t.Handlebars===e&&(t.Handlebars=r),e}},e.exports=t.default}).call(this,n(5))},function(e,t){OCA.Versions=OCA.Versions||{},OCA.Versions.Util={attach:function(e){"trashbin"!==e.id&&"files.public"!==e.id&&e.registerTabView(new OCA.Versions.VersionsTabView("versionsTabView",{order:-10}))}},OC.Plugins.register("OCA.Files.FileList",OCA.Versions.Util)},function(e,t,n){var r=n(26);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);(0,n(29).default)("5e38137e",r,!0,{})},function(e,t,n){(t=n(27)(!1)).push([e.i,".versionsTabView .clear-float {\n\tclear: both;\n}\n\n.versionsTabView li {\n\twidth: 100%;\n\tcursor: default;\n\theight: 56px;\n\tfloat: left;\n\tborder-bottom: 1px solid rgba(100,100,100,.1);\n}\n.versionsTabView li:last-child {\n\tborder-bottom: none;\n}\n\n.versionsTabView a,\n.versionsTabView div > span {\n\tvertical-align: middle;\n\topacity: .5;\n}\n\n.versionsTabView li a{\n\tpadding: 15px 10px 11px;\n}\n\n.versionsTabView a:hover,\n.versionsTabView a:focus {\n\topacity: 1;\n}\n\n.versionsTabView .preview-container {\n\tdisplay: inline-block;\n  vertical-align: top;\n}\n\n.versionsTabView img {\n\tcursor: pointer;\n\tpadding-right: 4px;\n}\n\n.versionsTabView img.preview {\n\tcursor: default;\n}\n\n.versionsTabView .version-container {\n\tdisplay: inline-block;\n}\n\n.versionsTabView .versiondate {\n\tmin-width: 100px;\n\tvertical-align: super;\n}\n\n.versionsTabView .version-details {\n\ttext-align: left;\n}\n\n.versionsTabView .version-details > span {\n\tpadding: 0 10px;\n}\n\n.versionsTabView .revertVersion {\n\tcursor: pointer;\n\tfloat: right;\n\tmargin-right: -10px;\n}\n",""]),e.exports=t},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var i=(a=r,l=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(l),"/*# ".concat(s," */")),o=r.sources.map((function(e){return"/*# sourceURL=".concat(r.sourceRoot).concat(e," */")}));return[n].concat(o).concat([i]).join("\n")}var a,l,s;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r=0;r<e.length;r++){var i=[].concat(e[r]);n&&(i[2]?i[2]="".concat(n," and ").concat(i[2]):i[2]=n),t.push(i)}},t}},function(e,r,i){"use strict";i.r(r);i(8),i(9);var o,a=i(6),l=i.n(a),s=i(7),u=i.n(s);o=OCA.Files.DetailTabView.extend({id:"versionsTabView",className:"tab versionsTabView",_template:null,$versionsContainer:null,events:{"click .revertVersion":"_onClickRevertVersion"},initialize:function(){OCA.Files.DetailTabView.prototype.initialize.apply(this,arguments),this.collection=new OCA.Versions.VersionCollection,this.collection.on("request",this._onRequest,this),this.collection.on("sync",this._onEndRequest,this),this.collection.on("update",this._onUpdate,this),this.collection.on("error",this._onError,this),this.collection.on("add",this._onAddModel,this)},getLabel:function(){return t("files_versions","Versions")},getIcon:function(){return"icon-history"},nextPage:function(){this._loading||this.collection.getFileInfo()&&this.collection.getFileInfo().isDirectory()||this.collection.fetch()},_onClickRevertVersion:function(e){var n=this,r=$(e.target),i=this.collection.getFileInfo();r.is("li")||(r=r.closest("li")),e.preventDefault();var o=r.attr("data-revision"),a=this.collection.get(o);a.revert({success:function(){n.$versionsContainer.empty(),n.collection.setFileInfo(i),n.collection.reset([],{silent:!0}),n.collection.fetch(),n.$el.find(".versions").removeClass("hidden"),i.trigger("busy",i,!1),i.set({size:a.get("size"),mtime:1e3*a.get("timestamp"),etag:a.get("id")+a.get("timestamp")})},error:function(){i.trigger("busy",i,!1),n.$el.find(".versions").removeClass("hidden"),n._toggleLoading(!1),OC.Notification.show(t("files_version","Failed to revert {file} to revision {timestamp}.",{file:a.getFullPath(),timestamp:OC.Util.formatDate(1e3*a.get("timestamp"))}),{type:"error"})}}),this._toggleLoading(!0),i.trigger("busy",i,!0)},_toggleLoading:function(e){this._loading=e,this.$el.find(".loading").toggleClass("hidden",!e)},_onRequest:function(){this._toggleLoading(!0)},_onEndRequest:function(){this._toggleLoading(!1),this.$el.find(".empty").toggleClass("hidden",!!this.collection.length)},_onAddModel:function(e){var t=$(this.itemTemplate(this._formatItem(e)));this.$versionsContainer.append(t),t.find(".has-tooltip").tooltip()},template:function(e){return u()(e)},itemTemplate:function(e){return l()(e)},setFileInfo:function(e){e?(this.render(),this.collection.setFileInfo(e),this.collection.reset([],{silent:!0}),this.nextPage()):(this.render(),this.collection.reset())},_formatItem:function(e){var r=1e3*e.get("timestamp"),i=e.has("size")?e.get("size"):0,o=OC.MimeType.getIconUrl(e.get("mimetype")),a=new Image;return a.onload=function(){$("li[data-revision="+e.get("id")+"] .preview").attr("src",e.getPreviewUrl())},a.src=e.getPreviewUrl(),_.extend({versionId:e.get("id"),formattedTimestamp:OC.Util.formatDate(r),relativeTimestamp:OC.Util.relativeModifiedDate(r),millisecondsTimestamp:r,humanReadableSize:OC.Util.humanFileSize(i,!0),altSize:n("files","%n byte","%n bytes",i),hasDetails:e.has("size"),downloadUrl:e.getDownloadUrl(),downloadIconUrl:OC.imagePath("core","actions/download"),downloadName:e.get("name"),revertIconUrl:OC.imagePath("core","actions/history"),previewUrl:o,revertLabel:t("files_versions","Restore"),canRevert:0!=(this.collection.getFileInfo().get("permissions")&OC.PERMISSION_UPDATE)},e.attributes)},render:function(){this.$el.html(this.template({emptyResultLabel:t("files_versions","No other versions available")})),this.$el.find(".has-tooltip").tooltip(),this.$versionsContainer=this.$el.find("ul.versions"),this.delegateEvents()},canDisplay:function(e){return!!e&&!e.isDirectory()}}),OCA.Versions=OCA.Versions||{},OCA.Versions.VersionsTabView=o;i(24),i(25);window.OCA.Versions=OCA.Versions},function(e,t,n){"use strict";function r(e,t){for(var n=[],r={},i=0;i<t.length;i++){var o=t[i],a=o[0],l={id:e+":"+i,css:o[1],media:o[2],sourceMap:o[3]};r[a]?r[a].parts.push(l):n.push(r[a]={id:a,parts:[l]})}return n}n.r(t),n.d(t,"default",(function(){return h}));var i="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!i)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var o={},a=i&&(document.head||document.getElementsByTagName("head")[0]),l=null,s=0,u=!1,c=function(){},d=null,f="data-vue-ssr-id",p="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function h(e,t,n,i){u=n,d=i||{};var a=r(e,t);return m(a),function(t){for(var n=[],i=0;i<a.length;i++){var l=a[i];(s=o[l.id]).refs--,n.push(s)}t?m(a=r(e,t)):a=[];for(i=0;i<n.length;i++){var s;if(0===(s=n[i]).refs){for(var u=0;u<s.parts.length;u++)s.parts[u]();delete o[s.id]}}}}function m(e){for(var t=0;t<e.length;t++){var n=e[t],r=o[n.id];if(r){r.refs++;for(var i=0;i<r.parts.length;i++)r.parts[i](n.parts[i]);for(;i<n.parts.length;i++)r.parts.push(g(n.parts[i]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{var a=[];for(i=0;i<n.parts.length;i++)a.push(g(n.parts[i]));o[n.id]={id:n.id,refs:1,parts:a}}}}function v(){var e=document.createElement("style");return e.type="text/css",a.appendChild(e),e}function g(e){var t,n,r=document.querySelector("style["+f+'~="'+e.id+'"]');if(r){if(u)return c;r.parentNode.removeChild(r)}if(p){var i=s++;r=l||(l=v()),t=y.bind(null,r,i,!1),n=y.bind(null,r,i,!0)}else r=v(),t=w.bind(null,r),n=function(){r.parentNode.removeChild(r)};return t(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap)return;t(e=r)}else n()}}var b,_=(b=[],function(e,t){return b[e]=t,b.filter(Boolean).join("\n")});function y(e,t,n,r){var i=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=_(t,i);else{var o=document.createTextNode(i),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(o,a[t]):e.appendChild(o)}}function w(e,t){var n=t.css,r=t.media,i=t.sourceMap;if(r&&e.setAttribute("media",r),d.ssrId&&e.setAttribute(f,t.id),i&&(n+="\n/*# sourceURL="+i.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}]);
//# sourceMappingURL=files_versions.js.map