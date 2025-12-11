function Home({ searchResult }) {
  return (
    <div>
        {
        searchResult.map((post) => 
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p className="postDate">{post.dateTime}</p>
          <p>{post.body}</p>
          <hr />
        </div>
      )
    }
    </div>  
  )
}

export default Home