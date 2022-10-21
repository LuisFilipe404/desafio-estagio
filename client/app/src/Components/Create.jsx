import styles from './Create.module.css'; //Importação do Css
import { useState } from 'react'
import Axios from 'axios'
import { redirect } from "react-router-dom";



function Create () {

    const [values, setValues] = useState();

    const handleChangeValue = (value) => {
        setValues((prevValue) => ({
        ...prevValue,
        [value.target.name]: value.target.value,
        }));
    };

    console.log(values);

    const submitEvent = () => {
        Axios.post("http://localhost:3001/register",{
          modelo: values.modelo,
          marca: values.marca,
          tipo: values.tipo,
          disp: values.disp
        }).then((response) => {
          console.log(response);
        })
      }

    const changePage = (e) => {
        e.preventDefault()
        window.location.href="http://localhost:5173/sucessform"
    }

    return (
        <div className={styles.container}>
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
                            onChange={handleChangeValue} />
                    </div>
                    <div className={styles.ipt}>
                        <label htmlFor="marca">Marca do Carro</label>
                        <input 
                            type="text" 
                            placeholder="Digite a marca" 
                            required
                            name='marca'
                            onChange={handleChangeValue}/>
                    </div>

                    <div className={styles.selection}>
                        <label htmlFor="options">Escolha uma opção</label>
                        <select onChange={handleChangeValue} name='tipo' id="options" required>
                            <option value="">Tipo</option>
                            <option value="hatch">Hatch</option>
                            <option value="sedan">Sedan</option>
                            <option value="suv">SUV</option>
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
                    <button onClick={() => submitEvent()} type='submit' className={styles.btn}>Criar um novo automóvel</button>
                </fieldset>
            </form>
        </div>
    )
}

export default Create