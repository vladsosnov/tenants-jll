import logo from './logo.svg';
import './App.css';

export const App = () => {
  return (
    <div className="app">
      <header className="appHeader">
        <img src={logo} className="appLogo" alt="logo" />
        <p>
          Edit <code>src/app.tsx</code> and save to reload.
        </p>
        <a
          className="appLink"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
};
