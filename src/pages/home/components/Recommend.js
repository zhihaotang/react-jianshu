import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {
    RecommendWrapper,
    RecommendItem
} from '../style';

class Recommend extends PureComponent {
    getList = () =>{
        const {list} =this.props;
        return(
            list.map((item) =>{
                return(<RecommendItem key ={item.get('id')}>
                    <img alt=''
                    className='recpic'
                    src ={item.get('imgUrl')}
                    ></img>
                </RecommendItem>)
            })
        )
    }

    render(){
        return(
            <RecommendWrapper>
               {this.getList()}
            </RecommendWrapper>
        )
    }
}
const mapState =(state) =>({
    list:state.getIn(['home','recommendList'])
})
export default connect(mapState,null)(Recommend);