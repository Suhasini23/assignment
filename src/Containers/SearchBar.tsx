import React, { useState, useImperativeHandle, forwardRef, useRef } from "react";

const SearchBox: React.FC<any> = props => {
    const [searchText, setSearchText] = useState("");

    const onChangeHandler = (item: string) => {

    }
    return (
        <div>
            <input
                className=""
                type="text"
                placeholder="Search anything"
                value={searchText}
                onChange={(e: any) => onChangeHandler(e.target.value)}
            />
        </div>
    );
};

export default SearchBox;
