import React from 'react';
import { Link } from 'react-router-dom'

const FootMenu = () => (
    <div>
        <ul>
            <li><Link to='/'>首页</Link></li>
            <li><Link to='/thinking'>想法</Link></li>
            <li><Link to='/user'>用户</Link></li>
        </ul>
    </div>
)

export default FootMenu;