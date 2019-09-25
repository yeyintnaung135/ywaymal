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
<<<<<<< HEAD
import EllipsisText from "react-ellipsis-text";

import axios from "axios";
import apiurl from "../helpers/apiurl"
import {Link} from "react-router-dom";

=======
import axios from "axios"
>>>>>>> ca0119ed0b045c51699fd6d2609ceabffd11f67d


class MainSlider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sliders: [],
            runslider: true,
        }

    }

<<<<<<< HEAD
    //willmouth method will fire firstly before render

    componentWillMount(){
      this.getslider();

    }
    //get data from server

    getslider() {
           return axios({
                method: 'post',
                url: apiurl+'/api/getsliders',
                data: {
                    token: localStorage.getItem('logintoken')
                }, headers: {
                    'Authorization':'Bearer '+localStorage.getItem('logintoken')
                }
            })
                .then(res => {
                    console.log('responses from server for sliders');
=======
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
>>>>>>> ca0119ed0b045c51699fd6d2609ceabffd11f67d
                    this.setState({sliders: res.data})
                    this.setState({runslider: false});
                    // console.log(this.state.sliders[0].id);
                    // localStorage.setItem('logintoken',res.data)
<<<<<<< HEAD
                });



    }


    render() {


        return (

            <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                <div class="carousel-inner" style={{height: '356px',borderRadius:'5px'}}>
                    {/*// need to creat child component for this section */}
                    {this.state.sliders.map((item, key) => {
                            if (key === 0) {
                                return (
                                <div class="carousel-item active">

                                    <img class="d-block w-100"
                                         src={apiurl+'/backend/admin/news/' + item.images}
                                         alt="First slide"
                                         style={{height: '300px'}}/>
                                    <Link class='btn btn-danger' style={{width:'100%'}} to={{ pathname: "/slider_detail", search: "?slider_id="+item.id }}>
                                        <EllipsisText text={item.description} length={"85"} /> </Link>


                                </div>

                            )
                            }
                            else {
                                return (
                                    <div class="carousel-item ">
                                        {(() => {
                                            if (item.file_type.includes('video')) {
                                                return (
                                                    <video style={{width: '100%',height:'353px'}} controls>
                                                        <source
                                                            src={apiurl+'/backend/admin/news/' + item.file}
                                                            type={item.file_type}/>
                                                        Your browser does not support the video tag.
                                                    </video>)
                                            }else{
                                                return(  <a href={item.link}>
                                                    <img class="d-block w-100"
                                                         src={apiurl+'/backend/admin/news/' + item.images}
                                                         alt="First slide"
                                                         style={{height: '300px'}}/>
                                                    <a class='btn btn-danger' style={{width:'100%'}} href={item.link}>
                                                        <EllipsisText text={item.description} length={"85"} />
                                                    </a>
                                                </a>)
                                            }
                                        })()}


=======
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
>>>>>>> ca0119ed0b045c51699fd6d2609ceabffd11f67d
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