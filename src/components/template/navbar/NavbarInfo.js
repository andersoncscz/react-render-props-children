import React from 'react'
import logo from '../../../assets/images/react-logo.png';

export default props => {
    const { title } = props;
    return (
        <div>
            <img src={logo} alt="avatar" className="rounded-circle ml-2 mr-2 avatar" />
            <span className="navbar-brand text-secondary pl-2">{title}</span>        
        </div>
    )
}
