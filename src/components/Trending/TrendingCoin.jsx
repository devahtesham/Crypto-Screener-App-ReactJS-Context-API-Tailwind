import React from "react";
import { Link } from "react-router-dom";

const TrendingCoin = ({ data }) => {
  return (
    <div className="lg:w-[40%] sm:w-[60%] w-[80%] bg-gray-200 mb-12 last:mb-0 rounded-lg p-4 relative cursor-pointer hover:bg-gray-100 hover:bg-opacity-40">
      {data ? (
        <>
          <Link to={`/trending/${data.id}`}>
            <h3 className="text-base flex items-center my-0.5">
              <span className="text-gray-100 capitalize">name: &nbsp;</span>
              <span className="text-cyan">{data.name} </span>
              <img
                src={data.small}
                alt={data.name}
                className="w-[1.5rem] h-[1.5rem] mx-1.5 rounded-full "
              />
            </h3>
            <h3 className="text-base flex items-center my-0.5">
              <span className="text-gray-100 capitalize">
                market cap rank: &nbsp;
              </span>
              <span className="text-cyan">{data.market_cap_rank} </span>
            </h3>
            <h3 className="text-base flex items-center my-0.5">
              <span className="text-gray-100 capitalize">
                price (in btc): &nbsp;
              </span>
              <span className="text-cyan">
                {new Intl.NumberFormat("en-IN", {
                  style: "currency",
                  currency: "btc",
                  maximumSignificantDigits: 2,
                }).format(data.price_btc)}
              </span>
            </h3>
            <h3 className="text-base flex items-center my-0.5">
              <span className="text-gray-100 capitalize">score: &nbsp;</span>
              <span className="text-cyan">{data.score}</span>
            </h3>
            <img
              src={data.large}
              alt={data.name}
              className="absolute lg:top-2/4 top-4 lg:-right-12 -right-6 -translate-y-2/4  lg:w-[35%] w-[5rem] h-auto rounded-full "
            />
          </Link>
        </>
      ) : null}
    </div>
  );
};

export default TrendingCoin;
