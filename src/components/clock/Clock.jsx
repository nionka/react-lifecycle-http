import React from 'react';
import PropTypes from 'prop-types';
import SecondArrow from '../arrow/SecondArrow';
import MinuteArrow from '../arrow/MinuteArrow';
import HourseArrow from '../arrow/HourseArrow';

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = { time: this.toOffsetDate(this.props.zone) };
    }

    componentDidMount() {
        this.timerID = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    toOffsetDate(zone) {
        const d = new Date();
        const h = d.getUTCHours() + +zone;
        const m = d.getUTCMinutes();
        const s = d.getUTCSeconds();
        return {h, m, s};
    }

    tick() {
        this.setState({ time: this.toOffsetDate(this.props.zone) });
    }

    render() {
        return (
            <li className="clock-item">
                <div className="title">{this.props.name}</div>
                <button onClick={() => this.props.onDelete(this.props.id)}>X</button>
                <div className="clock">
                    <HourseArrow min={this.state.time.m} h={this.state.time.h} />
                    <MinuteArrow min={this.state.time.m} />
                    <SecondArrow sec={this.state.time.s} />
                </div>
            </li>
        )
    }
}

Clock.propTypes = {
    props: PropTypes.object
}

export default Clock