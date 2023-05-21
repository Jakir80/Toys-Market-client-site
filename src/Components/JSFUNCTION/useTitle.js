import { useEffect } from "react";
const useTitle = title => {
    useEffect(() => {
        document.title = `${title}-Toy's World`;
    }, [title])
}
export default useTitle;