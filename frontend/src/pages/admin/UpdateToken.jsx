import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Input, Button } from "../../components";
import axios from "axios";

function UpdateToken({ id, tokenName, link, description, upVotes, downVotes }) {
  const [error, setError] = useState(null);
  const { register, handleSubmit } = useForm();

  async function addToken(data) {
    const formData = new FormData();
    formData.append("id", id);
    data.tokenName !== tokenName
      ? formData.append("tokenName", data.tokenName)
      : null;
    data.link !== link ? formData.append("link", data.link) : null;
    data.description !== description
      ? formData.append("description", data.description)
      : null;
    data.upVotes !== upVotes ? formData.append("upVotes", data.upVotes) : null;
    data.downVotes !== downVotes
      ? formData.append("downVotes", data.downVotes)
      : null;
    data.tokenImg[0] ? formData.append("image", data.tokenImg[0]) : null;

    try {
      const response = await axios.put(
        "http://localhost:8080/api/updateToken",
        formData
      );
      console.log(response.data);
    } catch (error) {
      setError(error);
      console.log(error);
    }
  }

  return (
    <div className="flex mt-48 justify-center dark:bg-gray-600 dark:text-primary-text-dark w-fit rounded-2xl ml-24 p-8">
      {!error && (
        <form
          onSubmit={handleSubmit(addToken)}
          className="flex flex-col flex-nowrap gap-6 max-w-4xl justify-center relative"
        >
          <div className="flex gap-6">
            <Input
              label="Token Name : "
              placeholder="Enter Token Name"
              value={tokenName}
              className="text-black w-72"
              {...register("tokenName", { required: true })}
            />
            <Input
              label="Token Link : "
              placeholder="Enter Token Link"
              value={link}
              className="text-black w-72"
              {...register("link", { required: true })}
            />
          </div>
          <div className="flex gap-2 w-full text-nowrap">
            Description :
            <textarea
              placeholder="Enter Token Description"
              value={description}
              className="w-full h-24 border-[1px] border-gray-200 rounded-xl"
              {...register("description", { required: true })}
            />
          </div>
          <div className="flex gap-6">
            <Input
              label="UpVotes : "
              placeholder = "Upvotes"
              value={upVotes}
              className="mb-3"
              {...register("upVotes")}
            />
            <Input
              label="DownVotes : "
              placeholder = "DownVotes"
              value={downVotes}
              className="mb-3"
              {...register("downVotes")}
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

export default UpdateToken;
