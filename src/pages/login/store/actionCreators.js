import * as constants from './actionTypes';
// import {fromJS} from  'immutable';
import axios from 'axios';

const changelogin = (value) =>({
    type:constants.CHANGE_LOGIN,
    value
})

export const logout =() =>({
    type:constants.CHANGE_LOGOUT,
    value:false
})

export const login = (account,password) =>{
    return (dispatch) =>{
        axios.get('/api/login.json?account=' + account + '&password=' + password).then((res) =>{
            console.log(res.data)
            const result =res.data.data
            if(result){
                dispatch(changelogin(result))
            }else{
                alert('登录失败')
            }
           
        }).catch(() =>{
            console.log('err')
        })
    }
}