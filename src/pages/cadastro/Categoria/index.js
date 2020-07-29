import React, { useState } from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';

function CadastroCategoria() {

    const [categorias, setCategorias] = useState(['Teste']);

    const valoresIniciais = {
        nome: 'Categoria Inicial',
        descricao: 'Descrição Inicial',
        cor: '#000'
    }

    const [values, setValues] = useState(valoresIniciais); // valor inicial que vai mudar conforme digitarmos.

    return (
        <PageDefault>

            <h1>Cadastro de Categoria: {values.nome}</h1>

            <form onSubmit={function handleSubmit(event) {
                event.preventDefault();
                setCategorias([
                    ...categorias,
                    values
                ]);
            }}>

                <div>

                    <div>
                        <label>
                            Nome da Categoria:
                        <input
                                type="text"
                                value={values.nome}
                                onChange={function funcaoHandlerQueOErroPediu(infosDoEvento) {
                                    //target: alvo da mudança que estamos fazendo
                                    setValues(infosDoEvento.target.value);
                                }}
                            />
                        </label>
                    </div>

                    <div>
                        <label>
                            Descrição:
                        <textarea
                                type="text"
                                value={values.descricao}
                                onChange={function funcaoHandlerQueOErroPediu(infosDoEvento) {
                                    //target: alvo da mudança que estamos fazendo
                                    setValues(infosDoEvento.target.value);
                                }}
                            />
                        </label>
                    </div>

                    <div>
                        <label>
                            Cor:
                        <input
                                type="color"
                                value={values.cor}
                                onChange={function funcaoHandlerQueOErroPediu(infosDoEvento) {
                                    //target: alvo da mudança que estamos fazendo
                                    setValues(infosDoEvento.target.value);
                                }}
                            />
                        </label>
                    </div>

                </div>

                <button>
                    Cadastrar
                </button>
            </form>

            <ul>
                {categorias.map((categoria, indice) => {
                    return (
                        <li key={`${categoria}${indice}`}>
                            {categoria}
                        </li>
                    )
                })}
            </ul>

            <Link to="/">
                Go to home
            </Link>
        </PageDefault>
    )
}

export default CadastroCategoria;