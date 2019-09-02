export function redirecttologinifnotauth()
{

   if(localStorage.getItem('loginstatus') != 'yes'){
       return window.location.assign('/')
   }

}
