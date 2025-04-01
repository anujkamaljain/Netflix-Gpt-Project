import { Logo1_URL } from "../utils/constants";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch  } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { onAuthStateChanged } from "firebase/auth";
import { HEADERICON_URL } from "../utils/constants";

const Header = () => {

  const dispatch = useDispatch();

  const navigate = useNavigate();
  const user = useSelector(store => store.user);

  const handleClick = () => {
    signOut(auth).then(() => {})
    .catch((error) => {
      console.log(error);
    });
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const {uid, email} = user;
        dispatch(addUser({uid:uid, email:email}));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        if (window.location.pathname !== "/Login") {
          navigate("/");
        }else{
          navigate("/Login");
        }
      }
    });

    return () => {unsubscribe();}
  }, []);


  return (
    <div className="absolute top-4 z-10 w-full flex items-center justify-between">
      <img
        src={Logo1_URL}
        alt="Netflix Logo"
        className="lg:w-44 md:w-32 sm:w-24 w-12"
      />
      {user && <div className="flex items-center justify-around w-1/9 p-2 ">
        <img
          src= {HEADERICON_URL}
          alt="usericon"
          className="w-12 h-12"
        />
        <button className="bg-white rounded-full w-20 h-8 text-black font-semibold text-center shadow-md hover:bg-white/80 cursor-pointer" onClick={handleClick}>
          Sign Out
        </button>
      </div>}
    </div>
  );
};

export default Header;
