import React, { useState, useContext } from "react";
import CartContext from "./cartContext";
export const Dashboard = () => {
  const dashboardGridData = [
    {
      id: "1",
      pName: "Headphone",
      price: "100$",
      count: 0
    },
    {
      id: "2",
      pName: "Laptop",
      price: "100$",
      count: 0
    },
    {
      id: "3",
      pName: "Computer",
      price: "100$",
      count: 0
    }
  ];
  const [data, setData] = useState(dashboardGridData);
  const contextData = useContext(CartContext);

  const numberOfData = contextData.data.reduce((totalData, dataitem) => {
    return totalData + dataitem.count;
  }, 0);
  console.log("numberOfData", numberOfData);
  const listStyle = {
    float: "left",
    spanStyle: { padding: "50px" }
  };

  const increment = (val) => {
    console.log(val);
    let itemindex = data.findIndex((item) => item.id === val.id);
    console.log(itemindex);
    //let value = (dashboardGridData[itemindex].count);
    // console.log("itemindex", value);
    let newDashboardData = [...data];
    console.log("updatedata", (newDashboardData[itemindex].count += 1));

    console.log("dashboardGridData", newDashboardData);
    setData(newDashboardData);
  };

  const decrement = () => {
    setItemCount(itemCount === 0 ? 0 : itemCount + 1);
  };
  return (
    <>
      {data.map((item) => {
        console.log("render", item);
        return (
          <ul>
            <div style={{ width: "100%" }}>
              <div style={{ width: "10%" }}>{item.pName}</div>
              <div style={{ width: "50%" }}>{item.price}</div>
              <button onClick={decrement}>-</button>
              <input type="number" value={item.count} />
              <button onClick={() => increment(item)}>+</button>
            </div>
          </ul>
        );
      })}
    </>
  );
};
