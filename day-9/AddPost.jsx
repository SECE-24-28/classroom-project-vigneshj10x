function AddPost({ handleSubmit, title, setTitle, body, setBody }) {
  return (
    <main>
      <hr />
      <form onSubmit={handleSubmit}>
        <label htmlFor="postTitle">Title:</label>
        <input
          id="postTitle"
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label htmlFor="postBody">Post:</label>
        <textarea
          id="postBody"
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </main>
  )
}

export default AddPost