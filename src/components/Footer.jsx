import {
  CopyRight,
  Description,
  Footer,
  Header,
  Logo,
  Social,
} from "./styles/Footer.style";
import facebook from "../images/icons/facebook.svg";
import twitter from "../images/icons/twitter.svg";
import instagram from "../images/icons/instagram.svg";
import linkedIn from "../images/icons/linkedin.svg";
import logo from "../images/Logo.svg";

const FooterPage = () => {
  return (
    <Footer>
      <Header>
        <Logo>
          <img src={logo} alt="logo du site" />
          <hr />
        </Logo>
        <div>
          <Social>
            <img src={facebook} alt=""></img>
            <img src={twitter} alt=""></img>
            <img src={instagram} alt=""></img>
            <img src={linkedIn} alt=""></img>
          </Social>
          <hr />
        </div>
      </Header>
      <Description>
        <p>
          +243movie est de présentation des films. Nous sommes là pour vous
          aider à trouver rapidement les informations sur les films, séries et
          célébrités. Nous avons le plaisir de travailler en collaboration avec
          the movie database qui nous fourni une base de données riche contenant
          la majorité des informations que vous cherchez.
        </p>
      </Description>
      <CopyRight>Copy Right 2021 by Jordie Lutundula</CopyRight>
    </Footer>
  );
};

export default FooterPage;
