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
import {Link} from "react-router-dom";
import apiurl from '../helpers/apiurl'
import axios from "axios"
import EllipsisText from "react-ellipsis-text";

class Ads extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ads: [],
            secads: []
        }
    }


//will fire before render
    componentWillMount() {
        this.getNews();
    }

//get data from server


    getNews() {
        axios({
            method: 'post',
            url: apiurl + '/api/getadver',
            data: {
                token: 'feef'
            }, headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('logintoken')

            }
        })
            .then(res => {
                console.log('responses from server for ads');
                console.log(res)
                this.setState({ads: res.data.ads})
                this.setState({secads: res.data.secads})
                // console.log(this.state.sliders[0].id);
                // localStorage.setItem('logintoken',res.data)
            })
        console.log('getads')


    }

    render() {
        return (
            <div>
                <div>
                    <div id="ads1" class="carousel slide" data-ride="carousel" style={{height: '300px'}}>

                        <div class="carousel-inner">
                            {this.state.ads.map(
                                (item, key) => {
                                    if (key === 0) {
                                        return (
                                            <div class="carousel-item active">
                                                <img class="d-block w-100"
                                                     src={apiurl + '/backend/admin/ads/' + item.image}
                                                     alt="First slide"
                                                     style={{height: '300px'}}/>
                                            </div>
                                        )
                                    }
                                    else
                                        {
                                            return (
                                                <div class="carousel-item">
                                                    <img class="d-block w-100"
                                                         src={apiurl + '/backend/admin/ads/' + item.image}
                                                         alt="First slide"
                                                         style={{height: '300px'}}/>
                                                </div>
                                            )
                                        }


                                }
                            )}
                        </div>
                        <a class="carousel-control-prev" href="#ads1" role="button" data-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="sr-only">Previous</span>
                        </a>
                        <a class="carousel-control-next" href="#ads1" role="button" data-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="sr-only">Next</span>
                        </a>
                    </div>
                </div>
                <div>
                    <div id="ads2" class="carousel slide" data-ride="carousel" style={{height: '300px'}}>

                        <div class="carousel-inner">
                            {this.state.ads.map(
                                (item, key) => {
                                    if (key === 0) {
                                        return (
                                            <div class="carousel-item active">
                                                <img class="d-block w-100"
                                                     src={apiurl + '/backend/admin/ads/' + item.image}
                                                     alt="First slide"
                                                     style={{height: '300px'}}/>
                                            </div>
                                        )
                                    }
                                    else
                                    {
                                        return (
                                            <div class="carousel-item">
                                                <img class="d-block w-100"
                                                     src={apiurl + '/backend/admin/ads/' + item.image}
                                                     alt="First slide"
                                                     style={{height: '300px'}}/>
                                            </div>
                                        )
                                    }


                                }
                            )}
                        </div>
                        <a class="carousel-control-prev" href="#ads2" role="button" data-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="sr-only">Previous</span>
                        </a>
                        <a class="carousel-control-next" href="#ads2" role="button" data-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="sr-only">Next</span>
                        </a>
                    </div>
                </div>
            </div>
        )


    }


}

export default Ads;





