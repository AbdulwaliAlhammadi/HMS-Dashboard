import { el } from "../js/helpers";

export const Header = () => {

  const searchClickHandler = () => {
    el("#searchInput").focus();
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary my-1">
      <div className="container container-fluid">
        <a className="navbar-brand" href="index.html">
          HMS Dashboard
        </a>
        <div>
          <button
            id="search-btn"
            className="navbar-toggler py-2 btn btn-outline-dark"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSearch"
            aria-controls="navbarSearch"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={searchClickHandler}
          >
            <span className="bi bi-search"></span>
          </button>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
        <div className="flex-grow-0 collapse navbar-collapse" id="navbarSearch">
          <div className="input-container d-block my-2">
            <input
              className="form-control border rounded-pill"
              type="search"
              id="searchInput"
              placeholder="search"
            />
            <i className="bi bi-search"></i>
          </div>
        </div>

        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#">
                Home
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
