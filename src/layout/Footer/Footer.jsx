import { FooterStyled, Container, Text } from './Footer.styled';

export const Footer = () => {
  return (
    <FooterStyled>
      <Container>
        <Text>
          © {new Date().getFullYear()} MyMovies App.{' '}
          <span>All rights reserved.</span>
        </Text>
      </Container>
    </FooterStyled>
  );
};
