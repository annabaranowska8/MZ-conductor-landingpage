import React from "react";
import {
    BrowserRouter,
    Route
} from "react-router-dom";
import Main from "./Main";
import Biography from "./components/MainwithNavbar/Biography/Biography";

const App = () => {
    return (
        <BrowserRouter>
            <Route exact path="/" component={Main}/>
            <Route path="/biography" component={Biography}/>
        </BrowserRouter>
    )
}

export default App;