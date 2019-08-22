import React from 'react';
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

import MainSlider from "./MainSlider";
import Footerpage from "./footerpage";

//this is create component with reactcomponent that is called stateful components


class Homepage extends React.Component {

    render () {
        return (


            <div>
                {/*header section*/}

                <Header_menu_cat/>
                <div className="row">

                </div>
                {/*end header section*/}

                {/*body section*/}
                {/*categories section*/}

                <div className="row col-sm-12">

                    <Categories/>
                    {/*end categories section*/}
                    <div className="col-12 col-md-6">
                        {/*Selider section*/}
                        <MainSlider/>
                        {/*end slider section*/}




                        <div className="col-sm-12" style={{borderBottom: '2px solid #f1e6be'}}>&nbsp;</div>




                        {/*for video loop*/}
                        <div className="col-sm-12" style={{margin: '22px'}}>
                            <div className="col-sm-12">&nbsp;</div>
                            <div className="col-md-12" style={{textAlign: 'center'}}>
                                <h5 className="mb-1 yk-title-text" style={{textAlign: 'center'}}>Videos</h5>
                            </div>
                            <div className="col-sm-12">&nbsp;</div>

                            <div className="row col-sm-12 d-flex ">


                                <div className="row d-flex ftco-animate">
                                    <div className=" row blog-entry align-self-stretch">
                                        <div className=" col-sm-12 col-md-6">
                                            <video style={{width: '100%'}} controls poster={process.env.PUBLIC_URL + '/images/logo/logo.jpg'}>
                                                <source src={process.env.PUBLIC_URL + '/testvideo/first.mp4'} type="video/mp4"/>
                                                Your browser does not support the video tag.
                                            </video>
                                            <div className="col-sm-12">
                                                <a href="#">July 03, 2019</a>

                                            </div>
                                        </div>
                                        <div className="text mt-3 text-center col-sm-12 col-md-6" style={{padding: '0px'}}>


                                            <h3 className="heading yk_text">Description</h3>
                                            <div className="meta mb-2 sm-12">
                                                <div className="">
                                                    <button type="button" data-id='like_three' id="like_three"
                                                            className="btn btn-default btn-circle-yk yk-btn"><i
                                                        className="fa fa-thumbs-up"></i></button>
                                                    <br></br>
                                                    2k
                                                </div>
                                                <div className="">
                                                    <button type="button" data-id='cmt_three' id="cmt_three"
                                                            className="btn btn-default btn-circle-yk yk-btn"><i
                                                        className="fa fa-comments-o"></i></button>
                                                    <br></br>
                                                    3k
                                                </div>

                                                <div className="">
                                                    <button type="button" data-id='share_three' id="share_three"
                                                            className="btn btn-default btn-circle-yk yk-btn"><i
                                                        className="fa fa-share"></i></button>
                                                    <br></br>
                                                    300
                                                </div>

                                                <div className="">
                                                    <button type="button" data-id='share_three' id="share_three"
                                                            className="btn btn-default btn-circle-yk yk-btn"><i
                                                        className="fa fa-share"></i></button>
                                                    <br></br>
                                                    9k
                                                </div>


                                            </div>

                                            <p><a href="#" className="btn-custom">Read more</a></p>
                                        </div>
                                    </div>
                                </div>


                            </div>
                            <div className="row col-sm-12 mt-5">
                                <div className="col text-center">
                                    <div className="block-27">
                                        <ul>
                                            <li><a href="#">&lt;</a></li>
                                            <li className="active"><span>1</span></li>
                                            <li><a href="#">2</a></li>
                                            <li><a href="#">3</a></li>
                                            <li><a href="#">4</a></li>
                                            <li><a href="#">5</a></li>
                                            <li><a href="#">&gt;</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>



                        </div>
                        {/*end for video loop*/}



                    </div>
                    {/*top new section*/}

                    <div className="col-12 col-md-3">
                        <img className="d-block w-100" src={process.env.PUBLIC_URL + '/images/logo/logo.jpg'} alt="First slide" style={{height: '300px'}}/>
                        <br></br>
                        <img className="d-block w-100" src={process.env.PUBLIC_URL + '/images/logo/logo.jpg'} alt="First slide" style={{height: '300px'}}/>
                        <br></br>
                        <div style={{border: '2px solid #c7baaf47;padding: 12px'}}>
                            <h4>Top News</h4>
                            <a href="#">
                                <div className="media">
                                    <img src={process.env.PUBLIC_URL + '/images/logo/logo.jpg'} className="align-self-start mr-3" style={{width: '81px'}}/>
                                    <div className="media-body">

                                        <p style={{fontSize: '14px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit,....

                                            ...</p>
                                    </div>
                                </div>
                            </a>



                        </div>


                    </div>

                    {/*end ads section*/}
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
                        <circle className="path-bg" cx="24" cy="24" r="22" fill="none" stroke-width="4" stroke="#eeeeee"/>
                        <circle className="path" cx="24" cy="24" r="22" fill="none" stroke-width="4" stroke-miterlimit="10"
                                stroke="#F96D00"/>
                    </svg>
                </div>
            </div>


         )
            ;
    }
}

export default Homepage;