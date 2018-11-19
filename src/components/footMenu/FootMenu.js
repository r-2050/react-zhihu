import React from 'react';
import { Link } from 'react-router-dom'
import { Row, Col, Icon } from 'antd';
import './footMenu.css'

const FootMenu = () => (
    <div className="footMenu-nav">
        <Row type="flex" justify="space-between" align="bottom" className="row">
            <Col span={5}>
                <Link to='/'><Icon style={{ fontSize: '24px' }} type="chrome" /><br/> 首页</Link>
            </Col>
            <Col span={5}>
                <Link to='/thinking'><Icon style={{ fontSize: '24px' }} type="github" /> <br/>想法</Link>
            </Col>
            <Col span={5}>
                <Link to='/university'><Icon style={{ fontSize: '24px' }} type="code" /> <br/>大学</Link>
            </Col>
            <Col span={5}>
                <Link to='/information'><Icon style={{ fontSize: '24px' }} type="bell" /> <br/>消息</Link>
            </Col>
            <Col span={4}>
            <Link to='/user'><Icon style={{ fontSize: '24px' }} type="user" /><br/>用户</Link></Col>
        </Row>
    </div>
)

export default FootMenu;