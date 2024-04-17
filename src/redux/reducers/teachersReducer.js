// Boshlang'ich holat (initialState)
const initialState = {
  teachers: [],
  loading: false,
  error: null,
};

// Reducer funksiya
const teachersReducer = (state = initialState, action) => {
  switch (action.type) {
    // Action lar uchun ma'lumotlarni o'zgartirish
    case "FETCH_TEACHERS_REQUEST":
      return {
        ...state,
        loading: true,
        error: null,
      };
    case "FETCH_TEACHERS_SUCCESS":
      return {
        ...state,
        loading: false,
        teachers: action.payload,
      };
    case "FETCH_TEACHERS_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default teachersReducer;
