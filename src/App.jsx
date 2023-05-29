import { Routes, Route } from "react-router-dom";
import {
  ArticleDeatil,
  CreateArticle,
  EditArticle,
  Login,
  Main,
  Navbar,
  Register,
} from "./components";
import { useEffect } from "react";
import AuthService from "./service/authServise";
import { getItem } from "./helpers/persistence-storage";
import { useDispatch } from "react-redux";
import { signUserSuccess } from "./slice/authSlice";

export const App = () => {
  const dispatch = useDispatch();

  const getUserByToken = async () => {
    try {
      const response = await AuthService.getUser();
      dispatch(signUserSuccess(response.data.user));
    } catch (error) {
      console.log(error);
    }
  };

  const token = getItem("token");

  useEffect(() => {
    if (token) {
      getUserByToken();
    }
  }, [token]);

  return (
    <div className="container">
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/article/:slug" element={<ArticleDeatil />} />
        <Route path="/create-article" element={<CreateArticle />} />
        <Route path="/edit-article/:slug" element={<EditArticle />} />
      </Routes>
    </div>
  );
};
