import React, { Component } from 'react';
import '../../styles/Components/Form.scss';
export default class Modal extends Component {
    render() {
        const { closeModal } = this.props;

        return (
            <>
                <div
                    className='jumbotron'
                    style={{
                        position: 'absolute',
                        width: '100%',
                        top: 0,
                        height: 500
                    }}
                >
                    <h1>Some Modal</h1>
                    <button
                        className='btn btn-md btn-primary'
                        onClick={closeModal}
                    >
                        Close Modal
                    </button>
                </div>
            </>
        );
    }
}
