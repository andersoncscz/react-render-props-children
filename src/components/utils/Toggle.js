import { Component } from 'react'

export default class Toggle extends Component {
    constructor(props) {
        super(props)
        this.state = {isCollapsed: false}
    }

    toggle = () => {
        this.setState({
            isCollapsed: !this.state.isCollapsed
        })
    }

    render() {
        
        const { isCollapsed } = this.state;
        const { children } = this.props;

        return children({
            isCollapsed,
            toggle: this.toggle            
        })
    }
}
