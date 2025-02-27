import React, { useEffect, useState } from "react";
import { Card } from "../../components";
import axios from "axios";
function Home() {
  const [tokens, setTokens] = useState();
  const [tokenISLoading,setTokenIsLoading] = useState(true);

  async function fetchTokens() {
    await axios
      .get("http://localhost:8080/api/tokens")
      .then(function (response) {
        console.log(response.data);
        setTokens(response.data);
        setTokenIsLoading(false);
      }).catch((error)=>{
        console.error("Error fetching tokens", error);
        setTokenIsLoading(false);
      });
  }

  useEffect(() => {
    fetchTokens();
  }, []);

  return (
    <div className="pl-10 py-6 bg-primary-light dark:bg-primary-dark min-h-screen">
      <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7 min-[110rem]:grid-cols-8 min-[120rem]:grid-cols-9">
        {tokens?.map((token) => (
          <Card
            img={token.tokenImg}
            name={token.tokenName}
            upVote={token.upVotes}
            downVote={token.downVotes}
            link={tokens.link}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
