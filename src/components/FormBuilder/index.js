import { useCallback } from "react";
import { useSelector } from "react-redux";
import { BiDownload } from "react-icons/bi";

import Button from "components/Button";
import Divider from "components/Divider";
import FileUploader from "components/FileUploader";
import Input from "components/Input";
import Table from "components/Table";
import { ITEM_TYPES } from "constants/formBuilder";
import { Container, saveCustomStyles } from "./styles";

const FormBuilder = () => {
  const formBuilder = useSelector((state) => state.formBuilder);

  const renderItem = useCallback((item) => {
    const props = { key: item.id, item };
    switch (item.type) {
      case ITEM_TYPES.table:
        return <Table {...props} />;
      case ITEM_TYPES.divider:
        return <Divider {...props} />;
      case ITEM_TYPES.input:
        return <Input {...props} />;
      case ITEM_TYPES.fileUploader:
        return <FileUploader {...props} />;
      default:
        return null;
    }
  }, []);
  return (
    <Container>
      {formBuilder.map(renderItem)}
      <Button
        title="Save"
        icon={<BiDownload size={18} />}
        customStyles={saveCustomStyles}
      />
    </Container>
  );
};

export default FormBuilder;
