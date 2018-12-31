import React, { Component, Fragment } from "react";

import "./Layout.scss";
import Navbar from "../../components/Navbar/Navbar";

class Layout extends Component {

    render () {
        return (
            <Fragment>
                <div className={"layout__container"}>
                    <Navbar />
                    <main className={"layout__content"}>
                        {this.props.children}
                    </main>
                </div>
            </Fragment>
        );
    }
}

export default Layout;