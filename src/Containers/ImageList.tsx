
import React, { useState, useImperativeHandle, forwardRef, useRef, useEffect } from "react";
import { fetchImages } from "../Actions/index";
import { Dispatch } from "redux";
import { connect } from 'react-redux';
import "./imageListStyle.css"
import ActivityIndicator from '../Components/ActivityIndicator';
import Modalss from '../Components/Modalss';
interface IMapStateToProps {

}

const ImageList: React.FC<any> = props => {
    const { text, getImages, FETCH_IMAGES, loading } = props;
    const [showModal, setShowMOdal] = useState(false);
    const [imageUrl, setImageUrl] = useState("");

    const [dataModal, setDataModal] = useState({});
    useEffect(() => {
        getImages(text);
    }, [text]);

    const handleOnClick = (event: any, item: any, url: string) => {
        setDataModal(item);
        setShowMOdal(true)
        setImageUrl(url)
        event.stopPropagation();
    }

    const onClose = () => {
        setShowMOdal(false)
    }
    return (
        <>
            {loading && <ActivityIndicator />}
            <div className="imageListWrapper">
                {FETCH_IMAGES && FETCH_IMAGES.photo.map((item: any, index: any) => {
                    const url = `https://farm${item.farm}.staticflickr.com/${item.server}/${item.id}_${item.secret}_n.jpg`;
                    return (
                        <>
                            <img onClick={(e) => handleOnClick(e, item, url)} className="imageStyle" src={url} alt="sjs" />
                        </>
                    )
                })}
                <Modalss data={dataModal} onClose={onClose} show={showModal} url={imageUrl} />
            </div>
        </>
    );
};

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
    getImages: (text: string) => {
        dispatch(fetchImages(text));
    }
});

const mapStateToProps = (state: any): IMapStateToProps => ({
    FETCH_IMAGES: state.images.imageData.photos,
    loading: state.images.loading
});

// @ts-ignore
export default connect(mapStateToProps, mapDispatchToProps)(ImageList);

