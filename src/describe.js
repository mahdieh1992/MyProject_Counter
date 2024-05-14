import React from 'react';
import ReactDOM from 'react-dom';
import './describe.css'


class Describe extends React.Component {
    render() {
        return (
            <>
                <h1 className='h1'>This is counter</h1>
                <h2 className='h1'>{this.props.title}</h2>

            </>
        )
    }


}


export default Describe