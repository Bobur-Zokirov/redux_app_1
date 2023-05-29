import { useEffect, useState } from "react";
import ArticleForm from "./Article-Form";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  getArticleDetailFailure,
  getArticleDetailStart,
  getArticleDetailSuccess,
} from "../slice/articleSlice";
import ArticleService from "../service/articleService";

const EditArticle = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [body, setBody] = useState("");

  const { slug } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const getArticleDetail = async () => {
    dispatch(getArticleDetailStart());
    try {
      const data = await ArticleService.getArticleDetail(slug);
      setTitle(data.article.title);
      setDescription(data.article.description);
      setBody(data.article.body);
      dispatch(getArticleDetailSuccess(data.article));
    } catch (error) {
      dispatch(getArticleDetailFailure());
      console.log(error.response.data.massage);
    }
  };

  const formSubmit = async (e) => {
    e.preventDefault();
    const article = { title, description, body };
    try {
      await ArticleService.editArticle(slug, article);
      navigate("/");
    } catch (error) {
      console.log(error?.response?.data?.errors?.article[0]);
    }
  };

  useEffect(() => {
    getArticleDetail();
  }, []);

  const formProps = {
    actionName: "Edit",
    title,
    setTitle,
    description,
    setDescription,
    body,
    setBody,
    formSubmit,
  };

  return (
    <div className="text-center">
      <h1 className="fs-2 mb-4">Edit Article</h1>
      <div className="w-50 w-md-75 mx-auto">
        <ArticleForm {...formProps} />
      </div>
    </div>
  );
};

export default EditArticle;
