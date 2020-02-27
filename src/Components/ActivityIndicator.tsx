import * as React from "react";

const ActivityIndicator: React.SFC<any> = props => {
    return (
        <div
            className="loading-overlay"
            style={{
                position: "fixed",
                top: "100px",
                bottom: 0,
                width: "90vw",
                display: "flex",
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                zIndex: 10000,
                backgroundColor: 'white',
            }}
        >
            <div className="loader-img">

                <img src="https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/source.gif" />
            </div>
        </div>
    );
};

export default ActivityIndicator;
