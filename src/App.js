import React from 'react';
import 'antd/dist/antd.css';
import Router  from './router/router';
class App extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return <Router  />
    }
}

export default App;