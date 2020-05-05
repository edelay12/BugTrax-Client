import React from 'react';
import ImageUploader from 'react-images-upload';
import './image-upload.css';
import { withRouter } from 'react-router-dom';
import MainContext from '../../contexts/main-context'
import UserApiService from '../../services/user-api-service';

class ImageUpload extends React.Component {
    constructor(props) {
        super(props);
        this.state = { picture: [] };
        this.onDrop = this.onDrop.bind(this);
    }
    
    static contextType = MainContext;

    onDrop(pictureFile, pictureDataURLs) {
        this.setState({
            picture: pictureFile
        });
    }

    useDemoPhoto = () => {
    console.log('demo')
    return this.props.history.push('/team-join');
    /*    UserApiService.userRandomProfileImage(this.context.userId)
        .then(user => {
            user.team == null ? this.props.history.push('/team-join') : this.props.history.push(`/dashboard/${user.team}`);
        }) */
    }


    render() {
        return (
            <section className='Image-upload'>
                <div className='Image-upload-container'>
                <h2 className='Image-upload-dir'>Upload a profile image</h2>
            <ImageUploader
                withIcon={true}
                buttonText='Choose image'
                buttonClassName='Radial-button'
                onChange={this.onDrop}
                imgExtension={['.jpg', '.gif', '.png', '.gif']}
                maxFileSize={5242880}
            />

            <p className='Use-demo-photo-dir'>Or</p>
            <button className='Use-demo-photo-b Radial-button' onClick={this.useDemoPhoto}>Use demo image</button>
            </div>
            </section>
        );
    }
}

export default withRouter(ImageUpload)