import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app/app.tsx";
import GlobalStyles from "./app/components/GlobalStyles/GlobalStyles.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <GlobalStyles>
            <App />
        </GlobalStyles>
    </React.StrictMode>
);
