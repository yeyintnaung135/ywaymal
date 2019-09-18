import axios from 'axios';
import apiurl from './apiurl';
export function checkauth() {
//real
//     // check user is already login
//     if (localStorage.getItem('logintoken') == null) {
// //if empty token
//         console.log('empty  token and login false')
//     }
//     else {
    //endreal
        axios({
            method: 'post',
            url: apiurl+'/api/check_token',
            data: {
                token: 'feef'
            }, headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('logintoken')
            }
        })
            .then(res => {
                console.log('responses from server');
                console.log(res);
                localStorage.setItem('loginstatus', res.data)
                if (res.data == 'yes') {
                    //check token success go to home
                    if (localStorage.getItem('request_link') !== null) {
                        return window.location.assign(localStorage.getItem('request_link'));

                    } else {

                        return window.location.assign('home');
                    }
                }
            })
    //real
    // }
    //endreal

}
