
import React, { useState, useImperativeHandle, forwardRef, useRef, useEffect } from "react";
import { fetchImages } from "../Actions/index";
import { Dispatch } from "redux";
import { connect } from 'react-redux';

const ImageList: React.FC<any> = props => {
    const { text, getImages } = props;
    useEffect(() => {
        getImages(text);
    }, [text]);

    return (
        <div>{text}</div>
    );
};

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
    getImages: (text: string) => {
        dispatch(fetchImages(text));
    }
});

// @ts-ignore
export default connect(null, mapDispatchToProps)(ImageList);

