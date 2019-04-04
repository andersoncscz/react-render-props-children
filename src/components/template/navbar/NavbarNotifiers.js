import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default props => {
    const { numberOfnotifications, icon } = props;
    return (
        <div className="nav-item">
            <div>
                <button className="btn btn-default text-secondary">
                    <FontAwesomeIcon icon={icon} /> 
                </button>
                <span className="badge badge-pill badge-danger my-badges-notify">{numberOfnotifications}</span>
            </div>
        </div>
    )
}
