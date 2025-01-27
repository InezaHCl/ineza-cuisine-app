import React, { useEffect, useState } from "react";
import { getMenu } from "../services/apiRestaurant";
import Loader from "../../ui/Loader";
import MenuItem from "./MenuItem";
import { useLoaderData } from "react-router";

export default function Menu() {
  const menu = useLoaderData();
  // console.log(menu);
  // let [menu, setMenu] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);

  // useEffect(() => {
  //   async function fetchMenu() {
  //     setIsLoading(true);

  //     const data = await getMenu();
  //     setMenu(data);
  //     // console.log(data);

  //     setIsLoading(false);
  //   }

  //   fetchMenu();
  // }, []);

  return (
    <div>
      {/* {isLoading && <Loader />} */}

      <ul className="divide-y divide-stone-200">
        {menu.map((pizza) => (
          <MenuItem pizza={pizza} key={pizza.id} />
        ))}
      </ul>
    </div>
  );
}

export async function loader() {
  const menu = await getMenu();
  return menu;
}
