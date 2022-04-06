import React from 'react';
import { useEffect } from 'react/cjs/react.production.min';
import Search from '../components/Search';
import CardBook from '../components/CardBook';

function Home(props) {
    const handleOnLoad = () => {
        props.handleOnLoad();
    };
    useEffect(() => {
        handleOnLoad();
    }, []);

    function view() {
        return props.book.map(function (book) {
            return (
                <>
                    <Search />
                    <CardBook 
                        title={book.title}
                        thumbnailUrl={book.thumbnailUrl}
                        isbn={book.isbn}
                        pageCount={book.pageCount}
                        authors={book.authors}
                        categories={book.categories}
                    />
                </>
            );
        });
    }
    return <div className='row'>{view()}</div>;
};

export default Home;