import { useEffect, useState } from "react";

export default function Data(props){
    
    const [response, setResponse] = useState([])
    
    useEffect(() => {
        fetch(`https://opentdb.com/api.php?amount=${props.number}&category=${props.category}&difficulty=${props.difficulty}&type=multiple`)
        .then((res) => (res.json()))
        .then((res) => setResponse(res.results))
    }, [props])

    return response
}
