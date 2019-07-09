import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import  {actionCreators} from '../store'
import {
    BackTopWrapper
} from '../style';

class BackTop extends PureComponent {
    render(){
        const {showScroll} = this.props;
        return(
            <React.Fragment>
            {showScroll ? <BackTopWrapper onClick ={this.handleScrollTop}>
                    <span className="iconfont">&#xe606;</span>
                    </BackTopWrapper> : null }
            </React.Fragment>
            )
    }
    handleScrollTop = () =>{
        window.scrollTo(0,0)
    }
    componentDidMount(){
       this.bindEvents();
    }
    componentWillUnmount(){
        window.removeEventListener('scroll',this.props.changeScrollShow)
    }
    bindEvents = () =>{
        window.addEventListener('scroll',this.props.changeScrollShow)
    }

}
const mapState = (state) =>({
    showScroll:state.getIn(['home','showScroll'])
})
const mapDispatch = (dispatch) =>({
    
    changeScrollShow(){
        if(document.documentElement.scrollTop >150){
            dispatch(actionCreators.changeShowScroll(true))
        }else{
            dispatch(actionCreators.changeShowScroll(false))
        }
        // console.log(document.documentElement.scrollTop)
    }
})

export default connect(mapState,mapDispatch)(BackTop);