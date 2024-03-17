import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../action/CounterAction";

export default function Counter() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state);
  return (
    <div>
      <button onClick={() => dispatch(increment())}>+</button>
      <span>{count}</span>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
}
