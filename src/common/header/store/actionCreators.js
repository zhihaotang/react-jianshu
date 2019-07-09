import * as constants from './actionTypes';
import {fromJS} from  'immutable';
import axios from 'axios';

const changeList = (data) =>({
    type:constants.CHANGE_LIST,
    data: fromJS(data),
    totalPage:Math.ceil(data.length / 10)
})

export const gethandleInputFocus = () =>({
    type:constants.HANDLE_INPUT_FOCUS
})
export const gethandleInputBlur = () =>({
    type:constants.HANDLE_INPUT_BLUR
})
export const changePage = (page) =>({
    type:constants.CHANGE_PAGE,
    page
})

export const getList = () =>{
    return (dispatch) =>{
        axios.get('/api/headerList.json').then((res) =>{
            dispatch(changeList(res.data.data))
        }).catch(() =>{
            console.log('err')
        })
    }
}

export const mouseEnter = () =>({
    type:constants.MOUSE_ENTER
})
export const mouseLeave = () =>({
    type:constants.MOUSE_LEAVE
})