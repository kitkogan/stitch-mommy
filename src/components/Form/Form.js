import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = reduxState => ({
    reduxState,
});

class Form extends Component {
    state = {
        newCount: {
            type: '',
            startCount: ''
        }
    }

    handleChangeFor = (event, propertyName) => {
        this.setState({
            newCount: {
                ...this.state.newCount,
                [propertyName]: event.target.value,
            }
        });
    }

    render() {
        return (
            <div>
                <h3>This is the form</h3>
                <pre>{JSON.stringify(this.state)}</pre>
                <form onSubmit={this.addNewCount}>
                    <input onChange={(event) => this.handleChangeFor(event, 'type')} />
                    <input onChange={(event) => this.handleChangeFor(event, 'startCount')} />
                    <input type='submit' value='Add New Count' />
                </form>
            </div>
        );
    }
    
}




export default Form;