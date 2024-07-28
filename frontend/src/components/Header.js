// src/components/Header.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import "../styles/Common.css"
 
function Header({ title, onClick, style, children }) {
    const navigate = useNavigate();

    const defaultClickHandler = (event) => {
        // 이벤트가 자식 요소로 버블링되지 않도록 방지합니다.
        if (event.target === event.currentTarget) {
            // console.log('Navigating to home'); // 디버깅 로그 추가
            navigate('/');
        }
    };

    const handleTitleClick = () => {
        navigate('/');
    };

    return (
        <div className="common-header" onClick={onClick || defaultClickHandler} style={{ cursor: 'pointer', ...style }}>
            <div className="common-header-items" onClick={handleTitleClick} style={{ cursor: 'pointer' }}>
                {title || 'H001 SYSTEM'}
            </div>
            {children && <div className="common-header-items auth-buttons">{children}</div>}
        </div>        
    );
}

export default Header;