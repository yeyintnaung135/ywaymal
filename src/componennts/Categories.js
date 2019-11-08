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

                            <li class="yk-list-group text-center text-md-left" id="accordion">
                                <div class=" w-100 justify-content-between">
                                    <h5 class="mb-1 text-center text-md-left  yk-title-text" data-toggle="collapse" href="#collapseOne">Services&nbsp; <span class="fa fa-chevron-circle-down" aria-hidden="true"></span>
                                        </h5>
                                </div>
                               
                                 
                                <ul class="list-group list-group-flush collapse"  id="collapseOne" data-parent="#accordion" >
                                    <li class="yk-list-group text-center text-md-left"><a href="https://www.ywaymal.com/threeminsvideos" style={{'color':'#666666'}}>3 mins Video Uploaded</a></li>
                                    <li class="yk-list-group text-center text-md-left"><a href="https://www.ywaymal.com/oneminvideo" style={{'color':'#666666'}}>1 min Video Uploaded</a></li>
                                    <li class="yk-list-group text-center text-md-left">Civic Education</li>
                                     

                                </ul>
                            </li>

                            <li class="yk-list-group text-center text-md-left">
                                <div class=" w-100 justify-content-between">
                                   <h5 class="mb-1 text-center text-md-left  yk-title-text"  data-toggle="collapse" href="#collapseTwo">News &nbsp;<span class="fa fa-chevron-circle-down" aria-hidden="true"></span></h5>
                                </div>
                                    
                                <ul class="list-group list-group-flush  collapse" id="collapseTwo" data-parent="#accordion">
                                    <li class="yk-list-group  text-center text-md-left"><a class="yk-list-group-hover" href="https://www.ywaymal.com/localnews" style={{'color':'#666666'}}>Local News</a></li>
                                    <li class="yk-list-group yk-list-group_hover text-center text-md-left"><a class="yk-list-group-hover" href="https://www.ywaymal.com/globalnews" style={{'color':'#666666'}}>International News</a></li>
                                 </ul>
                            </li>
                            <li class="yk-list-group text-center text-md-left">
                                <div class=" w-100 justify-content-between">
                                   <h5 class="mb-1 text-center text-md-left  yk-title-text"  data-toggle="collapse" href="#collapseThree">Taxes &nbsp;<span class="fa fa-chevron-circle-down" aria-hidden="true"></span></h5>
                                </div>
                              
                                <ul class="list-group list-group-flush collapse" id="collapseThree" data-parent="#accordion">
                                    <li class="yk-list-group text-center text-md-left"><a  href="http://taxsummaries.pwc.com/ID/Myanmar-Individual-Taxes-on-personal-income"
                                        style={{color:'black'}}>Commercial Tax</a></li>
                                    <li class="yk-list-group text-center text-md-left">Income Tax</li>

                                </ul>
                            </li>
                            <br></br>
                            <br></br>

                            <li class="yk-list-group text-center text-md-left">
                                <div class=" w-100 justify-content-between">
                                   <h5 class="mb-1 text-center text-md-left  yk-title-text">Terms Of Use <br></br>Privacy Policy</h5>
                                </div>

                            </li>

                        </ul>

                    </div>
                </div>


    );
}

export default Categories;