import { Bounce, toast } from 'react-toastify';
import { createSlice } from '@reduxjs/toolkit';
import secureLocalStorage from 'react-secure-storage';



const coursesSlice = createSlice({
  name: 'course',
  initialState:{
    courses: secureLocalStorage.getItem('courses') || [],
    lesson:{},
    course:secureLocalStorage.getItem('course') || {}
  },
  reducers: {
    addCourses: (state, action) => {
      state.courses = action.payload;
      secureLocalStorage.setItem('courses', action.payload);    
    },
    addLesson: (state, action) => {
      state.lesson = action.payload;
    },
    addCourse: (state, action) => {
      state.course = action.payload;
      secureLocalStorage.setItem('course', action.payload);    
    },
   
  },
});

export const { addCourses,addLesson, addCourse } = coursesSlice.actions;
export default coursesSlice.reducer;
