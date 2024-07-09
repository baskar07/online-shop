import axios from 'axios';



const signup = async(userData) =>{
    const res = await axios.post('/api/signup', userData);
  return res.data;
}


const verify = async(data)=>{
    const res = await axios.post('/api/verify-otp', data);
  return res.data;
 }

// const resend = async(data) =>{
//   const res = await axios.post('/api/resend-otp',data);
//   if (res.data) {
//     localStorage.setItem("user", JSON.stringify(res.data));
//   }
//   console.log(res.data);
// }

const authService = {
    signup,
    verify,
    // resend
}

export default authService;