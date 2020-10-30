import React, { Component } from 'react';
import { connect } from 'react-redux';
// import axios from 'axios';

const mapStateToProps = reduxState => ({
    reduxState,
});

class List extends Component {
    componentDidMount() {
        this.getCountList();
    }

    // getCountList = () => {
    //     axios.get('/api/count')
    //       .then( response => {
    //         this.props.dispatch({ type: `SET_COUNT_LIST`, payload: response.data });
    //         console.log('this is response:', response.data);
    //       })
    //       .catch( error => {
    //         console.log(error);
    //         alert(`Could not get count at this time. Try again later.`);
    //       })
    //   }

    getCountList = () => {
      this.props.dispatch({ type: 'GET_COUNT' });
    }

    render() {
        return (
            <div>
                <h3>This is the count list</h3>
                <pre>{JSON.stringify(this.props.reduxState)}</pre>
            </div>
        );
    }
}

export default connect(mapStateToProps)(List);
