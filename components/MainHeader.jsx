import Link from 'next/link';
import MainHeaderLinks from './MainHeaderLinks.jsx';

export default function MainHeader() {
  return (
    <header id="main-header">
      <div id="logo">
        <Link href="/">NextNews</Link>
      </div>
      <nav>
        <MainHeaderLinks />
      </nav>
    </header>
  );
}