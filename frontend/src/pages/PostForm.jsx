import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createPost } from '../features/posts/postSlice'
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';
import Editor from '../components/Editor'

import 'react-quill/dist/quill.snow.css';
function PostForm() {
  const [text, setText] = useState('')
  const [title,setTitle] = useState('');
  const dispatch = useDispatch()

  const onSubmit = (e) => {
    e.preventDefault()

    dispatch(createPost({ text, title }))
    setText('')
    setTitle('')
  }

  return (
  
      
      <form onSubmit={onSubmit}>
        <div className='form-group'>
        <label htmlFor='title'>Title</label>
          <input
            type='text'
            name='title'
            id='title'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            key = 'title'
          />
        <Editor value={text}  onChange={setText}/>
          
          
        </div>
        <div className='form-group'>
          <button className='btn btn-block' type='submit'>
            Add Post
          </button>
        </div>
      </form>
   
  )
}

export default PostForm