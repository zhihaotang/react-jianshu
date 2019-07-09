import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import { Redirect} from 'react-router-dom';
// import {actionCreators} from './store'

class Write extends PureComponent {
    
    render(){
        const {loginState} =this.props;
        if(loginState){
            return(
                <div>Write~</div>
                
            )
        }else{
            return <Redirect to='/login'></Redirect>
        }
        
    }
}

const mapState = (state) =>({
   loginState:state.getIn(['login','login'])
  })
  
  export default connect(mapState,null)(Write);