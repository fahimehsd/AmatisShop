import React from "react";
import { useForm } from "react-hook-form";
import { instance } from "../../api/constants";

const EditQuantityAndPriceForm = ({ product, setShowModal }) => {
  const { register, handleSubmit } = useForm({});
  const handleRegistration = async (data) => {
    const editedProduct = {
      price: data.price,
      quantity: data.quantity
    };
    console.log(editedProduct);

    instance
      .patch(`/products/${product.id}`, editedProduct)
      .then((res) => console.log(res.data));
    setShowModal(false);
    window.location.reload();
  };
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
                    Edit Product's Quantity and Price
                  </h1>
                </div>

                <div>
                  <form onSubmit={handleSubmit(handleRegistration)}>
                    <div className="mt-3">
                      <label htmlFor="name">Product's Name</label>
                      <input
                        type="text"
                        {...register("name")}
                        value={product.name}
                        required
                        className="border-[1px] border-solid border-fuchsia-900 rounded-md"
                      />
                    </div>

                    <div className="flex justify-between mt-3">
                      <div className="flex flex-col items-center">
                        <label htmlFor="price">Product's Price</label>
                        <input
                          type="number"
                          name="price"
                          {...register("price")}
                          defaultValue={product.price}
                          className="border-[1px] border-solid border-fuchsia-900 rounded-md w-[12rem]"
                        />
                      </div>
                      <div className="flex flex-col items-center">
                        <label htmlFor="quantity">Product's Quantity</label>
                        <input
                          type="number"
                          name="quantity"
                          {...register("quantity")}
                          defaultValue={product.quantity}
                          className="border-[1px] border-solid border-fuchsia-900 rounded-md w-[12rem]"
                        />
                      </div>
                    </div>

                    <div className="mt-4">
                      <button
                        type="submit"
                        className=" bg-fuchsia-900 w-full rounded-md p-2 text-white"
                      >
                        Edit
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

export default EditQuantityAndPriceForm;
