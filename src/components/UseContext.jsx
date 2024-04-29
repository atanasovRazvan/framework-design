import {useContext, useState} from "react";
import PaddedDiv from "./PaddedDiv";
import {GlobalContext} from "../store/GlobalContext";

const UseContext = () => {
    const { background, setBackground } = useContext(GlobalContext);

    return (
        <PaddedDiv title={"useContext - global state management"}>
            <div className={`flex flex-col items-center gap-5 bg-${background}-100 p-5`}>
                <div>
                    <strong>useContext</strong> is generally used for managing data globally, in this case, we<br/>
                    manage the background color for all the individual components!
                </div>

                <div className={"flex gap-5"}>
                    <button
                        className="bg-red-800 hover:bg-red-400 text-white font-bold py-2 px-4 rounded"
                        onClick={() => setBackground("red")}
                    >
                        Click me for RED
                    </button>

                    <button
                        className="bg-green-800 hover:bg-green-400 text-white font-bold py-2 px-4 rounded"
                        onClick={() => setBackground("green")}
                    >
                        Click me for GREEN
                    </button>
                </div>
            </div>
        </PaddedDiv>
    )
}

export default UseContext;