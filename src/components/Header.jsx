import { Logo1_URL } from "../utils/constants";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { onAuthStateChanged } from "firebase/auth";
import { HEADERICON_URL } from "../utils/constants";
import { removeGeminiMovieResult, toggleGptSearchView } from "../utils/GPTSlice.js";
import { Supported_Langs } from "../utils/constants";
import { changeLanguage } from "../utils/configSlice.js";

const Header = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  const handleClick = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };

  const handleLangChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email } = user;
        dispatch(addUser({ uid: uid, email: email }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        if (window.location.pathname !== "/Login") {
          navigate("/");
        } else {
          navigate("/Login");
        }
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const handleGPTSearchclick = () => {
    dispatch(toggleGptSearchView());
    if(!showGptSearch){
      dispatch(removeGeminiMovieResult());
    }
  };

  return (
    <div className="absolute z-10 w-full flex items-center justify-between bg-gradient-to-b from-black to-transparent">
      <img
        src={Logo1_URL}
        alt="Netflix Logo"
        className="lg:w-44 md:w-32 w-24 mt-4"
      />
      {user && (
        <div className="flex items-center justify-around md:w-62 w-52 mr-1 mt-2 overflow-x-hidden ">
          {showGptSearch && (
            <select
              className="bg-black/80 text-white p-1 rounded-lg mr-0.5 cursor-pointer"
              onChange={handleLangChange}
            >
              {Supported_Langs.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          <img
            src={HEADERICON_URL}
            alt="usericon"
            className="md:w-12 md:h-12 w-8 h-8"
          />
          <div className="flex flex-col">
            <button
              className="bg-white rounded-full md:w-24 md:h-8 w-16 h-6 text-black font-semibold text-center shadow-md hover:bg-white/80 cursor-pointer md:text-base text-sm"
              onClick={handleClick}
            >
              Sign Out
            </button>
            <button
              onClick={handleGPTSearchclick}
              className="mt-1 bg-red-600 text-white font-semibold text-center rounded-full md:w-24 w-20 md:h-8 h-6 cursor-pointer hover:bg-red-600/80 md:text-base text-sm"
            >
              {showGptSearch ? "HomePage" : "GPT Search" }
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
