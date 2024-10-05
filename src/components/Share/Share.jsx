import React, { useState, useRef } from 'react';
import './Share.css';

import profileimg from './../../img/profileImg.jpg';
import { UilScenery, UilPlayCircle, UilSchedule, UilLocationPoint, UilTimes } from '@iconscout/react-unicons';
import { useDispatch, useSelector } from 'react-redux';
import { uploadImage, uploadPost } from "../../actions/UploadActions.js";

function Share() {
    const [image, setImage] = useState(null);
    const desc = useRef();
    
    const serverPublic =`http://localhost:5000/images/` 
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.authReducer.authData);
    const loading = useSelector((state) => state.postReducer.uploading);

    const onImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
          let img = event.target.files[0];
          setImage(img);
        }
      };

      const imageRef = useRef();

    const handleUpload = async (e) => {
        e.preventDefault();

        const newPost = {
            userId: user._id,
            desc: desc.current.value
        };

        if (image) {
            const data = new FormData();
            const filename = Date.now() + image.name;
            data.append('name', filename);
            data.append('file', image);
            newPost.image = filename;

            try {
               dispatch(uploadImage(data));
            } catch (error) {
                console.log(error);
            }
        }

        dispatch(uploadPost(newPost));
        resetShare();
    };

    const resetShare = () => {
        setImage(null);
        desc.current.value = "";
    };

    return (
        <div className="share">
            <img src={user.profilePicture ? serverPublic + user.profilePicture : serverPublic + "meow.jpg"} alt="" className="mimage" />
          
            <div className="search">
                <input 
                    type="text" 
                    placeholder="What's happening?" 
                    className="searchbar" 
                    ref={desc}
                />
                <div className="main-options">
                    <div className="options" onClick={() => imageRef.current.click()}>
                        <UilScenery color="#E00712" />
                    </div>
                    <div className="options">
                        <UilPlayCircle color="#E00712" />
                    </div>
                    <div className="options">
                        <UilSchedule color="#E00712" />
                    </div>
                    <div className="options">
                        <UilLocationPoint color="#E00712" />
                    </div>
                    <button 
                        className="share-btn" 
                        onClick={handleUpload}
                        disabled={loading}
                    >
                        {loading ? "Uploading..." : "Share"}
                    </button>
                    <input 
                        type="file" 
                        name="myImage" 
                        ref={imageRef} 
                        onChange={onImageChange} 
                        style={{ display: 'none' }} 
                    />
                </div>
                {image && (
                    <div className="preview">
                        <img src={URL.createObjectURL(image)} alt="Preview" />
                        <UilTimes size="40" onClick={() => setImage(null)} />
                    </div>
                )}
            </div>
        </div>
    );
}

export default Share;
