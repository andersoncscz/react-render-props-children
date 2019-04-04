import React from 'react'
import avatar from '../../../assets/images/avatar.png';
export default props => {
    
    const { userName } = props;

    return (
        <div className="nav-item">
            <span className="navbar-brand font-weight-light font-italic text-secondary my-navbar-user-name">{userName}</span>
            <img src={avatar} alt="..." className="rounded-circle ml-2 avatar" />
        </div>   
    )
}
