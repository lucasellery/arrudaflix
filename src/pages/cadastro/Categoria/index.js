import React, { useState } from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';
import FormField from '../../../components/FormField';

function CadastroCategoria() {
    const valoresIniciais = {
        nome: '',
        descricao: '',
        cor: ''
    }

    const [categorias, setCategorias] = useState([]);
    const [values, setValues] = useState(valoresIniciais); // valor inicial que vai mudar conforme digitarmos.

    function setValue(chave, valor) {
        setValues({
            ...values,
            [chave]: valor, //nome: 'valor'
        })
    }

    function handleChange(infosDoEvento) {
        // const { getAttribute, value } = infosDoEvento.target;
        //target: alvo da mudança que estamos fazendo
        setValue(
            infosDoEvento.target.getAttribute('name'),
            infosDoEvento.target.value
        );
    }

    return (
        <PageDefault>

            <h1>Cadastro de Categoria: {values.nome}</h1>

            <form onSubmit={function handleSubmit(event) {
                event.preventDefault();
                setCategorias([
                    ...categorias,
                    values
                ]);

                setValues(valoresIniciais);
            }}>

                <div>

                    <FormField
                        label="Nome da Categoria"
                        type="text"
                        name="nome"
                        value={values.nome}
                        onChange={handleChange}
                    />

                    {/* <FormField

                        value={values.descricao}
                        onChange={handleChange}
                    /> */}

                    <div>
                        <label>
                            Descrição:
                        <textarea
                                type="text"
                                value={values.descricao}
                                name="descricao"
                                onChange={handleChange}
                            />
                        </label>
                    </div>

                    <FormField
                        label="Cor da Categoria"
                        type="color"
                        name="cor"
                        value={values.cor}
                        onChange={handleChange}
                    />

                    {/* <div>   
                        <label>
                            Cor:
                        <input
                                type="color"
                                value={values.cor}
                                name="cor"
                                onChange={handleChange}
                            />
                        </label>
                    </div> */}

                </div>

                <button>
                    Cadastrar
                </button>
            </form>

            {/* O react não sabe lidar com obejtos completos como {categoria},
             logo, deve-se passar o algum atributo desse objeto também */}
            <ul>
                {categorias.map((categoria, indice) => {
                    return (
                        <li key={`${categoria}${indice}`}>
                            {categoria.nome}
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