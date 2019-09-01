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
const Header_menu_cat = () => {
    return (

        <div class="row">
            {/*logo*/}
            <div class="col-sm-12 col-md-3" style={{display: 'inline'}}>
                <img src={process.env.PUBLIC_URL + '/images/logo/faef.png'}
                style={{width: '235px',margin:'12px',marginLeft: '37px',
                    float:'left'}}/>
                {/*<h1 style={{marginTop:'33px'}}>*/}
                    {/*<span style={{color:'#7f7f7f'}}>Yway</span><span*/}
                    {/*style={{color:'#dc3545'}}> Mal</span>*/}
                {/*</h1>*/}
            </div>
            {/*</div>*/}
            {/*search bar*/}
            <div class="col-sm-12 col-md-6">
                <div class="row" style={{paddingTop:'33px'}}>
                    <input type="password" class="form-control yk_search_box"
                           id="pwd"
                           />
                    <button type="submit" class="btn btn-danger">Search</button>
                </div>
            </div>
            {/*/!*end search bar*!/*/}
            {/*/!*Menu section*!/*/}
            <div class="col-sm-12 col-md-3">
                <div class="yk-menu-test">
                    <a href="home" class="btn btn-default yk-temp-menu"
                       style={{borderBottom: '2px solid rgb(220, 53, 69)', color: '#7f7f7f'}}>
                        <span class="fa fa-home"></span>
                        <br></br>
                        Home</a>
                    <a href="about_us" class="btn btn-default yk-temp-menu" style={{color: '#7f7f7f'}}><span
                        class="fa fa-info-circle"></span><br></br>About</a>
                    <a href="contact_us" class="btn btn-default yk-temp-menu" style={{color: '#7f7f7f'}}><span
                        class="fa fa-phone"></span><br></br>Contact Us</a>
                </div>
            </div>

        </div>
    )
}

export default Header_menu_cat