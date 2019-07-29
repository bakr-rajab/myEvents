import React, {Component} from 'react';
import Slide from "react-reveal/Slide";

class Timer extends Component {
    state = {
        deadline: 'Oct,8,2019',
        month:'0',
        days: '0',
        hours: '0',
        minutes: '0',
        seconds: '0',
    };

    getTimer(deadline) {
        const time = Date.parse(deadline) - Date.parse(new Date());
        if (time < 0) {
            console.log('Date Passed');
        } else {
            const seconds = Math.floor((time / 1000) % 60);
            const minutes = Math.floor((time / 1000 / 60) % 60);
            const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
            const days = Math.floor((time / (1000 * 60 * 60 * 24)) %30);
            const month = (new Date(this.state.deadline).getMonth())-(new Date().getMonth()+1);
            this.setState({
                month,
                days,
                hours,
                minutes,
                seconds
            })
        }


    }

    componentDidMount() {
        setInterval(() => this.getTimer(this.state.deadline), 1000)
    }

    render() {
        const newState = this.state;
        return (
            <Slide left duration={3000}>
                <div className='countdown_wrapper'>
                    <div className="countdown_top">
                        Event starts in
                    </div>
                    <div className="countdown_bottom">

                        <div className="countdown_item">
                            <div className="countdown_time">
                                {newState.month}
                            </div>

                            <div className="countdown_tag">
                                Months
                            </div>
                        </div>  <div className="countdown_item">
                            <div className="countdown_time">
                                {newState.days}
                            </div>

                            <div className="countdown_tag">
                                DAys
                            </div>
                        </div>
                        <div className="countdown_item">
                            <div className="countdown_time">
                                {newState.hours}
                            </div>

                            <div className="countdown_tag">
                                Hs
                            </div>
                        </div>
                        <div className="countdown_item">
                            <div className="countdown_time">
                                {newState.minutes}
                            </div>

                            <div className="countdown_tag">
                                Min
                            </div>
                        </div>
                        <div className="countdown_item">
                            <div className="countdown_time">
                                {newState.seconds}
                            </div>

                            <div className="countdown_tag">
                                Sec
                            </div>
                        </div>

                    </div>
                </div>
            </Slide>
        );
    }
}

Timer.propTypes = {};

export default Timer;
