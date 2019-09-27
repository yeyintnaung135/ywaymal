import React from "react";
import "../css/open-iconic-bootstrap.min.css";
import "../css/animate.css";
import "../css/owl.carousel.min.css";
import "../css/owl.theme.default.min.css";
import "../css/magnific-popup.css";
import "../css/aos.css";
import "../css/ionicons.min.css";


import "../css/flaticon.css";
import "../css/icomoon.css";
import "../css/style.css";
import "../css/custom.css";

import apiurl from '../helpers/apiurl'

import Categories from "./Categories";
import Header_menu_cat from "./Header_menu_cat";
import Footerpage from "./footerpage";
import Topnews from "./topnews";

import axios from 'axios';

import {redirecttologinifnotauth} from '../helpers/redirecttologinifnotauth';


//this is create component with reactcomponent that is called stateful components
class Videodetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            video: '',
            runvideos: true,

        }
        this.getvideodetail = this.getvideodetail.bind(this);
        let search = new URLSearchParams(window.location.search);
         this.id=search.get('id');
    }

    componentWillMount() {
        //redirect if not authenciate
        // redirecttologinifnotauth();real
        this.getvideodetail();
    }

    getvideodetail() {
        if (this.state.runvideos) {

            return axios({
                method: 'post',
                url: apiurl+'/api/getvideosbyid/'+this.id,
                data: {
                    token: 'feef'
                }, headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('logintoken')
                }
            })
                .then(res => {
                    console.log('responses from server for videos');
                    this.setState({video: res.data})
                    console.log(this.state.video)
                    localStorage.setItem('video_link', res.data.link)
                    this.setState({runvideos: false});
                    //this is because we need to html5 player unless this player restore from cache it is not good for new videos
                    document.getElementById('to_reload_src').src=apiurl+'/backend/admin/videos/'+ res.data.link;
                    document.getElementById('to_reload').load();
                    // localStorage.setItem('logintoken',res.data)
                })
        }
    }

    componentDidMount() {


        window.AOS.init({
            duration: 800,
            easing: 'slide'
        });

        var loader = function () {
            setTimeout(function () {
                window.$('#ftco-loader').removeClass('show');
                console.log('fff');
            }, 1000);
        };
        loader();
        var counter = function () {
            console.log('way point')
            window.$('#section-counter').waypoint(function (direction) {

                if (direction === 'down' && !window.$(this.element).hasClass('ftco-animated')) {

                    var comma_separator_number_step = window.$.animateNumber.numberStepFactories.separator(',')
                    window.$('.number').each(function () {
                        console.log('way point')
                        var $this = window.$(this),
                            num = $this.data('number');
                        console.log(num);
                        $this.animateNumber(
                            {
                                number: num,
                                numberStep: comma_separator_number_step
                            }, 7000
                        );
                    });

                }

            }, {offset: '95%'});

        }
        counter();
        var contentWayPoint = function () {
            var i = 0;
            window.$('.ftco-animate').waypoint(function (direction) {

                if (direction === 'down' && !window.$(this.element).hasClass('ftco-animated')) {

                    i++;

                    window.$(this.element).addClass('item-animate');
                    setTimeout(function () {

                        window.$('body .ftco-animate.item-animate').each(function (k) {
                            var el = window.$(this);
                            setTimeout(function () {
                                var effect = el.data('animate-effect');
                                if (effect === 'fadeIn') {
                                    el.addClass('fadeIn ftco-animated');
                                } else if (effect === 'fadeInLeft') {
                                    el.addClass('fadeInLeft ftco-animated');
                                } else if (effect === 'fadeInRight') {
                                    el.addClass('fadeInRight ftco-animated');
                                } else {
                                    el.addClass('fadeInUp ftco-animated');
                                }
                                el.removeClass('item-animate');
                            }, k * 50, 'easeInOutExpo');
                        });

                    }, 1000);

                }

            }, {offset: '95%'});
        };
        contentWayPoint();
        window.$(document).ready(function () {

            if ((window.screen.width < 900)) {
// if screen size is 1025px wide or larger
                window.$(".collapse").removeClass('show'); // you can also use $(".yourClass").hide();
            }

        });
        window.$(".yk-btn[data-id]").click(function () {
            var dyn = window.$(this).attr("data-id");
            if (window.$("#" + dyn).hasClass("yk-btn-active")) {
                window.$("#" + dyn).removeClass("yk-btn-active")

            } else {
                window.$("#" + dyn).addClass("yk-btn-active")

            }

            console.log(dyn)
        });
        console.log('start')
    }




    render() {


        return (


            <div>


                {/*header section*/}
                <Header_menu_cat name={{one: '', two: '', three: ''}}/>
                <div className="row" style={{marginTop: '22px'}}>


                </div>
                {/*end header section*/}

                {/*body section*/}
                <div className="row col-sm-12">
                    {/*categories section*/}

                    <Categories/>
                    {/*end categories section*/}


                    {/*About Us Section*/}
                    <div className="col-sm-12 col-md-6 col-lg-8">


                        <div class="col-12" style={{paddingTop: '23p'}}>

                            <video id="to_reload" style={{width: '100%', height: 'auto'}} controls>
                                <source id="to_reload_src"
                                    src={apiurl+'/backend/admin/videos/' +localStorage.getItem('video_link')}
                                    type='video/mp4'/>
                                Your browser does not support the video tag.
                            </video>
                            <div class="row col-12">

                                <div class="col-3 col-sm-3  col-md-6 col-xl-3">
                                    <a href="contact_us" class={"btn  btn-sm  btn-danger"} style={{color: 'white',width:'102%'}} >
                                        <span class="fa fa-thumbs-up"></span>&nbsp;&nbsp;Like&nbsp;
                                    </a>
                                </div>
                                <div class="col-3 col-sm-3  col-md-6 col-xl-3">
                                    <a href="contact_us" class={"btn  btn-sm  btn-danger"} style={{color: 'white',width:'102%'}}>
                                        <span class="fa fa-share-alt"></span>&nbsp;&nbsp;Share&nbsp;
                                    </a>

                                </div>
                                <div class="col-3 col-sm-3  col-md-6 col-xl-3 mt-0 mt-md-2 mt-xl-0" >
                                    <a href="contact_us" class={"btn  btn-sm  btn-danger"} style={{color: 'white',width:'102%'}}>
                                        <span class="fa fa-comments-o"></span>&nbsp;&nbsp;Comment&nbsp;
                                    </a>
                                </div>
                                <div class="col-3 col-sm-3  col-md-6 col-xl-3 mt-0 mt-md-2 mt-xl-0" >
                                    <a href="contact_us" class={"btn  btn-sm  btn-danger"} style={{color: 'white',width:'102%'}} >
                                        <span class="fa fa-comments-o"></span>&nbsp;&nbsp;Vote&nbsp;
                                    </a>
                                </div>
                            </div>
                            <div class="col-12">
                            <p class="yk-title-text-two mt-4">
                                {this.state.video.title}
                            </p>
                            </div>
                            <div class="col-12">

                            <p class="">
                                {this.state.video.description}
                            </p>
                            </div>

                            <br></br>


                        </div>


                        <div className="col-sm-12" style={{borderBottom: '2px solid #f1e6be'}}>&nbsp;</div>


                    </div>
                    {/*End About Us Section*/}


                    {/*top new and ads section*/}
                    <div className="col-12 col-sm-12 col-md-2 col-lg-2">
                        {/*ads section*/}
                        <img className="d-block w-100" src={process.env.PUBLIC_URL + '/images/aad.png'}
                             alt="First slide" style={{height: '300px'}}/>
                        <br></br>
                        <img className="d-block w-100" src={process.env.PUBLIC_URL + '/images/aad.png'}
                             alt="First slide" style={{height: '300px'}}/>
                        <br></br>
                        {/*end ads section*/}
                        {/*top news section*/}

                        <div style={{border: '2px solid #c7baaf47;padding: 12px'}}>
                            <Topnews/>

                        </div>
                        {/*end top news section*/}


                    </div>
                    {/*top new and ads section*/}
                </div>
                {/*body section*/}

                <section className="ftco-section">
                    <div className="container col-sm-6">


                    </div>
                </section>


                {/*footer section*/}
                <Footerpage/>
                {/*end footer section*/}

                <div id="ftco-loader" className="show fullscreen">
                    <svg className="circular" width="48px" height="48px">


                        <circle className="path-bg" cx="24" cy="24" r="22" fill="none" strokeWidth="4"
                                stroke="#eeeeee"/>
                        <circle className="path" cx="24" cy="24" r="22" fill="none" strokeWidth="4"
                                strokeMiterlimit="10"

                                stroke="#F96D00"/>
                    </svg>
                </div>
            </div>


        )
            ;
    }
}

export default Videodetail;