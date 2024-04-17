import { useEffect } from "react";
import { Container } from "@mui/material";
import "./index.scss";
import { Button } from "antd";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Edit, { Delete } from "../../constants";
import { toast } from "react-toastify";
import "./index.scss";
import LoadingProduct from "../../loading";
import { useSelector, useDispatch } from "react-redux";
import { Users } from "../../provider";
import { fetchData } from "../../redux/data";
export default function List() {
  const navigate = useNavigate();
  const { data, loading, error } = useSelector((state) => state.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch, Users]);

  const deleteAdd = (id) => {
    if (window.confirm("Delete Teacher?")) {
      axios
        .delete(`http://localhost:3000/data/${id}`)
        .then(() => {
          toast.success("User deleted successfully");
          dispatch(fetchTeachers());
        })
        .catch((error) => {
          console.error("Error deleting teacher:", error);
        });
    }
  };

  const edit = (id) => {
    navigate(`/edit/${id}`);
  };

  return (
    <Container>
      {loading ? <LoadingProduct /> : null}
      <div className="container">
        <div className="filter">
          <Button
            id="addT1"
            className="addT"
            type="primary"
            onClick={() => navigate("/add")}
          >
            Add
          </Button>
        </div>
      </div>
      <div className="tabel">
        <div className="tr">
          <p>#</p>
          <p>First</p>
          <p>Last</p>
          <p>Action</p>
        </div>
        {data && data
          ? data?.map((el, index) => (
              <div className="tr1" key={index}>
                <p>{index + 1}</p>
                <p>{el?.name}</p>
                <p>{el?.sur}</p>
                <p>
                  <Button
                    type="primary"
                    className="edit"
                    onClick={() => edit(el?.id)}
                  >
                    <Edit />
                  </Button>
                  <Button
                    type="primary"
                    danger
                    className="delete"
                    onClick={() => deleteAdd(el?.id)}
                  >
                    <Delete />
                  </Button>
                </p>
              </div>
            ))
          : ""}
      </div>
    </Container>
  );
}
