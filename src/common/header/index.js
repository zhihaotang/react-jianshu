import React ,{PureComponent} from 'react';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import {actionCreators} from './store';
import {actionCreators as loginActionCreators} from '../../pages/login/store'
import {Link} from 'react-router-dom';
import {
    // FixedHeader,
    HeaderWrapper,
    Hdiv,
    Logo,
    Nav,
    NavItem,
    Beta,
    NavSearch,
    // SearchInfoRotate,
    SearchInfo,
    SearchInfoHeader,
    SearchInfoSwitch,
    SearchInfoList,
    SearchInfoItem,
    SearchWrapper,
    Addittion,
    Button
} from './style'







class Header extends PureComponent{
    
    render(){
        const {focused,handleInputFocus,handleInputBlur,list,login}  = this.props;
        return(
            // <FixedHeader>
            <HeaderWrapper>
                  <Hdiv>
                  <Link to='/'>
                  <Logo />
                  </Link>
                  <Nav>
                      <NavItem className='left active'>
                      <Link to='/'>
                      <span className="iconfont homespan">&#xe604;</span>
                      <span>首页</span>
                      </Link>
                      </NavItem>
                      <NavItem className='left'>
                      <span className="iconfont appspan">&#xe666;</span>
                      <span>下载App</span>
                      </NavItem>
                      <SearchWrapper>

                      <CSSTransition
                        in ={focused}
                        timeout={300}
                        classNames='slide'
                        >
                          <NavSearch
                          className ={focused ? 'focused' :''}
                          onFocus ={() =>{handleInputFocus(list)}}
                          onBlur ={handleInputBlur}
                          ></NavSearch>
                          </CSSTransition>
                          <span className={focused ? 'focused iconfont zoom' :'iconfont zoom'}
                          
                          >&#xe651;</span>
                      {this.getListArea()}    
                      </SearchWrapper>
                      
                      <NavItem className='right img'><Beta></Beta></NavItem>
                      <NavItem className='right'>
                      <span className="iconfont">&#xe607;</span>
                      </NavItem>
                  </Nav>
                  <Addittion>
                      <Link to ='/write'><Button className='writting'>
                      <span className="iconfont">&#xe600;</span>
                      写文章</Button></Link>
                      <Button className ='reg'>注册</Button>
                      {login ? <Button className ='login'
                      onClick ={this.props.handleLogOut}
                      >退出</Button> :<Link to ='/login'><Button className ='login'>登录</Button></Link>}
                      
                  </Addittion>
                  </Hdiv>
                </HeaderWrapper>
                // </FixedHeader>
        )
    }

getListArea =() =>{
    const {focused , list ,page,handleMouseEnter,handleMouseLeave,handleChangePage,mouseIn,totalPage} = this.props;
    const jsList = list.toJS();
    const pageList =[];
    if (jsList.length){
        for (let i =(page-1)*10; i < page*10; i++){
            // console.log(jsList[i])
            if(jsList[i]===undefined){
                break
            }else{
                pageList.push(
                    <SearchInfoItem key={jsList[i]}>{jsList[i]}</SearchInfoItem>
                    )
            }
           
        }
    }
    
        if(focused || mouseIn) {
            return(
            
            
            <SearchInfo 
            onMouseEnter ={handleMouseEnter}
            onMouseLeave ={handleMouseLeave}
            >
           
            {/* <SearchInfoRotate></SearchInfoRotate> */}
                <SearchInfoHeader>
                    热门搜索
                    
                    <SearchInfoSwitch 
                    onClick ={() => {handleChangePage(page,totalPage)}}
                    >
                    <span className="iconfont">&#xe601;</span>
                        换一批
                    </SearchInfoSwitch>
                </SearchInfoHeader>
                <SearchInfoList>
                    
                   {pageList}
                </SearchInfoList>
            </SearchInfo>
            
            )
        }else{
            return null;
        }
    }



}

const mapStateToProps = (state) =>{
    return{
      focused: state.getIn(['header','focused']),
      list : state.getIn(['header','list']),
      page: state.getIn(['header','page']),
      mouseIn:state.getIn(['header','mouseIn']),
      totalPage:state.getIn(['header','totalPage']),
      login:state.getIn(['login','login'])
    //   state.get('header').get('focused')
    }   
  }
  const mapDispatchToProps = (dispatch) =>{
    return{
      handleInputFocus(list){
          (list.size === 0) && dispatch(actionCreators.getList())
          const action =actionCreators.gethandleInputFocus();
          
          dispatch (action)
      },
      handleInputBlur(){
          const action =actionCreators.gethandleInputBlur();
          dispatch (action)
      },
      handleMouseEnter(){
          dispatch(actionCreators.mouseEnter())
      },
      handleMouseLeave(){
          dispatch(actionCreators.mouseLeave())
      },
      handleChangePage(page,totalPage){
          if(page <totalPage){
            dispatch(actionCreators.changePage(page +1))
          }else{
              dispatch(actionCreators.changePage(1))
          }   
      },
      handleLogOut(){
        dispatch(loginActionCreators.logout())
      }
    }
  }

export default connect(mapStateToProps,mapDispatchToProps)(Header);