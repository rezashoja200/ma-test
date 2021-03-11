import { useDispatch } from "react-redux";
import { BsArrowRepeat, BsArrowsMove } from "react-icons/bs";

import Button from "components/Button";
import { addItem } from "store/actions";
import { ITEM_TYPES } from "constants/formBuilder";
import { Container, validateStyles } from "./styles";

// commented items do not have design in zeplin

const SideBar = () => {
  const dispatch = useDispatch();
  return (
    <Container>
      <Button
        title="Validate"
        icon={<BsArrowRepeat size={15} color="blue" />}
        customStyles={validateStyles}
      />
      <h3>Cell layout</h3>
      <Button
        onClick={() => dispatch(addItem(ITEM_TYPES.table))}
        title="Table"
        icon={<BsArrowsMove size={18} />}
      />
      <h3>Form components</h3>
      <Button
        onClick={() => dispatch(addItem(ITEM_TYPES.input))}
        title="Input"
        icon={<BsArrowsMove size={18} />}
      />
      {/* <Button title="Checkbox" icon={<BsArrowsMove size={18}/>}/> */}
      <Button
        onClick={() => dispatch(addItem(ITEM_TYPES.fileUploader))}
        title="File uploader"
        icon={<BsArrowsMove size={18} />}
      />
      {/* <Button title="Text" icon={<BsArrowsMove size={18}/>}/> */}
      <Button
        onClick={() => dispatch(addItem(ITEM_TYPES.divider))}
        title="Divider"
        icon={<BsArrowsMove size={18} />}
      />
    </Container>
  );
};

export default SideBar;
