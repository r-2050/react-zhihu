import React from 'react';
import { Link } from 'react-router-dom'
import { Row, Col, Icon } from 'antd';
import './footMenu.css'

const FootMenu = () => (
    <div className="footMenu-nav">
        <Row type="flex" justify="space-between" align="bottom">
            <Col span={5}><Link to='/'><Icon type="chrome" />首页</Link></Col>
            <Col span={5}><Link to='/thinking'><Icon type="github" />想法</Link></Col>
            <Col span={5}><Link to='/thinking'><Icon type="code" />大学</Link></Col>
            <Col span={5}><Link to='/thinking'><Icon type="bell" />消息</Link></Col>
            <Col span={4}><Link to='/user'><Icon type="user" />用户</Link></Col>
        </Row>
    </div>
)

export default FootMenu;