import styles from './Form.module.css'; // Importação do Css
import { useState } from 'react'; // Importação do State
import Axios from 'axios' // Importação do Axios

function Editar() {

    const [values, setValues] = useState(); // Armazenar os valores dos automóveis que serão enviados

    // Juntar os dados do state em um objeto que será enviado para o backend no formato 'nome : valor'
    const handleChangeValue = (value) => {
        setValues((prevValue) => ({
            ...prevValue,
            [value.target.name]: value.target.value,
        }));
    }

    // Rota do backend para deletar valores enviando apenas o ID
    const deleteValue = () => {
        Axios.post('http://localhost:3001/delete', {
            id: values.id
        }).then((response) => console.log(response));
    };

    // Rota do backend para atualizar valores
    const updateValue = () => {
        Axios.post('http://localhost:3001/update', {
            id: values.id,
            modelo: values.modelo,
            marca: values.marca,
            tipo: values.tipo,
            disp: values.disp
        }).then((response) => console.log(response));
    };

    // Função para trocar de página após o envio
    const changePage = (e) => {
        e.preventDefault()
        window.location.href="http://localhost:5173/sucessupdate"
    }

    return (
        <main className={styles.containeredit}>
            <form action="POST" onSubmit={changePage}>
                <h1>Edite o Automóvel</h1>
                <fieldset className={styles.fieldset}>
                    <div className={styles.ipt}>
                        <label htmlFor="id">Digite o ID do automóvel</label>
                        <input
                            type="number"
                            id='id'
                            required
                            name='id'
                            onChange={handleChangeValue}
                        />
                    </div>

                    <div className={styles.ipt}>
                        <label htmlFor="modelo">Digite o Modelo</label>
                        <input
                            type="text"
                            id='modelo'
                            name='modelo'
                            onChange={handleChangeValue}
                        />
                    </div>

                    <div className={styles.ipt}>
                        <label htmlFor="marca">Digite a Marca</label>
                        <input
                            type="text"
                            id='marca'
                            name='marca'
                            onChange={handleChangeValue}
                        />
                    </div>

                    <div className={styles.selection}>
                        <label htmlFor="options">Escolha uma opção</label>
                        <select
                            onChange={handleChangeValue}
                            name='tipo'
                            id="options"
                        >
                            <option value="">Tipo</option>
                            <option value="Hatch">Hatch</option>
                            <option value="Sedan">Sedan</option>
                            <option value="Suv">SUV</option>
                        </select>
                    </div>
                    
                    <div className={styles.radioContainer}>
                        <p>Situação:</p>
                        <div>
                            <div>
                                <label htmlFor="disponivel">Disponivel</label>
                                <input
                                    type="radio"
                                    name="disp"
                                    id="disponivel"
                                    value='D'
                                    onChange={handleChangeValue}
                                />
                            </div>
                            <div>
                                <label htmlFor="indisponivel">Indisponível</label>
                                <input
                                    type="radio"
                                    name="disp"
                                    id="indisponivel"
                                    value='I'
                                    onChange={handleChangeValue}
                                />
                            </div>
                        </div>
                    </div>

                    <div className={styles.btnSection}>
                        <button
                            type='submit' 
                            className={styles.btn} 
                            onClick={updateValue}>Editar Automóvel</button>
                        <button 
                            type='submit'
                            className={styles.btnDelete}
                            onClick={deleteValue}>Deletar Automóvel</button>
                    </div>

                    <p className={styles.alert}>Em caso de deletar um automóvel é necessário apenas o campo <strong>ID</strong></p>
                </fieldset>
            </form>
        </main>
    )
}

export default Editar