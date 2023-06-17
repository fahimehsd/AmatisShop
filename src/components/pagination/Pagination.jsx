// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { BASE_URL } from "../../sample_front/configs/variables.config";

// const Pagination = () => {
//   const [Post, setPost] = useState([]);
//   const [currentPage, setCurrentPage] = useState(2);
//   const [PostPerPage, setPostPerPage] = useState(10);
//   const fetchPost = () => {
//     axios.get(`${BASE_URL}/products`).then((res) => setPost(res.data));
//   };

//   useEffect(() => {
//     fetchPost();
//   }, []);

//   //get current posts

//   const IndexOfLastPost = currentPage * PostPerPage;
//   const IndexOfFirstPost = IndexOfLastPost - PostPerPage;
//   const CurrentPosts = Post.slice(IndexOfFirstPost, IndexOfLastPost);
//   console.log(IndexOfFirstPost, IndexOfLastPost, CurrentPosts);

//   // pagination stuff
//   const PageNumbers = [];

//   // let NumOfTotalPost = Post.length;
//   for (let i = 1; i <= Math.ceil(Post.length / PostPerPage); i++)
//     PageNumbers.push(i);
//   console.log(PageNumbers);
//   return (
//     <>
//       {Post.length !== 0 ? ( //data is preset then show this
//         <div className="p-8 px-40 mt-36">
//           <h1 className="text-5xl mb-4 font-extrabold ">
//             Subscibe for more react stuff 🥲
//           </h1>

//           {/* show the post here */}
//           {CurrentPosts.map((item, idx) => (
//             <div key={idx}>
//               {item.id} {item.title}
//             </div>
//           ))}

//           {/* previous and next button */}
//           <div className="bg-red-100 flex justify-center space-x-10 mt-10">
//             <button
//               className="p-3 bg-indigo-600 text-white focus:ring hover:bg-indigo-800 "
//               onClick={() => {
//                 if (currentPage > 1) {
//                   setCurrentPage(currentPage - 1);
//                 }
//               }}
//             >
//               prev
//             </button>
//             <button
//               className="p-3 bg-indigo-600 text-white focus:ring hover:bg-indigo-800 "
//               onClick={() => {
//                 if (currentPage < PageNumbers.length) {
//                   setCurrentPage(currentPage + 1);
//                 }
//               }}
//             >
//               Next
//             </button>
//           </div>

//           {/* pagination stuff */}
//           <div className="flex justify-between w-[400px] mt-2">
//             {PageNumbers.map((PageNumber) => (
//               <div
//                 key={PageNumber}
//                 onClick={() => {
//                   setCurrentPage(PageNumber);
//                 }}
//                 className={
//                   PageNumber == currentPage
//                     ? " p-2 px-3 text-white bg-green-700 focus:ring hover:bg-pink-800 cursor-pointer" //this css when selcted
//                     : "p-2 px-3 text-white bg-pink-600 focus:ring hover:bg-pink-800 cursor-pointer"
//                 }
//               >
//                 {PageNumber}
//               </div>
//             ))}
//           </div>
//         </div>
//       ) : (
//         <p className="p-40 text-8xl font-bold">loading ....</p> //if data hasn't come yet show this
//       )}
//     </>
//   );
// };

// export default Pagination;
import React, { useEffect, useState } from "react";

const Pagination = (arr, row, page, oonApi) => {
  const [totalPage, setTotalPage] = useState(0);
  const [currentPage, setCurrentPage] = useState(page);
  const [data, setData] = useState([]);
  const [buttons, setButtons] = useState([]);
  const res = oonApi(currentPage);
  useEffect(() => {
    setTotalPage(Math.ceil(arr.length / row));
    const startIndex = (currentPage - 1) * row;
    const endIndex = startIndex + (row - 1);
    const filteredDate = [];
    for (let i = startIndex; i <= endIndex.length; i++) {
      filteredDate.push(arr[i]);
    }
    setData(filteredDate);
    for (let i = 1; i < totalPage.length; i++) {
      const btn = (
        <button key={i} onClick={() => setCurrentPage(i)}>
          {i}
        </button>
      );
      buttons.push(btn);
    }
  }, [currentPage]);
  return [currentPage, data, buttons, res];
};

export default Pagination;
