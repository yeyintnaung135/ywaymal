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
                <img src={process.env.PUBLIC_URL + '/images/logo/logo.jpg'}
                style={{width: '92px',margin:'12px',float:'left',border: '3px solid #b49e8d96',borderBottom: '16px'}}/>
                <h1 style={{marginTop:'33px'}}>
                    <span style={{color:'#7f7f7f'}}>Yway</span><span
                    style={{color:'#dc3545'}}> Mal</span>
                </h1>
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
                    <a href="#" class="btn btn-default yk-temp-menu"
                       style={{borderBottom: '2px solid #debf29', color: '#7f7f7f'}}>
                        <span class="fa fa-home"></span>
                        <br></br>
                        Home</a>
                    <a href="#" class="btn btn-default yk-temp-menu" style={{color: '#7f7f7f'}}><span
                        class="fa fa-info-circle"></span><br></br>About</a>
                    <a href="#" class="btn btn-default yk-temp-menu" style={{color: '#7f7f7f'}}><span
                        class="fa fa-info-circle"></span><br></br>Services</a>
                </div>
            </div>

        </div>
    )
}

export default Header_menu_cat