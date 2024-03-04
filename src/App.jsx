import { BrowserRouter, Route, Routes } from "react-router-dom";
import Body from "./assets/components/Body";

export default function App(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Body/>}/>
      </Routes>
    </BrowserRouter>
  )
}