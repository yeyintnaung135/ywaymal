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
        <div class="col-12 col-md-3">
            <div class="panel-group" style={{marginLeft:'12px'}}>
                <div class="panel panel-default">
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

                            <li class="list-group-item">
                                <div class="d-flex w-100 justify-content-between">
                                    <h5 class="mb-1 yk-title-text">Home Services</h5>
                                </div>
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item">3 mins Video Uploaded</li>
                                    <li class="list-group-item">Civil Education</li>
                                    <li class="list-group-item"><a
                                        href="https://play.google.com/store/apps/details?id=com.urchance&hl=en_US"
                                        style={{color:'#666666'}}>Voting Guide</a></li>
                                    <li class="list-group-item">Voting Calculation</li>
                                    <li class="list-group-item">Social Awareness</li>
                                    <li class="list-group-item">Social Campaign</li>
                                    <li class="list-group-item">Media</li>
                                </ul>
                            </li>

                            <li class="list-group-item">
                                <div class="d-flex w-100 justify-content-between">
                                    <h5 class="mb-1 yk-title-text">News</h5>
                                </div>
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item">Local News</li>
                                    <li class="list-group-item">International News</li>


                                </ul>
                            </li>
                            <li class="list-group-item">
                                <div class="d-flex w-100 justify-content-between">
                                    <h5 class="mb-1 yk-title-text">Taxes</h5>
                                </div>
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item"><a
                                        href="http://taxsummaries.pwc.com/ID/Myanmar-Individual-Taxes-on-personal-income"
                                        style={{color:'black'}}>Commercial Tax</a></li>
                                    <li class="list-group-item">Income Tax</li>

                                </ul>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>
        </div>


    );
}

export default Categories;