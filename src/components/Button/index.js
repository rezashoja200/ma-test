import { Container } from "./styles";

const Button = ({ icon, title, onClick, customStyles }) => (
  <Container onClick={onClick} customStyles={customStyles}>
    {icon}
    <span>{title}</span>
  </Container>
);

export default Button;
