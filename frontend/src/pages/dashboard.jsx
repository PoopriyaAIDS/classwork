import { useState ,useEffect} from "react";
import { useLocation } from "react-router-dom";
import API from "../components/FormSchema/api";
function Dashboard() {
    const location = useLocation();
    const[userData, setUserdata] = useState("");
   // function displaydata(){
    //    setUserdata(location.state);
      //  console.log(userData)
    //}
    useEffect(() => {
        setUserdata(location.state);
        console.log(userData);
    },[])
    const checkendpoint = async () => {
      const response = await API.get("/api/get");
      console.log(response.data);
    }
    return (
        <>
          <div>{userData.username}</div>
          <div>{userData.password}</div>
          <button onClick = {checkendpoint}>Click</button>
        </>
    );
}
export default Dashboard;