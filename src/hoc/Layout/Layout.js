import React, { Component, Fragment } from "react";

import "./Layout.scss";

class Layout extends Component {

    render () {
        return (
            <Fragment>
                <div className={"layout__container"}>
                    <nav className={"layout__nav"}>
                        <p>Navigation items here</p>
                    </nav>
                    <main className={"layout__content"}>
                        {this.props.children}
                    </main>
                </div>
            </Fragment>
        );
    }
}

export default Layout;