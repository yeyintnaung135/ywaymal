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

class Topnews extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            news: [],
            runnews: true,
        }
    }

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





            </div>

        )


    }


}

export default Topnews;





