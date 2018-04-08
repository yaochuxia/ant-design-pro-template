import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import 'antd/dist/antd.css';

// 引入单个页面（包括嵌套的子页面）
import Login from './routes/login';
import Home from './routes/home'
import List from './routes/list'

export default class Root extends React.Component {
    render() {
        return (
            <BrowserRouter >
                <Switch>
                    <Route exact path="/login" component={Login}></Route>
                    <Route exact path="/" component={Home}></Route>
                    <Route exact path="/list" component={List}></Route>
                </Switch>
            </BrowserRouter>
        )
    }
}
ReactDOM.render(<Root />, document.getElementById('root'));
