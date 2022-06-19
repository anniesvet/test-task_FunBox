import './App.css';
import Header from './components/header';
import Card from './components/card';
import Content from './components/content';

function App() {
  return (
    <div className="App">
      <div className='App__content'>
        <Header />
        <Content />
      </div>
    </div>
  );
}

export default App;
