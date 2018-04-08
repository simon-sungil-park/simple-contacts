import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AvatarEditor from 'react-avatar-editor';
import Dropzone from 'react-dropzone';

class ImageLoader extends Component {
  constructor() {
    super();

    this.state = { 
      image: undefined,
      isFirstLoad: true
    }   
  }

  handleChange = evt => {
    if (evt.target.files.length > 0) {
      this.setState({ 
        image: evt.target.files[0], 
        isFirstLoad: false
      });
    }
  }
     
  handleDrop = dropped => {
    if (dropped.length > 0) {
      this.setState({ 
        image: dropped[0],
        isFirstLoad: false
      });
    }
  }

  handleImageChange = () => {
    if (!this.state.isFirstLoad) {
      this.updateData();    
    }
  }

  updateData = () => {
    const scaledCanvas = this.refs.imageCanvas.getImageScaledToCanvas();
    const scaledImageData = scaledCanvas.toDataURL('image/jpeg', 0.8);

    this.props.updatePhotoData(scaledImageData);
  }

  render() {
    return (
      <div>
        <div className="input-group mb-3">
          <div className="custom-file">
            <input type="file" className="custom-file-input" onChange={this.handleChange} />
            <label className="custom-file-label" >Select photo...</label>
          </div>
        </div>
        <div className="pb-4">
          <Dropzone
            onDrop={this.handleDrop}
            disableClick
            style={{ width: '200px', height: '200px' }}
          >
            <AvatarEditor width={200} height={200} border={0} 
              onImageChange={this.handleImageChange}
              onLoadSuccess={this.handleImageChange}
              ref="imageCanvas"
              image={this.state.image ? 
                      this.state.image : 
                      this.props.defaultImage ?
                        this.props.defaultImage :  
                        "/images/default_add.jpg" 
              } 
            />
          </Dropzone>
        </div>
      </div>
    )
  }
}

ImageLoader.propTypes = {
  updatePhotoData: PropTypes.func.isRequired,
  defaultImage: PropTypes.string
}

export default ImageLoader;