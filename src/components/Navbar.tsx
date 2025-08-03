import { useState, useEffect } from 'react';

export const Navbar = () => {
  const [currentHash, setCurrentHash] = useState(window.location.hash);

  useEffect(() => {
    const onHashChange = () => setCurrentHash(window.location.hash);
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  return (
    <nav
      data-cy="nav"
      className="navbar is-fixed-top has-shadow"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="container">
        <div className="navbar-brand">
          <a
            className={`navbar-item ${currentHash === '#/' || currentHash === '' ? 'has-background-grey-lighter' : ''}`}
            href="#/"
          >
            Home
          </a>
          <a
            className={`navbar-item ${currentHash.startsWith('#/people') ? 'has-background-grey-lighter' : ''}`}
            href="#/people"
          >
            People
          </a>
        </div>
      </div>
    </nav>
  );
};
