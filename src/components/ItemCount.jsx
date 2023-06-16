import { useCount } from "./hooks/useCount";

export const ItemCount = () => {
  const { count, decrement, increment, reset } = useCount(1, 15);

  return (
    <>
      <div>
        <button onClick={decrement}>-</button>
        <span> {count} </span>
        <button onClick={increment}>+</button>
      </div>
      <button onClick={reset}>Vaciar</button>
    </>
  );
};

export default ItemCount;
