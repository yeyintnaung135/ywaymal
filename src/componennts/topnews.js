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
import {Link} from "react-router-dom";
import apiurl from '../helpers/apiurl'

import axios from "axios"
import EllipsisText from "react-ellipsis-text";
=======
import axios from "axios"
>>>>>>> ca0119ed0b045c51699fd6d2609ceabffd11f67d

class Topnews extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            news: [],
            runnews: true,
        }
    }

<<<<<<< HEAD
//will fire before render
    componentWillMount() {
        this.getNews();
    }

//get data from server


        getNews() {
        if (this.state.runnews) {
            axios({
                method: 'post',
                url: apiurl+'/api/getnews',
                data: {
                    token: 'feef'
                }, headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('logintoken')
=======
    getNews() {
        //get data from server
        if (this.state.runnews) {
            axios({
                method: 'post',
                url: 'https://admin.ywaymal.com/api/getnews',
                data: {
                    token: 'feef'
                }, headers: {
                    'Authorization': 'Bearer ' + 'feafea'
>>>>>>> ca0119ed0b045c51699fd6d2609ceabffd11f67d
                }
            })
                .then(res => {
                    console.log('responses from server for videos');
                    this.setState({news: res.data})
                    this.setState({runnews: false});
                    // console.log(this.state.sliders[0].id);
                    // localStorage.setItem('logintoken',res.data)
                })
            console.log('getnews')
        }
        else {
        }

    }

    render() {
        return (
<<<<<<< HEAD
            <div style={{border: '2px solid #c7baaf47;padding: 12px'}}>
                <h4 class="yk-title-text">Top News</h4>
                {this.state.news.map((item, key) =>{
                    // check our news or other news
                    if(item.description != null) {
                        return (
                            <Link to={{ pathname: "/news_detail", search: "?news_id="+item.id }}>
                                                   <div className="row mt-4 mt-sm-4 mt-md-0">
                                    <div class="col-6 col-md-12 col-lg-6">
                                        <img src={apiurl+'/backend/admin/news/' + item.file}
                                             className="align-self-start mr-3" style={{width: '100%'}}/>
                                    </div>
                                    <div class="col-6 col-md-12 col-lg-6">
                                            <p style={{fontSize: '14px',fontWeight:"bold",color:"#666666",wordWrap:"break-word"
                                            }}>
                                                <EllipsisText text={item.description} length={"111"} />
                                            </p>
                                            <p style={{fontSize: '14px',color:"#ffbc42"}}>Date:{item.created_at}</p>
                                    </div>
                                </div>
                            </Link>
                        )
                    }
                    else{
                        return (

                            <a href={item.link}>
                                <div className="row mt-4 mt-sm-4 mt-md-0">
                                    <div class="col-6 col-md-12 col-lg-6">

                                    <img src={apiurl+'/backend/admin/news/' + item.file}
                                         className="align-self-start mr-3" style={{width: '100%'}}/>
                                    </div>
                                    <div class="col-6 col-md-12 col-lg-6">
                                        <p style={{fontSize: '14px',fontWeight:"bold",color:"#666666"}}>
                                            <EllipsisText text={item.link} length={"21"} />
                                        </p>
                                        <p style={{fontSize: '14px',color:"#ffbc42"}}>Date:{item.created_at}</p>

                                    </div>

                                </div>
                            </a>
                        )
                    }
                }

                )}


=======
            <div style={{border: '2px solid #c7baaf47;padding: 12px'}} onLoad={this.getNews()}>
                <h4>Top News</h4>
                {this.state.news.map((item, key) =>

                <a href={item.link}>
                    <div className="media">
                        <img src={'https://admin.ywaymal.com/backend/admin/news/' + item.file}
                             className="align-self-start mr-3" style={{width: '81px'}}/>
                        <div className="media-body">
                            <p style={{fontSize: '14px'}}>{item.title}</p>
                        </div>
                    </div>
                </a>
                )}





>>>>>>> ca0119ed0b045c51699fd6d2609ceabffd11f67d
            </div>

        )


    }


}

export default Topnews;





