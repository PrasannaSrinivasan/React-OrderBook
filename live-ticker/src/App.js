import './App.css';
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { dataActions } from "./store/store";

import initialData from "./ws/webSocketData";

function App() {
  
const dispatch = useDispatch();

  useEffect(() => {
    console.log(initialData);
    dispatch(dataActions.updateData({ records : initialData }));
  }, []);

  return (
    <div>
      <p>Hello</p>
    </div>
  );
}

export default App;
