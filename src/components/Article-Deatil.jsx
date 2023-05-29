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
  const { slug } = useParams();
  const dispatch = useDispatch();

  const getArticleDetail = async () => {
    dispatch(getArticleDetailStart());
    try {
      const data = await ArticleService.getArticleDetail(slug);
      dispatch(getArticleDetailSuccess(data.article));
    } catch (error) {
      dispatch(getArticleDetailFailure());
      console.log(error.response.data.massage);
    }
  };
  useEffect(() => {
    getArticleDetail();
  }, [slug]);
  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <div>
            <h5>Author: {articleDetail?.author?.username}</h5>
            {articleDetail?.title}
          </div>
          <div>
            <h5>Description:</h5> {articleDetail?.description}
          </div>
          <div>
            <h5>Body:</h5> {articleDetail?.body}
          </div>
        </div>
      )}
    </div>
  );
};

export default ArticleDeatil;
