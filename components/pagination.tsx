import { type } from "os";
import React from "react";
import { Pagination } from "react-bootstrap";
type Paging = {
  itemsPerPage: number;
  totalItems: number;
  paginate: (prevState: number) => void;
};
const CustomizePagination = ({
  itemsPerPage,
  totalItems,
  paginate,
}: Paging) => {
  let active = 1;
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(
      <Pagination.Item
        key={i}
        active={i === active}
        onClick={() => paginate(i)}
      >
        {i}
      </Pagination.Item>
    );
  }

  return <Pagination style={{ margin: "10px" }}>{pageNumbers}</Pagination>;
};

export default CustomizePagination;
