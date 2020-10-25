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
        },
        // countList: [],
    }

    handleChangeFor = (event, propertyName) => {
        console.log('event occured');
        this.setState({
            newCount: {
                ...this.state.newCount,
                [propertyName]: event.target.value,
            }
        });
    }

    addNewCount = event => {
        event.preventDefault();
        console.log('submit clicked')
        this.props.dispatch({ type: 'ADD_COUNT', payload: this.state.newCount })
        this.setState({
            newCount: {
                type: '',
                startCount: '',
            },
            // countList: [...this.state.countList, this.state.newCount],
        });
        console.log('state', this.state);
    }

    render() {
        return (
            <div>
                <h3>This is the form</h3>
                <pre>{JSON.stringify(this.state)}</pre>
                <form onSubmit={this.addNewCount}>
                    <input value={this.state.newCount.type} onChange={(event) => this.handleChangeFor(event, 'type')} />
                    <input value={this.state.newCount.startCount} onChange={(event) => this.handleChangeFor(event, 'startCount')} />
                    <input type='submit' value='Add New Count' />
                </form>
            </div>
        );
    }
    
}




export default connect(mapStateToProps)(Form);
