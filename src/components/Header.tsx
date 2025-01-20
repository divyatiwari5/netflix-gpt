"use client";

import Image from "next/image";
import { signOut } from "firebase/auth";
import { auth } from "@/firebase";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { useRouter } from "next/navigation";
import { toggleGPTSearchView } from "@/store/gptSlice";

const Header = () => {
  const user = useSelector((state: RootState) => state.user.user);
  const router = useRouter();
  const dispatch = useDispatch();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        router.push("/");
      })
      .catch((error) => {
        console.error("Error signing out:", error);
      });
  };

  const handleGPTSearch = () => {
    dispatch(toggleGPTSearchView());
  };

  return (
    <div className="absolute py-3 px-3 bg-gradient-to-b from-black w-full flex justify-between items-center z-20">
      <Image src="/logo.png" alt="logo" width={180} height={180} />
      {user && (
        <div className="flex items-center gap-4">
          <div className="text-white">Hi {user.displayName}</div>
          <button
            onClick={handleGPTSearch}
            className="px-4 py-2 text-white bg-red-600 rounded hover:bg-red-700"
          >
            GPT Search
          </button>
          <button
            onClick={handleSignOut}
            className="px-4 py-2 text-white bg-red-600 rounded hover:bg-red-700"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
