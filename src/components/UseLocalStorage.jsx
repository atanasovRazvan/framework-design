import PaddedDiv from "./PaddedDiv";
import useLocalStorage from "../hooks/useLocalStorage";
import {GlobalContext} from "../store/GlobalContext";
import {useContext} from "react";

const UseLocalStorage = () => {
    const [color, setColor] = useLocalStorage("color", "red");
    const { background } = useContext(GlobalContext);

    return (
        <PaddedDiv title={"Custom Hooks - use local storage as a useState"}>
            <div className={`flex flex-col items-center gap-5 bg-${background}-100 p-5`}>
                <div>
                    This is an example of using the local storage as a useState. This hook enhances useState <br/>
                    with local storage persistancy. You can check that the values are persisted by accessing <br/>
                    the local storage tab in Inspect Element -> Application Tab. You may also change the value <br/>
                    dirrectly from the Application Tab, but this will require a refresh.
                </div>

                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={() => setColor(color === "red" ? "green" : "red")}
                >
                    Click me to change the color!
                </button>

                <div className={`w-fit p-2 h-10 bg-${color}-600`}>
                    Look how I change!
                </div>
            </div>
        </PaddedDiv>
    )
}

export default UseLocalStorage;