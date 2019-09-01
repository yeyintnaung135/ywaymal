import React from "react";
import "../css/login.css";
import {useState, useEffect} from 'react';
import FacebookLogin from "react-facebook-login";
import {bindActionCreator} from "redux";
import {connect} from 'react-redux';
import {Redirect} from "react-router-dom";
import Stringify from 'react-stringify'

import axios from 'axios';
//this is login component


const Login = ({loginError}) => {
    //use state LoginStatus in React
    const [loginStatus, setloginStatus] = useState({status: false, data: 'tmp'});
    const checktoken = () => {
        //check user is already login
        if (localStorage.getItem('logintoken') == null) {

            console.log('empty  token and login false')

        }
        else{
             axios({
                method: 'post',
                url:'https://admin.ywaymal.com/api/check_token' ,
                data: {
                    token:localStorage.getItem('logintoken')
                }, headers: {
                    'Authorization':'Bearer '+localStorage.getItem('logintoken')
                }
            })
                .then(res => {
                    console.log('responses from server');
                    console.log(res);
                    // localStorage.setItem('logintoken',res.data)
                    localStorage.setItem('loginstatus','yes')
                })
            console.log('login ok already login')
        }
        console.log(localStorage.getItem('logintoken'))

    }

    // constructor(props) {
    //     super(props);
    //
    //     this.signup = this.signup.bind(this);
    // }

    function PostData(uri, userData) {
        let BaseURL = 'https://admin.ywaymal.com/api/';
        //let BaseURL = 'http://localhost/socialapi/';
        return axios({
            method: 'post',
            url: BaseURL + uri,
            data: {
                userData
            }, headers: {
                'Access-Control-Allow-Origin': "*",
            }
        })
            .then(res => {
                //store token and status in client
                console.log('responseeeeeeees from server');
                localStorage.setItem('logintoken',res.data.token)
                localStorage.setItem('loginstatus','yes')
                console.log(res.data);
                new redirect()
            })
        console.log('send to server')
    }
    function redirect(){
        //redirect if logined success
        if(localStorage.getItem('loginstatus') == 'yes')
        {
            return window.location.assign('home')
            // console.log('faefaefefffffffffffffff')

        }else{
            console.log('canot redirect')
        }
    }

    function Singup(res, type) {
        //this function is to store data in server
        var Datatopost;

        if (type === 'facebook') {
            Datatopost = {
                //retrieve data from facebook response
                name: res.name,
                provider: type,
                email: res.email,
                provider_user_id: res.userID,
                token: res.accessToken,
                profile_picture: res.picture.data.url
            };

            if (Datatopost) {
                // if retrieve data is not empty
                new PostData('viewer_register', Datatopost).then((result) => {
                    // if server can response data and token
                    let serverresponsedata = result;
                    // u need to store token in reducer and use this every request

                    console.log('store token in reducer ')
                });
            } else {
                //will pop up something wrong
                console.log('show something wrong error')

            }
        }


        console.log('Sign up function')

    }

    //
    // if (this.state.redirect || sessionStorage.getItem('userData')) {
    //     return (<Redirect to={'/home'}/>)
    // }
    const responseFacebook = (response) => {
        console.log('facebackfffafeafefea function')
        // this is facebook callback function
        //and then i call many function to store data to server and get token
        console.log(response);
        new Singup(response, 'facebook');

    }


    // //
    // // render() {
    // //
    // //    //responsefrom facebook


    // useEffect(() => {
    //     // Update the document title using the browser API
    //
    // });

    return (

        <div class="flex-center position-ref full-height">

            {checktoken()}
            {redirect()}
            <div class="content">
                <div>
                    <div class="m-b-md">
                        <img src={process.env.PUBLIC_URL + "/images/logo/faef.png"} style={{width: "50%"}}/>
                    </div>
                </div>
                <br/>
                <FacebookLogin
                    appId="413223529303378"
                    autoLoad={false}
                    fields="name,email,picture"
                    callback={responseFacebook}/>
                {/*<button type="button" className="btn btn-info" onClick={()=>responseFacebook('fe')}>test</button>*/}
                <br/><br/>

                {/*for facebook button*/}
                {/*<FacebookLogin*/}
                {/*appId="391014331559972"*/}
                {/*autoLoad={true}*/}
                {/*fields="name,email,picture"*/}
                {/*callback={responseFacebook}/>*/}
            </div>

        </div>
    )

}


// function mapStateToProps(state){
//     //mastatetoprops is buildin function from react-redux pass store to component
//     //this is own reducer for this component
//     return {
//         data:state.socialfacebook
//     }
// }

export default Login