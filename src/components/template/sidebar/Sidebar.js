import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

import './Sidebar.css';

class Sidebar extends Component {
    
    componentDidMount() {
        document.addEventListener('mousedown', this.handleClick, false);
    }
    
    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClick, false);
    }
    
    handleClick = e => {
        if(this.node.contains(e.target)) {
            console.log('Tapped INSIDE of sidebar');
            return;
        }
        this.handleClickOutside()
    }

    handleClickOutside = () => {
        
        const { isCollapsed, toggle } = this.props;

        if (isCollapsed)
            toggle()

        console.log('Tapped INSIDE of sidebar');
    }


    render() {  
        
        const { isCollapsed, toggle } = this.props;

        return (
            <div ref={node => this.node = node}>
                <nav className={`sidebar ${isCollapsed ? 'sidebar-opened' : 'sidebar-closed'} bg-light`} >
                    <ul className="d-flex justify-content-end">
                        <li className="mr-4 mt-2">
                            <button onClick={() => toggle()} className="btn btn-default float-right text-secondary"> <FontAwesomeIcon icon={faArrowLeft} /> </button>
                        </li>
                    </ul>
                </nav>   
            </div>
        )
    }
}

export default Sidebar;