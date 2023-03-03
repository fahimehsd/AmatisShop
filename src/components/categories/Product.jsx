import React from "react";

const Product = () => {
  return (
    <div className="flex items-center border-2 border-violet-900 rounded-sm p-2">
      <img
        className="w-24 h-24"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyB7Temzg11W-80XX6qU45kqLsk5Vnz-R57w&usqp=CAU"
        alt="milk"
      />
      <div>
        <h3>شیر کم چرب کاله</h3>
        <p>{"20،000"} تومان</p>
      </div>
    </div>
  );
};

export default Product;
