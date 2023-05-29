import { Input, TextArea } from "../ui";

const ArticleForm = (props) => {
  const {
    actionName,
    title,
    setTitle,
    description,
    setDescription,
    body,
    setBody,
    formSubmit,
  } = props;
  return (
    <form onSubmit={formSubmit}>
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
        {actionName}
      </button>
    </form>
  );
};

export default ArticleForm;
