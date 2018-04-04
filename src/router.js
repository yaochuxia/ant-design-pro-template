import React, { PropTypes } from 'react';
import { Router, Route, IndexRoute, Link } from 'dva/router';
import IndexPage from './routes/IndexPage';

const r11 = (location, callback) => {
    require.ensure([], require => {
        callback(null,
            require('./routes/1-1'))
    }, '11')
};
const r12 = (location, callback) => {
    require.ensure([], require => {
        callback(null,
            require('./routes/1-2'))
    }, '12')
};
const r21 = (location, callback) => {
    require.ensure([], require => {
        callback(null,
            require('./routes/2-1'))
    }, '21')
};
const r22 = (location, callback) => {
    require.ensure([], require => {
        callback(null,
            require('./routes/2-2'))
    }, '22')
};
const r31 = (location, callback) => {
    require.ensure([], require => {
        callback(null,
            require('./routes/3-1'))
    }, '31')
};
const r32 = (location, callback) => {
    require.ensure([], require => {
        callback(null,
            require('./routes/3-2'))
    }, '32')
};
const r33 = (location, callback) => {
    require.ensure([], require => {
        callback(null,
            require('./routes/3-3'))
    }, '33')
};
const r34 = (location, callback) => {
    require.ensure([], require => {
        callback(null,
            require('./routes/3-4'))
    }, '34')
};

export default function ({ history }) {
    return (
        <Router history={history}>
            <Route path="/" component={IndexPage}>
                {/* 添加一个路由，嵌套进我们想要嵌套的 UI 里 */}
                <Route path="11" component={require('./routes/1-1.js')} />
                <Route path="12" component={require('./routes/1-2.js')} />
                <Route path="21" component={require('./routes/2-1.js')} />
                <Route path="22" component={require('./routes/2-2.js')} />
                <Route path="31" component={require('./routes/3-1.js')} />
                <Route path="32" component={require('./routes/3-2.js')} />
                <Route path="33" component={require('./routes/3-3.js')} />
                <Route path="34" component={require('./routes/3-4.js')} />
            </Route>
        </Router>
    );
};