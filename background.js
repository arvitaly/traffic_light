$(document).ajaxError(function() {
  chrome.browserAction.setIcon({path: 'icon_orange.png'}); 
  id = setTimeout(status,5000); 
});
function status()
{
    clearTimeout(id);
    $.post(localStorage['url_status'],{},function(data){
        
       if ( data == 1 )
       {
            chrome.browserAction.setIcon({path: 'icon_green.png'});        
       } 
       else
       {
            chrome.browserAction.setIcon({path: 'icon_red.png'});
       }
       id = setTimeout(status,5000);
    });
};
var id = setTimeout(status,5000);