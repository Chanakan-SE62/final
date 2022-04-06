import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";

function Book ({ isbn, title, thumbnailUrl, pageCount }) {
    return (
        <div className="card col-3" style={{ width: "18cm" }}>
            <Link to={``}>
                <span>{title}</span>
            </Link>
            <img src={thumbnailUrl} className="card-img-top" />
            <div className="card-body">
                <h6 className="card-title">จำนวน {pageCount} หน้า</h6>
                <p className="card-text">รหัส {isbn}</p>
            </div>
        </div>
    )
}

export default Book;