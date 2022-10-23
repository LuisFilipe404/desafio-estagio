import { useEffect, useState } from 'react' // Importação do State e do Effect
import Axios from 'axios' // Importação do Axios
import Card from '../Layout/Card' // Importação do Card de cada registro
import styles from './ViewPage.module.css' // Importação do Css

function ViewPage () {

    const [list, setList] = useState([]); // State para receber a list e atribuir em um Array

    // Effect para execultar assim que a pagina for carregada e receber do axios todos os registros
    useEffect(() => {
        Axios.get('http://localhost:3001/getregisters').then(resp => setList(resp.data));
    }, []);

    return (
        <div className={styles.container}>
            <div>
                {list.map((value, index) => (
                    <Card
                        setList={setList}
                        list= {list}
                        modelo = {value.MODELO}
                        marca = {value.MARCA}
                        id = {value.ID}
                        disponibilidade = {value.DISP}
                        tipo = {value.TIPO}
                        key = {index}
                        />
                ))}
            </div>
        </div>
    )
}

export default ViewPage