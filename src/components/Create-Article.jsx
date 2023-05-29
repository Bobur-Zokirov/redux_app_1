import { useState } from "react";
import ArticleService from "../service/articleService";
import { useNavigate } from "react-router-dom";
import ArticleForm from "./Article-Form";

const CreateArticle = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [body, setBody] = useState("");

  const navigate = useNavigate();

  const formSubmit = async (e) => {
    e.preventDefault();
    const article = { title, description, body };
    try {
      const response = await ArticleService.postArticle(article);
      navigate("/");
    } catch (error) {
      console.log("error posting article");
    }
  };

  const formProps = {
    actionName: "Create",
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
      <h1 className="fs-2 mb-4">Create Article</h1>
      <div className="w-50 w-md-75 mx-auto">
        <ArticleForm {...formProps} />
      </div>
    </div>
  );
};

export default CreateArticle;
