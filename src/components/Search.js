import React, { useState } from "react";
import {
  Container,
  Label,
  Form,
  Row,
  Col,
  Input,
  Button,
  InputGroup
} from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import Post from "./Post";
import "../css/Search.css";
import { FcSearch } from "react-icons/fc";

function Search() {
    const [keyword, setKeyword] = useState([]);
    const [result, setResult] = useState([]);

    const init = (event) => {
        event.preventDefault();
        axios.get("https://se-book-store.herokuapp.com/api/v1/books"+keyword)
        .then((response) => {
            setResult(response.data.results);
        });
    };

    console.log (result)

    return (
        <Container >
        <Form onSubmit={init}>
            <center>
            <Label className="h1">Book Shop</Label>
            </center>
            <Row>
            <Col xs="3"></Col>
            <Col xs="6">
                <center>
                <InputGroup>
                    <Input onChange={(event) => setKeyword(event.target.value)} className="search"
                    type="text" placeholder="ค้นหาจากรหัสหนังสือ" />
                    <Button type="submit" className="btn"> <FcSearch />
                    </Button>
                </InputGroup>
                </center>
            </Col>
            <Col xs="3"></Col>
            </Row>
        </Form>

        <Post id={result} />

        </Container>
    );
}

export default Search;