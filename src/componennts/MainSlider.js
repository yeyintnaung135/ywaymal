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

    //willmouth method will fire firstly before render

    componentWillMount(){
      this.getslider();

    }
    //get data from server

    getslider() {
        if (this.state.runslider) {
            axios({
                method: 'post',
                url: 'http://localhost/ywaymalbe/public/api/getsliders',
                data: {
                    token: 'feef'
                }, headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('logintoken')
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

            <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                <div class="carousel-inner" style={{height: '356px',borderRadius:'5px'}}>
                    {/*// need to creat child component for this section */}
                    {this.state.sliders.map((item, key) => {
                            if (key === 0) {
                                return (


                                <div class="carousel-item active">

                                    {(() => {
                                        if (item.file_type.includes('video')) {
                                          return (
                                              <video style={{width: '100%',height:'353px'}} controls>
                                              <source
                                                  src={'http://localhost/ywaymalbe/public/backend/admin/news/' + item.file}
                                                  type={item.file_type}/>
                                              Your browser does not support the video tag.
                                          </video>)
                                        }else{
                                           return( <a href={item.link}>
                                                <img class="d-block w-100"
                                                     src={'http://localhost/ywaymalbe/public/backend/admin/news/' + item.file}
                                                     alt="First slide"
                                                     style={{height: '300px'}}/>
                                                   </a>)
                                        }
                                    })()}

                                    <div class="carousel-caption">
                                        <p>
                                            <a href={item.link}
                                               style={{color: 'white'}}>
                                                {item.title}</a></p>
                                    </div>
                                </div>

                            )
                            } else {
                                return (
                                    <div class="carousel-item ">
                                        {(() => {
                                            if (item.file_type.includes('video')) {
                                                return (
                                                    <video style={{width: '100%',height:'353px'}} controls>
                                                        <source
                                                            src={'http://localhost/ywaymalbe/public/backend/admin/news/' + item.file}
                                                            type={item.file_type}/>
                                                        Your browser does not support the video tag.
                                                    </video>)
                                            }else{
                                                return(  <a href={item.link}>
                                                    <img class="d-block w-100"
                                                         src={'http://localhost/ywaymalbe/public/backend/admin/news/' + item.file}
                                                         alt="First slide"
                                                         style={{height: '300px'}}/>
                                                </a>)
                                            }
                                        })()}

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