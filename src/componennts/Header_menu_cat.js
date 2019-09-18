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

        <div class="row pb-4 pb-sm-4 pb-md-4 pb-lg-4" style={{borderBottom: '3px solid #a6263912'}}>


            <div class="col-sm-12 col-md-3" style={{display: 'inline'}}>
                <img src={process.env.PUBLIC_URL + '/images/logo/faef.png'}
                     style={{width: '80%', marginLeft: '5%', marginTop: '4%'}}/>
                {/*<h1 style={{marginTop:'33px'}}>*/}
                {/*<span style={{color:'#7f7f7f'}}>Yway</span><span*/}
                {/*style={{color:'#dc3545'}}> Mal</span>*/}
                {/*</h1>*/}
            </div>
            <br></br>
            <div class="col-sm-12 col-md-9">
                {/*menu*/}

                <div class="col-sm-12 ">
                    <div class="row">
                    <div class="pb-2 pt-2 col-md-6 d-flex justify-content-center justify-content-xs-end  justify-content-md-end">
                        <button class={"btn uni btn-sm btn-danger float-sm-none "}
                        style={{color: 'rgb(220, 168, 63)', background: 'white'}}
                        >
                            <span class="fa fa-info-circle"></span>&nbsp;&nbsp;

                            Unicode</button>
                        &nbsp;
                        <button class={"btn zaw btn-sm btn-danger float-sm-none "}
                           style={{color: 'rgb(220, 168, 63)', background: 'white'}}
                        >
                            <span class="fa fa-info-circle"></span>&nbsp;&nbsp;

                            Zawgyi &nbsp;</button>
                        &nbsp;
                    </div>
                    <div class="pt-sm-2 col-md-6 d-flex justify-content-center justify-content-xs-end  justify-content-md-end">
                        <div class=" ">
                        <a href="home" class={"btn btn-sm btn-danger float-sm-none yk-background"}
                           style={{color: 'white'}}
                        >
                            <span class="fa fa-home"></span>&nbsp;&nbsp;

                            Home</a>
                        &nbsp;
                        <a href="about_us" class={"btn  btn-sm  btn-danger yk-background"}
                           style={{color: 'white'}}
                        >
                            <span class="fa fa-info-circle"></span>&nbsp;&nbsp;

                            About &nbsp;</a>
                        &nbsp;

                        <a href="contact_us" class={"btn  btn-sm  btn-danger yk-background"}
                           style={{color: 'white'}}
                        >
                            <span class="fa fa-phone"></span>&nbsp;&nbsp;

                            Contact&nbsp;</a>
                        </div>

                    </div>
                    </div>
                </div>
                {/*menu*/}
                <div class="row">&nbsp;</div>
                <div class="row ml-2 mr-2" >

                 <form style={{width:'100%'}}>
                     <div class="form-row">
                         <div class="col-sm-4 col-lg-2 mt-3 mt-md-0">

                     <select class="btn btn-lg btn-danger input-lg yk-background" id="sel1" style={{width:'100%',fontSize: '10px',
                         fontWeight: 'bolder'}}  required={'required'}>
                        <option>Township&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    </option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                    </select>
                         </div>
                         <div class="col-sm-4 col-lg-2 mt-3 mt-md-0">
                             <select class="btn btn-lg btn-danger input-lg yk-background" id="sel1" style={{width:'100%',fontSize: '10px',
                                 fontWeight: 'bolder'}}  required={'required'}>
                                 <option >Constituency
                                     No.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </option>
                                 <option>2</option>
                                 <option>3</option>
                                 <option>4</option>
                             </select>
                         </div>
                         <div class="col-sm-4 col-lg-2 mt-3 mt-md-0">

                             <select class="btn btn-lg btn-danger input-lg yk-background" id="sel1" style={{width:'100%',fontSize: '10px',
                                 fontWeight: 'bolder'}}  required={'required'}>
                                 <option>Constituencies &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    </option>
                                 <option>2</option>
                                 <option>3</option>
                                 <option>4</option>
                             </select>
                         </div>
                         <div class="col-sm-4 col-lg-2 mt-3 mt-lg-0">
                             <select class="btn btn-lg btn-danger input-lg yk-background" id="sel1" style={{width:'100%',fontSize: '10px',
                                 fontWeight: 'bolder'}}  required={'required'}>
                                 <option>Name&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</option>
                                 <option>2</option>
                                 <option>3</option>
                                 <option>4</option>
                             </select>
                         </div>
                         <div class="col-sm-4 col-lg-4 mt-3 mt-lg-0">
                             <button type="submit" class="btn btn-danger " style={{color:'#dca83f',background:'white',width:'100%'}}> <span class="fa fa-search"></span> Search </button>
                         </div>

                     </div>
                </form>
                </div>


            </div>
            {/*menu*/}

            {/*search*/}
            {/*<div class="col-sm-12 col-md-8" style={{paddingTop: '32px'}}>*/}
                {/*<form style={{width: '100%', paddingLeft: '12px', paddingRight: '12px'}}>*/}
                    {/*<div class="input-group">*/}
                        {/*<input type="search" placeholder="What're you searching for?" aria-describedby="button-addon5"*/}
                               {/*class="form-control"/>*/}
                        {/*<div class="input-group-append">*/}
                            {/*<button id="button-addon5" type="submit" class="btn btn-danger"><i class="fa fa-search"></i>Search*/}
                            {/*</button>*/}
                        {/*</div>*/}
                    {/*</div>*/}
                {/*</form>*/}
            {/*</div>*/}

            {/*<div class="col-sm-12 col-md-3 yk-menu-test mt-sm-4 mt-md-0">*/}
                {/*<div class="pt-md-4">*/}
                    {/*<a href="home" class={"btn btn-default yk-temp-menu " + props.name.one} style={{color: '#7f7f7f'}}*/}
                    {/*>*/}
                        {/*<span class="fa fa-home"></span>*/}
                        {/*<br></br>*/}
                        {/*Home</a>*/}
                    {/*<a href="about_us" className={"btn btn-default yk-temp-menu " + props.name.two}*/}
                       {/*style={{color: '#7f7f7f'}}><span*/}
                        {/*class="fa fa-info-circle"></span><br></br>About</a>*/}
                    {/*<a href="contact_us" class={"btn btn-default yk-temp-menu " + props.name.three}*/}
                       {/*style={{color: '#7f7f7f'}}><span*/}
                        {/*class="fa fa-phone"></span><br></br>Contact</a>*/}
                {/*</div>*/}
            {/*</div>*/}
            {/*search*/}

        </div>
    )
}

export default Header_menu_cat