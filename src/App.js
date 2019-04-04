import React from 'react';
import Navbar from './components/template/navbar/Navbar';
import Sidebar from './components/template/sidebar/Sidebar';
import Toggle from './components/utils/Toggle';

export default props => (
    <Toggle>
        {( {isCollapsed, toggle }) => (
            <div>
                <Navbar toggle={toggle} userName={"Hello Anderson!"} title="React" />
                <Sidebar isCollapsed={isCollapsed} toggle={toggle} />
            </div>
        )}
    </Toggle>
)
