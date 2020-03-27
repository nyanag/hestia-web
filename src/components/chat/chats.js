import React from 'react'
import Messages from './messages';
import { Card, Row, Col } from 'antd';
import { Input } from 'antd';
import Report from '../../assets/Report.svg';
import backbutton from '../../assets/backbutton.png';
import { ChatFeed, Message } from 'react-chat-ui'
import './chat.css';

const { Search } = Input;
class Chat extends React.Component{
    constructor(props){
        super(props);
        this.state={
            currentUser: null,
            messages: [
                new Message({
                  id: 1,
                  message: "This is a long message maybe three lines long ",
                  senderName:"Name"
                }), // Gray bubble
                new Message({ id: 0,
                     message: "This is a short message!",
                    senderName:"Another Name" }), // Blue bubble
                new Message({
                       id: 1,
                       message: "This is a long message maybe three lines long ",
                       senderName:"Name"
                     }), // Gray bubble
                new Message({ id: 0,
                         message: "This is a short message!",
                        senderName:"Another Name" }) ,               
              ],
        }
    }


    render(){
        return(
            <div>
            <div>    
                <Row style={{marginTop:20}}>
                    <Col span={4}>
                       <img src={backbutton} alt = "Back-button" style = {{ width: "15vw",height: "8vh", marginLeft:"10px"}}></img>
                    </Col>
                    <Col span={16}>
                        <h1 style = {{fontSize:14, textAlign:"center"}}>Person Name</h1>
                        <h2 style = {{fontSize:14, textAlign:"center"}}>Item Name</h2>
                    </Col>
                    <Col span={4}>
                    <img src={Report} alt="Report logo" style ={{ marginTop: "10px"}}></img>
                    </Col>
                </Row>
            </div>
            {/* <ChatFeed
               messages={this.state.messages} // Boolean: list of message objects
               isTyping={this.state.is_typing} // Boolean: is the recipient typing
               hasInputField={false} // Boolean: use our input, or use your own
               showSenderName // show the name of the user who sent the message
               bubblesCentered={false} //Boolean should the bubbles be centered in the feed?
               // JSON: Custom bubble styles
               bubbleStyles={
                 {
                   text: {
                     fontSize: 12
                   },
                   chatbubble: {
                     borderRadius: 10,
                     padding: 20,
                    //  backgroundColor: "#00d2d2"
                   },
                 }
               }
             /> */}
               <Card style={{ width: "80%", backgroundColor: "#00d2d2", float:"left" }}>
                <h4>Name</h4>
                <p>This is a long message. Maybe two to three lines.</p>
                <p><i>Date and Time</i></p>
              </Card>
              <Card style={{ width: "65%", backgroundColor: "#fff", float:"right" }}>
                <h4>Your name</h4>
                <p>This is the reply</p>
                <p><i>Date and Time</i></p>
              </Card>
            <div>
            <Input placeholder="Enter your message" className = "Send" suffix="Send" />         
            
            </div>
            {/* <Messages /> */}
            </div>
        );
    }
}
export default Chat;