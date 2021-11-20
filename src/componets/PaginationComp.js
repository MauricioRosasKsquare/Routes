import Pagination from 'react-bootstrap/Pagination'

const PaginationComp = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav style={{position:"relative"}}>
      <Pagination style={{justifyContent:"center", paddingTop:"20px"}}>
        {pageNumbers.map(page => (
            <Pagination.Item key={page}>
                <a onClick={() => paginate(page)}  className='page-link'>
                {page}
                </a>
            </Pagination.Item>
        ))}
      </Pagination>
    </nav>
  );
};

export default PaginationComp;