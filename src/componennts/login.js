import React from 'react';
import '../css/login.css'
//this is login component

const Login = () => {
    return (
        <div class="flex-center position-ref full-height">
            {/*@if (Route::has('login'))*/}
            {/*<div class="top-right links">*/}
            {/*@auth*/}
            {/*<a href="">Home</a>*/}
            {/*@else*/}
            {/*<a href="">Login</a>*/}

            {/*@if (Route::has('register'))*/}
            {/*<a href="{{ route('register') }}">Register</a>*/}
            {/*@endif*/}
            {/*@endauth*/}
            {/*</div>*/}
            {/*@endif*/}

            <div class="content">
                <div>
                    <div class="m-b-md">
                        {/*//u want to use public folder in react js component u will use like this */}
                        <img src={process.env.PUBLIC_URL + '/images/logo/logo.jpg'} style={{width: '70%'}}/>
                    </div>
                </div>
                <br/>
                {/*if you want to use css inline style in jsx you must set object to styles props {{}}*/}
                <div class="col-md-12 col-md-offset-4" style={{float: 'right'}}>
                    <a href="#" class="fb yk-l-btn">

                        <i class="fa fa-facebook fa-fw"></i> Login with Facebook
                    </a>
                </div>
            </div>

        </div>

    )

}
export default Login