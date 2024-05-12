"use client";

import { useEffect, useState } from "react";
import Pagination from "../../components/Pagination/Pagination";
import Spinner from "../../components/Spinner/Spinner";
interface Geo {
  lat: string;
  lng: string;
}

interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}

interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}
interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}

export default function Users() {
  const [isLoadingData, setIsLoadingData] = useState<boolean>(false);
  const [usersData, setUsersData] = useState<User[]>();
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [quantityOfUsers, setQuantityOfUsers] = useState<number>(0);
  const quantityToShow = 5;

  useEffect(() => {
    setIsLoadingData(true);
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
      })
      .finally(() => {
        setIsLoadingData(false);
      });
  }, [currentPage]);
  return (
    <div className="h-full min-h-screen w-full max-w-lg flex flex-col items-center justify-start p-4 mx-auto">
      <div>
        <h1 className="text-xl font-semibold">Users List</h1>
      </div>
      {isLoadingData && (
        <div className="h-[504px] flex items-center justify-center">
          <Spinner></Spinner>
        </div>
      )}
      {usersData && usersData.length > 0 && (
        <>
          <ul className="w-full flex flex-col items-center justify-start gap-2 mt-3">
            {usersData.map((user: any, index: number) => {
              if (Object.keys(user ?? {}).length === 0) {
                return <li key={index} className="h-[120px]"></li>;
              }

              return (
                <li
                  key={user?.id}
                  className="w-full bg-[#dadada] rounded-lg p-3"
                >
                  <div>
                    <p className="break-all">
                      <span className="font-semibold">Name:</span> {user?.name}
                    </p>
                    <p className="break-all">
                      <span className="font-semibold">Email:</span>{" "}
                      {user?.email}
                    </p>
                    <p className="break-all">
                      <span className="font-semibold">Username:</span>{" "}
                      {user?.username}
                    </p>
                    <p className="break-all">
                      <span className="font-semibold">Phone:</span>{" "}
                      {user?.phone}
                    </p>
                  </div>
                </li>
              );
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
