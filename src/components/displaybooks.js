import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { useParams } from 'react-router-dom';
import { fetchBooks } from '../redux/home/homeSlice';

function Displaybooks() {
  const dispatch = useDispatch();
  const { books, status, error } = useSelector((state) => state.books);
  //   const { search } = useParams();

  //   const [searchBooks, setSearchBooks] = useState('');
  const [searchResults, setSearchResults] = useState('');

  const handleChange = (e) => {
    // setSearchBooks(searchValue);
    // if (searchBooks !== '') {
    //   const searchData = books.filter((book) => Object.values(book.title)
    //     .join('')
    //     .toLowerCase()
    //     .includes(searchBooks.toLowerCase()));
    //   setSearchResults(searchData);
    // } else {
    //   setSearchResults('No data found');
    // }
    const book = e.target.value;
    setSearchResults(book);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchBooks(`${searchResults}`));
  };

  if (status === 'loading') {
    return (
      <div className="flex justify-center items-center h-screen w-screen bg-[#5284DD]">
        <div className="h-12 w-12 rounded-full border-white border-4 border-l-gray-500 animate-spin" />
      </div>
    );
  }

  if (error !== null) {
    return <h1 style={{ textAlign: 'center' }}>{error}</h1>;
  }

  return (
    <>
      <section>
        <form onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              placeholder="Search for books"
              autoComplete="off"
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Search
          </button>
        </form>

        {books.map((book) => (
          <div key={book.id}>
            {/* <img
              src={searchResults.imageLinks.thumbnail}
              alt={searchResults.title}
            /> */}
            <h3>{book.volumeInfo.title}</h3>
            <p>{book.volumeInfo.authors}</p>
          </div>
        ))}
      </section>
    </>
  );
}

export default Displaybooks;
