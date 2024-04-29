import {useState, useContext} from "react";
import PaddedDiv from "./PaddedDiv";
import {GlobalContext} from "../store/GlobalContext";

const COLORS = Object.freeze(["red", "green"]);

const UseState = () => {
    const [color, setColor] = useState(0);
    const { background } = useContext(GlobalContext);

    console.log(background);

    return (
        <PaddedDiv title={"useState - does not trigger re-renders for other components"}>
            <div className={`flex flex-col items-center gap-5 bg-${background}-100 p-5`}>
                <div>
                    <strong>useState</strong> is one of the most known and used hooks in React. Along with<br/>
                    props, the state triggers a re-render whenever the value of the state changes. Here,<br/>
                    we have a state called <code>color</code>, which changes when we click the button down below<br/>
                    and that triggers a re-render, which will display the color with the updated value.
                </div>

                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={() => setColor(1 - color)}
                >
                    Click me to change the state!
                </button>

                <div className={`w-fit p-2 h-10 bg-${COLORS[color]}-600`}>
                    Look how I change!
                </div>
            </div>
        </PaddedDiv>
    )
}

export default UseState;