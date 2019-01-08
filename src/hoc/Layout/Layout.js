import React, { Component, Fragment } from "react";

import "./Layout.scss";
import Navbar from "../../components/Navbar/Navbar";

class Layout extends Component {

    state = {
        navDrawerOpen: false
    };

    navDrawerToggleClickHandler = () => {
        this.setState((prevState) => {
            return {navDrawerOpen: !prevState.navDrawerOpen};
        });
    };

    render () {

        let menuToggle;
        
        if (this.state.navDrawerOpen) {
                menuToggle = true
        };

        return (
            <Fragment>
                <div className={"layout__container"}>
                    <Navbar menuToggle={menuToggle} navDrawerToggle={this.navDrawerToggleClickHandler}/>
                    <main className={"layout__content"}>
                        {this.props.children}
                    </main>
                </div>
            </Fragment>
        );
    }
}

export default Layout;