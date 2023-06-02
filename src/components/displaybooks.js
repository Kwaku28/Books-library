// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { useParams } from 'react-router-dom';
// import { fetchBooks } from '../redux/home/homeSlice';

// function Displaybooks() {
//   const dispatch = useDispatch();
//   const { books, status, error } = useSelector((state) => state.books);
//   const { search } = useParams();

//   useEffect(() => {
//     dispatch(fetchBooks(search));
//   }, [dispatch, search]);

//   if (status === 'loading') {
//     return (
//       <div className="flex justify-center items-center h-screen w-screen bg-[#5284DD]">
//  <div className="h-12 w-12 rounded-full border-white border-4 border-l-gray-500 animate-spin" />
//       </div>
//     );
//   }

//   if (error !== null) {
//     return <h1 style={{ textAlign: 'center' }}>{error}</h1>;
//   }

//   return (
//     <>
//       b
//     </>
//   );
// }

// export default Displaybooks;
