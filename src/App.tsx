import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
        <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Home</a>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <ul className="navbar-nav me-auto mb-2 mb-md-0">
                        <li className="nav-item">
                            <a className="nav-link" href="#">Login</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Register</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
      <main className="form-signin w-100 m-auto">
        <form>
            <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
              <input type="email" className="form-control" placeholder="name@example.com" />
              <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
              <input className="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault" />
            <button className="btn btn-primary w-100 py-2" type="submit">Sign in</button>
        </form>
      </main>
    </div>
  );
}

export default App;
