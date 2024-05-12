"use client";

import { useEffect, useState } from "react";
import Pagination from "../../components/Pagination/Pagination";

export default function Users() {
  const [usersData, setUsersData] = useState<any>();
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [quantityOfUsers, setQuantityOfUsers] = useState<number>(0);
  const quantityToShow = 4;

  useEffect(() => {
    fetch(
      `https://jsonplaceholder.typicode.com/users?_start=${
        currentPage * quantityToShow
      }&_limit=${quantityToShow}`
    )
      .then((response) => {
        const headers = response.headers;

        const totalCount = headers.get("x-total-count");
        setQuantityOfUsers(Number(totalCount));

        return response.json();
      })
      .then((responseArray) => {
        if (responseArray && responseArray.length > 0) {
          const quantityToFill = quantityToShow - responseArray.length;
          const dataArray = responseArray.concat(
            Array.from({ length: quantityToFill }, (_, index) => {})
          );
          setUsersData(dataArray);
        }
      });
  }, [currentPage]);
  return (
    <div className="w-full flex flex-col items-center justify-center">
      {usersData && usersData.length > 0 && (
        <>
          <ul>
            {usersData.map((user: any, index: number) => {
              if (Object.keys(user ?? {}).length === 0) {
                return <li key={index} className="h-6"></li>;
              }

              return <li key={user?.id}>{user?.email}</li>;
            })}
          </ul>
          <Pagination
            {...{
              quantityToShow,
              totalQuantity: quantityOfUsers,
              currentPage,
              setCurrentPage,
            }}
          ></Pagination>
        </>
      )}
    </div>
  );
}
