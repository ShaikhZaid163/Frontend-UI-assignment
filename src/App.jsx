
import React from 'react'
import Search from './components/Search'
import data from './data/search.json'

export default function App(){
  return (
    <div className="app">
      <header className="topbar">
        <h1 className="logo">Acme Search</h1>
        <nav className="nav">
          <button className="ghost">Sign in</button>
          <button className="primary">Get Started</button>
        </nav>
      </header>

      <main className="container">
        <aside className="sidebar">
          <div className="card">
            <h3>Filters</h3>
            <label className="switch">
              <input type="checkbox" defaultChecked />
              <span className="slider" />
            </label>
            <p className="muted">Toggle advanced results</p>
          </div>
        </aside>

        <section className="content">
          <Search items={data} />
        </section>
      </main>

      <footer className="footer">Built with ❤️ by Zaid — React UI assignment</footer>
    </div>
  )
}
