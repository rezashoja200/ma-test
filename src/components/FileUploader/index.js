import { BiUpload } from "react-icons/bi";

import ToolTip from "components/ToolTip";
import { Container, UploadInput } from "./styles";

const Input = ({ item }) => (
  <Container>
    <ToolTip itemId={item.id} />
    <h3>File uploader</h3>
    <UploadInput>
      <BiUpload size={20} />
      <span>Choose file</span>
    </UploadInput>
  </Container>
);

export default Input;
