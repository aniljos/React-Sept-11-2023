import { useEffect } from "react";

function useTitle(title: string){


    useEffect(() => {

        console.log("changing title");
        const originalTitle = document.title;
        document.title = document.title + "-" + title;

        return () => {
            document.title = originalTitle;
        }

    }, [])

}

export default useTitle;