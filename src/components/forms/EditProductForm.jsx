import React, { useCallback, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { instance } from "../../api/constants";

const EditProductForm = ({ item, setShowModal }) => {
  const [product, setProduct] = useState([]);
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

  const upload = async (img) => {
    let formData = new FormData();
    formData.append("image", img);
    const res = await instance.post("/upload", formData, {
      headers: { image: "multipart/form-data" }
    });
    return res.data.filename;
  };
  const { register, handleSubmit, reset } = useForm({});

  const handleRegistration = async (data) => {
    let thumbnail = await upload(data.thumbnail[0]);
    let images = [];
    for (let i = 0; i < data.image.length; i++) {
      const element = await upload(data.image[i]);
      images.push(element);
    }
    if (!thumbnail) {
      thumbnail = item.thumbnail;
    }
    if (images.length === 0) {
      images = item.image;
    }

    const editedProduct = {
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
    console.log(editedProduct);

    instance
      .patch(`/products/${item.id}`, editedProduct)
      .then((res) => console.log(res.data));
    setShowModal(false);
    window.location.reload();
  };

  const resetAsyncForm = useCallback(async () => {
    const result = await instance
      .get("/products")
      .then((res) => setProduct(res.data));
    reset(result);
  }, [reset]);

  useEffect(() => {
    resetAsyncForm();
  }, [resetAsyncForm]);

  // const [newImage, setNewImage] = useState([item.image]);
  // const [newName, setNewName] = useState();
  // const [newCategory, setNewCategory] = useState(item.category);
  // const [newSubcategory, setNewSubcategory] = useState(item.subcategory);
  // const [newDescription, setNewDescription] = useState(item.description);

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
                  <h1 className=" font-medium text-fuchsia-900">
                    Edit Product
                  </h1>
                </div>

                <div>
                  <form onSubmit={handleSubmit(handleRegistration)}>
                    <div className="mt-3">
                      <label htmlFor="thumbnail">Product's Cover</label>
                      <input
                        type="file"
                        {...register("thumbnail")}
                        multiple
                        className="border-[1px] border-solid border-fuchsia-900 rounded-md"
                      />
                    </div>
                    <div className="mt-3">
                      <label htmlFor="image">Product's Images</label>
                      <input
                        type="file"
                        {...register("image")}
                        multiple
                        className="border-[1px] border-solid border-fuchsia-900 rounded-md"
                      />
                    </div>
                    <div className="mt-3">
                      <label htmlFor="name">Product's Name</label>
                      <input
                        type="text"
                        {...register("name")}
                        defaultValue={item.name}
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
                          <option key={0} defaultValue={item.category}>
                            {item.category}
                          </option>
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
                          <option key={0} defaultValue={item.subcategory}>
                            {item.subcategory}
                          </option>
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
                        defaultValue={item.brand}
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
                          defaultValue={item.price}
                          className="border-[1px] border-solid border-fuchsia-900 rounded-md w-[12rem]"
                        />
                      </div>
                      <div className="flex flex-col items-center">
                        <label htmlFor="quantity">Product's Quantity</label>
                        <input
                          type="number"
                          name="quantity"
                          {...register("quantity")}
                          defaultValue={item.quantity}
                          className="border-[1px] border-solid border-fuchsia-900 rounded-md w-[12rem]"
                        />
                      </div>
                    </div>

                    <div className="flex flex-col mt-3">
                      <label htmlFor="description">Product's Description</label>
                      <textarea
                        className="p-2 border-[1px] border-solid border-fuchsia-900 rounded-md"
                        name="description"
                        rows="4"
                        defaultValue={item.description}
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

export default EditProductForm;
