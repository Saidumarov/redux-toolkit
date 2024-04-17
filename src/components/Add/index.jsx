import { useContext } from "react";
import "./index.scss";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { Container } from "@mui/material";
import { Button } from "antd";
import { useForm } from "react-hook-form";

import { Users } from "../../provider";

const Add = () => {
  const navegate = useNavigate();
  const { setUserData } = useContext(Users);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    axios.post("http://localhost:3000/data", data).then((res) => {
      navegate("/");
      toast.success(" User Added successfully");
      setUserData(res.data);
    });
  };

  return (
    <>
      <Container>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="add">
            <div className="form">
              <input
                type="text"
                name="name"
                {...register("name", { required: true })}
                placeholder="Firstname"
              />
            </div>
            <div className="form">
              <input
                name="sur"
                type="text"
                {...register("sur")}
                placeholder="Surname"
              />
            </div>
          </div>
          <div className="btns">
            <Button
              style={{
                backgroundColor: "rgb(64, 67, 255)",
              }}
              type="primary"
              htmlType="submit"
              disabled={!errors}
            >
              Save
            </Button>
            <Button type="primary" danger onClick={() => navegate("/")}>
              Close
            </Button>
          </div>
        </form>
      </Container>
    </>
  );
};

export default Add;
