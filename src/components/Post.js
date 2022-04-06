import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Card,
  CardBody,
  CardText
} from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/Post.css"

const Post = ({ id }) => {
  return (
    <div>
      {id.map((datail) => (

        <Card className="mx-auto" style={{ margin: '20px 0px 20px 0px' }}>
          <CardBody key={datail.isbn}>
            <img
              alt="Card image cap"
              src={datail.thumbnailUrl}
              width="100%"
              className="img"
            />
          </CardBody>
          <CardBody>
            <CardText>
              <span>ชื่อหนังสือ{datail.title}</span>
            </CardText>
          </CardBody>
        </Card>
      ))}
    </div>
  )
}

export default Post;