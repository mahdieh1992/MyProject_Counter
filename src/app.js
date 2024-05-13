import React from 'react';
import ReactDOM from 'react-dom';
import Describe from './describe';
import './index.css'

var interval

class CountDown extends React.Component {

    constructor() {
        super()
        this.state = {
            count: 10
        }
    }

    componentDidMount() {
        var x = this.state.count
        interval = setInterval(() => {
            this.setState({
                count: x
            })
            x--

        }, 1000);
    }
    componentDidUpdate() {
        if (this.state.count === 0) {
            clearInterval(interval)

        }
    }

    render() {

        return (
            <div className='divMain'>
                <Describe />
                <div className='div'>{this.state.count}</div>

            </div>
        )
    }




}
export default CountDown
