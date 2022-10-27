import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";

const Pagination = ({
  pageNumber,
  movieCount,
  updatePageNumber,
  pageLimit,
}) => {
  let pageChange = (data) => {
    updatePageNumber(data.selected + 1);
  };

  const [width, setWidth] = useState(window.innerWidth);
  const updateDimensions = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  return (
    <>
      <style jsx>
        {`
          a {
            color: white;
            text-decoration: none;
          }
          @media (max-width: 768px) {
            .pagination {
              font-size: 12px;
            }
            .next,
            .prev {
              display: none;
            }
          }
          @media (max-width: 768px) {
            .pagination {
              font-size: 14px;
            }
          }
        `}
      </style>
      <ReactPaginate
        className="pagination justify-content-center my-4 gap-3"
        nextLabel="Next"
        forcePage={pageNumber === 1 ? 0 : pageNumber - 1}
        previousLabel="Prev"
        previousClassName="btn btn-primary fs-6 my-auto prev"
        nextClassName="btn btn-primary fs-6 my-auto next"
        activeClassName="active"
        marginPagesDisplayed={width < 576 ? 1 : 1}
        pageRangeDisplayed={width < 576 ? 1 : 5}
        pageCount={Math.ceil(movieCount / pageLimit)}
        onPageChange={pageChange}
        pageClassName="page-item"
        pageLinkClassName="page-link"
      />
    </>
  );
};

export default Pagination;
