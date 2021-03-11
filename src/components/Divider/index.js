import ToolTip from "components/ToolTip";
import { Container } from "./styles";

const Divider = ({ item }) => (
  <Container>
    <ToolTip itemId={item.id} />
    <h3>Divider</h3>
    <hr />
  </Container>
);

export default Divider;
