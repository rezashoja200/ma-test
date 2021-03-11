import { useDispatch } from "react-redux";
import { MdEdit } from "react-icons/md";
import { BsArrowsMove } from "react-icons/bs";
import { BiAddToQueue } from "react-icons/bi";
import { HiOutlineTrash } from "react-icons/hi";

import { removeItem } from "store/actions";
import { Container } from "./styles";

const ToolTip = ({ itemId }) => {
  const dispatch = useDispatch();
  return (
    <Container>
      <BsArrowsMove color="#3D3D3D" />
      <BiAddToQueue color="#3D3D3D" />
      <MdEdit color="#3D3D3D" />
      <HiOutlineTrash
        onClick={() => dispatch(removeItem(itemId))}
        color="#3D3D3D"
      />
    </Container>
  );
};

export default ToolTip;
