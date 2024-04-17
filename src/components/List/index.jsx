import { Container } from "@mui/material";
import { Button } from "antd";
import axios from "axios";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Edit, { Delete } from "../../constants";
import { toast } from "react-toastify";
import "./index.scss";
import LoadingProduct from "../../loading";
import { useSelector, useDispatch } from "react-redux";

import { fetchTeachers } from "../../redux/actions/teachersActions";
import { Users } from "../../provider";

export default function List() {
  const navegate = useNavigate();
  const { teachers, loading, error } = useSelector((state) => state.teachers);
  const dispatch = useDispatch();
  const { userData } = useContext(Users);

  //   the teacher
  const deleteAdd = (id) => {
    if (window.confirm("Delete Teacher ?")) {
      axios
        .delete(`http://localhost:3000/data/${id}`)
        .then((res) => {
          toast.success("Delete successfully ");
          dispatch(fetchTeachers());
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  //  Edit the teacher
  const edit = (id) => {
    navegate(`/edit/${id}`);
  };

  // fetch data
  useEffect(() => {
    dispatch(fetchTeachers());
  }, [dispatch, userData]);

  return (
    <Container>
      {loading ? <LoadingProduct /> : null}
      <div className="container">
        <div className="filter">
          <Button
            id="addT1"
            className="addT"
            type="primary"
            onClick={() => navegate("/add")}
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
        {teachers && teachers
          ? teachers?.map((el, index) => (
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
