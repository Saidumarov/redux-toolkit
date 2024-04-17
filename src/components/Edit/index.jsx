import { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { Container } from "@mui/material";
import { Button, Input } from "antd";
import { useForm } from "react-hook-form";
import { Users } from "../../provider";

const Edit = () => {
  const navegate = useNavigate();
  const { id } = useParams();
  const { setUserData } = useContext(Users);

  const { register, handleSubmit, setValue } = useForm();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/data/${id}`);
        const userData = response.data;
        setValue("name", userData.name);
        setValue("sur", userData.sur);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
    fetchData();
  }, [id, setValue]);

  const onSubmit = async (data) => {
    try {
      await axios.put(`http://localhost:3000/data/${id}`, data);
      toast.success(" User Edit successfully");
      navegate("/");
      setUserData(data);
    } catch (error) {
      console.error("Error editing teacher:", error);
    }
  };

  return (
    <>
      <Container>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="add">
            <div className="form">
              <input
                type="text"
                {...register("name", { required: true })}
                placeholder="Firstname"
              />
            </div>
            <div className="form">
              <input
                type="text"
                {...register("sur", { required: true })}
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
            >
              Update
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

export default Edit;
