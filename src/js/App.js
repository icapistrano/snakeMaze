import React, { useRef, useEffect } from "react";
import "../css/App.css";

import threeEntryPoint from "./threeEntryPoint.js";

const App = () =>{
    const threeJSContainer = useRef(null);

    useEffect(() => {
        threeEntryPoint(threeJSContainer.current);
    }, []);

    return (
        <div ref={threeJSContainer}></div>
    )
}

export default App