import "./GlobalStyles.scss";

type TGlobalStyles = {
    children: React.ReactNode;
};

function GlobalStyles({ children }: TGlobalStyles) {
    return children;
}

export default GlobalStyles;
