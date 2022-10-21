import styles from './Create.module.css'; //Importação do Css

function Create () {
    return (
        <div className={styles.container}>
            <form action="POST">
                <h1>Crie um Novo Automóvel</h1>
                <fieldset className={styles.fieldset}>
                    <div className={styles.ipt}>
                        <label htmlFor="modelo">Modelo do Carro</label>
                        <input type="text" placeholder="Digite o modelo" required id="modelo" />
                    </div>
                    <div className={styles.ipt}>
                        <label htmlFor="marca">Marca do Carro</label>
                        <input type="text" placeholder="Digite a marca" required/>
                    </div>

                    <div className={styles.selection}>
                        <label htmlFor="options">Escolha uma opção</label>
                        <select  id="options">
                            <option value="hatch">Hatch</option>
                            <option value="sedan">Sedan</option>
                            <option value="suv">SUV</option>
                        </select>
                    </div>
                    <div class={styles.radioContainer}>
                        <p>Situação:</p>
                        <div>
                            <div>
                                <label htmlFor="disponivel">Disponivel</label>
                                <input type="radio" name="disponibilidade" id="disponivel" />
                            </div>
                            <div>
                                <label htmlFor="indisponivel">Indisponível</label>
                                <input type="radio" name="disponibilidade" id="indisponivel" />
                            </div>
                        </div>
                    </div>
                    <button className={styles.btn}>Criar um novo automóvel</button>
                </fieldset>
            </form>
        </div>
    )
}

export default Create