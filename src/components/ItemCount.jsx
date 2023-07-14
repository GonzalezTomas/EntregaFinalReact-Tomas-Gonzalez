import { Button } from "@mui/material";
import { useCount } from "./hooks/useCount";

export const ItemCount = ({ stock, initial = 1, onAdd }) => {
  const { count, decrement, increment } = useCount(initial, stock);

  return (
    <>
      <div>
        <Button variant="contained" onClick={decrement}>
          -
        </Button>
        <span> {count} </span>
        <Button variant="contained" onClick={increment}>
          +
        </Button>
      </div>
      <Button variant="contained" onClick={() => onAdd(count)}>
        Agregar al Carrito
      </Button>
    </>
  );
};

export default ItemCount;
