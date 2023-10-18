import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title}-Auto Motive`;
    }, [title])
}

export default useTitle;