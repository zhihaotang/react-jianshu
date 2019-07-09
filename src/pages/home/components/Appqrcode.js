import React, {PureComponent} from 'react';
import {
    AppqrcodeWrapper,
    QrcodeInfo,
    QrcodeTitle,
    QrcodeDesc
} from '../style';

class Appqrcode extends PureComponent {
    render(){
        return(
            <AppqrcodeWrapper>
                <img
                alt =''
                className='qrcode'
                src = '//cdn2.jianshu.io/assets/web/download-index-side-qrcode-cb13fc9106a478795f8d10f9f632fccf.png'
                ></img>
                <QrcodeInfo>
                    <QrcodeTitle>下载简书手机App</QrcodeTitle>
                    <QrcodeDesc>随时随地发现和创作内容</QrcodeDesc>
                </QrcodeInfo>
            </AppqrcodeWrapper>
        )
    }
}

export default Appqrcode;