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

const MainSlider = () => {
    return (

        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner" style={{height:'300px'}}>
                <div class="carousel-item active">
                    <a href="https://www.mmtimes.com/news/ethnic-armed-alliance-launches-coordinated-attacks-six-places.html">
                        <img class="d-block w-100" src={process.env.PUBLIC_URL + '/images/logo/logo.jpg'} alt="First slide"
                             style={{height:'300px'}}/>
                    </a>
                    <div class="carousel-caption">
                        <p>
                            <a href="https://www.mmtimes.com/news/ethnic-armed-alliance-launches-coordinated-attacks-six-places.html"
                               style={{color:'white'}}>
                                Ethnic armed alliance launches coordinated attacks in six places</a></p>
                    </div>
                </div>
                <div class="carousel-item">
                    <a href="https://www.mmtimes.com/news/ethnic-armed-alliance-launches-coordinated-attacks-six-places.html">
                        <img class="d-block w-100" src={process.env.PUBLIC_URL + '/images/logo/logo.jpg'} alt="First slide"
                             style={{height:'300px'}}/>
                    </a>
                    <div class="carousel-caption">
                        <p>
                            <a href="https://www.mmtimes.com/news/ethnic-armed-alliance-launches-coordinated-attacks-six-places.html"
                               style={{color:'white'}}>
                                Ethnic armed alliance launches coordinated attacks in six places</a></p>
                    </div>
                </div>
                {/*<div class="carousel-item">*/}
                    {/*<a href="https://www.irrawaddy.com/news/burma/one-killed-4-hurt-rescue-team-hit-rpg-sniper-myanmars-shan-state.html">*/}
                        {/*<img class="d-block w-100" src="{{url('images/2.jpg')}}" alt="Second slide"*/}
                             {/*style="height:300px;">*/}
                    {/*</a>*/}
                    {/*<div class="carousel-caption">*/}
                        {/*<p>*/}
                            {/*<a href="https://www.irrawaddy.com/news/burma/one-killed-4-hurt-rescue-team-hit-rpg-sniper-myanmars-shan-state.html"*/}
                               {/*style="color:white;">*/}
                                {/*One Killed, 4 Hurt as Rescue Team Hit by RPG, Sniper in Myanmar's Shan State</a></p>*/}
                    {/*</div>*/}
                {/*</div>*/}
                {/*<div class="carousel-item">*/}
                    {/*<a href="http://7daydaily.com/story/163960">*/}
                        {/*<img class="d-block w-100" src="{{url('images/313.jpg')}}" alt="Second slide"*/}
                             {/*style="height:300px;">*/}
                    {/*</a>*/}
                    {/*<div class="carousel-caption">*/}
                        {/*<p><a href="http://7daydaily.com/story/163960" style="color:white;">*/}
                            {/*ျမစ္ဆံုအနီး တရားမဝင္ေရႊတူးေဖာ္သည့္ လုပ္ငန္းကို ဝင္ေရာက္ဖမ္းဆီး</a></p>*/}
                    {/*</div>*/}
                {/*</div>*/}
                {/*<div class="carousel-item">*/}
                    {/*<a href="http://7daydaily.com/story/163933">*/}
                        {/*<img class="d-block w-100" src="{{url('images/3555.jpg')}}" alt="Second slide"*/}
                             {/*style="height:300px;">*/}
                    {/*</a>*/}
                    {/*<div class="carousel-caption">*/}
                        {/*<p><a href="http://7daydaily.com/story/163933" style="color:white;">*/}
                            {/*စီးပြားေရးလုပ္ငန္းသံုး ဒံုးပ်ံယာဥ္ကို တ႐ုတ္အစိုးရ ေအဂ်င္စီ ေအာင္ျမင္စြာ လႊတ္တင္</a></p>*/}
                    {/*</div>*/}
                {/*</div>*/}
                {/*<div class="carousel-item">*/}
                    {/*<a href="http://7daydaily.com/story/163671">*/}
                        {/*<img class="d-block w-100" src="{{url('images/666.jpg')}}" alt="Second slide"*/}
                             {/*style="height:300px;">*/}
                    {/*</a>*/}
                    {/*<div class="carousel-caption">*/}
                        {/*<p><a href="http://7daydaily.com/story/163671" style="color:white;">*/}
                            {/*ေလဆိပ္အရာရွိမ်ားက ဆႏၵျပပြဲမ်ားကို တားျမစ္ၿပီးေနာက္ ေဟာင္ေကာင္တြင္ ေလေၾကာင္းခရီးစဥ္မ်ား*/}
                            {/*ျပန္စ</a></p>*/}
                    {/*</div>*/}
                {/*</div>*/}
            </div>
            <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
        </div>

)
}
export default MainSlider