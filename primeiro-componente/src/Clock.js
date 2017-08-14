import React from 'react';
import Welcome from './Welcome';

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date() };
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        return <div>
            <Welcome name="Breno Queiroz" />
            <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
        </div>
    }
}

export default Clock;
