import React, {PureComponent} from 'react';
import {actionCreators} from '../store'
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import {
    ListItem,
    ListInfo,
    LoadMore
} from '../style'

class List extends PureComponent {
    render(){
        const {list ,page} =this.props;
        return(
            <React.Fragment>
            {
                list.map((item,index) =>{
                    return(
                        <ListItem key={index}>
                           
                            <ListInfo>
                                <Link to={'/detail/' + item.get('id')} className= 'link'><h3 className='title'>{item.get('title')}</h3></Link>
                                <p className= 'desc'>{item.get('desc')}</p>
                            </ListInfo>
                            <img 
                            alt='' 
                            className ='pic'
                            src={item.get('imgUrl')}
                            ></img>
                        </ListItem>
                    )
                })
            }
            <LoadMore onClick ={() =>this.props.getMoreList(page)}>更多文字</LoadMore>
            </React.Fragment>
            
        )
    }
}
const mapState =(state) =>({
    list:state.getIn(['home','articleList']),
    page:state.getIn(['home','articlePage'])
})
const mapDispatch = (dispatch) =>({
    getMoreList(page){
        dispatch(actionCreators.getMorelist(page))
    }
})
export default connect(mapState,mapDispatch)(List);