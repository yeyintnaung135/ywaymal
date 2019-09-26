import React from "react";
import "../css/login.css";

import FacebookLogin from "react-facebook-login";
import {checkauth} from '../helpers/checkauth'

import axios from 'axios';
import apiurl from '../helpers/apiurl'

//this is login component

class Login extends React.Component {
    constructor(props) {
        super(props);
    }
    componentWillMount() {
        //start page this method will firstly fire
        checkauth();
        console.log(apiurl)
    }
    PostData(uri, userData) {
        let BaseURL = apiurl+'/api/';

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

                // store token and status in client
                console.log('response from laravel server');
                console.log(res.data);
                localStorage.setItem('logintoken', res.data.token)

                localStorage.setItem('loginstatus', 'yes')
                if (localStorage.getItem('loginstatus') == 'yes') {
                    if(localStorage.getItem('request_link') !== null){
                        return window.location.assign(localStorage.getItem('request_link'))

                    }else{
                        return window.location.assign('home')

                    }
                }

            })
        console.log('send to server')
    }



    Singup(res, type) {

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

                this.PostData('viewer_register', Datatopost).then((result) => {
                    // if server can response data and token
                    let serverresponsedata = result;
                    // u need to store token in reducer and use this every request
                    // return window.location.assign('home');

                    console.log('store token in reducer ')
                });
            } else {
                //will pop up something wrong
                console.log('show something wrong error')

            }
        }


        console.log('Sign up function')

    }




    responseFacebook = (response) => {
        console.log('facebook function fire ')
        // this is facebook callback function
        //and then i call many function to store data to server and get token
        console.log(response);
        this.Singup(response, 'facebook');


    }



    render() {
        return (

            <div className="flex-center position-ref full-height">


                <div className="content">
                    <div>
                        <div className="m-b-md">
                            <img src={process.env.PUBLIC_URL + "/images/logo/faef.png"} style={{width: "50%"}}/>
                        </div>
                    </div>
                    <br/>
                    <FacebookLogin
                    appId="413223529303378"
                    autoLoad={false}
                    fields="name,email,picture"
                    callback={this.responseFacebook}/>
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
}

// function mapStateToProps(state){
//     //mastatetoprops is buildin function from react-redux pass store to component
//     //this is own reducer for this component
//     return {
//         data:state.socialfacebook
//     }
// }


export default Login