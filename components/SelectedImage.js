import React from "react";
import NextImage from '../components/Image'
import { Fade } from "react-reveal";

const SelectedImage = ({ photo, margin }) => {

    const handleOnClick = () => {
        window.location.href = `/products/${photo.slug}`
    };


    return (
        <Fade bottom distance={'10%'}>
        <div
            style={{margin, height: photo.height, width: photo.width}}
            onClick={handleOnClick}
        >
                <NextImage
                    alt={photo.title}
                    {...photo}
                ></NextImage>
        </div>
        </Fade>
    );
};

export default SelectedImage;
