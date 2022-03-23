import React from "react";
import   './index.scss'
import PropTypes from 'prop-types';

const Pagination = ({ limit, total, paginate,currentPage }) => {


  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(total / limit); i++) {
    pageNumbers.push(i);
  }

  return (

      <nav className="pagination rowHCenter">
         <p className="pagination__title">美食頁次{currentPage}/{pageNumbers.length}</p>
        <ul className="row pagination__ul">
          {pageNumbers.map(number => (
            <li key={number}  onClick={() => paginate(number)}
            style={{ backgroundColor:currentPage===number&& '#0ba5d2'}}
            className="pagination__link">
              {number}
            </li>
          ))}
        </ul>
      </nav>

  );
};

Pagination.propTypes={
  limit:PropTypes.number,
  total:PropTypes.number,
  paginate:PropTypes.func,
  currentPage:PropTypes.number

}
Pagination.defaultProps={
  limit:10,
  paginate:() => {},
}

export default Pagination;
