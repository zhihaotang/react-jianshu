import styled from 'styled-components';
import logoPic from '../../statics/logo.png';
import navbetaPic from '../../statics/navbeta.png';



export const HeaderWrapper = styled.div`
    z-index:1;
    position: fixed;
    right: 0;
    left: 0;
    box-sizing:border-box;
    -moz-box-sizing:border-box; /* Firefox */
    -webkit-box-sizing:border-box; /* Safari */
    background:#fff; 
    height:56px;
    border-bottom: 1px solid #f0f0f0;
`

export const Hdiv =styled.div`
    display:block; 

    min-width: 768px;
    max-width: 1440px;
    height:55px;
    margin: 0 auto;
    background:#fff; 
    box-sizing:border-box;
    -moz-box-sizing:border-box; /* Firefox */
    -webkit-box-sizing:border-box; /* Safari */
    width: 100%;
`

export const Logo = styled.div`
    position: absolute;
    display:block;
    width:100px;
    height: 56px;
    background: url(${logoPic});
    -webkit-background-size: contain;
`

export const Nav = styled.div`
    position: relative;
    width:  960px;
    height: 100%;
    // padding-left: 15px;
    // padding-right: 15px;
    padding-right: 70px;
    box-sizing:border-box;
    -moz-box-sizing:border-box; /* Firefox */
    -webkit-box-sizing:border-box; /* Safari */
    margin: 0 auto;
`;

export const NavItem =styled.div`
height:56px;
padding: 15px;
line-height: 26px;
-webkit-box-sizing:border-box;
font-size:17px;
color:#333;
.homespan{
    font-size: 18px;
    margin-right:5px;
}
.appspan{
    font-size: 18px;
    margin-right:4px;
}
a{
    text-decoration:none;
    color:#ea6f5a;
}
&.left {
    float:left; 
      
}
&.right {
    float:right;
    color:#969696;
}
&.search {
    display:flex;
    background:green;
    // position:relative;
    // float:left;

    padding:0 0 0 15px;
    margin: 0 10px 0 0;

}
&.active {
    color:#ea6f5a;
}
&.img {
    position: relative;
    height:55px;
    width:56.81px;
    margin: 0 12px;
    padding:15px 0;
    box-sizing:border-box;
    
}

`
export const Beta =styled.a.attrs({
    // href :navbetaPic
})`
    position: absolute;
    display:block;
    width:56.81px;
    height:25px;
    margin:auto;
    background: url(${navbetaPic});
    background-size: contain;
`

export const SearchWrapper = styled.div`
    position:relative;
    float:left;
    
    .zoom {
            position: absolute;
            margin-top:13px;
            right:5px;
            buttom:5px;
            width: 30px;
            line-height: 30px;
            text-align:center;
            border-radius:15px;
            color:#999
            &.focused{
                background:#999;
                color:white;
            }
            // background:green;
        }


`
export const NavSearch = styled.input.attrs({
    placeholder:'搜索'
})`

 margin-top: 9px;
 margin-left: 20px
 width:240px;
 height:38px;
 border: none;
 outline: none;
 padding: 0 32px 0 20px;
 font-size:14px;
 box-sizing:border-box;
 border-radius: 19px;
 background: #eee;
 color:#333;
&.slide-enter{
        transition: all 0.3s ease-out;
}
&.slide-enter-active{
        width:320px
    }
&.slide-enter-done{
        
    }
&.slide-exit{
        transition: all 0.3s ease-out;
    }
&.slide-exit-active{
        width:240px;
    }
&.slide-exit-done{
        
    }
 &.focused{
    width:320px;
 }
 &::placeholder{
     color:#999;
 }
`


export const SearchInfo = styled.div`
 z-index:100;
 position: absolute;
 left:25px;
 top:56px;
 width:240px;
 padding: 0 20px;
 background-color:#fff;
//  height:100px;
//  background:green;
 box-shadow: 0 0 8px rgba(0,0,0,.2);
`
export const SearchInfoHeader = styled.div`
margin-top :20px;
margin-bottom: 15px;
line-height: 20px;
font-size:14px;
color:#969696;
`

export const SearchInfoList = styled.div`
 overflow:  hidden;
`

export const SearchInfoSwitch = styled.span`
 float:right;
 font-size:13px;
 cursor:pointer;
`
export const SearchInfoItem = styled.a`
 font-size:12px;
 float:left;
 padding: 0 5px;
 margin-right:10px;
 margin-bottom:10px;
 line-height:20px;
 border: 1px solid #ddd;
 color:#787878;
 border-radius: 3px;

`

export const Addittion =styled.div`
 position: absolute;
 right:40px;
 top:0;
 height:56px;
 font-size:15px;
`
export const Button =styled.div`
 float:right;
 margin-top:8px
 margin-right:20px;
 padding:0 20px;
 line-height:38px;
 border-radius:19px;
 
 &.reg {
     border:1px solid #ea6f5a
     color:#ea6f5a;
 }
 &.writting{
     margin-right:12px
     border:1px solid #ea6f5a
     color:#fff;
     background:#ea6f5a;
 }
 &.login{
     cursor:pointer;
     color:#969696;
 }
`