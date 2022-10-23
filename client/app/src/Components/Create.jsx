import styles from './Form.module.css'; // Importação do Css
import { useState } from 'react' // Importação do State
import Axios from 'axios' // Importação do Axios

function Create () {

    const [values, setValues] = useState(); // Armazenar os valores dos automóveis que serão enviados

    // Juntar os dados do state em um objeto que será enviado para o backend no formato 'nome : valor'
    const handleChangeValue = (value) => {
        setValues((prevValue) => ({
        ...prevValue,
        [value.target.name]: value.target.value,
        }));
    };

    // Enviar os dados pro backend pelo Axios e receber no express
    const submitEvent = () => {
        Axios.post("http://localhost:3001/register",{
          modelo: values.modelo,
          marca: values.marca,
          tipo: values.tipo,
          disp: values.disp
        }).then((response) => {
          console.log(response);
        });
    };

    // Mudar a página após o envio do formulário
    const changePage = (e) => {
        e.preventDefault()
        window.location.href="http://localhost:5173/sucessform"
    }

    return (
        <main className={styles.containersub}>
            <form action='POST=' onSubmit={changePage}>
                <h1>Crie um Novo Automóvel</h1>
                <fieldset className={styles.fieldset}>
                    <div className={styles.ipt}>
                        <label htmlFor="modelo">Modelo do Carro</label>
                        <input 
                            type="text" 
                            placeholder="Digite o modelo" 
                            required 
                            id="modelo"
                            name='modelo'
                            onChange={handleChangeValue} 
                        />
                    </div>
                    
                    <div className={styles.ipt}>
                        <label htmlFor="marca">Marca do Carro</label>
                        <input 
                            type="text" 
                            placeholder="Digite a marca" 
                            required
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
                            required
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
                                    required/>
                            </div>
                            <div>
                                <label htmlFor="indisponivel">Indisponível</label>
                                <input 
                                    type="radio" 
                                    name="disp" 
                                    id="indisponivel"
                                    value='I'
                                    onChange={handleChangeValue}
                                    required />
                            </div>
                        </div>
                    </div>
                    <button 
                        onClick={() => submitEvent()} 
                        type='submit' 
                        className={styles.btn}>Criar um novo automóvel</button>
                </fieldset>
            </form>
        </main>
    )
}

export default Create