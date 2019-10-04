import React from "react";
import "../css/open-iconic-bootstrap.min.css";
import "../css/animate.css";
import "../css/owl.carousel.min.css";
import "../css/owl.theme.default.min.css";
import "../css/magnific-popup.css";
import "../css/aos.css";
import "../css/ionicons.min.css";


import "../css/flaticon.css";
import "../css/icomoon.css";
import "../css/style.css";
import "../css/custom.css";

import apiurl from '../helpers/apiurl';

import Categories from "./Categories";
import Header_menu_cat from "./Header_menu_cat";
import Footerpage from "./footerpage";
import Topnews from "./topnews";
import MetaTags from "react-meta-tags";

import axios from 'axios';

import {redirecttologinifnotauth} from '../helpers/redirecttologinifnotauth';


//this is create component with reactcomponent that is called stateful components
class Videodetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            video: '',
            runvideos: true,
            comments: [],
        }
        this.getvideodetail = this.getvideodetail.bind(this);
        let search = new URLSearchParams(window.location.search);
        this.handleAddVote = this.handleAddVote.bind(this);
        this.handleDeleteVote = this.handleDeleteVote.bind(this);
        this.handleAddComment = this.handleAddComment.bind(this);
        this.modeltohide = this.modeltohide.bind(this);

        this.getvideocomments = this.getvideocomments.bind(this);
        this.id = search.get('id');
    }

    componentWillMount() {
        //redirect if not authenciate
        // redirecttologinifnotauth();real
        this.getvideodetail();

        this.getvideocomments();
    }

    handleDeleteComment(video_id, cmt_id) {
        console.log('delete cmt fired');
        return axios({
            method: 'post',
            url: apiurl + '/api/deletevideocomments',
            data: {
                cmt_id: cmt_id,
                videos_id: video_id
            }, headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('logintoken')
            }
        })
            .then(res => {
                if (res.data != 'deleted') {
                    console.log(res);
                    //re set comments updated data
                    this.setState({comments: res.data});


                    //set comments count decrease one
                    var allvideodata = this.state.video;
                    allvideodata.comments = this.state.video.comments - 1;
                    this.setState({video: allvideodata});
                    //set comments count decrease one


                } else {
                    console.log('Deleted');

                }

            })
    }

    handleAddComment(video_id) {
        console.log('//fire handle add comment to server')
        if (this.refs.comment_textarea.value != '') {
            return axios({
                method: 'post',
                url: apiurl + '/api/addvideocomments',
                data: {
                    videos_id: video_id,
                    comments: this.refs.comment_textarea.value
                }, headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('logintoken')
                }
            })
                .then(res => {
                    console.log('add comment fired');
                    console.log(res.data);
                    console.log(this.refs.comment_textarea.value)

                    //get all comments from state comment and set new object from server with array unshift
                    //unshift will set new obj to the top position of the comments array
                    var allcmts = this.state.comments;
                    allcmts.unshift(res.data)

                    this.setState({comments: allcmts});
                    this.refs.comment_textarea.value = '';

                    //set comments count increase one
                    var allvideodata = this.state.video;
                    allvideodata.comments = this.state.video.comments + 1;
                    this.setState({video: allvideodata});

                    document.getElementById('to_scroll_top').scrollTo(0, 0)


                })
        } else {
            console.log('textarea is empty');
        }

    }

    getvideocomments() {
        console.log('video comment fire');
        return axios({
            method: 'post',
            url: apiurl + '/api/getallcomments',
            data: {
                videos_id: this.id
            }, headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('logintoken')
            }
        })
            .then(res => {
                console.log('response server for comments')
                console.log(res);
                this.setState({comments: res.data})
                window.scrollTo(0, 0);


                // localStorage.setItem('logintoken',res.data)
            })

    }

    //for voting
    handleAddVote(videoid) {


        return axios({
            method: 'post',
            url: apiurl + '/api/addvote',
            data: {
                videos_id: videoid
            }, headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('logintoken')
            }
        })
            .then(res => {
                if (res.data != 'already voted') {
                    console.log('%cResponses from server for addvote', "color:blue;font-size:15px");
                    console.log(res.data)
                    console.log('%c//Add vote state updated and send to server yeeeehaaaa', "color:#dc3545;font-size:15px");
                    var getcurobj = this.state.video;
                    getcurobj.voted = 'yes';
                    getcurobj.total_vote_count = res.data.total_vote_count;
                    this.setState({video: getcurobj});


                } else {
                    console.log("%cResponses from server for addvote '/already voted/'", "color:blue;font-size:15px")
                }


                // localStorage.setItem('logintoken',res.data)
            })
    }


    handleDeleteVote(videoid) {
        return axios({
            method: 'post',
            url: apiurl + '/api/deletevote',
            data: {
                videos_id: videoid
            }, headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('logintoken')
            }
        })
            .then(res => {
                if (res.data != 'deleted') {
                    console.log('%cResponses from server for addvote', "color:blue;font-size:15px");
                    console.log(res.data)
                    console.log('%c//Add vote state updated and send to server yeeeehaaaa', "color:#dc3545;font-size:15px");
                    var getcurobj = this.state.video;
                    getcurobj.voted = 'no';
                    getcurobj.total_vote_count = res.data.total_vote_count;

                    console.log('%c//after change voted value from current object', "color:#dc3545;font-size:10px")
                    console.log(getcurobj)
                    console.log('%c//end after deleted voted from current object', "color:#dc3545;font-size:10px")
                    console.log('%c//get all video objects', "color:#dc3545;font-size:10px")

                    var getallvideosobjects = this.state.video;
                    console.log('%c//end get all video objects', "color:#dc3545;font-size:10px")
                    console.log('%c//updated new objects', "color:#dc3545;font-size:10px")
                    getallvideosobjects = getcurobj;

                    console.log(getallvideosobjects);
                    console.log('%c//end updated new objects', "color:#dc3545;font-size:10px")
                    this.setState({videos: getallvideosobjects});

                    console.log('%c//end updated new objects', "color:#dc3545;font-size:10px")


                } else {
                    console.log("%cResponses from server for addvote '/already voted/'", "color:blue;font-size:15px")
                }


                // localStorage.setItem('logintoken',res.data)
            })

    }

    //for voting

    //to get video detail
    getvideodetail() {
        if (this.state.runvideos) {

            return axios({
                method: 'post',
                url: apiurl + '/api/getvideosbyid/' + this.id,
                data: {
                    token: 'feef'
                }, headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('logintoken')
                }
            })
                .then(res => {
                    console.log('responses from server for videos');
                    this.setState({video: res.data})
                    console.log(this.state.video)
                    localStorage.setItem('video_link', res.data.link)
                    this.setState({runvideos: false});
                    //this is because we need to html5 player unless this player restore from cache it is not good for new videos
                    document.getElementById('to_reload_src').src = apiurl + '/backend/admin/videos/' + res.data.link;
                    document.getElementById('to_reload').load();
                    // localStorage.setItem('logintoken',res.data)
                })
        }
    }
    //to get video detail


    //to hide facebook share model popup

    modeltohide(id) {
        console.log('to model hide');
        document.getElementById('myModal' + id).classList.remove("show");
        console.log('remove show');

        document.getElementById('myModal' + id).classList.remove("fade");
        console.log('remove fade');

        document.getElementById('myModal' + id).style.display = "none";
        document.getElementById('myModal' + id).setAttribute("aria-modal", "false");

    }
    //to hide facebook share model popup


    componentDidMount() {

        window.AOS.init({
            duration: 800,
            easing: 'slide'
        });

        var loader = function () {
            setTimeout(function () {
                window.$('#ftco-loader').removeClass('show');
                console.log('fff');
            }, 1000);
        };
        loader();
        var counter = function () {
            console.log('way point')
            window.$('#section-counter').waypoint(function (direction) {
                if (direction === 'down' && !window.$(this.element).hasClass('ftco-animated')) {
                    var comma_separator_number_step = window.$.animateNumber.numberStepFactories.separator(',')
                    window.$('.number').each(function () {
                        console.log('way point')
                        var $this = window.$(this),
                            num = $this.data('number');
                        console.log(num);
                        $this.animateNumber(
                            {
                                number: num,
                                numberStep: comma_separator_number_step
                            }, 7000
                        );
                    });

                }

            }, {offset: '95%'});

        }
        counter();
        var contentWayPoint = function () {
            var i = 0;
            window.$('.ftco-animate').waypoint(function (direction) {

                if (direction === 'down' && !window.$(this.element).hasClass('ftco-animated')) {

                    i++;

                    window.$(this.element).addClass('item-animate');
                    setTimeout(function () {

                        window.$('body .ftco-animate.item-animate').each(function (k) {
                            var el = window.$(this);
                            setTimeout(function () {
                                var effect = el.data('animate-effect');
                                if (effect === 'fadeIn') {
                                    el.addClass('fadeIn ftco-animated');
                                } else if (effect === 'fadeInLeft') {
                                    el.addClass('fadeInLeft ftco-animated');
                                } else if (effect === 'fadeInRight') {
                                    el.addClass('fadeInRight ftco-animated');
                                } else {
                                    el.addClass('fadeInUp ftco-animated');
                                }
                                el.removeClass('item-animate');
                            }, k * 50, 'easeInOutExpo');
                        });

                    }, 1000);

                }

            }, {offset: '95%'});
        };
        contentWayPoint();
        window.$(document).ready(function () {

            if ((window.screen.width < 900)) {
// if screen size is 1025px wide or larger
                window.$(".collapse").removeClass('show'); // you can also use $(".yourClass").hide();
            }

        });
        window.$(".yk-btn[data-id]").click(function () {
            var dyn = window.$(this).attr("data-id");
            if (window.$("#" + dyn).hasClass("yk-btn-active")) {
                window.$("#" + dyn).removeClass("yk-btn-active")

            } else {
                window.$("#" + dyn).addClass("yk-btn-active")

            }

            console.log(dyn)
        });
        console.log('start')
    }


    render() {
       //for facebook meta data
        function Metatagsforshare(props) {
            return (
                <div className="wrapper">
                    <MetaTags>
                        <meta name="og:description" content={props.description} />
                        <meta property="og:title" content={props.title} />
                        <meta property="og:image" content="path/to/image.jpg" />
                    </MetaTags>
                </div>
            );
        }
        //for facebook meta data

        return (

            <div>
                <Metatagsforshare title={this.state.video.title} description={this.state.video.description}/>
                {/*header section*/}
                <Header_menu_cat name={{one: '', two: '', three: ''}}/>
                <div className="row" style={{marginTop: '22px'}}>
                </div>
                {/*end header section*/}
                {/*body section*/}
                <div className="row col-sm-12">
                    {/*categories section*/}
                    <Categories/>
                    {/*end categories section*/}


                    {/*About Us Section*/}
                    <div className="col-sm-12 col-md-6 col-lg-8">


                        <div class="col-12" style={{paddingTop: '23p'}}>

                            <video id="to_reload" style={{width: '100%', height: 'auto'}} controls>
                                <source id="to_reload_src"
                                        src={apiurl + '/backend/admin/videos/' + localStorage.getItem('video_link')}
                                        type='video/mp4'/>
                                Your browser does not support the video tag.
                            </video>

                            <div class="d-flex justify-content-center">

                                {(() => {
                                    if (this.state.video.voted == 'yes') {
                                        return (
                                            <a onClick={() => this.handleDeleteVote(this.state.video.id)}
                                               class={"btn  btn-sm  btn-danger yk-background"}
                                               style={{color: 'white'}}>
                                                <span class="fa fa-thumbs-down"></span>&nbsp;&nbsp;
                                                Unvote&nbsp;{this.state.video.total_vote_count}
                                            </a>
                                        )
                                    }
                                    else {
                                        return (
                                            <a onClick={() => this.handleAddVote(this.state.video.id)}
                                               class={"btn  btn-sm  btn-danger yk-background"}
                                               style={{color: 'white'}}>
                                                <span class="fa fa-thumbs-up"></span>&nbsp;&nbsp;
                                                Vote&nbsp;{this.state.video.total_vote_count}
                                            </a>
                                        )
                                    }
                                })()}
                                &nbsp;
                                &nbsp;

                                <a href="contact_us" data-toggle="modal" data-target={"#myModal" + this.state.video.id}
                                   class={"btn  btn-sm  btn-danger yk-background"}
                                   style={{color: 'white'}}>
                                    <span class="fa fa-share-alt"></span>&nbsp;&nbsp;Share&nbsp;
                                </a>
                                &nbsp;&nbsp;
                                <a href="contact_us" class={"btn  btn-sm  btn-danger"}
                                   style={{color: 'white'}}>
                                    <span class="fa fa-comments-o"></span>&nbsp;&nbsp;
                                    Comment&nbsp;{this.state.video.comments}
                                </a>

                            </div>
                            <div class="col-12">
                                <p class="yk-title-text-two mt-4">
                                    {this.state.video.title}
                                </p>
                            </div>
                            <div class="col-12">

                                <p class="">
                                    {this.state.video.description}
                                </p>
                            </div>

                            <br></br>
                            <div class="modal fade" id={"myModal" + this.state.video.id}>
                                <div class="modal-dialog">
                                    <div class="modal-content">

                                        {/*<!-- Modal Header -->*/}
                                        <div class="modal-header">
                                            <h4 class="modal-title">Share this video to facebook</h4>

                                            <button type="button" class="close" data-dismiss="modal">&times;</button>
                                        </div>

                                        {/*<!-- Modal body -->*/}
                                        <div class="modal-body">
                                            <div class="fb-share-button"
                                                 onClick={() => this.modeltohide(this.state.video.id)}
                                                 class="btn btn-info"
                                                 style={{color: 'white !important', background: '#3b5998'}}
                                                 data-href="http://localhost:3000/video_detail?id=32"
                                                 data-layout="button_count" data-size="large">
                                                <a target="_blank" style={{
                                                    color: 'white',
                                                    background: '#3b5998'
                                                }}
                                                   href="https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2Flocalhost%3A3000%2Fvideo_detail%3Fid%3D32&amp;src=sdkpreparse"
                                                   class="fb-xfbml-parse-ignore"><span
                                                    class="fa fa-facebook"></span> Share on facebook <span
                                                    class="fa fa-share"></span> </a></div>
                                        </div>

                                        {/*<!-- Modal footer -->*/}
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-danger" data-dismiss="modal">Close
                                            </button>
                                        </div>

                                    </div>
                                </div>
                            </div>

                        </div>


                        <div className="col-sm-12" style={{borderBottom: '4px solid #f1e6be!important'}}>&nbsp;</div>
                        <br></br>


                        {/*comments box*/}
                        <div class="row">
                            <div class="panel panel-default widget col-sm-12">
                                <div class="panel-heading">
                                    <span class="glyphicon glyphicon-comment"></span>
                                    <h4 class="yk-title-text">Recent Comments <span
                                        class="badge badge-pill badge-danger">
                                        {this.state.video.comments}
                                        </span>
                                    </h4>


                                </div>
                                <br></br>
                                {/*//add new comment area*/}
                                <div>

                                    <form>
                                        <div class="form-group">
                                            <label for="inputsm">Type Your Comment</label>
                                            <textarea ref='comment_textarea' class="form-control input-sm"
                                                      type="text"></textarea>
                                            <br></br>

                                            <button type="button"
                                                    onClick={() => this.handleAddComment(this.state.video.id)}
                                                    class="btn btn-danger float-right">Submit
                                            </button>
                                        </div>
                                    </form>
                                </div>
                                {/*//addd new comment area*/}
                                <br></br>
                                <div class="panel-body" id='to_scroll_top'
                                     style={{maxHeight: '642px', height: 'auto', overflow: 'auto'}}>
                                    <ul class="list-group">
                                        {this.state.comments.map((value, key) => {
                                                return (

                                                    <li class="list-group-item"
                                                        style={{borderBottom: '1px solid black', marginBottom: '22px'}}>
                                                        <div class="row">
                                                            <div class="col-sm-12 col-md-12 col-lg-2">
                                                                <img src="http://placehold.it/80"
                                                                     class="img-circle img-responsive"
                                                                     alt=""/></div>
                                                            <div class="col-sm-10 col-md-10 col-lg-8">
                                                                <div>
                                                                    {(() => {
                                                                        if (value.me == 'yes') {
                                                                            return (
                                                                                <a href="http://bootsnipp.com/BhaumikPatel/snippets/4ldn"
                                                                                   style={{
                                                                                       color: '#ffbc42',
                                                                                       fontSize: '16px'
                                                                                   }}>Your Comment
                                                                                </a>
                                                                            )

                                                                        } else {
                                                                            return (
                                                                                <a href="http://bootsnipp.com/BhaumikPatel/snippets/4ldn"
                                                                                   style={{
                                                                                       color: '#ffbc42',
                                                                                       fontSize: '16px'
                                                                                   }}>Anonymously
                                                                                </a>
                                                                            )
                                                                        }
                                                                    })()}
                                                                    <div class="mic-info">
                                                                        {value.created_at}
                                                                    </div>
                                                                </div>
                                                                <div class="comment-text" style={{fontSize: '14px'}}>
                                                                    {value.comments}
                                                                </div>
                                                            </div>
                                                            {/*check ur comments*/}

                                                            {(() => {
                                                                if (value.me == 'yes') {
                                                                    return (
                                                                        <div class="col-sm-12 col-md-2 col-lg-2">
                                                                            <button type="button"
                                                                                    class="btn btn-danger btn-xs float-right"
                                                                                    title="Delete"
                                                                                    style={{borderRadius: '22px'}}
                                                                                    onClick={() => this.handleDeleteComment(this.state.video.id, value.id)}>
                                                                                <span class="fa fa-trash"></span>
                                                                            </button>
                                                                        </div>
                                                                    )
                                                                }
                                                            })()}

                                                            {/*check ur comments*/}


                                                        </div>
                                                    </li>

                                                )
                                            }
                                        )}
                                        <br></br>


                                    </ul>
                                </div>
                                <a href="#" class="btn btn-primary btn-sm btn-block"
                                   role="button"><span
                                    class="fa fa-refresh"></span> More</a>

                            </div>
                        </div>
                        {/*comments box*/
                        }


                    </
                        div>
                    {/*End About Us Section*/}


                    {/*top new and ads section*/
                    }
                    <div className="col-12 col-sm-12 col-md-2 col-lg-2">
                        {/*ads section*/}
                        <img className="d-block w-100"
                             src={process.env.PUBLIC_URL + '/images/aad.png'}
                             alt="First slide" style={{height: '300px'}}/>
                        <br></br>
                        <img className="d-block w-100"
                             src={process.env.PUBLIC_URL + '/images/aad.png'}
                             alt="First slide" style={{height: '300px'}}/>
                        <br></br>
                        {/*end ads section*/}
                        {/*top news section*/}

                        <div style={{border: '2px solid #c7baaf47;padding: 12px'}}>
                            <Topnews/>

                        </div>
                        {/*end top news section*/}


                    </div>
                    {/*top new and ads section*/
                    }
                </
                    div>
                {/*body section*/}

                <section className="ftco-section">
                    <div className="container col-sm-6">


                    </div>
                </section>


                {/*footer section*/
                }
                <Footerpage/>
                {/*end footer section*/
                }

                <div id="ftco-loader" className="show fullscreen">
                    <svg className="circular" width="48px" height="48px">


                        <circle className="path-bg" cx="24" cy="24" r="22" fill="none"
                                strokeWidth="4"
                                stroke="#eeeeee"/>
                        <circle className="path" cx="24" cy="24" r="22" fill="none"
                                strokeWidth="4"
                                strokeMiterlimit="10"

                                stroke="#F96D00"/>
                    </svg>
                </div>
            </div>


        )
            ;
    }

}

export default Videodetail;