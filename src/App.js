import logo from './logo.svg';
import Button from './components/Button';
import './App.css';

function App() {

  const openInNewTab = (url) => {
    
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
  }

  return (
    <div className="App">
      <header className="App-header">
      <Button text= 'hi' onClick={() => openInNewTab('https://stackoverflow.com')}/>
      <Button text= 'hi2' onClick={() => openInNewTab('https://google.com')}/>
      </header>
    </div>
  );
}

export default App;
