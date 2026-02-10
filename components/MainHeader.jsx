import Link from 'next/link'

function MainHeader() {
  return (
    <header style={{ padding: '1rem', borderBottom: '1px solid #e5e7eb' }}>
      <nav>
        <ul style={{ listStyle: 'none', display: 'flex', gap: '1rem', margin: 0, padding: 0 }}>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/news">Newsletter</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default MainHeader