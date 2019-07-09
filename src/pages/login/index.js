import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {Link , Redirect} from 'react-router-dom';
import {actionCreators} from './store'
import {
    LoginWrapper,
    LoginBox,
    LoginTitle,
    Input,
    Button
} from './style'

class Login extends PureComponent {
    
    render(){
        const {login,loginState} =this.props;
        if(!loginState){
            return(
                // <div>Login</div>
                <LoginWrapper>
                    <LoginBox>
                        <LoginTitle>
                        <Link 
                        className='link'
                        to='/login'><span className='loginid'>登录</span></Link>    
                            <b>·</b>
                            <Link 
                            to ='/' 
                            className='link'><span className='userid'>注册</span></Link>
                        </LoginTitle>
                        <Input placeholder='手机号或邮箱' ref={(input) =>{this.account =input}}></Input>
                        <Input placeholder= '密码' type ='password' ref={(input) =>{this.password =input}}></Input>
                        <Button 
                        onClick={() =>{
                            login(this.account,this.password)}}>登录</Button>
                    </LoginBox>
                   
                </LoginWrapper>
            )
        }else{
            return <Redirect to='/'></Redirect>
        }
        
    }
}

const mapState = (state) =>({
   loginState:state.getIn(['login','login'])
  })
  const mapDispatch = (dispatch) =>({
    login(accountElem,passwordElem){
        dispatch(actionCreators.login(accountElem,passwordElem))
        // console.log(accoutElem.value,passwordElem.value)
    }
  })
  
  export default connect(mapState,mapDispatch)(Login);