import styled from 'styled-components';


export const LoginWrapper = styled.div`
    z-index: 0;
    overflow:hidden;
    position: absolute;
    left:0;
    right:0;
    bottom:0;
    top:56px;
    background:#eee;
`
export const LoginBox = styled.div`
    width: 400px;
    height:360px;
    margin:100px auto;
    padding:50px 50px 30px;
    box-sizing:border-box;
    -webkit-box-sizing:border-box;
    background-color: #fff;
    border-radius: 4px;
    box-shadow: 0 0 8px rgba(0,0,0,.1);
`
export const LoginTitle = styled.div`
    margin: 0 auto 50px;
    padding: 10px;
    font-weight: 400px;
    font-size:18px;
    color: #969696;
    text-align:center;
    // border:1px solid #dcdcdc;
    .link{
        text-decoration:none;
        
      }
      b{
        padding:10px;
      }
    .loginid{
        font-weight: 700;
        color: #ea6f5a;
        padding:10px;
        border-bottom: 2px solid #ea6f5a;
    }
    .userid{
        color:#969696;
        padding:10px;
    }
`
export const Input = styled.input`
    display:block;
    width: 200px;
    height:40px;
    line-height:40px;
    border: none;
    outline: none;
    border:1px solid #dcdcdc;
    color:#777;
    border-radius: 4px;
    margin:10px auto;
    // box-shadow: 0 0 8px rgba(0,0,0,.1);
    padding: 0 10px;    

`
export const Button = styled.div`
    width: 230px;
    height:30px;
    line-height:30px;
    border:1px solid #dcdcdc;
    color:#fff;
    background:#187cb7;
    margin: 10px auto;
    text-align:center;
    border-radius: 15px;
`