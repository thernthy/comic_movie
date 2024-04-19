import { formatDate } from "../DataFormator/DateFormat"



export const MessageTableRow  =  ({ data }) => {

    return data?.map(item => (
        <tr className="border-b border-gray-200 dark:border-white" key={item.id}>
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-lime-500 dark:text-white dark:bg-lime-600">
                {item.title}
            </th>
            <td className="px-6 py-4">
                { item.message }
            </td>
            <td className="px-6 py-4 bg-gray-50 text-white dark:bg-lime-600">
                { item.from	}
            </td>
            <td className="px-6 py-4 text-lime-400">
                {  formatDate(item.created_at)	}
            </td>
        </tr>
    ))
}