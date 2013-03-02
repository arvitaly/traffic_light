function restore()
{
    document.getElementById('url_status').value = localStorage['url_status'];
    document.getElementById('url_window').value = localStorage['url_window'];
}
function save()
{
    localStorage['url_status'] = document.getElementById('url_status').value;
    localStorage['url_window'] = document.getElementById('url_window').value;
    
}
document.getElementById('b').onclick=function()
{
  save();  
};
restore();