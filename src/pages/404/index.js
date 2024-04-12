import { Link } from 'react-router-dom';
import './style.css';

export const PageNotFound = () => {
    return (
        <div class="bg-black from-purple-300 to-blue-200">
            <div class="w-9/12 m-auto py-16 min-h-screen flex items-center justify-center">
                <div class="shadow overflow-hidden sm:rounded-lg pb-8">
                    <div class="border-t border-gray-200 text-center pt-8 text-white">
                        <h1 class="text-9xl font-bold text-red-500">404</h1>
                        <h1 class="text-6xl font-medium py-8">oops! Page not found</h1>
                        <p class="text-2xl pb-8 px-12 font-medium ">Oops! The page you are looking for does not exist. It might have been moved or deleted.</p>
                        <hr/>
                        <button class="bg-lime-400 mt-4 from-purple-400 to-blue-500 hover:from-pink-500 hover:to-orange-500 text-white font-semibold px-6 py-3 rounded-md mr-6">
                            <Link to={'/'}>HOME</Link>
                        </button>
                        {/* future button for report some bugg */}
                        {/* <button class="bg-gradient-to-r mt-4 from-red-400 to-red-500 hover:from-red-500 hover:to-red-500 text-white font-semibold px-6 py-3 rounded-md">
                            Report
                        </button> */}
                    </div>
                </div>
            </div>
        </div>
    )
}