import React from "react";

const Helmet = (props) => {
    // Name at the tab
    document.title = "Rental Service - " + props.title;
    return <div className="w-100">{props.children}</div>;
};

export default Helmet;
