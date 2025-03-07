import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Input, Button } from "../../components";
import axios from "axios";

function AddToken({tokenName = '',
  link = '',
  description = '',
  image = ''
}) {
  const [error, setError] = useState(null);
  const { register, handleSubmit } = useForm();

  async function addToken(data) {
    const formData = new FormData();
    formData.append("tokenName", data.tokenName);
    formData.append("link", data.link);
    formData.append("description", data.description);
    formData.append("image", data.tokenImg[0]);

    try {
      const response = await axios.post(
        "http://localhost:8080/api/addToken",
        formData
      );
      console.log(response.data);
    } catch (error) {
      setError(error);
      console.log(error);
    }
  }

  return (
      <div className="flex mt-48 justify-center bg-gray-50 w-fit rounded-2xl ml-24 p-8">
        {!error && (
          <form
            onSubmit={handleSubmit(addToken)}
            className="flex flex-col flex-nowrap gap-6 max-w-4xl justify-center relative"
          >
            <div className="flex gap-6">
              <Input
                label="Token Name : "
                placeholder="Enter Token Name"
                className="text-black placeholder:text-gray-700 w-72"
                {...register("tokenName", { required: true })}
              />
              <Input
                label="Token Link : "
                placeholder="Enter Token Link"
                className="text-black placeholder:text-gray-700 w-72"
                {...register("link", { required: true })}
              />
            </div>
            <div className="flex gap-2 w-full text-nowrap">
              Description :
              <textarea
                placeholder="Enter Token Description"
                className="w-full h-24 border-[1px] border-gray-200 rounded-xl"
                {...register("description", { required: true })}
              />
            </div>
            <Input
              label="Token Image : "
              type="file"
              className="mb-3 "
              accept="image/jpeg, image/png, image/jpg"
              {...register("tokenImg", { required: true })}
            />
            <div className="flex items-center justify-center">
              <Button
                type="submit"
                value="Add Token"
                className="bg-green-400 hover:bg-green-600 hover:text-white hover:scale-105"
              />
            </div>
          </form>
        )}
        {error && <h1>{error.message}</h1>}
      </div>
  );
}

export default AddToken;
