import './App.css';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { dataActions } from "./store/store";

import initialData from "./ws/webSocketData";
import Workbook from './components/Workbook';

function App() {
  
const dispatch = useDispatch();

  useEffect(() => {
    dispatch(dataActions.updateData({ records : initialData }));
  }, []);

  return (
    <div>
      <Workbook/>
    </div>
  );
}

export default App;
