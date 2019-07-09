import * as constants from './actionTypes';
import {fromJS} from  'immutable';
import axios from 'axios';

const changeHomeList = (data) =>({
    type:constants.CHANGE_TOPIC_LIST,
    data
})

const changMoreList = (data,nextPage) =>({
    type:constants.CHANGE_MORE_LIST,
    data:fromJS(data),
    nextPage
})

const changWriterList = (data) =>({
    type:constants.CHANGE_WRITER_LIST,
    totalPage:Math.ceil(data.length/5),
    data

})

export const changeShowScroll = (show) =>({
    type:constants.CHANGE_SHOW_TOP,
    show
})

export const changWriterPage = (page,transform) =>({
    type:constants.CHANGE_WRITER_PAGE,
    page,
    transform:!transform
})

export const getHomeList = () =>{
    return (dispatch) =>{
        axios.get('/api/home.json').then((res) =>{
            dispatch(changeHomeList(res.data.data))
        }).catch(() =>{
            console.log('err')
        })
    }
}

export const getMorelist = (page) =>{
    return(dispatch) =>{
        axios.get('api/homeList.json?page='+ page).then((res) =>{
            // console.log(res.data.data.articleList)
            dispatch(changMoreList(res.data.data.articleList,page+1))
        }).catch(() =>{
            console.log('err')
        })
    }
}

export const getWriterJson = () =>{
    return(dispatch) =>{
        axios.get('api/writerList.json').then((res) =>{
            // console.log(res.data);
            dispatch(changWriterList(res.data.data))
        }).catch(() =>{
            console.log('getWriterJsonErr')
        })
    }
}
