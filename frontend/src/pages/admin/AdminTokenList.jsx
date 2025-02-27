import React, { useState, useEffect } from "react";
import { ListCard } from "../../components";
import { RiThumbUpFill, RiThumbDownFill } from "@remixicon/react";
import axios from "axios";

function AdminTokenList() {
  const [tokens, setTokens] = useState();
  const headerCss =
    "text-2xl p-1 font-semibold text-center border-1 bg-secondary-light dark:bg-secondary-dark text-primary-text-light dark:text-primary-text-dark";

  async function fetchTokens() {
    await axios
      .get("http://localhost:8080/api/tokens")
      .then(function (response) {
        console.log(response.data);
        setTokens(response.data);
      })
      .catch((error) => {
        console.error("Error fetching tokens", error);
      });
  }

  useEffect(() => {
    fetchTokens();
  }, []);

  return (
    <div>
      <div id="tokenCard" className="grid grid-cols-7 gap-8 w-fit h-fit p-4">
        <h1 className={headerCss}>Image</h1>
        <h1 className={headerCss}>Token Name</h1>
        <h1 className={`flex justify-center ${headerCss}`}>
          <RiThumbUpFill className="w-9 h-9" />
        </h1>
        <h1 className={`flex justify-center ${headerCss}`}>
          <RiThumbDownFill className="w-9 h-9" />
        </h1>
        <h1 className={headerCss}>Link</h1>
        <h1 className={headerCss}>Update</h1>
        <h1 className={headerCss}>Delete</h1>
      </div>
      <div className=" flex flex-col gap-1">
        {tokens?.map((token) => (
          <ListCard
            key={token.id}
            id={token.id}
            img={token.tokenImg}
            name={token.tokenName}
            upVote={token.upVotes}
            downVote={token.downVotes}
            link={tokens.link}
            className="grid grid-cols-7 gap-8 w-fit h-fit p-4"
          />
        ))}
      </div>
    </div>
  );
}

export default AdminTokenList;
