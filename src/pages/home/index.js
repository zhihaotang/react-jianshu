import React, {Component} from 'react';
import Topic from './components/Topic';
import List from './components/List';
import Recommend from './components/Recommend';
import Appqrcode from './components/Appqrcode';
import Writer from './components/Writer';
import BackTop from './components/BackTop';


import {
    HomeWrapper,
    HomeLeft,
    HomeRigth
} from './style'

class Home extends Component {
    render(){
        return(
            <HomeWrapper>
                <HomeLeft>
                    <img alt='' className='banner-img' src ='//upload.jianshu.io/admin_banners/web_images/4676/973faa095266d5335fd5a072e6cfc14dcaf08493.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540'></img>
                    <Topic></Topic>
                    <List></List>
                </HomeLeft>
                <HomeRigth>
                    <Recommend></Recommend>
                    <Appqrcode></Appqrcode>
                    <Writer></Writer>
                </HomeRigth>
                <BackTop></BackTop>
            </HomeWrapper>
        )
    }
}

export default Home;