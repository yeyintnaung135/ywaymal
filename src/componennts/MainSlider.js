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
import axios from "axios"


class MainSlider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sliders: [],
            runslider: true,
        }

    }

    getSliders() {
        //get data from server
        if (this.state.runslider) {
            axios({
                method: 'post',
                url: 'https://admin.ywaymal.com/api/getsliders',
                data: {
                    token: 'feef'
                }, headers: {
                    'Authorization': 'Bearer ' + 'feafea'
                }
            })
                .then(res => {
                    console.log('responses from server for videos');
                    this.setState({sliders: res.data})
                    this.setState({runslider: false});
                    // console.log(this.state.sliders[0].id);
                    // localStorage.setItem('logintoken',res.data)
                })
            console.log('fefae')
        }
        else {
            console.log(this.state.sliders.length)
        }
        console.log('sliders')

    }

    render() {

        return (

            <div id="carouselExampleControls" class="carousel slide" onLoad={this.getSliders()} data-ride="carousel">
                <div class="carousel-inner" style={{height: '300px'}}>
                    {/*// need to creat child component for this section */}

                    {this.state.sliders.map((item, key) => {
                            if (key === 0) {
                                return (
                                    <div class="carousel-item active">
                                        <a href={item.link}>
                                            <img class="d-block w-100"
                                                 src={'https://admin.ywaymal.com/backend/admin/news/' + item.file}
                                                 alt="First slide"
                                                 style={{height: '300px'}}/>
                                        </a>
                                        <div class="carousel-caption">
                                            <p>
                                                <a href="https://www.mmtimes.com/news/ethnic-armed-alliance-launches-coordinated-attacks-six-places.html"
                                                   style={{color: 'white'}}>
                                                    {item.title}</a></p>
                                        </div>
                                    </div>

                                )
                            } else {
                                return (

                                    <div class="carousel-item ">
                                        <a href="https://www.mmtimes.com/news/ethnic-armed-alliance-launches-coordinated-attacks-six-places.html">
                                            <img class="d-block w-100"
                                                 src={'https://admin.ywaymal.com/backend/admin/news/' + item.file}
                                                 alt="First slide"
                                                 style={{height: '300px'}}/>
                                        </a>
                                        <div class="carousel-caption">
                                            <p>
                                                <a href="https://www.mmtimes.com/news/ethnic-armed-alliance-launches-coordinated-attacks-six-places.html"
                                                   style={{color: 'white'}}>
                                                    {item.title}</a></p>
                                        </div>
                                    </div>


                                )

                            }
                        }
                    )}
                    {/*// need to creat child component for this section */}


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
}

export default MainSlider