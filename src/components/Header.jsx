import { Logo1_URL } from "../utils/constants";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {

  const navigate = useNavigate();
  const user = useSelector(store => store.user);

  const handleClick = () => {
    signOut(auth).then(() => {
     navigate("/");
    }).catch((error) => {
      console.log(error);
    });
  }

  return (
    <div className="absolute top-4 z-10 w-full flex items-center justify-between">
      <img
        src={Logo1_URL}
        alt="Netflix Logo"
        className="lg:w-44 md:w-32 sm:w-24 w-12"
      />
      {user && <div className="flex items-center justify-around w-1/9 p-2 ">
        <img
          src="https://occ-0-6247-2186.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFATxMhtdzlNZ846H3D8TZzooe2-FT853YVYs8p001KVFYopWi4D4NXM.png?r=229"
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
