import { useEffect, useState } from 'react'
import Axios from 'axios'

import Card from '../Layout/Card'

function ViewPage () {

    const [list, setList] = useState([]);
    
    console.log(list);

    useEffect(() => {
        Axios.get('http://localhost:3001/getregisters').then(resp => setList(resp.data))
    }, [])

    return (
        <div>
            {list.map((value, index) => (
                <Card
                    list= {list}
                    setList={setList}
                    modelo = {value.MODELO}
                    marca = {value.MARCA}
                    id = {value.ID}
                    disponbilidade = {value.DISP}
                    tipo = {value.TIPO}
                    />
            ))}
        </div>
    )
}

export default ViewPage