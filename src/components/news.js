import React from 'react';
import { Card, Row, Col } from 'antd';
import profile from '../assets/profile.png';
import Profile from '../components/profile/profile';
import Nav from './nav';

class News extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isEmptyState: true,
            news:[ ]
        }
    }
    gotoProfile=()=>{
        this.props.history.push("/profile");
    }
    componentDidMount(){
        if(localStorage.getItem("token")){
        //  console.log("someone's logged in")
        }else{
            this.props.history.push("/login");
        }
        fetch('https://hestia-info.herokuapp.com/node', {
            })
            // .then(res => res.json())
            .then(res => console.log(res))
            
            .then(data => {
             console.log(data)
            // this.setState({
            //     news: data.items[0],
            // });
            // console.log(this.state.news)
            // console.log(this.state)
            // console.log(data.items)
            })
     }
    render(){
            return(
            <div>
                <div className="main-title">    
                <Row>
                    <Col span={18}>
                        <h1>News</h1>
                    </Col>
                    <Col span={6}>
                    <img onClick={this.gotoProfile} src={profile} alt="Profile logo"></img>
                    </Col>
                </Row>
 
                </div>
                <div className="main-content">
                    <Card>
                        <Row>
                            <Col span={24}>
                                <div className="news-card-header">
                                    <span>
                                        Heading of card
                                    </span>
                                    <p>4</p>
                                </div>
                                <div className="news-card-content">
                                    <p>This is the description of the news we can show upto 60 words here and then if they want they can click on the link below and visit it. Makes sense eh?</p>
                                </div>
                            </Col>
                            <Col span={24} className="news-bottom-select">
                                <p>
                                    Date and Time
                                </p>
                                <a href="#"> Read full story </a>
                            </Col>
                        </Row>
                    </Card>
                    <Card>
                        <Row>
                            <Col span={24}>
                                <div className="news-card-header">
                                    <span>
                                        Heading of card
                                    </span>
                                    <p>4</p>
                                </div>
                                <div className="news-card-content">
                                    <p>This is the description of the news we can show upto 60 words here and then if they want they can click on the link below and visit it. Makes sense eh?</p>
                                </div>
                            </Col>
                            <Col span={24} className="news-bottom-select">
                                <p>
                                    Date and Time
                                </p>
                                <a href="#"> Read full story </a>
                            </Col>
                        </Row>
                    </Card>
                    <Card>
                        <Row>
                            <Col span={24}>
                                <div className="news-card-header">
                                    <span>
                                        Heading of card
                                    </span>
                                    <p>4</p>
                                </div>
                                <div className="news-card-content">
                                    <p>This is the description of the news we can show upto 60 words here and then if they want they can click on the link below and visit it. Makes sense eh?</p>
                                </div>
                            </Col>
                            <Col span={24} className="news-bottom-select">
                                <p>
                                    Date and Time
                                </p>
                                <a href="#"> Read full story </a>
                            </Col>
                        </Row>
                    </Card>
                    <Card>
                        <Row>
                            <Col span={24}>
                                <div className="news-card-header">
                                    <span>
                                        Heading of card
                                    </span>
                                    <p>4</p>
                                </div>
                                <div className="news-card-content">
                                    <p>This is the description of the news we can show upto 60 words here and then if they want they can click on the link below and visit it. Makes sense eh?</p>
                                </div>
                            </Col>
                            <Col span={24} className="news-bottom-select">
                                <p>
                                    Date and Time
                                </p>
                                <a href="#"> Read full story </a>
                            </Col>
                        </Row>
                    </Card>
                    <Card>
                        <Row>
                            <Col span={24}>
                                <div className="news-card-header">
                                    <span>
                                        Heading of card
                                    </span>
                                    <p>4</p>
                                </div>
                                <div className="news-card-content">
                                    <p>This is the description of the news we can show upto 60 words here and then if they want they can click on the link below and visit it. Makes sense eh?</p>
                                </div>
                            </Col>
                            <Col span={24} className="news-bottom-select">
                                <p>
                                    Date and Time
                                </p>
                                <a href="#"> Read full story </a>
                            </Col>
                        </Row>
                    </Card>
                </div>
                <Nav />
          </div>
        );
    }
}

export default News;