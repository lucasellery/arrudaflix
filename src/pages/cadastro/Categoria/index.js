/* eslint-disable max-len */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

function CadastroCategoria() {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '',
  };

  // eslint-disable-next-line no-undef
  const fieldId = `${descricao}`;

  const [categorias, setCategorias] = useState([]);

  // valor inicial que vai mudar conforme digitarmos.
  const [values, setValues] = useState(valoresIniciais);

  function setValue(chave, valor) {
    setValues({
      ...values,
      [chave]: valor, // nome: 'valor'
    });
  }

  function handleChange(infosDoEvento) {
    // const { getAttribute, value } = infosDoEvento.target;
    // target: alvo da mudança que estamos fazendo
    setValue(
      infosDoEvento.target.getAttribute('name'),
      infosDoEvento.target.value,
    );
  }

  return (
    <PageDefault>

      <h1>
        Cadastro de Categoria:
        {values.nome}
      </h1>

      <form onSubmit={function handleSubmit(event) {
        event.preventDefault();
        setCategorias([
          ...categorias,
          values,
        ]);

        setValues(valoresIniciais);
      }}
      >

        <div>

          <FormField
            label="Nome da Categoria"
            type="text"
            name="nome"
            value={values.nome}
            onChange={handleChange}
          />

          <div>
            <label htmlFor={fieldId}>
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

        <Button>
          Cadastrar
        </Button>
      </form>

      {/* O react não sabe lidar com obejtos completos como {categoria},
             logo, deve-se passar o algum atributo desse objeto também */}
      <ul>
        {categorias.map((categoria, indice) => (
          <li key={`${categoria}${indice}`}>
            {categoria.nome}
          </li>
        ))}
      </ul>

      <Link to="/">
        Go to home
      </Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
