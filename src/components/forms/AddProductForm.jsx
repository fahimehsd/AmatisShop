import React, { useCallback, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { instance } from "../../api/constants";

const AddProductForm = ({ setShowModal }) => {
  const [category, setCategory] = useState([]);
  const [subcategory, setSubcategory] = useState([]);
  useEffect(() => {
    instance
      .get(`/category`)
      .then((res) => setCategory(res.data))
      .catch((err) => console.log(err));
  }, []);
  useEffect(() => {
    instance
      .get(`/subcategory`)
      .then((res) => setSubcategory(res.data))
      .catch((err) => console.log(err));
  }, []);

  const { register, handleSubmit } = useForm({});

  const upload = async (img) => {
    let formData = new FormData();
    formData.append("image", img);
    const res = await instance.post("/upload", formData, {
      headers: { image: "multipart/form-data" }
    });
    return res.data.filename;
  };
  const handleRegistration = async (data) => {
    const thumbnail = await upload(data.thumbnail[0]);
    let images = [];
    for (let i = 0; i < data.image.length; i++) {
      const element = await upload(data.image[i]);
      images.push(element);
    }

    const newProduct = {
      name: data.name,
      brand: data.brand,
      image: images,
      thumbnail: thumbnail,
      price: data.price,
      quantity: data.quantity,
      category: data.category,
      subcategory: data.subcategory,
      description: data.description
    };
    console.log(newProduct);
    instance.post("/products", newProduct).then((res) => console.log(res.data));
    setShowModal(false);
    window.location.reload();
  };
  const [files, setFiles] = useState();
  function handleChange(e) {
    // console.log(e.target.files);
    setFiles(URL.createObjectURL(e.target.files[0]));
  }

  return (
    <>
      <div className="fixed inset-0 z-10 overflow-y-auto">
        <div
          className="fixed inset-0 w-full h-full bg-black opacity-40"
          onClick={() => setShowModal(false)}
        ></div>
        <div className="flex justify-center items-center min-h-screen px-4 py-8">
          <div className="relative w-full max-w-lg p-4 mx-auto bg-white rounded-md shadow-lg">
            <div className="mt-3 ">
              <div className="mt-2 text-center ">
                <div className="border-b-2 p-2">
                  <h1 className=" font-medium text-fuchsia-900">Add Product</h1>
                </div>

                <div>
                  <form onSubmit={handleSubmit(handleRegistration)}>
                    <div className="mt-3">
                      <label htmlFor="thumbnail">Product's Cover</label>
                      <input
                        type="file"
                        {...register("thumbnail")}
                        required
                        onChange={handleChange}
                        className="border-[1px] border-solid border-fuchsia-900 rounded-md"
                      />
                    </div>
                    <div className="mt-3">
                      <label htmlFor="image">Product's Images</label>
                      <input
                        type="file"
                        {...register("image")}
                        required
                        multiple
                        onChange={handleChange}
                        className="border-[1px] border-solid border-fuchsia-900 rounded-md"
                      />
                    </div>
                    <div className="mt-3">
                      <label htmlFor="name">Product's Name</label>
                      <input
                        type="text"
                        {...register("name")}
                        required
                        className="border-[1px] border-solid border-fuchsia-900 rounded-md"
                      />
                    </div>
                    <div className="flex justify-between mt-3">
                      <div className="flex flex-col">
                        <label htmlFor="category">Product's Category</label>
                        <select
                          className="p-2 border-[1px] border-solid border-fuchsia-900 rounded-md w-[12rem]"
                          name="category"
                          {...register("category")}
                          required
                        >
                          {category.map((item) => {
                            return (
                              <option
                                key={item.id}
                                value={item.name.toLowerCase()}
                              >
                                {item.name.toLowerCase()}
                              </option>
                            );
                          })}
                        </select>
                      </div>
                      <div className="flex flex-col">
                        <label htmlFor="subcategory">
                          Product's Subcategory
                        </label>
                        <select
                          className="p-2 border-[1px] border-solid border-fuchsia-900 rounded-md  w-[12rem]"
                          name="subcategory"
                          {...register("subcategory")}
                          required
                        >
                          {subcategory.map((item) => {
                            return (
                              <option
                                key={item.id}
                                value={item.name.toLowerCase()}
                              >
                                {item.name.toLowerCase()}
                              </option>
                            );
                          })}
                        </select>
                      </div>
                    </div>
                    <div className="mt-2 flex flex-col items-center">
                      <label htmlFor="brand">Product's Brand</label>
                      <input
                        type="text"
                        name="brand"
                        {...register("brand")}
                        className="border-[1px] border-solid border-fuchsia-900 rounded-md w-[12rem] "
                      />
                    </div>
                    <div className="flex justify-between mt-3">
                      <div className="flex flex-col items-center">
                        <label htmlFor="price">Product's Price</label>
                        <input
                          type="number"
                          name="price"
                          {...register("price")}
                          className="border-[1px] border-solid border-fuchsia-900 rounded-md w-[12rem]"
                        />
                      </div>
                      <div className="flex flex-col items-center">
                        <label htmlFor="quantity">Product's Quantity</label>
                        <input
                          type="number"
                          name="quantity"
                          {...register("quantity")}
                          className="border-[1px] border-solid border-fuchsia-900 rounded-md w-[12rem]"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col mt-3">
                      <label htmlFor="description">Product's Description</label>
                      <textarea
                        className="border-[1px] border-solid border-fuchsia-900 rounded-md"
                        name="description"
                        rows="4"
                        {...register("description")}
                        required
                      ></textarea>
                    </div>
                    <div className="mt-4">
                      <button
                        type="submit"
                        className=" bg-fuchsia-900 w-full rounded-md p-2 text-white"
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddProductForm;
