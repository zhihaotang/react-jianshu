import styled from 'styled-components';


export const HomeWrapper = styled.div`
    z-index:-1;
    overflow: hidden;
    width:960px;
    padding-top:56px;
    margin: 0 auto;
`

export const HomeLeft = styled.div`
    // z-index:-2;
    margin-left: 15px;
    padding-top:30px;
    width:625px;
    float: left;
    .banner-img{
        border-radius: 6px;
        width:625px;
        height:270px;

    }
   
`
export const HomeRigth = styled.div`
    width:280px;
    float:right;
    padding:30px 0 0;
    margin-left:40px;
    // background:green;
`
export const TopicWrapper = styled.div`
 padding: 20px 0 10px 0;
//  margin-left: -18px;
 overflow: hidden;
 border-radius:6px;
 border-bottom:1px solid #dcdcdc;
`
export const TopicItem =styled.div`
    float:left;
    height:32px
    line-height:32px;
    font-size:14px;
    padding-right: 10px;
    margin-right:18px;
    margin-bottom:15px;
    color:#000;
    border:1px solid #dcdcdc;
    border-radius: 4px;
    background:#f7f7f7;
    .topic-img{
      display:block;
      float: left;
      width: 32px;
      height: 32px;
      margin-right:10px;
      
    }
`
export const TopicMore = styled.div`
    margin-left: 18px;
    
    font-size: 13px;
    height:32px;
    line-height:32px;
    cursor: pointer;
    color:#777777 ;
`
export const ListItem = styled.div`
    overflow: hidden;
    position: relative;
    padding: 20px 0;
    border-bottom: 1px solid #dcdcdc;
    .pic{
      position: absolute;
      top: 50%;
      right: 0;
      margin-top:-50px;
        width :150px;
        height: 100px;
        border:1px solid #f0f0f0;
        border-radius:10px;
    }
`

export const ListInfo = styled.div`
    padding-right: 165px;
    box-sizing:border-box;
    -moz-box-sizing:border-box; /* Firefox */
    -webkit-box-sizing:border-box; /* Safari */
    .title{
        line-height:27px;
        font-size: 18px;
        font-weight:bold;
        color:#333;
        margin-top:-7px;
        margin-bottom:4px;
    }
    .desc{
      line-height: 24px;
      font-size:13px;
      margin-bottom:8px
      color:#999;
    }
    .link{
      text-decoration:none;
    }
`
export const RecommendWrapper = styled.div`
  box-sizing:border-box;
  -moz-box-sizing:border-box; /* Firefox */
  -webkit-box-sizing:border-box; /* Safari */
  margin-top: -4px;
  padding-bottom: 4px;
  min-height: 228px; 
// background:red;
`
export const RecommendItem = styled.a`
  overflow:hidden;
  width:280px;
  height:50px;
  line-height:50px;
  cursor:pointer;
  text-decoration: none;
  box-sizing:border-box;
  -moz-box-sizing:border-box; /* Firefox */
  -webkit-box-sizing:border-box; /* Safari */
  .recpic{
    float:right;
    width:280px;
    height:50px;
    margin:0 0 6px;
    border-radius:4px;
    vertical-align: middle;
  }
`
export const AppqrcodeWrapper = styled.div`
  overflow:hidden;
  width:280px;
  height:82px;
  font-size:17px;
  margin:0 0 30px;
  padding: 10px 22px;
  border:1px solid #f0f0f0;
  border-radius:6px;
  box-sizing:border-box;
  -moz-box-sizing:border-box; /* Firefox */
  -webkit-box-sizing:border-box; /* Safari */
  color:#333333;
  background:#fff;
  .qrcode{
    float:left;
    width:60px;
    height:60px;
  }
`

export const QrcodeInfo = styled.div`
  display:inline-block;
  margin-left:7px;

  // height:44px;
  // line-height:60px;
  vertical-align:middle;
  text-align:center;
`
export const QrcodeTitle =styled.div`
  font-size:15px;
  color:#333;
  line-height:21.6px
`
export const QrcodeDesc =styled.div`
  margin-top:4px;
  font-size:13px;
  color:#999;
  line-height:21.6px
`

export const WriterWrapper = styled.div`
  width:278px;
  // line-height:300px;
  // border:1px solid #dcdcdc;
  border-radius: 3px;
  text-align:center;
  height:400px;
`
export const WriterTitle = styled.div`
  overflow:hidden;
  width:100%
  font-size:14px;
  color:#969696;
  text-align:left;
  .transform{
    display:inline-block;
    &.writer-enter{
      
      transform: rotate(0deg);
      transform-origin:center center;
      transition: all 0.4s ease-out;
      // ease-out
  }
    &.writer-enter-active{

      transform: rotate(360deg);
      // transform-origin:center center;
  }
  &.writer-enter-done{
    transform: rotate(0deg);
   ;
  }
    &.writer-exit{
      transform: rotate(0deg);
      transition: all 0.4s ease-out
  }
    &.writer-exit-active{
      transform: rotate(360deg);
  }
    &.writer-exit-done{
      transform: rotate(0deg);
  }
  }
  
  // background:green;
`
export const WriterSwitch = styled.div`
  float:right;
  display:inline-block;
  cursor:pointer;
  font-size:14px;
  color: #969696;
`
export const WriterList = styled.div`
  margin: 0 0 20px;
  height:300px;
  padding-left: 0;
  text-align: left;
  list-style: none;

`
export const WriterItem =styled.div`
  overflow:hidden;
  margin-top: 15px;
  line-height: 20px;
  // height:
  box-sizing: border-box;
  // border:1px solid #dcdcdc;
  img{
    float:left;
    display:block;
    border:1px solid #dcdcdc;
    width:48px;
    height:48px;
    cursor:pointer;
    margin-right:10px;
    border-radius:24px;
  }
  .writer{
    padding-top: 5px;
    margin-right: 60px;
    font-size: 14px;
    cursor:pointer;
    display: block;
  }
  p{
    display: block
    margin-top: 2px;
    margin: 0 0 10px;
    font-size: 12px;
    color: #969696;

  }
`
export const Follow = styled.div`
  float:right;
  padding:0;
  cursor:pointer;
  margin-top:5px;
  font-size: 13px;
  color: #42c02e;
`


export const LoadMore =styled.div`
  width:100%;
  height:40px;
  line-height:40px;
  margin:30px 0;
  background:#a5a5a5;
  text-align:center;
  border-radius:20px;
  color:#fff;
  cursor:pointer;
`

export const BackTopWrapper =styled.div`
  position:fixed;
  bottom:70px;
  right:50px;
  width:50px;
  height:50px;
  line-height:50px;
  text-align:center;
  cursor:pointer;
  border-radius:3px;
  border:1px solid #dcdcdc;
  background:#fff;
`