import React from 'react';
import { Link } from 'react-router-dom'
import { Row, Col } from 'antd';
import './footMenu.css'

const FootMenu = () => (
    <div className="footMenu-nav">
        <Row align="bottom">
            <Col span={8}><Link to='/'>首页</Link></Col>
            <Col span={8}><Link to='/thinking'>想法</Link></Col>
            <Col span={8}><Link to='/user'>用户</Link></Col>
        </Row>
    </div>
)

export default FootMenu;