!function(e){function t(o){if(n[o])return n[o].exports;var i=n[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=27)}([function(e,t,n){e.exports=n(2)(371)},function(e,t){e.exports=_xe_bundle_common},function(e,t){e.exports=_xe_bundle_vendor},,,function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),s=n(0),a=o(s),l=n(10),u=n(28),f=o(u),d=n(13),c=o(d),p=function(){function e(){i(this,e);var t={};(0,l.eventify)(this),this.editorSet={},this.editorOptionSet={},this.tools={},this.tools.define=function(e){c.default.isValidToolsObject(e)&&(t[e.id]=new h(e))},this.tools.get=function(e){return t[e]}}return r(e,[{key:"define",value:function(e){var t=e.editorSettings,n=e.interfaces;c.default.isValidEditorOptions(t,n)&&(this.editorOptionSet[t.name]=t,this.editorSet[t.name]=new f.default(t,n))}},{key:"getEditor",value:function(e){return this.editorSet[e]}},{key:"attachDomId",value:function(e,t){return(0,a.default)(e).attr("xe-tool-id",t).clone().wrapAll("<div/>").parent().html()}},{key:"getDomSelector",value:function(e){return'[xe-tool-id="'+e+'"]'}}]),e}(),h=function(e){for(var t in e)this[t]=e[t]},v=new p;window.XEeditor=v,t.default=v},,,,,function(e,t,n){e.exports=n(1)(96)},,,function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=n(5),s=function(e){return e&&e.__esModule?e:{default:e}}(r),a={editorSettings:["name"],interfaces:["initialize","addContents","getContents","setContents"],tools:{property:["id","events"],events:["iconClick","elementDoubleClick"]}},l=function(){function e(){o(this,e)}return i(e,null,[{key:"isValidBeforeCreateInstance",value:function(e,t,n){if(!e)return console.error("error: 중복 editor id. ("+e+")"),!1;if(n.editorList.length>0){for(var o=!0,i=0,r=n.editorList.length;i<r;i+=1)if(n.editorList[i]===e){o=!1,console.error();break}if(!o)return!1}return!0}},{key:"isValidEditorOptions",value:function(e,t){var n=!0;for(var o in a.editorSettings)e.hasOwnProperty(a.editorSettings[o])||(console.error("구현 필요 [editorSettings."+a.editorSettings[o]+"]"),n=!1);for(var i in a.interfaces)t.hasOwnProperty(a.interfaces[i])||(console.error("구현 필요 ["+a.interfaces[i]+"]"),n=!1);return e.hasOwnProperty("plugins")&&e.plugins instanceof Array&&e.plugins.length>0&&!e.hasOwnProperty("addPlugins")&&console.error("구현 필요 [fn:addPlugins]"),s.default.editorSet.hasOwnProperty(e.name)&&(console.error("등록된 에디터 있음 ["+e.name+"]"),n=!1),!!n}},{key:"isValidToolsObject",value:function(e){for(var t=!0,n=0,o=a.tools.property.length;n<o;n+=1)e.hasOwnProperty(a.tools.property[n])||(console.error("구현 필요 [XEeditor.tools.define => fn:"+a.tools.property[n]+"]"),t=!1);for(var i=0,r=a.tools.events.length;i<r;i+=1)e.events.hasOwnProperty(a.tools.events[i])||(console.error("구현 필요[XEeditor.tools.define => event"+a.tools.events[i]+"]"),t=!1);return t}}]),e}();t.default=l},,,,,,,,,,,,,,function(e,t,n){n(5),e.exports=n(30)},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(5),r=o(i),s=n(13),a=o(s),l=n(29),u=o(l),f=function(e,t){this.name=e.name,this.configs=e.configs,this.editorList=[],this.interfaces={},e.hasOwnProperty("plugins")&&e.plugins instanceof Array&&e.plugins.length>0&&e.hasOwnProperty("addPlugins")&&e.addPlugins(e.plugins);for(var n in t)this[n]=t[n]};f.prototype={create:function(e,t,n,o){if(o=o||[],n=$.extend(this.configs||{},n||{}),a.default.isValidBeforeCreateInstance(e,o,this)){if(this.editorList[e]=new u.default(this.name,e,n,o),this.initialize.call(this.editorList[e],e,t,n),o&&o.length>0){for(var i={},s=[],l=0,f=o.length;l<f;l+=1)r.default.tools.get(o[l].id)?(i[o[l].id]=r.default.tools.get(o[l].id),s.push(o[l])):console.error("define된 tool이 존재하지 않음. ["+o[l].id+"]");this.addTools&&"function"==typeof this.addTools&&this.addTools.call(this.editorList[e],i,s)}return this.editorList[e]}}},t.default=f},function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=n(5),s=function(e){return e&&e.__esModule?e:{default:e}}(r),a=function(){function e(t,n,i,r){o(this,e);var s={editorOptions:i,toolInfoList:r};this.editorName=t,this.selector=n,this.props={},this.getOptions=function(){return s}}return i(e,[{key:"getInstance",value:function(){return this}},{key:"getContents",value:function(){return s.default.editorSet[this.editorName].getContents.call(this)}},{key:"setContents",value:function(e){s.default.editorSet[this.editorName].setContents.call(this,e)}},{key:"addContents",value:function(e){s.default.editorSet[this.editorName].addContents.call(this,e)}},{key:"addProps",value:function(e){for(var t in e)this.props[t]=e[t]}},{key:"addTools",value:function(e){s.default.editorSet[this.editorName].addTools.call(this,this.getOptions().toolInfoList,e)}},{key:"on",value:function(e,t){s.default.editorSet[this.editorName].on.call(this,e,t)}},{key:"renderFileUploader",value:function(e){s.default.editorSet[this.editorName].renderFileUploader.call(this,e)}},{key:"reset",value:function(){s.default.editorSet[this.editorName].reset.call(this)}}]),e}();t.default=a},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var i=n(0),r=o(i);o(n(5)).default.define({editorSettings:{name:"XEtextarea",configs:{}},interfaces:{initialize:function(e,t){t=r.default.extend(!0,{fileUpload:{},suggestion:{},names:{file:{image:{}},tag:{},mention:{}},extensions:[],fontFamily:[],perms:{},files:[]},t);var n=(0,r.default)("#"+e),o=t.height,i=t.fontFamily,s=t.fontSize;this.addProps({editor:n,selector:e,options:t}),o&&n.css("height",o+"px"),(i||s)&&(i&&i.length>0&&n.css("font-family",i.join(",")),s&&n.css("font-size",s)),n.parents("form").on("submit",function(){var e=t.names.file.input,o=t.files,i=(0,r.default)();if(n.nextAll(".paramWrap").remove(),n.after("<div class='paramWrap'>"),i=n.nextAll(".paramWrap"),o.length>0)for(var s=0,a=o.length;s<a;s+=1){var l=o[s];i.append("<input type='hidden'name='"+e+"[]' value='"+l.id+"' />")}})},getContents:function(){return this.props.editor.val()},setContents:function(e){this.props.editor.val(e)},addContents:function(e){var t=this.props.editor.val();this.props.editor.val(t)},on:function(e,t){this.props.editor.on(e,t)},reset:function(){this.props.editor.val("").focus(),this.props.editor.nextAll(".paramWrap").remove()}}})}]);