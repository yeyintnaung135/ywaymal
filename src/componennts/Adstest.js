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
                this.setState({ads: res.data})
                // console.log(this.state.sliders[0].id);
                // localStorage.setItem('logintoken',res.data)
            })
        console.log('getads')


    }

    render() {
        return (
            <div>
                {this.state.ads.map(
                    (ads)=>{
                        return(
                            <div>
                                <img className="d-block w-100" src={apiurl + '/backend/admin/ads/' + ads.image}
                                     alt="First slide" style={{height: '300px'}}/>
                                <br></br>
                            </div>


                        )
                    }

                )}


            </div>



        )


    }


}

export default Ads;





