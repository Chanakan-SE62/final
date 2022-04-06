import React, { useState } from 'react';
import axios from "axios";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./pages/Home"

function App() {
    const [book, setBook] = useState([]);

    const getAll = async () => {
        const result = await axios.get("https://se-book-store.herokuapp.com/api/v1/books",{});
        setBook(result.data);
    }

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home handleOnLoad={getAll} book={book} />} />
            </Routes>
        </Router>
    );
}

export default App;
