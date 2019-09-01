import React from "react";
import "../css/open-iconic-bootstrap.min.css";
import "../css/animate.css";
import "../css/owl.carousel.min.css";
import "../css/owl.theme.default.min.css";
import "../css/magnific-popup.css";
import "../css/aos.css";
import "../css/ionicons.min.css";
import "../css/bootstrap-datepicker.css";
import "../css/jquery.timepicker.css";
import "../css/flaticon.css";
import "../css/icomoon.css";
import "../css/style.css";
import "../css/custom.css";
import Categories from "./Categories";
import Header_menu_cat from "./Header_menu_cat";
import Footerpage from "./footerpage";
import Topnews from "./topnews";
import axios from 'axios'

//this is create component with reactcomponent that is called stateful components
class Videodetail extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            video: []
        }
    }

    componentDidMount() {
        console.log('ffzx'+this.props.location.aboutProps)
        axios({
            method: 'post',
            url: 'http://localhost/ywaymalbe/public/api/getvideosbyid/',
            data: {
                token: 'feef'
            }, headers: {
                'Authorization': 'Bearer ' + 'feafea'
            }
        })
            .then(res => {
                console.log('responses from server for videos');
                this.setState({video: res.data})
                console.log(res.data)
                // localStorage.setItem('logintoken',res.data)
            })



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
                <Header_menu_cat/>
                <div className="row">

                </div>
                {/*end header section*/}

                {/*body section*/}
                <div className="row col-sm-12">
                    {/*categories section*/}

                    <Categories/>
                    {/*end categories section*/}


                    {/*About Us Section*/}
                    <div className="col-12 col-md-6">
                        <div class="col-sm-12">
                            <div class="col-md-12" style={{textAlign: 'center'}}>
                                <h5 class="mb-1 yk-title-text" style={{textAling: 'center'}}>About Us</h5>
                            </div>
                            <br></br>
                            <br></br>


                            <div class="row col-sm-12 d-flex ">
                                <div class="col-sm-12" style={{paddingTop: '33p'}}>

                                    <div class="pb-md-5">
                                        <p>We builds a website, Anonymous Comments & Vote for Candidates, for the 2020
                                            candidates in Myanmar, CSOs, NGOs and communities in order to create a
                                            better society</p>
                                        <p>
                                            Our website is designed to educate the communities to understand civic
                                            education such as the respective roles and responsibilities of citizens,
                                            government, political and special interests, the mass media, and the
                                            business and non- profit sectors, as well as the significance of periodic
                                            and competitive elections. Voter information and voter education, however,
                                            may be part of larger civic education endeavour.On the other hands, we
                                            designed to mitigate problems of misinformation, hate speech, and diversity
                                            for 2020 presidential election.
                                        </p>
                                        <br></br>

                                        <div class="col-md-12" style={{textAlign: 'center'}}>
                                            <h6 class="mb-1 yk-title-text" style={{textAling: 'center'}}>Our Team</h6>
                                        </div>
                                        <br></br>
                                        <br></br>
                                        <div class="row col-sm-12">
                                            <div class="col-md-4 col-sm-12 ">
                                                <div>
                                                    <img src={process.env.PUBLIC_URL + '/images/person.jpg'}
                                                         style={{width: '100%',borderRadius:'22px'}}/>
                                                </div>
                                                <br></br>

                                                <div style={{textAlign:'center'}}>
                                                    <span style={{fontWeight:'bold'}} >Name</span>
                                                    <p>Ceo</p>
                                                </div>
                                            </div>   <div class="col-md-4 col-sm-12 ">
                                            <div>
                                                <img src={process.env.PUBLIC_URL + '/images/person.jpg'}
                                                     style={{width: '100%',borderRadius:'22px'}}/>
                                            </div>
                                            <br></br>

                                            <div style={{textAlign:'center'}}>
                                                <span style={{fontWeight:'bold'}} >Name</span>
                                                <p>Ceo</p>
                                            </div>
                                        </div>
                                            <div class="col-md-4 col-sm-12 ">
                                                <div>
                                                    <img src={process.env.PUBLIC_URL + '/images/person.jpg'}
                                                         style={{width: '100%',borderRadius:'22px'}}/>
                                                </div>
                                                <br></br>

                                                <div style={{textAlign:'center'}}>
                                                    <span style={{fontWeight:'bold'}} >Name</span>
                                                    <p>Ceo</p>



                                                </div>
                                            </div>



                                        </div>
                                        <div class="row col-sm-12">
                                            <div class="col-md-4 col-sm-12 ">
                                                <div>
                                                    <img src={process.env.PUBLIC_URL + '/images/person.jpg'}
                                                         style={{width: '100%',borderRadius:'22px'}}/>
                                                </div>
                                                <br></br>

                                                <div style={{textAlign:'center'}}>
                                                    <span style={{fontWeight:'bold'}} >Name</span>
                                                    <p>Ceo</p>

                                                </div>
                                            </div>   <div class="col-md-4 col-sm-12 ">
                                            <div>
                                                <img src={process.env.PUBLIC_URL + '/images/person.jpg'}
                                                     style={{width: '100%',borderRadius:'22px'}}/>
                                            </div>
                                            <br></br>

                                            <div style={{textAlign:'center'}}>
                                                <span style={{fontWeight:'bold'}} >Name</span>
                                                <p>Ceo</p>


                                            </div>
                                        </div>
                                            <div class="col-md-4 col-sm-12 ">
                                                <div>
                                                    <img src={process.env.PUBLIC_URL + '/images/person.jpg'}
                                                         style={{width: '100%',borderRadius:'22px'}}/>
                                                </div>
                                                <br></br>

                                                <div style={{textAlign:'center'}}>
                                                    <span style={{fontWeight:'bold'}} >Name</span>

                                                    <p>Ceo</p>



                                                </div>
                                            </div>



                                        </div>

                                        <ul class="ftco-social d-flex">
                                            <li class="ftco-animate fadeInUp ftco-animated"><a href="#"><span
                                                class="icon-twitter"></span></a></li>
                                            <li class="ftco-animate fadeInUp ftco-animated"><a href="#"><span
                                                class="icon-facebook"></span></a></li>
                                            <li class="ftco-animate fadeInUp ftco-animated"><a href="#"><span
                                                class="icon-google-plus"></span></a></li>
                                            <li class="ftco-animate fadeInUp ftco-animated"><a href="#"><span
                                                class="icon-instagram"></span></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                        </div>


                        <div className="col-sm-12" style={{borderBottom: '2px solid #f1e6be'}}>&nbsp;</div>


                    </div>
                    {/*End About Us Section*/}


                    {/*top new and ads section*/}
                    <div className="col-12 col-md-3">
                        {/*ads section*/}
                        <img className="d-block w-100" src={process.env.PUBLIC_URL + '/images/ads.png'}
                             alt="First slide" style={{height: '300px'}}/>
                        <br></br>
                        <img className="d-block w-100" src={process.env.PUBLIC_URL + '/images/ads.png'}
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

export default Videodetail;