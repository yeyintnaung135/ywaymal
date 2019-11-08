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
const Footerpage=()=>{
    return (
        <div>
        <footer class="ftco-footer ftco-bg-dark ftco-section">
        <div class="container">
        <div class="row mb-5">
        <div class="col-md">
        <div class="ftco-footer-widget mb-4">
        <h2 class="ftco-heading-2">YwayMal</h2>
        <p>We develope a website, Anonymous Comments & Vote for Candidates, for the 2020 candidates in
    Myanmar, CSOs, NGOs and communities in order to create a better society....</p>
        <ul class="ftco-footer-social list-unstyled float-md-left float-lft mt-5">
        <li class="ftco-animate"><a href="#"><span class="icon-twitter"></span></a></li>
        <li class="ftco-animate"><a href="#"><span class="icon-facebook"></span></a></li>
        <li class="ftco-animate"><a href="#"><span class="icon-instagram"></span></a></li>
        </ul>
        </div>
        </div>
        <div class="col-md">
        <div class="ftco-footer-widget mb-4 ml-md-5">
        <h2 class="ftco-heading-2">Useful Links</h2>
    <ul class="list-unstyled">
        <li><a href="#" class="py-2 d-block">Blog</a></li>
        <li><a href="#" class="py-2 d-block">Rooms</a></li>
        <li><a href="#" class="py-2 d-block">Amenities</a></li>
        <li><a href="#" class="py-2 d-block">Gift Card</a></li>
    </ul>
    </div>
    </div>
    <div class="col-md">
        <div class="ftco-footer-widget mb-4">
        <h2 class="ftco-heading-2">Privacy</h2>
        <ul class="list-unstyled">
        <li><a href="#" class="py-2 d-block">Career</a></li>
        <li><a href="#" class="py-2 d-block">About Us</a></li>
    <li><a href="#" class="py-2 d-block">Contact Us</a></li>
    <li><a href="{{url('logout')}}" class="py-2 d-block">Logout</a></li>
        </ul>
        </div>
        </div>
        <div class="col-md">
        <div class="ftco-footer-widget mb-4">
        <h2 class="ftco-heading-2">Have a Questions?</h2>
    <div class="block-23 mb-3">
        <ul>
        <li><span class="icon icon-map-marker"></span><span class="text">628/636 Merchant Road, Between 29th and 30th street, Yangon · Opens Monday to Friday
    </span>
    </li>
    <li><a href="#"><span class="icon icon-phone"></span><span
class="text">09455092305</span></a></li>
        <li><a href="#"><span class="icon icon-envelope"></span><span
class="text">admin@ywaymal.com</span></a>
    </li>
    </ul>
    </div>
    </div>
    </div>
    </div>
    <div class="row">
        <div class="col-md-12 text-center">

        <p>
    Copyright &copy;
            {/*<script>document.write(new Date().getFullYear());</script>*/}
    All rights reserved | This template is made with
            <i class="icon-heart color-danger"
    aria-hidden="true"></i> by <a
    href="https://colorlib.com" target="_blank">Ye Yint Naung</a>
   </p>
    </div>
    </div>
    </div>
    </footer>
        </div>


    )
}
export default Footerpage;