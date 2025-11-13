import AuthButtons from '../AuthButtons/AuthButtons';
import BurgerBtn from '../BurgerBtn/BurgerBtn';
import Logo from '../Logo/Logo';
import Nav from '../Nav/Nav';
import Container from '../shared/Container/Container';
import s from './Header.module.css';

const Header = () => {
  return (
    <header>
      <Container additionalClass={s.header_container}>
        <Logo />
        <Nav type="main" />
        <AuthButtons type="main" />
        <BurgerBtn />
      </Container>
    </header>
  );
};

export default Header;
