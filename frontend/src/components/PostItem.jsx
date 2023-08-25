import { useDispatch} from 'react-redux'
import { deletePost } from '../features/posts/postSlice'

function PostItem({ post }) {
  const dispatch = useDispatch()

  
  
  const formattedDate = new Date(post.publicationDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric"
  });
  return (
    <div className='post'>
      
      <h2>{post.title}</h2>
      <h2>{formattedDate}</h2>
      <h2 dangerouslySetInnerHTML={{ __html: post.text }} />
      
      
      <button onClick={() => dispatch(deletePost(post._id))} className='close'>
        X
      </button>
    </div>
  )
}

export default PostItem