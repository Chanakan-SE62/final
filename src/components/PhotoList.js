import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Container } from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../css/PhotoList.css"

function PhotoList({ id }) {
    const [image, setImage] = useState([])
    const clientId = "afLhZCvikTSBo57zHVB0AAVk9mYcFaw6QqzReJx8S8k"

    useEffect(() => {
        axios.get("https://api.unsplash.com/users/"+id+"/photos?page=1&query=&client_id="+clientId)
        .then((response) => {
            setImage(response.data);
        })
    }, [id]);

    return (
        <Container className='containerphoto'>
            <hr/>
            <br/>
            {image.map((photo) => (
                <img className="photolist" src={photo.urls.regular} />
            ))}
        </Container>
    );
};

export default PhotoList