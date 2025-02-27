import React from 'react'
import Button from '../Button'
import { RiPencilFill, RiDeleteBin5Fill, RiLink } from "@remixicon/react";
import axios from 'axios';

function ListCard({
  id,
  img,
  name,
  link,
  upVotes,
  downVotes,
  className = ''

}) {
  const deleteToken = async () => {
    try {      
      await axios.delete(`http://localhost:8080/api/deleteToken?id=${id}`);
      console.log('Token deleted');
    } catch (error) {
      console.error('Error deleting token', error);
    }
  }
  return (
      <div
        id={id}
        className={`w-full h-fit text-[18px] bg-[#f4f4f4] border-1 rounded-3xl border-black ${className}`}
      >
        <img
          src={`data:image/jpeg;base64,${img}`}
          alt={name}
          className="w-8 h-8"
        />
        <h1 className="pointer-events-none">{name}</h1>
        <h1 className="pointer-events-none">{upVotes || "0"}</h1>
        <h1 className="pointer-events-none">{downVotes || "0"}</h1>
        <a href={link} className="hover:text-blue-600">
          <RiLink />
        </a>
        <Button
          value={<RiPencilFill color="white" />}
          className="bg-green-600 hover:bg-green-700"
        />
        <Button
          value={<RiDeleteBin5Fill color="white" />}
          onClick={deleteToken}
          className="bg-red-600 hover:bg-red-700"
        />
      </div>
  );
}

export default ListCard