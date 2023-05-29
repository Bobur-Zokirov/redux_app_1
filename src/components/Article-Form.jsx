import { Input, TextArea } from "../ui";

const ArticleForm = (props) => {
  const {
    title,
    setTitle,
    description,
    setDescription,
    body,
    setBody,
    postArticle,
  } = props;
  return (
    <form onSubmit={postArticle}>
      <Input
        type="text"
        label="Title"
        name="title"
        id="titleInput"
        state={title}
        setState={setTitle}
      />
      <TextArea
        height="100px"
        type="text"
        label="Description"
        name="description"
        id="descriptionInput"
        state={description}
        setState={setDescription}
      />
      <TextArea
        height="250px"
        label="Body"
        id="bodyInput"
        name="body"
        state={body}
        setState={setBody}
      />
      <button className="w-100 btn btn-lg btn-primary" type="submit">
        Create
      </button>
    </form>
  );
};

export default ArticleForm;
