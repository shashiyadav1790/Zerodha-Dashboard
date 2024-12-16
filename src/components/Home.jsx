

import Dashboard from "./Dashboard";
import TopBar from "./Topbar";



function Home(){
  // const [user,setUser] = useState(null);
  // const Navigate = useNavigate();

  // useEffect(()=>{
  //   const checkAuth = async()=>{
  //     try{
  //       const res = await axios.get("https://localhost:3000/dashboard",{withCredentials: true});
  //       setUser(res.data.user);
  //     }catch(e){
  //       console.log("not Athunticated",e);
  //       Navigate("/login");
  //     }
  //   }
  //   checkAuth();
  //   if (!user) return <p>Loading...</p>;

  //   return <div>Welcome, {user.username}!</div>;
  // },[Navigate],

  return (
    <>
      <TopBar />
      <Dashboard />
    </>
  );
};

export default Home;