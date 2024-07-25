import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom";

import Error from "../pages/error";
import Main from '../pages/main';
import Status from '../pages/status'

  export const Router = () => {
    return(
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Navigate to="/" replace/>}/>
          <Route path="/404" element={<Error />}/>
          <Route path="/" element={<Status />}/>
        </Routes>
      </BrowserRouter>
    )
  }


  export default Router