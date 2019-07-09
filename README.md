## 项目介绍

- 这是一个仿照简述首页的React项目：
    - 项目主要技术
        1. 用了redux和react-redux 管理state
        2. 用了react-thunk 管理axios 请求
        3. 用了styled-components 管理Css样式
        4. 用了react-router 管理链接跳转
        5. 用了react-loadable 管理异步加载
        6. 项目没有用任何UI框架，纯CSS样式布局
        7. 用了redux-immutable转换state数据
        8. 用了react-transition-group 实现动画效果，比如‘换一批’ ‘搜索框动画’
    - 项目实现的功能
        1. 首页功能实现大部分，大部分模拟数据都是用发送请求实现的
        2. 登录页面实现了一些简单功能
        3. 文章详情页面只实现了一些简单功能(用id展示文章)
        4. 实现了简单的退出功能
        5. 实现了简单的写文章鉴权功能

### redux 和react-redux 管理state

1. 安装 redux和react-redux

安装 redux 

```bash
$ yarn add redux
```

安装 react-redux 

```bash
$ yarn add react-redux
```

2. 在src下创建store文件夹，并新建index.js:

```javascript
    import { createStore } from 'redux';
    import reducer from './reducer.js'
    const store =createStore(reducer);//reducer当参数
    export default store;
```

3. store 文件夹下新建 reducer.js 并声明各组件所需 state 中的变量(可以在不同的组件下创建不同的store,在总的reducer组合起来)
- 组合组件的reducer

```javascript
    import { combineReducers} from 'redux-immutable';
    import {reducer as headerReducer} from '../common/header/store';
    import {reducer as homeReducer} from '../pages/home/store';
    import {reducer as detailReducer} from '../pages/detail/store';
    import {reducer as loginReducer} from '../pages/login/store';

    const reducer = combineReducers({
        header:headerReducer,
        home: homeReducer,
        detail:detailReducer,
        login:loginReducer
    })
    export default reducer;
```

- 同用一个reducer

```javascript
    const defaultState = {
        inputValue: '',
        list:[1,2],
        showMsg:false
    }
    export default (state = defaultState,action)=>{
        return state;
    }
```

4. 使用react-redux连接redux

- 在src下面的index.js用react-redux自带组件包裹App组件，传递store\

```javascript
        import {Provider} from 'react-redux';
        <Provider store ={store}>
        <App></App>
        </Provider>
```

- 在需要使用state的component里面使用react-redux的connct方法连接store 和监听，如下

```javascript
        import {connect} from 'react-redux';
        const mapState = (state) =>(
            {
            writerList:state.getIn(['home','writerList']),//这里用了immutablejs,大家不用管，只需要这个是连接state
            writerPage:state.getIn(['home','writerPage']),
            writerTotalPage:state.getIn(['home','writerTotalPage']),
            transform:state.getIn(['home','transform'])
            }
        );

        const mapDispatch = (dispatch) =>({
         getWriterList(){
            dispatch(action)
            
        },
        handleChangePage({
            if(){
                
                dispatch()
            }else{
                dispatch())
            }
        }
        });
        export default connect(mapState,mapDispatch)(Writer);//这里我的理解是，用connect这个回调函数传参然后运行 
```

5. 在组件里面使用 state 和dispatch

```javascript
    // 使用state:
    this.props.xxxx  
    // 同理使用dispatch: 
    this.props.xxxxx
```


