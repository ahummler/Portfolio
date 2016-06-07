if (self.CavalryLogger) { CavalryLogger.start_js(["0+1VU"]); }

__d('ReactComposerShareNowActionTypes',['keyMirror'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();f.exports=c('keyMirror')({SHOW_SHARENOW_MENU:null,SHARE_NOW:null,OPEN_MESSAGE_DIALOG:null,OPEN_SHARE_DIALOG:null,CANCEL_SHARE:null});},null);
__d('ReactComposerShareNowActions',['ReactComposerDispatcher','ReactComposerShareNowActionTypes'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h={showShareNowMenu:function(){c('ReactComposerDispatcher').dispatch({composerID:'',type:c('ReactComposerShareNowActionTypes').SHOW_SHARENOW_MENU});},clickShareNow:function(){c('ReactComposerDispatcher').dispatch({composerID:'',type:c('ReactComposerShareNowActionTypes').SHARE_NOW});},clickWritePost:function(){c('ReactComposerDispatcher').dispatch({composerID:'',type:c('ReactComposerShareNowActionTypes').OPEN_SHARE_DIALOG});},clickSendMessage:function(){c('ReactComposerDispatcher').dispatch({composerID:'',type:c('ReactComposerShareNowActionTypes').OPEN_MESSAGE_DIALOG});},cancelShare:function(i){c('ReactComposerDispatcher').dispatch({composerID:i,type:c('ReactComposerShareNowActionTypes').CANCEL_SHARE});}};f.exports=h;},null);
__d('ReactShareDialogLoggingStore',['ReactComposerActionTypes','ReactComposerAudienceActionTypes','ReactComposerShareNowActionTypes','ReactComposerStatusActionType','ReactComposerStoreBase','ReactComposerTaggerActionType','ReactComposerTaggerType','FunnelLogger','ReactShareDialogComposerActionType'],function a(b,c,d,e,f,g){var h,i;if(c.__markCompiled)c.__markCompiled();var j='WWW_FEED_SHARE_DIALOG_FUNNEL';h=babelHelpers.inherits(k,c('ReactComposerStoreBase'));i=h&&h.prototype;function k(){'use strict';var l;i.constructor.call(this,function(){return null;},function(m){l.__onDispatch(m);});l=this;this.$ReactShareDialogLoggingStore2=0;this.$ReactShareDialogLoggingStore3=false;}k.prototype.__onDispatch=function(l){'use strict';switch(l.type){case c('ReactComposerShareNowActionTypes').CANCEL_SHARE:this.$ReactShareDialogLoggingStore4(l);break;case c('ReactComposerShareNowActionTypes').SHOW_SHARENOW_MENU:this.$ReactShareDialogLoggingStore5(l);break;case c('ReactComposerShareNowActionTypes').SHARE_NOW:this.$ReactShareDialogLoggingStore6(l);break;case c('ReactComposerShareNowActionTypes').OPEN_MESSAGE_DIALOG:this.$ReactShareDialogLoggingStore7(l);break;case c('ReactComposerShareNowActionTypes').OPEN_SHARE_DIALOG:this.$ReactShareDialogLoggingStore8(l);break;case c('ReactComposerTaggerActionType').SET_SELECTED_TAGGER:this.$ReactShareDialogLoggingStore9(l);break;case c('ReactComposerStatusActionType').SET_EDITOR_STATE:this.$ReactShareDialogLoggingStore10(l);break;case c('ReactComposerTaggerActionType').SET_TAGGER_DATA:this.$ReactShareDialogLoggingStore11(l);break;case c('ReactComposerActionTypes').INIT_CONFIG:this.$ReactShareDialogLoggingStore12(l);break;case c('ReactComposerActionTypes').POST_INTENDED:this.$ReactShareDialogLoggingStore13(l);break;case c('ReactComposerActionTypes').POST_SUCCEEDED:this.$ReactShareDialogLoggingStore14(l);break;case c('ReactComposerActionTypes').POST_ERROR:this.$ReactShareDialogLoggingStore15(l);break;case c('ReactComposerAudienceActionTypes').SET_AUDIENCE:this.$ReactShareDialogLoggingStore16(l);break;case c('ReactShareDialogComposerActionType').SET_SHARE_DIALOG_TARGET:this.$ReactShareDialogLoggingStore17(l);break;default:}};k.prototype.$ReactShareDialogLoggingStore18=function(l){'use strict';return this.$ReactShareDialogLoggingStore1===l.composerID;};k.prototype.$ReactShareDialogLoggingStore5=function(l){'use strict';c('FunnelLogger').startFunnel(j);};k.prototype.$ReactShareDialogLoggingStore6=function(l){'use strict';c('FunnelLogger').appendAction(j,'share_now');c('FunnelLogger').endFunnel(j);};k.prototype.$ReactShareDialogLoggingStore7=function(l){'use strict';this.$ReactShareDialogLoggingStore3=true;c('FunnelLogger').appendAction(j,'start_send_message');};k.prototype.$ReactShareDialogLoggingStore8=function(l){'use strict';this.$ReactShareDialogLoggingStore3=true;c('FunnelLogger').appendAction(j,'start_share');};k.prototype.$ReactShareDialogLoggingStore12=function(l){'use strict';if(this.$ReactShareDialogLoggingStore3){this.$ReactShareDialogLoggingStore3=false;c('FunnelLogger').appendAction(j,'load_composer');this.$ReactShareDialogLoggingStore1=l.composerID;}};k.prototype.$ReactShareDialogLoggingStore14=function(l){'use strict';if(this.$ReactShareDialogLoggingStore18(l)){c('FunnelLogger').appendAction(j,'success');c('FunnelLogger').endFunnel(j);}};k.prototype.$ReactShareDialogLoggingStore15=function(l){'use strict';if(this.$ReactShareDialogLoggingStore18(l)){c('FunnelLogger').appendAction(j,'failure');c('FunnelLogger').endFunnel(j);}};k.prototype.$ReactShareDialogLoggingStore13=function(l){'use strict';if(this.$ReactShareDialogLoggingStore18(l))c('FunnelLogger').appendAction(j,'start_post');};k.prototype.$ReactShareDialogLoggingStore10=function(l){'use strict';if(this.$ReactShareDialogLoggingStore18(l))if(l.editorState.getLastChangeType()==='insert-characters')c('FunnelLogger').appendActionIfNew(j,'edit_text');};k.prototype.$ReactShareDialogLoggingStore9=function(l){'use strict';if(this.$ReactShareDialogLoggingStore18(l))switch(l.taggerID){case c('ReactComposerTaggerType').PEOPLE:c('FunnelLogger').appendAction(j,'peopletag_click');break;case c('ReactComposerTaggerType').LOCATION:c('FunnelLogger').appendAction(j,'locationtag_click');break;case c('ReactComposerTaggerType').ACTIVITY:c('FunnelLogger').appendAction(j,'activitytag_click');break;default:}};k.prototype.$ReactShareDialogLoggingStore11=function(l){'use strict';if(this.$ReactShareDialogLoggingStore18(l))switch(l.taggerID){case c('ReactComposerTaggerType').PEOPLE:this.$ReactShareDialogLoggingStore19(l);break;case c('ReactComposerTaggerType').LOCATION:this.$ReactShareDialogLoggingStore20(l);break;case c('ReactComposerTaggerType').ACTIVITY:this.$ReactShareDialogLoggingStore21(l);break;default:}};k.prototype.$ReactShareDialogLoggingStore19=function(l){'use strict';if(l.taggerData.length>this.$ReactShareDialogLoggingStore2){c('FunnelLogger').appendActionIfNew(j,'peopletag_add');}else c('FunnelLogger').appendActionIfNew(j,'peopletag_remove');this.$ReactShareDialogLoggingStore2=l.taggerData.length;};k.prototype.$ReactShareDialogLoggingStore20=function(l){'use strict';if(l.taggerData.place){c('FunnelLogger').appendAction(j,'locationtag_add');}else c('FunnelLogger').appendAction(j,'locationtag_remove');};k.prototype.$ReactShareDialogLoggingStore21=function(l){'use strict';if(!l.taggerData.action){c('FunnelLogger').appendAction(j,'activitytag_clear');}else if(!l.taggerData.object){c('FunnelLogger').appendAction(j,'activitytag_select');}else c('FunnelLogger').appendAction(j,'activitytag_addobject');};k.prototype.$ReactShareDialogLoggingStore4=function(l){'use strict';if(this.$ReactShareDialogLoggingStore18(l)){c('FunnelLogger').appendAction(j,'cancel_post');c('FunnelLogger').endFunnel(j);}};k.prototype.$ReactShareDialogLoggingStore16=function(l){'use strict';if(this.$ReactShareDialogLoggingStore18(l))c('FunnelLogger').appendActionWithTag(j,'set_audience',l.audience||l.legacyAudience);};k.prototype.$ReactShareDialogLoggingStore17=function(l){'use strict';if(this.$ReactShareDialogLoggingStore18(l))c('FunnelLogger').appendAction(j,'set_dialog_target');};f.exports=new k();},null);
__d('ShareNowController',['csx','ReactComposerShareNowActions','Dialog','DOM','Event','ShareNowConstants','ShareNowCounter','ShareNowCounterEvent','ReactShareDialogLoggingStore'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();c('ReactShareDialogLoggingStore');var i,j={initMenu:function(k){var l=k.getTriggerElem();c('Event').listen(l,'success',function(event){try{var n=event.data.response.payload;if(n.share_now_succeeded)this.showSuccess(n.message);}catch(m){}}.bind(this));c('Event').listen(l,'error',function(event){try{this.showError(event.data.response.errorDescription);}catch(m){this.showError();}}.bind(this));k.getPopover().subscribe('show',this._logMenuShown);},showSuccess:function(k){this.showDialog(k||c('ShareNowConstants').success);},showError:function(k){this.showDialog(k||c('ShareNowConstants').error);},showDialog:function(k){if(i)i.destroy();i=new (c('Dialog'))().setBody(k).setAutohide(2500).setModal(true).show();},_logMenuShown:function(){c('ShareNowCounter').logEvent(c('ShareNowCounterEvent').OPEN_SHARE_NOW);c('ReactComposerShareNowActions').showShareNowMenu();},attachMenuItemListeners:function(k){var l=c('DOM').scry(k.getRoot(),"._2al7")[0],m=c('DOM').scry(k.getRoot(),"._2al8")[0],n=c('DOM').scry(k.getRoot(),"._2al9")[0];if(l)l.addEventListener('click',c('ReactComposerShareNowActions').clickShareNow);if(m)m.addEventListener('click',c('ReactComposerShareNowActions').clickWritePost);if(n)n.addEventListener('click',c('ReactComposerShareNowActions').clickSendMessage);}};f.exports=j;},null);