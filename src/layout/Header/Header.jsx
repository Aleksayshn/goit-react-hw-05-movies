import { routes } from 'utils/routes';
import { HeaderStyled, Container, Logo, Nav, Link } from './Header.styled';

export const Header = () => {
  return (
    <HeaderStyled>
      <Container>
        <Logo to={routes.HOME} end>
          <span role="img" aria-label="movie icon">
            📽
          </span>{" "}
          Filmoteka
        </Logo>
        <Nav>
          <Link to={routes.HOME} end>
            Home
          </Link>
          <Link to={routes.MOVIES}>Movies</Link>
        </Nav>
      </Container>
    </HeaderStyled>
  );
};
