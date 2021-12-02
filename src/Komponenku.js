import React, { useCallback, useEffect } from "react";

const Komponenku = () => {
    let [menu, setMenu] = React.useState([])

    const fetchMenu = useCallback(() => {
        console.log(`fetchMenu`)
        return ['nasi padang', 'nasi uduk', 'nasi gudeg'];
    },[])

    useEffect(() => {
        console.log(`useEffect`)
        let data = fetchMenu()
        setMenu(data)
    }, [fetchMenu])

    console.log(`render`)

    return <div>
        {menu.map(makanan => <div>{makanan}</div>)}
    </div>
}


export default Komponenku