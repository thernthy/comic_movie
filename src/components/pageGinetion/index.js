import ReactPaginate from "react-paginate";
import './style.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowLeft, faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";
const Pagination = ({ setPage, pageCount }) => {

    const handleClick = (e) => {
        const selectedPage = ++e.selected
        setPage(selectedPage)
    }


    return (
        <div id="pagination">
            <ReactPaginate
                previousLabel={ <FontAwesomeIcon icon={faCircleArrowLeft} />}
                nextLabel={<FontAwesomeIcon icon={faCircleArrowRight} />}
                breakLabel={"..."}
                pageCount={pageCount}
                marginPagesDisplayed={3}
                pageRangeDisplayed={3}
                onPageChange={handleClick}
                containerClassName={"pagination justify-content-center flex-wrap shadow-sm shadow-lime-500 py-2 px-3 rounded-md"}
                pageClassName={"page-item numberPage px-1 mx-2"}
                pageLinkClassName={"page-link text-lg"}
                previousClassName={"page-item pr"}
                previousLinkClassName={"page-link"}
                nextClassName={"page-item nexitem"}
                nextLinkClassName={"page-link next"}
                breakClassName={"page-item"}
                breakLinkClassName={"page-link"}
                activeClassName={"pageActive"}
            />
        </div>
    )
}

export default Pagination