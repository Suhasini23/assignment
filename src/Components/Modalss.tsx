
import React, { useState, useImperativeHandle, forwardRef, useRef, useEffect } from "react";
import { Dispatch } from "redux";
// import Modal from "react-bootstrap/lib/Modal";
import Button from 'react-bootstrap/lib/Button';
import "./style.css";
import { Modal } from 'react-bootstrap';
interface IMapStateToProps {

}
const Modalss: React.FC<any> = props => {
    const { data, onClose, show, url } = props;
    return (
        <Modal className="modalWrapper" show={show} onHide={onClose}>
            <Modal.Header closeButton>
                <Modal.Title>{data.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <img alt="image " src={url} />
            </Modal.Body>
        </Modal>
    )
};
// @ts-ignore
export default Modalss;


