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
import Categories from "./Categories";
import Header_menu_cat from "./Header_menu_cat";
import Footerpage from "./footerpage";
import Topnews from "./topnews";
import apiurl from '../helpers/apiurl'

import axios from 'axios';
import {redirecttologinifnotauth} from '../helpers/redirecttologinifnotauth';
import Ads from "./Ads";


//this is create component with reactcomponent that is called stateful components
class Sliderdetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            slider: '',

        }
        let search = new URLSearchParams(window.location.search);
        this.getnewsdetail = this.getnewsdetail.bind(this);

        this.slider_id=search.get('slider_id');
    }
    componentWillMount() {
        //redirect if not authenciate
        // redirecttologinifnotauth();
        window.scrollTo(0, 0)

        this.getnewsdetail();


    }
    componentDidMount() {
        window.scrollTo(0, 0);
    }

    getnewsdetail() {

        return axios({
            method: 'post',
            url: apiurl+'/api/getsliderdetail/'+this.slider_id,
            data: {
                token: 'feef'
            }, headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('logintoken')
            }
        })
            .then(res => {
                console.log('responses from server for sliders');
                this.setState({slider: res.data})
                console.log(this.state.slider);
                localStorage.setItem('slide_video',this.state.slider.videos)
                console.log('slide_video');
                //this is because we need to html5 player unless this player restore from cache it is not good for new videos
                document.getElementById('to_reload_slide_src').src=apiurl+'/backend/admin/news/'+ this.state.slider.videos;
                document.getElementById('to_reload_slide').load();
                // localStorage.setItem('logintoken',res.data)

            })

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
                <Header_menu_cat  name={{ one : '',two : 'menu_active' ,three : ''}}/>
                <div className="row" style={{marginTop:'22px'}}>

                </div>
                {/*end header section*/}

                {/*body section*/}
                <div className="row no-gutters pb-4 pb-sm-4 pb-md-4 pb-lg-4 ml-2 mr-2 md-2 ml-md-4 mr-md-4">
                    {/*categories section*/}

                    <Categories/>
                    {/*end categories section*/}


                    {/*About Us Section*/}
                    <div className="col-sm-12 col-md-6 col-lg-8">

                        <div style={{paddingTop: '23p'}} class="mr-md-3 mr-md-3">
                            <video id="to_reload_slide" style={{width: '100%', height: '100%'}} controls>
                                <source id="to_reload_slide_src"
                                        src={apiurl+'/backend/admin/news/' +localStorage.getItem('slide_video')}
                                        type='video/mp4'/>
                                Your browser does not support the video tag.
                            </video>
                            <p >{this.state.slider.description} </p>
                            <p>Date:{this.state.slider.created_at} </p>
                            <br></br>
                        </div>
                        <div className="col-sm-12" style={{borderBottom: '2px solid #f1e6be'}}>&nbsp;</div>
                    </div>
                    {/*End About Us Section*/}


                    {/*top new and ads section*/}
                    <div className="col-12 col-sm-12 col-md-3 col-lg-2">
                        <Ads/>
                        <Topnews/>

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
                        <circle className="path-bg" cx="24" cy="24" r="22" fill="none" stroke-width="4"
                                stroke="#eeeeee"/>
                        <circle className="path" cx="24" cy="24" r="22" fill="none" stroke-width="4"
                                stroke-miterlimit="10"
                                stroke="#F96D00"/>
                    </svg>
                </div>
            </div>


        )
            ;
    }
}

export default Sliderdetail;