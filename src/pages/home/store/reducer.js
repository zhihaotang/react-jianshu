import {fromJS} from 'immutable';
import * as constants from './actionTypes';


const defaultState = fromJS({
    topicList:[],
    articleList:[],
    recommendList:[],
    writerList:[],
    writerPage:1,
    writerTotalPage:1,
    transform:false,
    articlePage:1,
    showScroll:false

    })
export default (state = defaultState,action) =>{
    switch(action.type){    
        case constants.CHANGE_TOPIC_LIST:
            return state.merge({
                topicList:fromJS(action.data.topicList),
                articleList:fromJS(action.data.articleList),
                recommendList:fromJS(action.data.recommendList)
            })
        case constants.CHANGE_MORE_LIST:
            // console.log(action)
            return state.merge({
                articleList:state.get('articleList').concat(action.data),
                articlePage:fromJS(action.nextPage)
            })
        case constants.CHANGE_SHOW_TOP:
            // console.log(action)
            return state.set('showScroll',action.show)
        case constants.CHANGE_WRITER_LIST:
            return state.merge({
                writerList:fromJS(action.data),
                writerTotalPage:action.totalPage
            })
        case constants.CHANGE_WRITER_PAGE:
            console.log(action.transform)
            return state.merge({
                writerPage:action.page,
                transform:action.transform
            })
            // set('writerPage',action.page)    
        default:
        return state;
    }
}