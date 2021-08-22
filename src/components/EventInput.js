import React, { Component } from 'react'

class EventInput extends Component {
    constructor(props) {
        super(props)
        this.state = {
            eventValue: ''
        }
    }

    changeValue = (e) => {
        this.setState({eventValue: e.target.value})
    }

    addEvent = () => {
        const {addEvent} = this.props
        if (!this.state.eventValue) return 
        addEvent({ id: Math.random(), text: this.state.eventValue, isComplate: false})
        this.setState({
            eventValue: ''
        })
    }

    render() {
        return (
            <div className={'add-input-warp'}>
                <input type="text" value={this.state.eventValue} onChange={this.changeValue}/>
                <button onClick={this.addEvent}>添加</button>
            </div>
        )
    }
}

export default EventInput