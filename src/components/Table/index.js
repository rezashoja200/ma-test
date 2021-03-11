import { useCallback } from "react";

import ToolTip from "components/ToolTip";
import { Container } from "./styles";

const Table = ({ item }) => {
  const renderRow = useCallback(
    (row, i) => (
      <tr key={i}>
        {row.map((cell, i) => (
          <td key={i}>{cell}</td>
        ))}
      </tr>
    ),
    []
  );

  return (
    <Container>
      <ToolTip itemId={item.id} />
      <h3>Table</h3>
      <table>
        <tbody>
          {[
            [[], [], []],
            [[], [], []],
          ].map(renderRow)}
        </tbody>
      </table>
    </Container>
  );
};

export default Table;
