import React from 'react'
import { Tabs } from 'antd';
import News from './news';
import Feed from './feed';

const { TabPane } = Tabs;


class Nav extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            selected: "feed"
        }
    }
    render(){
        return(
            <div>
                <Tabs tabPosition="bottom">
                    <TabPane tab="Feed" key="feed">
                        <News />
                    </TabPane>
                    <TabPane tab="News" key="news">
                        <Feed />
                    </TabPane>
                </Tabs>
            </div>
        )
    }   
}

export default Nav;