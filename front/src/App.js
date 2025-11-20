import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  // estados do componente
  const [marcas, setMarcas] = useState([]);  // lista de marcas
  const [carregando, setCarregando] = useState(true);  // se ta carregando
  const [erro, setErro] = useState('');  // mensagem de erro

  // executa quando o componente carrega
  useEffect(() => {
    buscarMarcas();  // busca as marcas da api
  }, []);  // array vazio = so executa 1 vez

  // funcao pra buscar marcas da api
  const buscarMarcas = async () => {
    try {
      setCarregando(true);  // mostra loading
      // pega a url da api do .env ou usa localhost
      const url = process.env.REACT_APP_API_URL || 'http://localhost:3001';
      const resp = await axios.get(`${url}/brands`);  // faz a requisicao
      setMarcas(resp.data);  // salva as marcas no estado
      setErro('');  // limpa erro
    } catch (err) {
      console.log('deu erro:', err);  // log simples
      setErro('Erro ao carregar as marcas');  // mostra erro pro usuario
    } finally {
      setCarregando(false);  // para o loading
    }
  };

  if (carregando) {
    return <div className="loading">Carregando marcas...</div>;
  }

  return (
    <div className="App">
      <header>
        <h1>Sistema de Marcas</h1>
        <button onClick={buscarMarcas} className="botao-atualizar">
          Atualizar Lista
        </button>
      </header>

      {erro && (
        <div className="erro">
          {erro}
        </div>
      )}

      <main>
        <h2>Lista de Marcas ({marcas.length})</h2>
        
        {marcas.length === 0 ? (
          <p className="sem-dados">Nenhuma marca encontrada</p>
        ) : (
          <table className="tabela-marcas">
            <thead>
              <tr>
                <th>ID</th>
                <th>Nome</th>
                <th>Especialidade</th>
                <th>Ano Fundação</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {marcas.map((marca) => (
                <tr key={marca.id}>
                  <td>{marca.id}</td>
                  <td>{marca.name}</td>
                  <td>{marca.expertise}</td>
                  <td>{marca.year_founded}</td>
                  <td>
                    <span className={marca.active ? 'ativo' : 'inativo'}>
                      {marca.active ? 'Ativo' : 'Inativo'}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </main>

      <footer>
        <p>Total de marcas: {marcas.length}</p>
      </footer>
    </div>
  );
}

export default App;