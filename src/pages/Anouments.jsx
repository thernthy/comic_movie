import { data } from "autoprefixer";
import React, { useEffect, useState }  from "react";

const Anouments = () => {
   
    return (
        <>
            <div className="py-3  px-2 relative overflow-x-auto shadow-md sm:rounded-lg">
                <h1 className="text-center pb-4 text-4xl text-neutral-700">공지사항</h1>
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-slate-600">
                                Message Title
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Message
                            </th>
                            <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-slate-600">
                                From
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Date
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border-b border-gray-200 dark:border-gray-700">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-slate-600">
                                Apple MacBook Pro 17"
                            </th>
                            <td className="px-6 py-4">
                                Silver
                            </td>
                            <td className="px-6 py-4 bg-gray-50 dark:bg-slate-600">
                                Laptop
                            </td>
                            <td className="px-6 py-4">
                                2:00 PM
                            </td>
                        </tr>
                        <tr className="border-b border-gray-200 dark:border-gray-700">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-slate-600">
                                Microsoft Surface Pro
                            </th>
                            <td className="px-6 py-4">
                                White
                            </td>
                            <td className="px-6 py-4 bg-gray-50 dark:bg-slate-600">
                                Laptop PC
                            </td>
                            <td className="px-6 py-4">
                             14 January 2012 14:00
                            </td>
                        </tr>
                        <tr className="border-b border-gray-200 dark:border-gray-700">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-slate-600">
                                Magic Mouse 2
                            </th>
                            <td className="px-6 py-4">
                                Black
                            </td>
                            <td className="px-6 py-4 bg-gray-50 dark:bg-slate-600">
                                Accessories
                            </td>
                            <td className="px-6 py-4">
                             Today, 10:00 AM
                            </td>
                        </tr>
                        <tr className="border-b border-gray-200 dark:border-gray-700">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-slate-600">
                                Google Pixel Phone
                            </th>
                            <td className="px-6 py-4">
                                Gray
                            </td>
                            <td className="px-6 py-4 bg-gray-50 dark:bg-slate-600">
                                Phone
                            </td>
                            <td className="px-6 py-4">
                             Today, 10:00 AM
                            </td>
                        </tr>
                        <tr>
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-slate-600">
                                Apple Watch 5
                            </th>
                            <td className="px-6 py-4">
                                Red
                            </td>
                            <td className="px-6 py-4 bg-gray-50 dark:bg-slate-600">
                                Wearables
                            </td>
                            <td className="px-6 py-4">
                                15 January 2012 14:00
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </>
    )
}

export default Anouments;