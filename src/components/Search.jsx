
import React, {useState, useMemo} from 'react'
import './Search.css'

export default function Search({items}) {
  const [q, setQ] = useState('')
  const [sort, setSort] = useState('relevance')
  const [active, setActive] = useState(null)

  const filtered = useMemo(() => {
    const term = q.trim().toLowerCase()
    let res = items.filter(it => {
      if(!term) return true
      return it.title.toLowerCase().includes(term) || it.description.toLowerCase().includes(term)
    })
    if(sort === 'new') res = res.sort((a,b) => new Date(b.date) - new Date(a.date))
    return res
  }, [items, q, sort])

  return (
    <div className="search-panel">
      <div className="search-header">
        <div className="search-input">
          <input value={q} onChange={e=>setQ(e.target.value)} placeholder="Search products, articles or companies..." />
          <button className="icon-btn" aria-label="search">🔍</button>
        </div>

        <div className="controls">
          <select value={sort} onChange={e=>setSort(e.target.value)}>
            <option value="relevance">Relevance</option>
            <option value="new">Newest</option>
          </select>
          <button className="ghost">Export</button>
        </div>
      </div>

      <div className="results-meta">
        <p><strong>{filtered.length}</strong> results</p>
      </div>

      <ul className="results">
        {filtered.map(item => (
          <li key={item.id} className={"result "+(active===item.id ? 'active':'')} onMouseEnter={()=>setActive(item.id)} onMouseLeave={()=>setActive(null)}>
            <div className="result-left">
              <div className="thumb" aria-hidden> {item.icon} </div>
            </div>
            <div className="result-main">
              <h4>{item.title}</h4>
              <p className="desc">{item.description}</p>
              <div className="meta">
                <span>{item.category}</span>
                <span className="muted">{new Date(item.date).toLocaleDateString()}</span>
              </div>
            </div>
            <div className="result-right">
              <button className="primary small">Open</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
