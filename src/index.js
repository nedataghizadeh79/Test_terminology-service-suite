
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";


// ReactDOM.render(
//     <React.StrictMode>
//         <App />
//     </React.StrictMode>,
//     document.getElementById("root")
// );

const roError =
    /ResizeObserver loop completed with undelivered notifications/i;

const origConsoleError = console.error;
console.error = (...args) => {
    if (args && args[0] && roError.test(String(args[0]))) return;
    origConsoleError(...args);
};

ReactDOM.render(
    <App />,
    document.getElementById("root")
);
