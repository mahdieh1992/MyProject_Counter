import React from 'react';
import ReactDOM from 'react-dom';
import Describe from './describe';
import './index.css'

var interval

class CountDown extends React.Component {

    constructor() {
        super()
        this.state = {
            count: 10,
            title: 'This is test'
        }
    }

    // componentDidMount() {
    //     var x = this.state.count
    //     interval = setInterval(() => {
    //         this.setState({
    //             count: x
    //         })
    //         x--

    //     }, 1000);
    // }

    // this is start counter 
    startCounter = () => {
        var x = this.state.count
        interval = setInterval(() => {
            this.setState({
                count: x
            })
            x--

        }, 1000);

    }

    // this is stop counter 

    stopCounter = () => {
        clearInterval(interval)

    }
    // stop counter if counter was zero    
    componentDidUpdate() {
        if (this.state.count === 0) {
            clearInterval(interval)

        }
    }

    // <Describe startCounter={this.startCounter} > for send data to componet
    render() {

        return (
            <div className='divMain'>
                <Describe startCounter={this.startCounter} stopCounter={this.stopCounter} />
                <div className='div'>{this.state.count}</div>

            </div>
        )
    }




}
export default CountDown
