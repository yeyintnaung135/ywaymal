export function redirecttologinifnotauth()
{

   if(localStorage.getItem('loginstatus') != 'yes'){
       if(window.location.href != 'https://www.ywaymal.com/') {
           localStorage.setItem('request_link', window.location.href);
       }
       return window.location.assign('/')
   }

}
