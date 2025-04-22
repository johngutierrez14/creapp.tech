// src/pages/NotFound.jsx
export default function NotFound() {
    return (
      <div className="container">
        <img src="/assets/oso-404.svg" alt="Oso triste" className="bear-logo" />
        <h1 className="glitch" data-text="404">404</h1>
        <p className="subtitle">Oops... No encontramos esa página.</p>
        <a href="/" className="btn-home">Volver al inicio</a>
      </div>
    );
  }
  