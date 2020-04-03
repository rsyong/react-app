import React from 'react';
import { Layout } from 'antd';
import './login.css';
const { Header, Footer,  Content } = Layout;
class Login extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <Layout>
                <Header>
                    <div className="header-box">
                        <img src={require('../../assets/image/u24.png')} alt="logo" className="logoImg" />
                    </div>
                </Header>
                <Content className="content-box"></Content>
                <Footer>
                    <p className="foot-text">© 2020 依格良特（重庆）科技发展有限公司</p>
                </Footer>
            </Layout>
        )
    }
}
export default Login;