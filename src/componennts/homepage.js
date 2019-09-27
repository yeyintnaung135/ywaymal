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
import Topnews from "./topnews"
import Categories from "./Categories";
import Header_menu_cat from "./Header_menu_cat";
import MainSlider from "./MainSlider";
import Footerpage from "./footerpage";

import apiurl from "../helpers/apiurl";
import {connect} from 'react-redux';
import axios from "axios";
import {Link} from "react-router-dom";
import {redirecttologinifnotauth} from '../helpers/redirecttologinifnotauth'



class Homepage extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            // test: [{id: '1', title: 'ffff'}, {id: '2', title: 'pppppp'}],
            videos: [],
            runvideos: true,
            currentPage: 1,//current page
            todosPerPage: 5,//contents per page

        }
        this.handleVideoshow = this.handleVideoshow.bind(this);
        this.handleClick = this.handleClick.bind(this);

        this.testreducer = this.testreducer.bind(this);




    }


    testreducer(){
            console.log(this.props.votes);
     };


    handleVideoshow(event) {
        console.log(event.target.id);//get target id

        this.state.videos.map((value, key) => {

            //get all video id
            if ('to_reload'+value.id != event.target.id) {

                //if not equal target id paused
                //while i used this pure js code becaused it is more easy in this case

                if(document.getElementById('to_reload_src'+value.id) != null) {
                    document.getElementById('to_reload' + value.id).pause();
                }
            }


        });


        console.log(document.getElementById(event.target.id).duration);

    }


    componentWillMount() {
        //start page this method will firstly fire
        //if not authenciate rediret to login from
        // redirecttologinifnotauth();real

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
            currentPage:event.target.id
        });
        //for reload new src
        this.state.videos.map((todo, index)=>{
            if(document.getElementById('to_reload_src'+todo.id) != null){

                console.log(document.getElementById('to_reload_src'+todo.id).src=apiurl+'/backend/admin/videos/'+ todo.link)
                console.log(document.getElementById('to_reload'+todo.id).load())

            }
        })
        //for reload new src



    }

    getVideos() {
        //get data from server
        if (this.state.runvideos) {
            axios({
                method: 'post',
                url: apiurl + '/api/getvideos',
                data: {
                    token: localStorage.getItem('logintoken')
                }, headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('logintoken')
                }
            })
                .then(res => {
                    console.log('responses from server for videos');
                    this.setState({videos: res.data})
                    console.log(res.data)
                    this.setState({runvideos: false});


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
            this.testreducer();

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
                <div className="row mb-5">
                    <div className="col-sm-12 col-md-12 col-xl-5">
                        <video id={'to_reload'+todo.id} style={{width: '100%', height: 'auto'}} onPlaying={this.handleVideoshow} poster={apiurl + '/backend/admin/videos/images/' + todo.image}
                               controls>
                            <source id={'to_reload_src'+todo.id}
                                src={apiurl + '/backend/admin/videos/' + todo.link}
                                type={todo.video_type}/>
                            Your browser does not support the video tag.
                        </video>
                        <div className="col-sm-12">
                            <a href="#">{todo.created_at}</a>
                        </div>
                    </div>
                    <div className="text mt-3  col-sm-12 col-xl-7" style={{padding: '0px'}}>


                        <h3 className="heading yk_text text-center">{todo.title}</h3>
                        <div className="meta mb-2 sm-12">
                            <div className="pr-sm-5">
                                <a href="contact_us" class={"btn  btn-sm  btn-danger yk-background"}
                                   style={{color: 'white'}}>
                                    <span class="fa fa-thumbs-up"></span>&nbsp;&nbsp;Like&nbsp;
                                </a>
                                &nbsp;
                                <a href="contact_us" class={"btn  btn-sm  btn-danger yk-background"}
                                   style={{color: 'white'}}>
                                    <span class="fa fa-share-alt"></span>&nbsp;&nbsp;Share&nbsp;
                                </a>
                                &nbsp;
                                <a href="contact_us" class={"btn  btn-sm  btn-danger yk-background"}
                                   style={{color: 'white'}}>
                                    <span class="fa fa-comments-o"></span>&nbsp;&nbsp;Comment&nbsp;
                                </a>
                                &nbsp;
                                <a href="contact_us" class={"btn  btn-sm  btn-danger yk-background"}
                                   style={{color: 'white'}}>
                                    <span class="fa fa-comments-o"></span>&nbsp;&nbsp;Vote&nbsp;
                                </a>
                                &nbsp;

                                <br></br>

                            </div>


                        </div>

                        <p>

                            <Link to={{pathname: "/video_detail", search: "?id=" + todo.id}}
                                  class="btn btn-sm btn-danger yk-background">
                                See Detail... <span class="fa fa-arrow-circle-right"></span>
                            </Link>

                        </p>
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


                <div className="yk-row col-sm-12">
                    {/*categories section*/}
                    <Categories/>
                    {/*end categories section*/}
                    <div className="col-sm-12 col-md-6 col-lg-8">
                        {/*Selider section*/}
                        <MainSlider/>
                        {/*end slider section*/}


                        <div className="col-sm-12" style={{borderBottom: '2px solid #f1e6be'}}>&nbsp;</div>


                        <div className="col-sm-12">

                            <div className="col-sm-12">&nbsp;</div>
                            <div className="col-md-12" style={{textAlign: 'center'}}>
                                <h5 className="mb-1 yk-title-text" style={{textAlign: 'center'}}>Videos </h5>
                            </div>
                            <div className="col-sm-12">&nbsp;</div>



                            {/*// need to creat child component for this section */}

                            {/*// need to creat child component for this section */}

                            {renderTodos}



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


                    <div className="col-12 col-sm-12 col-md-3 col-lg-2">

                        <img className="d-block w-100" src={process.env.PUBLIC_URL + '/images/aad.png'}
                             alt="First slide" style={{height: '300px'}}/>
                        <br></br>
                        <img className="d-block w-100" src={process.env.PUBLIC_URL + '/images/aad.png'}
                             alt="First slide" style={{height: '300px'}}/>
                        <br></br>


                        {/*//tops news*/}
                        <Topnews/>


                        {/*//tops news*/}

                    </div>

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
function mapStateToProps(state){
    return {
        votesdata:state.VotesReducer
    }
}

export default connect(mapStateToProps)(Homepage);