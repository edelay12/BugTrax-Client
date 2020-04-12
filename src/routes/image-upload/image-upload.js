import React from 'react';
import ImageUploader from 'react-images-upload';
import './image-upload.css';

export default class ImageUpload extends React.Component {

    constructor(props) {
        super(props);
        this.state = { picture: [] };
        this.onDrop = this.onDrop.bind(this);
    }

    onDrop(pictureFile, pictureDataURLs) {
        this.setState({
            picture: pictureFile
        });
    }

    render() {
        return (
            <section className='Image-upload'>
                <div className='Image-upload-container'>
                <h2 className='Image-upload-dir'>Upload profile image</h2>
            <ImageUploader
                withIcon={true}
                buttonText='Choose image'
                buttonClassName='Radial-button'
                onChange={this.onDrop}
                imgExtension={['.jpg', '.gif', '.png', '.gif']}
                maxFileSize={5242880}
            />

            <p className='Use-demo-photo-dir'>Or</p>
            <button className='Use-demo-photo-b Radial-button'>Use demo image</button>
            </div>
            </section>
        );
    }
}