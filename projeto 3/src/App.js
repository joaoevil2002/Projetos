import './App.css';
import Testede from './components/Testede';
import CPF from './components/CPF';
import Email from './components/E-mail';
import Senha from './components/Senha';
import Meunome from './components/Meunome';

function App() {

  const name='Joao'

  const url = 'https://avatars.githubusercontent.com/u/145061436?v=4'

  return (
    <div className="App">
      <p className="p">Ola! Bota todas as sua informaçoes aqui em baixo, não se precupe não vou usar pra nada.</p>
      <Testede />
      <CPF />
      <Email />
      <Senha />
      <Meunome nome={name} />
      <img src={url} alt="Minha imagem" width="200" height="150" />
    </div>
  );
}

export default App;
