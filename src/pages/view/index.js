
import { useEffect } from "react";
import { useHookReadComic } from "../../hook/useHookReadComic";
import Viewcomic from "../../components/view/view";
import FetchingDataError from "../filterData/index"
import Loading from "../../components/Loading";

const Readcomic = () => {
    const { data, isLoading, error, refetch } = useHookReadComic()
    const setLogin = () => {
        refetch();
        window.scrollTo(0, 0);
    }
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    
    const renderReading = () => {
        if (isLoading) {
            return <Loading />
        }

        if (error) {
            return <FetchingDataError  refetch={refetch}/>
        }
        return (
            <Viewcomic 
                key={data.data?.comic_ep_id}
                id={data.id}
                isLoading={setLogin}
                title={data.title}
                comic_img_path={data.data?.comic_img_path}
                comic_ep={data.data?.comic_ep}
                maxPart={data.mp}
                comic_server_site={data.data?.comic_server_site}
                created_at={data.data?.created_at}
                
            />
        )

    }


    return (
        <div className="min-vh-100">
            <div className="container">
                <div className="row">
                    {renderReading()}
                </div>
            </div>
        </div>
    );
};
export default Readcomic