import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {

        };
    };

    handleChange = (e) => {
        // this.props.selectLanguage(e.target.value);
        this.setState({ selectedLanguage: e.target.value });
    };

    render() {
        return (
            <div>
                               
            </div>
        );
    }
}

const mapStateToProps = (state) => { return state };

export default connect(
    mapStateToProps
)(Header)