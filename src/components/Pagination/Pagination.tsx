import { SetStateAction } from "react";

interface PaginationProps {
  totalQuantity: number;
  quantityToShow: number;
  currentPage: number;
  setCurrentPage: React.Dispatch<SetStateAction<number>>;
}

export default function Pagination({
  totalQuantity,
  quantityToShow,
  currentPage,
  setCurrentPage,
}: PaginationProps) {
  const pageQuantity = Math.ceil(totalQuantity / quantityToShow);

  const indexArray = Array.from({ length: pageQuantity }, (_, index) => index);

  return (
    <div className="w-full flex items-center justify-center my-3">
      <ul className="flex items-center justify-center gap-x-3">
        {indexArray.map((pageIndex) => (
          <li
            key={pageIndex}
            style={{
              backgroundColor:
                currentPage === pageIndex ? "#f7c73f" : "#003873",
            }}
            className="flex items-center justify-center rounded w-9 h-9 text-white cursor-pointer"
            onClick={() => setCurrentPage(pageIndex)}
          >
            {pageIndex + 1}
          </li>
        ))}
      </ul>
    </div>
  );
}
