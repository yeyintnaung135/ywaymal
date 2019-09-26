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

import apiurl from "../helpers/apiurl"
import {redirecttologinifnotauth} from '../helpers/redirecttologinifnotauth'


//this is create component with reactcomponent that is called stateful components
class Aboutus extends React.Component {
    componentWillMount() {
        redirecttologinifnotauth();

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
                <div className="row col-sm-12">
                    {/*categories section*/}

                    <Categories/>
                    {/*end categories section*/}


                    {/*About Us Section*/}

                    <div className="col-12 col-md-6 pr-0 ml-3 ml-sm-0">
                        <div class="col-md-12" style={{textAlign: 'center'}}>
                            <h5 class="mb-1 yk-title-text" style={{textAling: 'center'}}>About Us</h5>
                        </div>
                        <br></br>
                        <div class="row col-sm-12 pr-0">
                            <div style={{paddingTop: '23p'}}>

                                    <p>We build a website, ACVC (Anonymous Comments & Vote for Candidates), for the
                                        2020 candidates in Myanmar, CSOs, NGOs and communities in order to create a
                                        better society. </p>
                                    <p>
                                        Our website is designed to educate the communities to understand civic
                                        education such as the respective roles and responsibilities of citizens,
                                        government, political and special interests, the mass media, and the
                                        business and non- profit sectors, as well as the significance of periodic
                                        and competitive elections. Voter information and voter education, however,
                                        may be part of larger civic education endeavor. On the other hand, we design
                                        to mitigate problems of misinformation, hate speech, and diversity for 2020
                                        general election.

                                    </p>
                                    <br></br>

                                    <div class="col-md-12" style={{textAlign: 'center'}}>
                                        <h6 class="mb-1 yk-title-text" style={{textAling: 'center'}}>Our Team</h6>
                                    </div>
                                    <br></br>
                                    <br></br>
                                    <div class="row col-sm-12">
                                        <div class="col-md-12 col-lg-6">
                                            <div>
                                                <img src={process.env.PUBLIC_URL + '/images/myn.jpg'}
                                                     style={{width: '100%', borderRadius: '22px',height: '222px'}}/>
                                            </div>
                                            <br></br>

                                            <div style={{textAlign: 'center'}}>
                                                <span style={{fontWeight: 'bold'}}>Yin Nyein Hmway</span>
                                                <p>Founder Media-Based Political Analyst
                                                </p>                                                </div>
                                        </div>
                                        <div class=" col-md-12 col-lg-6 ">
                                            <div>
                                                <img src={process.env.PUBLIC_URL + '/images/klc.jpg'}
                                                     style={{width: '100%', borderRadius: '22px',height: '222px'}}/>
                                            </div>
                                            <br></br>

                                            <div style={{textAlign: 'center'}}>
                                                <span style={{fontWeight: 'bold'}}>Thura Hein</span>
                                                <p>
                                                    Member
                                                    BBA in International Business Management at Siam Technology College, Bangkok,Thailand
                                                </p>
                                            </div>
                                        </div>


                                    </div>


<br></br>

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



                    <div className="col-sm-12" style={{borderBottom: '2px solid #f1e6be'}}>&nbsp;</div>


                </div>
                {/*End About Us Section*/}


                {/*top new and ads section*/}
                {/*top new and ads section*/}
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

export default Aboutus;