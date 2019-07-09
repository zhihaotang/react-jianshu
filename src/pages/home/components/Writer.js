import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import  {actionCreators} from '../store';
import {CSSTransition} from 'react-transition-group';
import {
    WriterWrapper,
    WriterTitle,
    WriterSwitch,
    WriterList,
    WriterItem,
    Follow
} from '../style';

class Writer extends PureComponent {
    render(){
        // console.log(this.props)
        const {
            handleChangePage,
            writerPage,
            writerTotalPage,
            transform
        } = this.props;
        return(
            <WriterWrapper>
            <WriterTitle>
                推荐作者  
                
                <WriterSwitch
                onClick ={() =>handleChangePage(writerPage,writerTotalPage,transform)}
                >
                <CSSTransition
                in ={transform}
                timeout={400}
                classNames ='writer'
                >
                <span 
                // ref ={(e) =>{this.spinIcon =e}}
                className="iconfont transform">&#xe601;</span>
                </CSSTransition>
                    换一批
                </WriterSwitch>
                
            </WriterTitle>
            <WriterList>
                {
                   this.getListArea()

                }
                {/* {this.props.writerList.map((item,index) =>{
                    return(
                <WriterItem key={index}>
                <img
                alt=''
                src={item.get('imgUrl')}
                ></img>
                <Follow><span>+</span>关注</Follow>
                <div className='writer'>{item.get('writer')}</div>
                <p>{item.get('desc')}</p>
                </WriterItem> 
                    )
                })} */}

               {/* <WriterItem>
                <img
                alt=''
                src='//upload.jianshu.io/users/upload_avatars/10849033/7278547c-f8ba-4a5a-a2ad-5dfd43abab81.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp'
                ></img>
                <Follow><span>+</span>关注</Follow>
                <div className='writer'>lostdays</div>
                <p>写了231.7k字 · 2.1k喜欢</p>
                </WriterItem>  */}
            </WriterList>  
            </WriterWrapper>
        )
    }

    getListArea =() =>{
        const {
            writerList,
            writerPage
        } =this.props;
        const newList = writerList.toJS();
        const pageList =[];
        // console.log(newList.length)
        
        if(newList.length){
            // console.log(writerPage)
            
            for (let i = (writerPage-1) * 5; i < writerPage*5; i++) {
                
                if(newList[i] ===undefined){
                    break
                }else{
                    // console.log(newList[i])
                    pageList.push(

                        <WriterItem key={newList[i]["id"]}>
                        <img
                        alt=''
                        src={newList[i]["imgUrl"]}
                        ></img>
                        <Follow><span>+</span>关注</Follow>
                        <div className='writer'>{newList[i]["writer"]}</div>
                        <p>{newList[i]["desc"]}</p>
                        </WriterItem> 
                    )
                }
                
            
            }
        }else{
            return pageList
        }
        return pageList
    }

    componentWillMount(){
        
        this.props.getWriterList()
        
    }

}
    const mapState = (state) =>(
        {
        writerList:state.getIn(['home','writerList']),
        writerPage:state.getIn(['home','writerPage']),
        writerTotalPage:state.getIn(['home','writerTotalPage']),
        transform:state.getIn(['home','transform'])
    });
    
    const mapDispatch = (dispatch) =>({
        getWriterList(){
            dispatch(actionCreators.getWriterJson())
            
        },
        handleChangePage(page,totalPage,transform){
            if(page < totalPage){
                let newpage = page +1;
                dispatch(actionCreators.changWriterPage(newpage,transform))
            }else{
                dispatch(actionCreators.changWriterPage(1,transform))
            }
        }
    })

export default connect(mapState,mapDispatch)(Writer);