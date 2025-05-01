import { MoveRight, MoveLeft } from 'lucide-react';

const Pagination = ({
  handlePrevPage,
  handleNextPage,
  currentPage,
  totalPages,
}) => {
  return (
    <div className='p-10 flex items-center justify-between sm:px-[5rem] xl:px-[10rem]'>
      <button
        className='bg-secondary-900 rounded-md px-3 py-2'
        onClick={handlePrevPage}
        disabled={currentPage === 1}>
        <MoveLeft
          className='text-gray-300'
          size={24}
        />
      </button>
      <span className='text-white'>
        <span className='font-bold'>{currentPage}</span> / {totalPages}
      </span>
      <button
        className='bg-secondary-900 rounded-md px-3 py-2'
        onClick={handleNextPage}
        disabled={currentPage === totalPages}>
        <MoveRight
          className='text-gray-300'
          size={24}
        />
      </button>
    </div>
  );
};

export default Pagination;
