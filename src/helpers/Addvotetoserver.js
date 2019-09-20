import axios from 'axios';
import apiurl from './apiurl';
export function Addvotetoserver(userData) {
    let BaseURL = apiurl+'/api/viewer_register/';
//let BaseURL = 'http://localhost/socialapi/';

    return  axios({
        method: 'post',
        url: apiurl+'/api/addvote',
        data: userData,
        headers: {
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


}