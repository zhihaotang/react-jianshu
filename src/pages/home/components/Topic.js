import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import * as actionCreators from '../store/actionCreators';
import { TopicWrapper,TopicItem ,TopicMore} from '../style'

class Topic extends PureComponent {
    componentDidMount(){
        if(this.props.topicList.toJS().toString() ===[].toString()){
            this.props.getTopList()
        }
    }
    gettopicList = () =>{
        const {topicList} = this.props
        return( topicList.map((item) =>{
            return(<TopicItem key={item.get('id')}>
                <img 
                alt='' 
                className ='topic-img'
                src = {item.get('imgUrl')}
                ></img>
                {item.get('title')}
            </TopicItem>)
        }))
    }
    render(){
        return(
            <TopicWrapper>
                {
                    this.gettopicList()
                }
                <TopicMore>
                    更多热门专题
                </TopicMore>
                
            </TopicWrapper>
        )
    }
}
const mapState = (state) =>({
    topicList:state.getIn(['home','topicList'])
})
const mapDispatch = (dispatch) =>({
    getTopList() {
        dispatch(actionCreators.getHomeList())
    }
})

export default connect(mapState,mapDispatch)(Topic);