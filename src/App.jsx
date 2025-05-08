import './App.css';
import Card from './components/Card';
import Button from './components/Button';
import ToggleSwitch from './components/ToggleSwitch';
import { ThemeContext, ThemeProvider, themes } from './context/ThemeContext';
import { useContext } from 'react';

function App() {

  const { toggleTheme, theme } = useContext(ThemeContext);

  return (
      <div className="App">
        <header className="header">
          <div className="header-content" >
            <h2 style={{color: theme.foreground}} >Dark Mode Exercise</h2>
            <ToggleSwitch onToggle={toggleTheme} />
          </div>
        </header>
        <div className="main-container">
          <Card style={{ justifyContent: 'space-between'}}>
            A card with stuff
            <Button label="Click me" onClick={() => {}}/>
          </Card>
        </div>
      </div>
  );
}

export default App;
