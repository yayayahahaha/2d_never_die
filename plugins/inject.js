jwplayer.setCookie=function(cname,cvalue,exdays,path){exdays=exdays===undefined?365*10:parseFloat(exdays);path=path===undefined?'/':path;var d=new Date(new Date().getTime()+ exdays*1000*60*60*24);document.cookie=cname+'='+ cvalue+'; expires='+ d.toUTCString()+'; path='+ path;};jwplayer.getCookie=function(cname){var name=cname+'=';var ca=document.cookie.split(';');for(var i=0;i<ca.length;++i){var c=ca[i];while(c.charAt(0)==' '){c=c.substring(1);}
if(c.indexOf(name)===0){return c.substring(name.length,c.length);}}
return'';};jwplayer.delCookie=function(cname){document.cookie=cname+'=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';};jwplayer.locale='';jwplayer._T=function(s,map){if(jwplayer.locale===''){var langs=navigator.languages?navigator.languages:[navigator.language||navigator.userLanguage];try{langs.forEach(function(lang){switch(lang.toLowerCase()){case'zh-hk':case'zh-sg':case'zh-tw':jwplayer.locale='cht';throw{};case'zh':case'zh-cn':jwplayer.locale='chs';throw{};default:break;}});jwplayer.locale='eng';}catch(e){}}
try{return map[jwplayer.locale][s]!==undefined?map[jwplayer.locale][s]:s;}catch(e){return s;}};