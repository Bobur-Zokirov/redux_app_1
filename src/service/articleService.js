import axios from "./api";

const ArticleService = {
  async getArticles() {
    const response = await axios.get("/articles");
    return response.data;
  },

  async getArticleDetail(slug) {
    const { data } = await axios.get(`/articles/${slug}`);
    return data;
  },
};

export default ArticleService;
