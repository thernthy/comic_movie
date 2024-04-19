
import React from "react";
import { MessageTableRow } from "../components/messageRow";
import FetchingDataError from "../components/fetchingError/Index";
import { useHookAnounment } from "../hook/useHookAnounment";
import Pagination from "../components/pageGinetion";

const Anouments = () => {
     const {data, isLoading, error, setPage, pageCount, refetch} = useHookAnounment();
    const renderMessage = () => {

        if(isLoading){
            return(
                <tr>
                    <td  colSpan={4}>
                        <div className='loding-wrapper'> 
                            <span className="loader"></span> 
                        </div>
                    </td>
               </tr>
            )
        }
        
        if(error || data?.data.length === 0){
            return (<tr><td  colSpan={4}><FetchingDataError refetch={refetch} /></td></tr>)
        }

        return <MessageTableRow data={data?.data}/>
    }
   
    return (
        <>
            <div className="py-3  px-2 relative overflow-x-auto shadow-md sm:rounded-lg">
                <h1 className="text-center pb-4 text-4xl text-white">공지사항</h1>
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-white">
                             메시지 제목
                            </th>
                            <th scope="col" className="px-6 py-3">
                             메시지
                            </th>
                            <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-white">
                            에서
                            </th>
                            <th scope="col" className="px-6 py-3">
                            날짜
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        { renderMessage() }
                        {data?.data.length !== 0 && pageCount !== 1?<tr><td  colSpan={2} className="py-3"> <Pagination pageCount={pageCount} setPage={setPage} /></td></tr>:''}
                    </tbody>
                </table>
            </div>

        </>
    )
}

export default Anouments;