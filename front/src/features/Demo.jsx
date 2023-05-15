import { useDispatch } from "react-redux"
import { fetchData } from "./Contents"

export default function Demo() {

    const dispatch = useDispatch();


  return (
    <div>
        <button onClick={() => dispatch(fetchData())}>Click</button>
    </div>
  )
}
