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
const Categories = () => {
    return (
        <div class="col-12 col-sm-12 col-md-3 col-lg-2 panel-group" >
                <div class="panel panel-default ml-0 mr-0">
                    <div class="panel-heading">
                        <h4 class="panel-title" style={{textAlign:'center'}}>
                            <div class="to_hide" style={{border:'1px solid #e4dddd'}}>
                                <a data-toggle="collapse" href="#collapse1">Categories <span
                                    class="fa fa-caret-down"></span></a>
                            </div>
                        </h4>
                    </div>
                    <div id="collapse1" class="panel-collapse collapse show" style={{marginBottom:'22px'}}>
                        <ul class="list-group yk-list-group">

                            <li class="yk-list-group text-center text-md-left">
                                <div class=" w-100 justify-content-between">
                                    <h5 class="mb-1 text-center text-md-left  yk-title-text">Services</h5>
                                </div>
                                <ul class="list-group list-group-flush">
                                    <li class="yk-list-group text-center text-md-left">3 mins Video Uploaded</li>
                                    <li class="yk-list-group text-center text-md-left">1 min Video Uploaded</li>
                                    <li class="yk-list-group text-center text-md-left">Civic Education</li>
                                    <li class="yk-list-group text-center text-md-left"><a
                                        href="https://play.google.com/store/apps/details?id=com.urchance&hl=en_US"
                                        style={{color:'#666666'}}>Voting Guide</a></li>

                                    <li class="yk-list-group text-center text-md-left">Social Campaign</li>
                                    <li class="yk-list-group text-center text-md-left">Media</li>
                                </ul>
                            </li>

                            <li class="yk-list-group text-center text-md-left">
                                <div class=" w-100 justify-content-between">
                                   <h5 class="mb-1 text-center text-md-left  yk-title-text">News</h5>
                                </div>
                                <ul class="list-group list-group-flush">
                                    <li class="yk-list-group text-center text-md-left">Local News</li>
                                    <li class="yk-list-group text-center text-md-left">International News</li>


                                </ul>
                            </li>
                            <li class="yk-list-group text-center text-md-left">
                                <div class=" w-100 justify-content-between">
                                   <h5 class="mb-1 text-center text-md-left  yk-title-text">Taxes</h5>
                                </div>
                                <ul class="list-group list-group-flush">
                                    <li class="yk-list-group text-center text-md-left"><a
                                        href="http://taxsummaries.pwc.com/ID/Myanmar-Individual-Taxes-on-personal-income"
                                        style={{color:'black'}}>Commercial Tax</a></li>
                                    <li class="yk-list-group text-center text-md-left">Income Tax</li>

                                </ul>
                            </li>
                            <li class="yk-list-group text-center text-md-left">
                                <div class=" w-100 justify-content-between">
                                   <h5 class="mb-1 text-center text-md-left  yk-title-text">Private Videos</h5>
                                </div>
                                <ul class="list-group list-group-flush">
                                    <li class="yk-list-group text-center text-md-left">3 min Video</li>
                                    <li class="yk-list-group text-center text-md-left">1 min Video</li>
                                </ul>
                            </li>
                            <li class="yk-list-group text-center text-md-left">
                                <div class=" w-100 justify-content-between">
                                   <h5 class="mb-1 text-center text-md-left  yk-title-text">Terms Of Use <br></br>Privacy Policy</h5>
                                </div>

                            </li>

                        </ul>

                    </div>
                </div>
        </div>


    );
}

export default Categories;