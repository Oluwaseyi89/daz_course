import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

import '../styles/imageupload.css';

function ImageUpload ({ onImageUpload }) {

    const onDrop = useCallback((acceptedFiles) => {
        // We will only take the first image if multiple are dropped
        const file = acceptedFiles[0];
        onImageUpload(file);
    }, [onImageUpload]);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept: 'image/*',
        multiple: false
    });

    return (
        <div {...getRootProps()} className={`dropzone ${isDragActive ? 'active' : ''}`}>
            <input {...getInputProps()} />
            {
                isDragActive ? (
                    <p>Drop the image here...</p>
                ) : (
                    <p>Drag 'n' drop an image here, or click to select one</p>
                )
            }
        </div>
    );

};

export default ImageUpload;