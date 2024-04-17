import { Route, Routes } from "react-router-dom";
import Sitebar from "../components/SiteBar_and_Header";
import Add from "../components/Add";
import List from "../components/List";
import Edit from "../components/Edit";
const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Sitebar />}>
          <Route index element={<List />} />
          <Route path="/add" element={<Add />} />
          <Route path="/edit/:id" element={<Edit />} />
        </Route>
      </Routes>
    </>
  );
};

export default Router;
