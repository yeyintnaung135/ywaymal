import React from 'react';
// import "../css/open-iconic-bootstrap.min.css";
import "../css/animate.css";
import "../css/owl.carousel.min.css";
import "../css/owl.theme.default.min.css";
import "../css/magnific-popup.css";
import "../css/aos.css";
import "../css/ionicons.min.css";
// import "../css/bootstrap-datepicker.css";
import "../css/jquery.timepicker.css";
import "../css/flaticon.css";
import "../css/icomoon.css";
import "../css/style.css";

const Header_menu_cat = props => {
    return (

        <div class="row pb-4 pb-sm-4 pb-md-4 pb-lg-4" style={{borderBottom: '3px solid #a6263912'}} >



            <div class="col-sm-12 col-md-3" style={{display: 'inline'}}>
            <img src={process.env.PUBLIC_URL + '/images/logo/faef.png'}
            style={{ width: '80%',marginLeft: '5%',marginTop:'4%'}}/>
            {/*<h1 style={{marginTop:'33px'}}>*/}
            {/*<span style={{color:'#7f7f7f'}}>Yway</span><span*/}
            {/*style={{color:'#dc3545'}}> Mal</span>*/}
            {/*</h1>*/}
            </div>


            <div class="col-sm-12 col-md-6" style={{paddingTop:'32px'}}>
            <form style={{width:'100%',paddingLeft:'12px',paddingRight:'12px'}} >
            <div class="input-group">
            <input type="search" placeholder="What're you searching for?" aria-describedby="button-addon5" class="form-control"/>
            <div class="input-group-append">
            <button id="button-addon5" type="submit" class="btn btn-danger"><i class="fa fa-search"></i>Search</button>
            </div>
            </div>
            </form>
            </div>

            <div class="col-sm-12 col-md-3 yk-menu-test mt-sm-4 mt-md-0">
            <div class="pt-md-4">
            <a href="home" class={"btn btn-default yk-temp-menu " +props.name.one} style={{color: '#7f7f7f'}}
            >
            <span class="fa fa-home"></span>
            <br></br>
            Home</a>
            <a href="about_us" className={"btn btn-default yk-temp-menu " +props.name.two} style={{color: '#7f7f7f'}}><span
            class="fa fa-info-circle"></span><br></br>About</a>
            <a href="contact_us" class={"btn btn-default yk-temp-menu " +props.name.three} style={{color: '#7f7f7f'}}><span
            class="fa fa-phone"></span><br></br>Contact</a>
            </div>
            </div>



        </div>
    )
}

export default Header_menu_cat