import ToolTip from "components/ToolTip";
import { Container } from "./styles";

const Input = ({ item }) => (
  <Container>
    <ToolTip itemId={item.id} />
    <textarea />
  </Container>
);

export default Input;
