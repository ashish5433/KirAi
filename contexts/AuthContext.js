import { createContext, useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { auth } from "@/firebase/firebase";
import { toast } from "react-toastify";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [userName, setUserName] = useState("");
  const [mobileUserName, setMobileUserName] = useState("");

  const [isUser, setisUser] = useState(true);
  const router = useRouter();

  function getFirstName(displayName) {
    if (!displayName) return '';
    return displayName.split(' ')[0];
  }
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((curruser) => {
      if (curruser) {
        setUser(curruser);
        setisUser(false);
        const namer=getFirstName(curruser.displayName);
        // console.log(namer);
        setUserName(curruser.displayName);
        setMobileUserName(namer);

        router.push("/");
      }
    });

    return () => unsubscribe();
  }, []);

  const sign_Out = async () => {
    try {
      await auth.signOut();
      setUser(null);
     
      setisUser(true);
      router.push("/login");
    } catch (error) {
      toast.error("Some Error Occurred ", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  };

  return (
    <AuthContext.Provider value={{ user, sign_Out, userName, isUser ,mobileUserName}}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
