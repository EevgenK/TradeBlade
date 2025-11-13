import clsx from 'clsx';
import s from './Nav.module.css';
export interface NavProps {
  type?: string;
}
const Nav = ({ type }: NavProps) => {
  const navItems = [
    { href: '#home', title: 'цифры' },
    { href: '#deals', title: 'сделки онлайн' },
    { href: '#about-company', title: 'о компании' },
    { href: '#how-to-start', title: 'как начать' },
    { href: '#tariffs', title: 'тарифы' },
    { href: '#reviews', title: 'отзывы' },
    { href: '#faq', title: 'faq' },
  ];

  return (
    <nav className={clsx(type === 'main' && s.hidden)} aria-label="navigation">
      <ul className={clsx(s.nav, type !== 'main' && s.sidebar_nav)}>
        {navItems.map((item) => (
          <li key={item.href}>
            <a
              href={item.href}
              className={s.link}
              aria-label={`Go to ${item.title} section`}
            >
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
