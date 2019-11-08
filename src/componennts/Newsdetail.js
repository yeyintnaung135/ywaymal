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
class Newsdetail extends React.Component {
    constructor(props,context) {
        super(props);
        this.state = {
            news_detail: '',

        }
        let search = new URLSearchParams(window.location.search);
        this.getnewsdetail = this.getnewsdetail.bind(this);

        this.news_id = search.get('news_id');
    }

    componentWillMount() {
        //redirect if not authenciate
        redirecttologinifnotauth();

        this.getnewsdetail();


    }

    getnewsdetail() {

        return axios({
            method: 'post',
            url: apiurl + '/api/getnewsdetail/' + this.news_id,
            data: {
                token: 'feef'
            }, headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('logintoken')
            }
        })
            .then(res => {
                console.log('responses from server for news');
                this.setState({news_detail: res.data})
                console.log(this.state.news_detail);
                // this localstorage set is becuz we cannot bind this in ellispse react package
                localStorage.setItem('desc',this.state.news_detail.description)
                //end


            })

    }

    componentDidMount() {


        window.AOS.init({
            duration: 800,
            easing: 'slide'
        });
        window.$(document).ready(function () {


            window.$(".uni").click(function(){
                window.$('.changeMe').css("font-family","Masterpiece Uni Sans,Myanmar3");
                console.log('font change');
            });
            window.$(".zaw").click(function(){
                window.$('.changeMe').css("font-family","Zawgyi-One");
                console.log('font change');

            });
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
                <Header_menu_cat name={{one: '', two: 'menu_active', three: ''}}/>
                <div className="row" style={{marginTop: '22px'}}>

                </div>
                {/*end header section*/}

                {/*body section*/}
                <div className="row no-gutters pb-4 pb-sm-4 pb-md-4 pb-lg-4 ml-2 mr-2 md-2 ml-md-4 mr-md-4">
                    {/*categories section*/}

                    <Categories/>
                    {/*end categories section*/}

                    {/*About Us Section*/}
                    <div className="col-sm-12 col-md-6 col-lg-8">
                        <div class="col-sm-12">

                            <div class="row no-guitters d-flex ">
                                <div class="col-sm-12" style={{paddingTop: '23p'}}>
                                    <div class="pb-md-5">
                                        <img class="d-block w-100"
                                             src={apiurl + '/backend/admin/news/' + this.state.news_detail.file}
                                             alt="First slide"
                                             style={{height: 'auto'}}/>
                                        <div class="col-12">
                                            <p class="yk-title-text-two mt-4">
                                                {this.state.news_detail.title}
                                            </p>
                                        </div>
                                        <p>{this.state.news_detail.description} </p>
                                        <div class="mic-info">
                                            Date:{this.state.news_detail.created_at} </div>

                                        <br></br>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12" style={{borderBottom: '2px solid #f1e6be'}}>&nbsp;</div>
                    </div>
                    {/*End About Us Section*/}


                    <div className="col-12 col-sm-12 col-md-2 col-lg-2">
                        <Ads/>
                        <Topnews/>

                    </div>
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

export default Newsdetail;