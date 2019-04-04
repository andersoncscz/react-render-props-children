import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default props => {
    const { onClick, icon } = props;
    return (
        <button onClick={onClick} className="btn btn-default text-secondary"> 
            <FontAwesomeIcon icon={icon} />
        </button>
    )
}
