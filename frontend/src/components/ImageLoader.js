import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AvatarEditor from 'react-avatar-editor';
import Dropzone from 'react-dropzone';

class ImageLoader extends Component {
  constructor() {
    super();

    this.state = { 
      image: undefined 
    }   
  }

  handleChange = evt => {
    this.setState({ image: evt.target.files[0] })
  }
     
  handleDrop = dropped => {
    this.setState({ image: dropped[0] })
  }

  render() {
    return (
      <div>
        <div>
          <div className="input-group mb-3">
            <div className="custom-file">
              <input type="file" className="custom-file-input" onChange={this.handleChange} />
              <label className="custom-file-label" >Select photo..</label>
            </div>
          </div>
        </div>
        <div className="pb-4">
          <Dropzone
            onDrop={this.handleDrop}
            disableClick
            style={{ width: '200px', height: '200px' }}
          >
            <AvatarEditor width={200} height={200} 
              border={0} ref="imageCanvas"
              image={this.state.image ? this.state.image : "/images/default_add.jpg" } 
            />
          </Dropzone>
        </div>
      </div>
    )
  }
}

ImageLoader.propTypes = {
}

export default ImageLoader;