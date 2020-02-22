import React, { useState, useImperativeHandle, forwardRef, useRef } from "react";
import SearchBar from './SearchBar';
import { appTitle } from "../Constants";
import './SearchBoxStyle.css';
const SearchBox: React.FC<any> = props => {
    return (
        <div className="HeaderWrapper">
            <p className="HeaderTitle">{appTitle}</p>
            <SearchBar />
        </div>
    );
};

export default SearchBox;
