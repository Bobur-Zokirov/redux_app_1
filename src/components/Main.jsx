import { useSelector } from "react-redux";
import { Loader } from "../ui";

const Main = () => {
  const { isLoading, articles } = useSelector((state) => state.article);

  return (
    <>
      <div>
        {isLoading ? (
          <Loader />
        ) : (
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {articles.map((article) => (
              <div key={article.id} className="col">
                <div className="card border-success shadow-sm h-100">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD_miU1dBy1HRTmQBmVD2MG-z2SjrCh0Z2eg&usqp=CAU"
                    alt="randomImage"
                  />
                  <div className="card-body">
                    <p className="card-text card-title fw-bold m-0">
                      {article.title}
                    </p>
                    <p className="card-text text-body-secondary">
                      {article.description}
                    </p>
                  </div>
                  <div className="d-flex justify-content-between align-items-center card-footer">
                    <div className="btn-group">
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-success"
                      >
                        View
                      </button>
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-secondary"
                      >
                        Edit
                      </button>
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-danger"
                      >
                        Delete
                      </button>
                    </div>
                    <small className="text-capitalize fw-bold">
                      {article.author.username}
                    </small>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Main;
