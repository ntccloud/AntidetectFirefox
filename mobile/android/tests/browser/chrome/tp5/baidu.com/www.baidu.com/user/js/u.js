function user_c(F){var G=encodeURIComponent(window.document.location.href),E="",D="",A="",B="",C=window["BD_PS_C"+(new Date()).getTime()]=new Image();for(v in F){switch(v){case"title":A=encodeURIComponent(F[v].replace(/<[^<>]+>/g,""));break;case"url":A=encodeURIComponent(F[v]);break;default:A=F[v]}E+=v+"="+A+"&"}B="&mu="+G;C.src="httpdisabled://nsclick.baidu.com/v.gif?pid=201&pj=psuser&"+E+"path="+G+"&wd="+D+"&t="+new Date().getTime();return true}var const_callback_list="login_success";var bdu=(function(){var I="passport.baidu.com";var D=navigator.userAgent.indexOf("MSIE")!=-1&&!window.opera;if(!window[const_callback_list]){window[const_callback_list]=[]}function O(C){return document.getElementById(C)}function A(Q,C,P){var G=document.createElement(Q);if(C){G.id=C}if(P){G.className=P}return G}function H(P,G,C,Q){if(D){P.attachEvent("on"+G,C)}else{P.addEventListener(G,C,!Q)}}function M(P,G,C){if(D){P.detachEvent("on"+G,C)}else{P.removeEventListener(G,C,true)}}function N(C){C=C||window.event;C.stopPropagation?C.stopPropagation():(C.cancelBubble=true)}function B(P,Q,C){if(C!=undefined){P.style[Q]=C}else{if(P.style[Q]){return P.style[Q]}else{if(P.currentStyle){return P.currentStyle[Q]}else{if(document.defaultView&&document.defaultView.getComputedStyle){Q=Q.replace(/([A-Z])/g,"-\u00241").toLowerCase();var G=document.defaultView.getComputedStyle(P,"");return G&&G.getPropertyValue(Q)||""}}}}}function F(G){if(D){var P=document.createStyleSheet();P.cssText=G}else{var C=document.createElement("style");C.type="text/css";C.appendChild(document.createTextNode(G));document.getElementsByTagName("HEAD")[0].appendChild(C)}}(function(){try{var G=[".bd_dialog{border:2px solid #a8b9eb;background:#dae4ff;color:#333;overflow:hidden}",".bd_dialog_handle{width:100%;height:30px;overflow:hidden;background:url(/user/img/bg1.gif) repeat-x;cursor:move;-moz-user-select:none}",".bd_dialog_title{line-height:24px;font-size:14px;font-weight:bold;float:left;overflow:hidden;margin:3px 10px}",".bd_dialog_close{width:19px;height:19px;float:right;background:url(/user/img/close.gif);overflow:hidden;margin:6px;cursor:pointer}",".bd_dialog_main{width:auto;height:auto;margin:5px;border:1px solid #c3cff2;overflow:hidden;background:#FFF}",".bd_tab{margin:20px 20px 10px 20px}",".bd_tab_btns{overflow:hidden;height:28px;padding-left:10px;background:url(/user/img/p.gif) repeat-x bottom;text-align:center}",".bd_tab_conts{margin-top:15px}",".bd_tab_btn{overflow:hidden;float:left;cursor:pointer;font-size:14px;font-weight:bold;width:76px;margin-left:6px;line-height:28px;background:url(/user/img/bb.gif);color:#00c;text-decoration:underline}",".bd_tab_btn_s{overflow:hidden;float:left;cursor:pointer;font-size:14px;font-weight:bold;width:76px;margin-left:6px;line-height:28px;background:url(/user/img/bs.gif)}",".bd_tab_cont{display:none;height:auto}",".bd_tab_cont_s{display:block}","#login_div{font-size:14px}","#login_div u{text-decoration:none;font-size:13px;color:#f00;display:inline-block;height:auto}","#login_msg_div{overflow:hidden;height:18px}","#login_cap{margin-left:20px}","#login_msg_div{margin-left:20px}","#login_tb_div{margin-left:20px}","#login_tb td{padding:4px 4px 4px 0;vertical-align:middle;font-size:14px;line-height:normal}","#login_tb td.lb{width:60px}","#login_tb input.lt{padding:1px;line-height:18px;height:24px;*height:18px;width:170px}","#login_tb input.v{padding:1px;line-height:18px;height:24px;*height:18px}","#login_tb label{font-size:13px}","#login_tb .c9{font-size:13px;color:#999}","#login_check{line-height:130%}","#login_v_tr{display:none}","#login_v_img{border:1px solid #000}","#login_tb a.la{font-size:13px;*margin-bottom:4px;color:#03c;display:inline-block;line-height:30px;vertical-align:middle}","#login_submit{width:78px;height:28px;font-size:14px}","#login_line{background:#d9e1f7;overflow:hidden;height:1px;width:auto;margin:20px 0}","#login_sug{width:100%;line-height:40px;font-weight:bold;text-align:center}","#login_u_msg{width:40px}","#login_p_msg{width:40px}"];F(G.join(""))}catch(C){}})();function L(){var R=O("u");var G=O("lb");var C=[{text:"��������",url:"httpdisabled://www.baidu.com/gaoji/preferences.html",tab:"setting"},{text:"�ҵ�Ӧ������",url:"httpdisabled://app.baidu.com/store/mine",tab:"myapp"}];var Q=0;if(R&&G){H(G,"click",function(){switch(Q){case 0:break;case 1:bdlogin.box.show();break}})}function P(){Q=1;T()}function S(U,V){R.innerHTML="<a target=_blank href=http://passport.baidu.com onmousedown=\"return user_c({'fm':'set','tab':'username','url':this.href})\"><b>"+U+"</b></a>&nbsp;|&nbsp;<span id=\"u_m\" onmousedown=\"return user_c({'fm':'set','tab':'more','url':this.href})\"><span id=\"u_ms\">����</span><small>��</small></span>&nbsp;|&nbsp;<a href=http://passport.baidu.com/?logout&tpl=mn onmousedown=\"return user_c({'fm':'set','tab':'logout','url':this.href})\">�˳�</a>";setTimeout(function(){T()},10)}function T(){var X=O("u_m");if(X){var Y=A("div","u_m_tip");var W=[];for(var V=0,U=C.length;V<U;V++){var Z=C[V];W.push("<a "+((V==U-1)?"class='last'":"")+" href='"+Z.url+"' target='_self' onmousedown=\"return user_c({'fm':'set','tab':'"+Z.tab+"','url':this.href})\">"+Z.text+"</a>")}Y.innerHTML=W.join("");document.body.appendChild(Y);H(Y,"click",N,true);H(X,"click",function(a){Y.style.display="block";N(a)},true);H(document,"click",function(){Y.style.display="none"},true)}}return{login:S,notifyReady:P}}function E(P){var U=A("div");var V=[];var R=[];var C=0;function W(){Q()}function Q(){var d=P.cssPrefix;var f=P.tabs;var a=P.selectIndex;C=a;U.innerHTML="";U.className=d;V=[];R=[];var e=A("div");e.className=d+"_btns";var Y=A("div");Y.className=d+"_conts";for(var Z=0,b=f.length;Z<b;Z++){var g=f[Z];var X=A("span");var h=A("div");if(Z==a){X.loaddisabled=true;if(g.loaddisabled){g.loaddisabled.call(window)}X.className=d+"_btn_s";h.className=d+"_cont_s"}else{X.loaddisabled=false;X.className=d+"_btn";h.className=d+"_cont"}X.innerHTML=g.label;h.appendChild(g.domNode);H(X,"click",(function(c){return function(){T(c)}})(Z));V.push(X);R.push(h);e.appendChild(X);Y.appendChild(h)}U.appendChild(e);U.appendChild(Y)}function S(X,Y){for(i=0,len=V.length;i<len;i++){V[i].className=Y+"_btn";R[i].className=Y+"_cont"}V[X].className=Y+"_btn_s";R[X].className=Y+"_cont_s"}function T(Y){var a=V[Y];var Z=P.tabs[Y].loaddisabled;var X=P.tabs[Y].click;C=Y;if(!a.loaddisabled){a.loaddisabled=true;if(Z){Z.call(window)}}S(Y,P.cssPrefix);if(X){X.call(window)}}function G(){return C}W();return{getIndex:G,show:T,domNode:U}}function K(G){var r=window,z=document.body,x=document.documentElement;var V=A("span");var p=G.width||395,w=G.height||400;var c,a,e,j,f=8;var P=null;function s(){C()}function g(){z.appendChild(V);if(G.loaddisabled){G.loaddisabled.call(window)}T(true)}function q(b){try{z.removeChild(V)}catch(d){}if(!b&&P){try{P.call(window,0)}catch(d){}P=null}}function T(b){if(V.sbIE6){V.sbIE6.redraw()}if(b&&V.msk){V.msk.redraw()}if(V.dlg){V.dlg.redraw()}if(V.shd){V.shd.redraw()}}function X(b,d){p=b;w=d;if(V.dlg){V.dlg.resize(b,d)}if(V.shd){V.shd.resize(b,d)}}function C(){V.innerHTML="";if(D){V.sbIE6=o();V.appendChild(V.sbIE6)}if(G.mask){V.msk=W();V.appendChild(V.msk)}V.dlg=R("��¼");V.appendChild(V.dlg);if(G.shadow){V.shd=t();V.appendChild(V.shd)}H(r,"resize",function(){T(true)})}function U(d){d=r.event||d;var b=AA(d.clientX-c,0,e);var AB=AA(d.clientY-a,0,j);B(V.dlg,"left",b+"px");B(V.dlg,"top",AB+"px");if(V.shd){B(V.shd,"left",b+f+"px");B(V.shd,"top",AB+f+"px")}}function u(){M(z,"mousemove",U);M(z,"mouseup",u);if(V.dlg.releaseCapture){V.dlg.releaseCapture()}if(r.releaseEvents){r.releaseEvents(Event.MOUSEMOVE|Event.MOUSEUP)}}function S(){if(G.ready){G.ready.call(window)}}function W(){var b=Q();var d=n("#333",40,b);d.redraw=function(){var AB=Q(true);l(d,AB);setTimeout(function(){var AC=Q();l(d,AC)},0)};return d}function o(){var b=Q();var d=A("iframe");B(d,"position","absolute");B(d,"top",b.y+"px");B(d,"left",b.x+"px");B(d,"zIndex",10000);B(d,"opacity",1/100);B(d,"filter","alpha(opacity=1)");B(d,"width",b.w+"px");B(d,"height",b.h+"px");d.redraw=function(){var AB=Q(true);B(d,"width",AB.w+"px");B(d,"height",AB.h+"px");setTimeout(function(){var AC=Q();B(d,"width",AC.w+"px");B(d,"height",AC.h+"px")},0)};return d}function Q(d){var b=d?k():Y();b.x=0;b.y=0;b.z=10001;return b}function t(){var b=n("#333",20,Z());b.redraw=function(){var d=Z();l(b,d)};b.resize=y;return b}function R(AF){var d=n("",100,Z(true));d.className="bd_dialog";var AC=A("div");AC.className="bd_dialog_handle";var AD=A("span");AD.className="bd_dialog_title";AD.innerHTML=AF;AC.appendChild(AD);var AB=A("span");AB.className="bd_dialog_close";H(AB,"click",function(){user_c({fm:"set",tab:"close",url:"httpdisabled://passport.baidu.com/"});q()});AC.appendChild(AB);var AE=A("span");B(AE,"clear","both");AC.appendChild(AE);if(G.drag){H(AC,"mousedown",function(AG){AG=r.event||AG;var AH=Y();c=AG.clientX-d.offsetLeft;a=AG.clientY-d.offsetTop;e=AH.w-d.clientWidth-f;j=AH.h-d.clientHeight-f;H(z,"mousemove",U);H(z,"mouseup",u);H(r,"scroll",u);if(d.setCapture){d.setCapture()}else{H(r,"mouseup",u)}if(r.captureEvents){r.captureEvents(Event.MOUSEMOVE|Event.MOUSEUP)}})}var b=A("div");b.className="bd_dialog_main";if(G.domNode){b.appendChild(G.domNode)}d.caption=function(AG){if(AG){AD.innerHTML=AG}return AD.innerHTML};d.clear=function(){b.innerHTML=""};d.redraw=function(){var AG=Z(true);l(d,AG)};d.resize=y;d.appendChild(AC);d.appendChild(b);return d}function n(d,AB,b){var AC=A("div");B(AC,"position","absolute");B(AC,"top",b.y+"px");B(AC,"left",b.x+"px");B(AC,"zIndex",b.z);B(AC,"backgroundColor",d);B(AC,"opacity",AB/100);B(AC,"filter","alpha(opacity="+AB+")");B(AC,"width",b.w+"px");B(AC,"height",b.h+"px");return AC}function y(d,AC){var AE=Y();maxX=AE.w-d-f;maxY=AE.h-AC-f;var AB=d-parseInt(B(this,"width"));var AD=AC-parseInt(B(this,"height"));var b=AA(parseInt(B(this,"left"))-AB/2,0,maxX);var AF=AA(parseInt(B(this,"top"))-AD/2,0,maxY);B(this,"top",AF+"px");B(this,"left",b+"px");B(this,"width",d+"px");B(this,"height",AC+"px")}function l(d,b){B(d,"top",b.y+"px");B(d,"left",b.x+"px");B(d,"width",b.w+"px");B(d,"height",b.h+"px")}function Z(AB){var b=k();var d=AB?0:f;return{z:AB?10005:10002,x:AA((b.w-p)/2,0)+d+b.l,y:AA((b.h-w)/2,0)+d+b.t,w:p,h:w}}function AA(d,AB,b){if(b){d=d>b?b:d}return d>=AB?d:AB}function Y(d){var AB=Math.max(z.scrollHeight,x.scrollHeight);var b=Math.max(z.scrollWidth,x.scrollWidth);if(x&&x.clientWidth){AB=Math.max(x.clientHeight,AB);b=Math.max(x.clientWidth,b)}else{AB=Math.max(z.clientHeight,AB);b=Math.max(z.clientWidth,b)}return{h:AB,w:b}}function k(){var b,d;if(x&&x.clientWidth){b=x.clientWidth;d=x.clientHeight}else{b=z.clientWidth;d=z.clientHeight}return{w:b,h:d,t:Math.max(z.scrollTop,x.scrollTop),l:Math.max(z.scrollLeft,x.scrollLeft)}}function m(b){if(V.dlg){V.dlg.caption(b)}}function h(b){P=b}s();return{resize:X,setCloseCallback:h,caption:m,ready:S,show:g,close:q,domNode:V}}function J(Q){var AG="httpdisabledsdisabled://"+I+"/";var n=Q.prefix||"login";var AI=Q.callbackName||"baiduLoginReply";var a=Q.jump||"";var Y=Q.showVerifyCode;var k=Q.hideVerifyCode;var R=Q.success;var g=null;var d=false;var X=false;var AB=A("div",n+"_div");var p,j,w,h,b,AD,q,AH,T,r,m,U,z,y,o;var G={0:"��¼�ɹ�",1:"�û�����ʽ����",2:"�û�������",3:"",4:"��¼�������",5:"���յ�¼�������ࡣ",6:"��֤�벻ƥ��",7:"��¼ʱ����δ֪���������µ�¼��",8:"��¼ʱ����δ֪���������µ�¼��",16:"�Բ����������޷���¼��",20:"���ʺ��ѵ�¼�������ࡣ",256:"",257:"��������֤��","default":"��¼ʱ����δ֪���������µ�¼��"};function P(){AB.innerHTML=Z()}function Z(){var AJ="<div id="+n+"_cap>"+Q.caption+"</div><div id="+n+"_msg_div><u id="+n+"_msg></u></div><div id="+n+"_tb_div><form method=post id="+n+"_fm action="+AG+"api/?login target=login_Hide_Frame><table id="+n+"_tb cellpadding=0 cellspacing=0><tr><td class=lb>�û�����<td><input class=lt type=text id="+n+"_u><td><u id="+n+"_u_msg></u><tr><td>�ܡ��룺<td><input class=lt type=password id="+n+"_p><td><u id="+n+"_p_msg></u><tr id="+n+"_v_tr><td >��֤�룺<td colspan=2 valign=middle><input id="+n+"_v class=v type=text size=4> <img align=middle id="+n+"_v_img src='about:blank'> <a id="+n+"_v_re class=la href=# >�����壿</a><tr><td><td id="+n+"_check><input style='margin-left:-1px;*margin-left:-3px' type=checkbox id="+n+"_mem value='on' checked> <label for="+n+"_mem>��ס�ҵĵ�¼״̬</label><br><span class=c9>�ڹ��õ���������ѡ</span><td><tr><td><td colspan=2><input type=submit id="+n+"_submit value=��¼> <a id="+n+"_getpass class=la href=# target=_blank>��������</a><input type=hidden id="+n+"_token><input type=hidden id="+n+"_tpl><input type=hidden id="+n+"_time><input type=hidden name=callback value="+AI+"><input type=hidden name=staticpage value="+a+"></table></form></div><div id="+n+"_line></div><div id="+n+"_sug>"+Q.footer+"</div><iframe style='display:none' src='about:blank' id=login_Hide_Frame name=login_Hide_Frame></iframe>";return AJ}function x(){P()}function f(){p=O(n+"_msg");j=O(n+"_u_msg");w=O(n+"_p_msg");h=O(n+"_u");AD=O(n+"_p");q=O(n+"_v");T=O(n+"_v_img");AH=O(n+"_v_tr");loginValiRe=O(n+"_v_re");b=O(n+"_mem");r=O(n+"_getpass");m=O(n+"_submit");U=O(n+"_fm");z=O(n+"_token");y=O(n+"_tpl");o=O(n+"_time");H(U,"submit",(function(){return function(AJ){if(!AC()){AE(AJ);return false}else{m.disabled=true;return true}}})());H(loginValiRe,"click",function(AJ){s();AE(AJ);return false});H(h,"blur",function(){var AJ=A("script");AJ.src=AG+"?logcheck&username="+encodeURIComponent(h.value)+"&callback=bdlogin.login.ucheck&tpl=mn&t="+(new Date()).getTime();document.body.appendChild(AJ);return true})}function u(AJ){if(!X){switch(AJ){case"0":W(false);d=false;break;case"1":W(true);d=true;break}}}function AF(){var AK=(new Date()).getTime();var AJ=O("bd_login_script");if(AJ){document.body.removeChild(AJ)}var AL=A("script","bd_login_script");if(h){AL.src=AG+"?apilogin&callback=bdlogin.login.ready&tpl=mn&username="+h.value+"&tt="+AK}else{AL.src=AG+"?apilogin&callback=bdlogin.login.ready&tpl=mn&tt="+AK}document.body.appendChild(AL)}function V(AJ){f();if("0"==AJ.error_no){r.href=AJ.more_ext.ext1_url;r.innerHTML=AJ.more_ext.ext1_name;l(AJ.param_in,AJ.param_out);window[AI]=e}}function AE(AJ){if(AJ&&AJ.preventDefault){AJ.preventDefault()}else{window.event.returnValue=false}}function AC(){if(""==C(h.value)){S(null,"�������û���",null,null,true);return false}if(""==C(AD.value)){S(null,null,"����������",null,true);return false}if(d&&""==C(q.value)){S("��������֤��",null,null,null,true);return false}return true}function l(AJ,AK){h.name=AJ.param1_name;h.value=AJ.param1_value;AD.name=AJ.param2_name;AD.value=AJ.param2_value;b.name=AJ.param5_name;q.name=AJ.param4_name;q.value="";s();if("1"==AJ.param4_value){W(true);d=true;X=true}else{W(false);d=false;X=false}z.name=AK.param1_name;z.value=AK.param1_contex;y.name=AK.param2_name;y.value=AK.param2_contex;o.name=AK.param3_name;o.value=AK.param3_contex;if(""==h.value){h.focus()}else{AD.focus()}}function s(){var AJ="httpdisabledsdisabled://"+I+"/?verifypic&t="+(new Date()).getTime();T.src=AJ}function W(AJ){if(D){AH.style.display=AJ?"block":"none"}else{AH.style.display=AJ?"table-row":"none"}if(AJ&&Y){Y.call(window)}if(!AJ&&k){k.call(window)}}function e(AK,AL){m.disabled=false;switch(AK){case"0":var AJ=decodeURIComponent(AL.un);c(1,AJ);break;case"1":S(null,G[AK]);break;case"2":S(null,G[AK]);break;case"4":S(null,null,G[AK]);break;case"5":S(G[AK]);break;case"6":S(G[AK]);break;case"7":S(G[AK]);break;case"8":S(G[AK]);break;case"16":S(G[AK]);break;case"20":S(G[AK]);break;case"257":S(G[AK]);break;default:S()}}function c(AK,AJ){if(R){R.call(window,AK,AJ)}if(g){g.call(window,AK,AJ);g=null}}function S(AM,AN,AK,AL,AJ){if(AN||AK){B(h,"width","128px");B(AD,"width","128px");B(j,"width","100px");B(w,"width","100px")}else{B(h,"width","170px");B(AD,"width","170px");B(j,"width","40px");B(w,"width","40px")}p.innerHTML=AM?AM:"";j.innerHTML=AN?AN:"";w.innerHTML=AK?AK:"";if(AN){h.focus()}if(AK){AD.focus()}if(d&&AL){q.focus()}if(!AJ){AF()}}function AA(){return d||X}function t(AJ){g=AJ}function C(AJ){AJ=AJ.replace(/(\u3000+)|(\u3000+)/g,"");AJ=AJ.replace(/( +)|( +)/g,"");return AJ}x();return{domNode:AB,verify:AA,loaddisabled:AF,ready:V,ucheck:u,setCallback:t,success:c}}return{Bar:L,Tab:E,Dialog:K,Login:J}})();var bdlogin=[];bdlogin.bar=bdu.Bar();var lParams={prefix:"login",callbackName:"bdLoginReply",jump:"httpdisabled://www.baidu.com/user/j.html",caption:"�ٶ�ע���û���ֱ�ӵ�¼",footer:"û�аٶ��ʺţ�<a href='javascript:showRegTab()'>����ע��ٶ��ʺ�</a>",success:function(E,B){if(E==1){user_c({fm:"set",tab:"loginOK",url:"httpdisabled://passport.baidu.com/login"})}else{if(E==2){user_c({fm:"set",tab:"regOK",url:"httpdisabled://passport.baidu.com/reg"})}}bdlogin.box.close(true);for(var C=0,A=window[const_callback_list].length;C<A;C++){var D=window[const_callback_list][C];try{D.call(window,E,B,null)}catch(F){}}window.bdUser=B},showVerifyCode:function(){if(bdlogin.tab.getIndex()==0){bdlogin.box.resize(395,436)}},hideVerifyCode:function(){if(bdlogin.tab.getIndex()==0){bdlogin.box.resize(395,386)}}};bdlogin.login=bdu.Login(lParams);window[const_callback_list].push(function(C,A,B){bdlogin.bar.login(A)});window.regSuccess=function(A){bdlogin.login.success(2,A)};window.showRegTab=function(){if(bdlogin.tab){bdlogin.tab.show(1)}};var regDiv=document.createElement("DIV");var tabParams={tabs:[{label:"��¼",domNode:bdlogin.login.domNode,click:function(){setTimeout(function(){if(bdlogin.login.verify()){bdlogin.box.resize(395,436)}else{bdlogin.box.resize(395,386)}bdlogin.box.caption("��¼")},30)},loaddisabled:function(){}},{label:"ע��",domNode:regDiv,click:function(){bdlogin.box.resize(570,510);bdlogin.box.caption("ע��")},loaddisabled:function(){regDiv.innerHTML="<iframe src=/user/reg.html frameborder=0 scrolling=no width=515 height=390 style='border:0;margin:0;padding:0'></iframe>"}}],selectIndex:0,cssPrefix:"bd_tab"};bdlogin.tab=bdu.Tab(tabParams);var dParams={domNode:bdlogin.tab.domNode,width:395,height:400,mask:true,shadow:true,drag:true,ready:function(){bdlogin.bar.notifyReady()},loaddisabled:function(){bdlogin.tab.show(0);bdlogin.login.loaddisabled()}};bdlogin.box=bdu.Dialog(dParams);bdlogin.login.setCallback(function(){});bdlogin.box.ready();window._invoke_login=function(B){if(B){try{bdlogin.login.setCallback(B);bdlogin.box.setCloseCallback(B)}catch(A){return false}}bdlogin.box.show();return true};