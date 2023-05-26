import { useParams } from "react-router-dom";
import ArticleService from "../service/articleService";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getArticleDetailFailure,
  getArticleDetailStart,
  getArticleDetailSuccess,
} from "../slice/articleSlice";
import { Loader } from "../ui";

const ArticleDeatil = () => {
  const { articleDetail, isLoading } = useSelector((state) => state.article);
  const { id } = useParams();
  const dispatch = useDispatch();

  const getArticleDetail = async () => {
    dispatch(getArticleDetailStart());
    try {
      const data = await ArticleService.getArticleDetail(id);
      dispatch(getArticleDetailSuccess(data.article));
    } catch (error) {
      dispatch(getArticleDetailFailure());
      console.log(error.response.data.massage);
    }
  };
  useEffect(() => {
    getArticleDetail();
  }, [id]);
  return (
    <div>{isLoading ? <Loader /> : <div>{articleDetail?.title}</div>}</div>
  );
};

export default ArticleDeatil;
