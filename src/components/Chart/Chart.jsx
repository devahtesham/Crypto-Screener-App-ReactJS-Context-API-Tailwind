import axios from "axios";
import React, { useContext, useEffect, useState } from "react";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { cryptoContext } from "../../context/CryptoContext";

// customize our tooltip
function CustomTooltip({ payload, label, active, currency }) {
  if (active && payload && payload.length > 0) {
    return (
      <div className="custom-tooltip">
        {/* yahan payload k andr mjhy price wali values miil rahi hen tu wo plain numbers ko currency format men krne k lye mene Intl use kia hyy  */}
        <p className="label text-sm text-cyan">{`${label} : ${new Intl.NumberFormat(
          "en-IN",
          {
            style: "currency",
            currency: currency,
            minimumFractionDigits: 5,
          }
        ).format(payload[0].value)}`}</p>
      </div>
    );
  }

  return null;
}

const ChartComponent = ({ data, currency, type }) => {
  return (
    <ResponsiveContainer>
      <LineChart width={400} height={400} data={data}>
        <Line
          type="monotone"
          dataKey={type}
          stroke="#14ffec"
          strokeWidth={"2px"}
        />
        <CartesianGrid stroke="#323232" />
        <XAxis dataKey="date" hide />
        <YAxis dataKey={type} hide domain={["auto", "auto"]} />
        <Tooltip
          content={<CustomTooltip currency={currency} />}
          cursor={false}
          wrapperStyle={{ outline: "none" }}
        />
        <Legend />
      </LineChart>
    </ResponsiveContainer>
  );
};

const Chart = ({ id }) => {
  // display chart
  const [coinChart, setCoinChart] = useState();
  const { currency } = useContext(cryptoContext);
  // chart w.r.t type
  const [type, setType] = useState("prices");
  // chart w.r.t days
  const [days, setDays] = useState(7);
  useEffect(() => {
    const displayChart = async (id) => {
      try {
        const response = await axios.get(
          `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=${currency}&days=${days}&interval=daily
          `
        );
        // because recharts accepts data in a form of array of objects so that why we need to convert it in array of objects
        // yahan ham dynamically data visualize krrahy hen kbhi price se kbhi market cap se kbhi volume se, tu islye hm jo array pr map chalaengy wo bhi fixed array element k bajaye dynamic hogaa
        const convertedData = response.data[type].map((item) => {
          return {
            date: new Date(item[0]).toLocaleDateString(),
            [type]: item[1],
          };
        });
        // console.log(response.data);
        setCoinChart(convertedData);
      } catch (error) {
        console.log(error);
      }
    };
    displayChart(id);
  }, [id, type, days]);
  // console.log("chart data", coinChart);
  return (
    <div className="w-full h-[60%]">
      <ChartComponent data={coinChart} currency={currency} type={type} />
      <div className="flex md:flex-row flex-col">
        <div>
          <button
            className={`text-sm py-0.5 px-1.5 ml-2 bg-opacity-25 rounded capitalize ${
              type === "prices"
                ? `bg-cyan text-cyan`
                : `bg-gray-200 text-gray-100`
            }`}
            onClick={() => {
              setType("prices");
            }}
          >
            Prices
          </button>

          <button
            className={`text-sm py-0.5 px-1.5 ml-2 bg-opacity-25 rounded capitalize ${
              type === "market_caps"
                ? `bg-cyan text-cyan`
                : `bg-gray-200 text-gray-100`
            } `}
            onClick={() => {
              setType("market_caps");
            }}
          >
            market caps
          </button>

          <button
            className={`text-sm py-0.5 px-1.5 ml-2 bg-opacity-25 rounded capitalize ${
              type === "total_volumes"
                ? `bg-cyan text-cyan`
                : `bg-gray-200 text-gray-100`
            } `}
            onClick={() => {
              setType("total_volumes");
            }}
          >
            total volumes
          </button>
        </div>
        <div className="md:mt-0 mt-2">
          <button
            className={`text-sm py-0.5 px-1.5 ml-2 bg-opacity-25 rounded capitalize ${
              days === 7 ? `bg-cyan text-cyan` : `bg-gray-200 text-gray-100`
            } `}
            onClick={() => {
              setDays(7);
            }}
          >
            7d
          </button>

          <button
            className={`text-sm py-0.5 px-1.5 ml-2 bg-opacity-25 rounded capitalize ${
              days === 14 ? `bg-cyan text-cyan` : `bg-gray-200 text-gray-100`
            } `}
            onClick={() => {
              setDays(14);
            }}
          >
            14d
          </button>

          <button
            className={`text-sm py-0.5 px-1.5 ml-2 bg-opacity-25 rounded capitalize ${
              days === 30 ? `bg-cyan text-cyan` : `bg-gray-200 text-gray-100`
            } `}
            onClick={() => {
              setDays(30);
            }}
          >
            30d
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chart;
