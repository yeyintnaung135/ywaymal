import React from "react";
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
import "../css/custom.css";
import Topnews from "./topnews";
import Categories from "./Categories";
import Ads from "./Ads";
import Header_menu_cat from "./Header_menu_cat";
import MainSlider from "./MainSlider";
import Footerpage from "./footerpage";
import apiurl from "../helpers/apiurl";
import Addvotetoserver from "../helpers/Addvotetoserver";
import {connect} from 'react-redux';
import axios from "axios";
import {Link} from "react-router-dom";
import {redirecttologinifnotauth} from '../helpers/redirecttologinifnotauth'
import Tooglevoteform from "./togglevoteform";
import {FacebookShareButton} from 'react-share';
import EllipsisText from "react-ellipsis-text";


class Globalnews extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            // test: [{id: '1', title: 'ffff'}, {id: '2', title: 'pppppp'}],
            videos: [],
            click_cover_from_rapid: [],
            videos_id: '',
            voteds: [],
            runvideos: true,
            currentPage: 1,//current page
            todosPerPage: 12,//contents per page

        }
        this.handleClick=this.handleClick.bind(this);

    }



    //add vote to database


    componentWillMount() {
        //start page this method will firstly fire
        //if not authenciate rediret to login from
        // redirecttologinifnotauth();

        var loader = function () {
            setTimeout(function () {
                window.$('#ftco-loader').removeClass('show');
                console.log('fff');
            }, 3000);
        };
        loader();

        if (document.referrer.includes('video_detail') || document.referrer.includes('news_detail')) {
            {
                //check if reloaded once already
                if (!localStorage.getItem('firstLoad')) {
                    //if not reloaded once, then set firstload to true
                    localStorage.setItem('firstLoad', true);
                    //reload the webpage using reload() method
                    window.location.reload();
                }
                else
                    localStorage.removeItem('firstLoad');
            }
        }
    }



    handleClick(event) {
        // pagination.event
        console.log(event.target.id)
        this.setState({
            currentPage: event.target.id
        });



    }


    getVideos() {
        //get data from server
        if (this.state.runvideos) {
            axios({
                method: 'post',
                url: apiurl + '/api/globalnews',
                data: {
                    token: localStorage.getItem('logintoken')
                }, headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('logintoken')
                }
            })
                .then(res => {
                    console.log('responses from server for localnes');
                    this.setState({videos: res.data})
                    console.log(res.data)
                    this.setState({runvideos: false});
                    console.log('fef');
                    // localStorage.setItem('logintoken',res.data)
                })
            console.log(this.state.runvideos)
        }
        else {
            console.log(this.state.videos.length)
        }

    }


    render() {
        {
            this.getVideos();
        }
        const name = index => {
            var joined = this.state.videostoplay.concat(index);
            this.setState({videostoplay: joined})
        }
        const videos = this.state.videos;
        const currentPage = this.state.currentPage;
        const todosPerPage = this.state.todosPerPage;
        // Logic for displaying current contents
        const indexOfLastTodo = currentPage * todosPerPage;
        const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
        // const currentTodosc = _.chunk(this.state.test,1)
        const currentTodos = videos.slice(indexOfFirstTodo, indexOfLastTodo)
        const renderTodos = currentTodos.map((todo, index) => {
            return (
                <div className="mb-5 col-12 col-sm-6 col-lg-4 pl-2" id="toscroll">

                    <div className="text mt-3 row  no-gutters" style={{padding: '0px',display:'block'}}>

                        <div className="text-center" style={{
                            clear:'both',
                            fontSize: '14px',
                            color: 'rgb(148, 143, 143)',
                            fontWeight: 'bold'
                        }}>   {(() => {
                            if (todo.description !== null) {
                                return (
                                    <Link to={{ pathname: "/news_detail", search: "?news_id="+todo.id }}>
                                        <div className="row mt-4 mt-sm-4 mt-md-0">
                                            <div class="col-6 col-md-12 ">
                                                <img src={apiurl+'/backend/admin/news/' + todo.file}
                                                     className="align-self-start mr-3" style={{width: '100%'}}/>
                                            </div>
                                            <div class="col-6 col-md-12 ">
                                                <p style={{fontSize: '14px',fontWeight:"bold",color:"#666666",wordWrap:"break-word"
                                                }}>
                                                    <EllipsisText text={todo.title} length={"30"} />
                                                </p>
                                                <p style={{fontSize: '14px',color:"#ffbc42"}}>Date:{todo.created_at}</p>
                                            </div>
                                        </div>
                                    </Link>

                                )
                            } else {
                                return (
                                    <a href={todo.link}>
                                        <div className="row mt-4 mt-sm-4 mt-md-0">
                                            <div class="col-6 col-md-12 col-lg-12">

                                                <img src={apiurl+'/backend/admin/news/' + todo.file}
                                                     className="align-self-start mr-3" style={{width: '100%'}}/>
                                            </div>
                                            <div class="col-6 col-md-12 col-lg-12">
                                                <p style={{fontSize: '14px',fontWeight:"bold",color:"#666666"}}>
                                                    <EllipsisText text={todo.title} length={"30"} />
                                                </p>
                                                <p style={{fontSize: '14px',color:"#ffbc42"}}>Date:{todo.created_at}</p>
                                            </div>



                                        </div>
                                    </a>
                                )
                            }
                        })()}
                        </div>


                        <div className="meta mb-2 sm-12 d-flex justify-content-center ">

                            {/*<Link to={{pathname: "/video_detail", search: "?id=" + todo.id}}*/}
                            {/*class="btn btn-sm btn-danger yk-background">*/}
                            {/*See Detail... <span class="fa fa-arrow-circle-right"></span>*/}
                            {/*</Link>*/}

                        </div>


                    </div>


                </div>
            )
                ;
        });

        // Logic for displaying page numbers
        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(videos.length / todosPerPage); i++) {
            pageNumbers.push(i);
        }

        const renderPageNumbers = pageNumbers.map(number => {
            if (number === this.state.currentPage) {
                return (
                    <li style={{
                        textAlign: 'center',
                        display: 'inline-block',
                        width: '40px',
                        height: '40px',
                        lineHeight: '40px',
                        borderRadius: '50%',
                        border: '1px solid #ffd637'
                    }}
                        key={number}
                        id={number}
                        onClick={this.handleClick}
                    >

                        {number}
                    </li>
                )
            } else {
                return (
                    <li style={{
                        textAlign: 'center',
                        display: 'inline-block',
                        width: '40px',
                        height: '40px',
                        lineHeight: '40px',
                        borderRadius: '50%',
                        border: '1px solid #ffd637'
                    }}
                        key={number}
                        id={number}
                        onClick={this.handleClick}
                    >

                        {number}

                    </li>)
            }
            ;
        });


        return (


            <div onLoad={this.chackandredirect}>
                {/*//test*/}
                {/*header section*/}
                <Header_menu_cat name={{one: 'menu_active', two: '', three: ''}}/>

                <div className="row" style={{marginTop: '22px'}}>


                </div>


                <div className="row no-gutters pb-4 pb-sm-4 pb-md-4 pb-lg-4 ml-2 mr-2 md-2 ml-md-4 mr-md-4">
                    {/*categories section*/}
                    <Categories/>
                    {/*end categories section*/}
                    <div className="col-sm-12 col-md-6 col-lg-8" >

                        <div className="col-sm-12">
                            <div className="col-md-12 pt-0 " style={{textAlign: 'center'}}>
                                <h5 className="yk-title-text" style={{textAlign: 'center'}}>
                                    Global News </h5>
                            </div>


                            {/*// need to creat child component for this section */}

                            {/*// need to creat child component for this section */}
                            <div className="row no-gutters">
                                {renderTodos}
                            </div>


                            <div className="row col-sm-12 mt-5">
                                <div className="col text-center">
                                    <div className="block-27">

                                        <ul>
                                            <li><a href="#">&lt;</a></li>
                                            {renderPageNumbers}

                                            <li><a href="#">&gt;</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>


                        </div>


                        {/*end for video loop*/}


                    </div>
                    {/*top new section*/}

                    {/*//ads*/}
                    <div className="col-12 col-sm-12 col-md-3 col-lg-2">
                        <Ads/>
                        <Topnews/>

                    </div>
                    {/*//ads*/}
                    {/*end ads section*/}
                </div>
                {/*body section*/}
                <section className="ftco-section">
                    <div className="container col-sm-6">


                    </div>
                </section>
                {/*footer section*/}
                <Footerpage/>
                {/*end footer section*/}

                <div id="ftco-loader" className="show fullscreen">
                    <svg className="circular" width="48px" height="48px">

                        <circle className="path-bg" cx="24" cy="24" r="22" fill="none" strokeWidth="4"
                                stroke="#eeeeee"/>
                        <circle className="path" cx="24" cy="24" r="22" fill="none" strokeWidth="4"
                                strokeMiterlimit="10"

                                stroke="#F96D00"/>
                    </svg>
                </div>
            </div>


        )
            ;
    }
}





export default Globalnews;

