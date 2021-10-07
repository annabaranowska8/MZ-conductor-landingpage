import React from "react";
import {
    HashRouter,
    Route
} from "react-router-dom";
import Main from "./Main";
import BiographyFullVersion from "./components/MainwithNavbar/Biography/BiographyFullVersion";

const App = () => {
    return (
        <HashRouter>
            <Route exact path="/" component={Main}/>
            <Route path="biography" component={BiographyFullVersion}/>
        </HashRouter>
    )
}

export default App;