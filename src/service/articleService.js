import axios from "./api";

const ArticleService = {
  getArticles() {
    const response = axios.get("/articles");
    return response;
  },
};

export default ArticleService;
