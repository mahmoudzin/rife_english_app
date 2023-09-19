
import { useAppContext } from '../../context';

const Pagination  = () => {
    const {myState, paginationActions} = useAppContext()
    const {numberOfPages, pageNumber, startPoint, endPoint, total} = myState
    const {changePageNumber, nextPage, prevPage} = paginationActions

    return (
        <nav className="flex items-center justify-between pt-4" aria-label="Table navigation">
        <span className="text-sm font-normal text-gray-500 ">Showing <span className="font-semibold text-gray-900">{startPoint + 1}-{endPoint > total ? total : endPoint}</span> of <span className="font-semibold text-gray-900">{total}</span></span>
        <ul className="inline-flex -space-x-px text-sm h-8">
        <li>
            <span onClick={()=> prevPage()} className={`${pageNumber === 1 && 'pointer-events-none cursor-not-allowed'} cursor-pointer flex items-center justify-center px-3 h-8 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700`}>Previous</span>
        </li>
        {numberOfPages.map( num => <li key={num}>
            <span onClick={()=> changePageNumber(num)} className="cursor-pointer flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700  ">{num}</span>
        </li>)}
        
        <li>
            <span onClick={()=> nextPage()} className={`${pageNumber === numberOfPages.length && 'pointer-events-none cursor-not-allowed'} cursor-pointer flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 `}>Next</span>
        </li>
        </ul>
    </nav>
    );
};

export default Pagination ;
