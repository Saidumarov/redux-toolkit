import axios from "axios";

export const fetchTeachersRequest = () => {
  return {
    type: "FETCH_TEACHERS_REQUEST",
  };
};

export const fetchTeachersSuccess = (teachers) => {
  return {
    type: "FETCH_TEACHERS_SUCCESS",
    payload: teachers,
  };
};

export const fetchTeachersFailure = (error) => {
  return {
    type: "FETCH_TEACHERS_FAILURE",
    payload: error,
  };
};

export const fetchTeachers = () => {
  return (dispatch) => {
    dispatch(fetchTeachersRequest());
    axios
      .get("http://localhost:3000/data")
      .then((response) => {
        const teachers = response.data;
        dispatch(fetchTeachersSuccess(teachers));
      })
      .catch((error) => {
        dispatch(fetchTeachersFailure(error.message));
      });
  };
};
