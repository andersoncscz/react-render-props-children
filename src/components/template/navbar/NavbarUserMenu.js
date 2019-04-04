import React, { Component } from 'react'

export default class NavbarMenu extends Component {
    
    componentDidMount() {
        document.addEventListener('mousedown', this.handleClick, false);
    }
    
    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClick, false);
    }
    
    handleClick = e => {
        if(this.node.contains(e.target)) {
            console.log('Tapped INSIDE of navbar menu');
            return;
        }
        this.handleClickOutside()
    }

    handleClickOutside = () => {
        
        const { isCollapsed, toggle } = this.props;

        if (isCollapsed)
            toggle()

        console.log('Tapped INSIDE of navbar menu');
    }    
    
    render() {
        
        const { isCollapsed, toggle } = this.props;

        return (
            <div ref={node => this.node = node} className={`nav-item ${isCollapsed ? 'show': ''}`}>
                <button onClick={() => toggle()} className="btn btn-default dropdown-toggle text-secondary" 
                    type="button" id="dropdownMenuButton" data-toggle="dropdown" 
                    aria-haspopup="true" aria-expanded={isCollapsed ? 'show' : 'false'}>
                </button>
                <div className={`dropdown-menu dropdown-menu-right mr-4 shadow ${isCollapsed ? 'show': ''}`} 
                    aria-labelledby="dropdownMenuButton">
                    <span className="dropdown-item">Action</span>
                    <span className="dropdown-item">Another action</span>
                    <span className="dropdown-item">Something else here</span>
                </div>                            
            </div>                        
        )
    }
}
