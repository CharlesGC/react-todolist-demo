import React, { Component } from 'react'
import EventInput from '@/components/EventInput'

import './app.scss'

class App extends Component {
    constructor() {
        super()
        this.state = {
            eventList: []
        }
    }

    addEvent = (value) => {
        this.setState((prevState) => ({eventList: [...prevState.eventList, value]}))
    }

    delEvent = (e, i) => {
        const list = this.state.eventList
        list.splice(i, 1)
        this.setState({
            eventList: list
        })
    }

    setEvent = (e, i) => {
        const list = this.state.eventList
        list[i].isComplate = !list[i].isComplate
        this.setState({
            eventList: list
        })
    }
    
    render() {
        const EventList = () => (
            <ul>
                    {
                        this.state.eventList.map((item, i) => {
                            return (
                                <li key={i} className={item.isComplate ? 'is-complate' : ''}>
                                    {item.text}

                                    <div className={'item-bottons'}>
                                        <button onClick={(e) => this.setEvent(e, i)}> ✔ </button>
                                        <button onClick={(e) => this.delEvent(e, i)}> ✗ </button>
                                    </div>
                                </li>
                            )
                        })
                    }
            </ul>
        )
        return (
            <div className={'main-container'}>
                <h1>To do List</h1>
                <EventInput addEvent={this.addEvent}></EventInput>
                <EventList />
            </div>
        )
    }
}

export default App