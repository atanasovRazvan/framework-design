import React, {useState} from "react";
import ReactDOM from "react-dom";

import "./index.scss";
import UseState from "./components/UseState";
import UseEffect from "./components/UseEffect";
import UseLocalStorage from "./components/UseLocalStorage";
import UseContext from "./components/UseContext";
import GlobalProvider from "./store/GlobalContext";

const App = () => {

    const [deleted, setDeleted] = useState(false);

    return (
        <GlobalProvider>
            <div className={"flex"}>
                <UseState/>
                { !deleted && <UseEffect setDeleted={setDeleted}/> }
            </div>
            <div className={"flex"}>
                <UseLocalStorage />
                <UseContext />
            </div>
        </GlobalProvider>
    );
};
ReactDOM.render(<App />, document.getElementById("app"));
