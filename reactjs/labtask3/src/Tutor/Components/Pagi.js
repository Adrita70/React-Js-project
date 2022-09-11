import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Pagination from 'react-bootstrap/Pagination';

const Pagi = ({ postsPerPage, totalPosts, paginate }) =>
{
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++)
  {
    pageNumbers.push(i);
  }

  return (
    <nav style={{marginLeft: '10%', width: '90%', textAlign: 'center'}}>
      <ul style={{textAlign: 'center'}} className='pagination'>
        {pageNumbers.map(number => (
            <Pagination>
                <Pagination.Item><a style={{display: 'block', width: '50px', height: '30px', textDecoration: 'none'}} onClick={() => paginate(number)} href={number}>{number}</a></Pagination.Item>
            </Pagination>
        ))}
      </ul><br/>
    </nav>
  );
};

export default Pagi;