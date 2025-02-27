import React from "react";
import {Button} from '../'
import { useNavigate } from "react-router";

function Card({img, name, link, upVote, downVote}) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(link);
  }
  return (
    <div className="flex flex-col p-1 items-center min-w-34 w-4/5 h-fit gap-1 rounded-xs shadow-[1px_1px_20px] shadow-gray-500 bg-secondary-light text-primary-text-light">
      <img
        src={`data:image/jpeg;base64,${img}`}
        alt={name}
        className="w-full h-32 bg-primary-light dark:bg-primary-dark object-center rounded-2xl"
      />
      <h1>{name}</h1>
      <div id="votes" className="w-full flex gap-1">
        <button className="bg-green-700 w-1/2 h-8">{upVote}</button>
        <button className="bg-red-700 w-1/2 h-8">{downVote}</button>
      </div>
      <Button
        className="w-full border-none bg-blue-700"
        onClick={handleClick}
        value="Get Token"
      />
    </div>
  );
}

export default Card;
