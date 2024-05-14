import React from 'react';
import ReactDOM from 'react-dom';
import './describe.css'


class Describe extends React.Component {
    render() {
        return (
            <>
                <h1 className='h1'>This is counter</h1>
                <h2 className='h1'>{this.props.title}</h2>
                <button id='btnStart' onClick={this.props.startCounter}>Start</button>
                <button id='btnStop' onClick={this.props.stopCounter}>Stop</button>

            </>
        )
    }


}


export default Describe