import { useDispatch } from "react-redux"
import { NavLink } from "react-router-dom"

export default function Details(props) {
  const dispatch = useDispatch()
  const content = props.content
  const handleDelete = async () => {
    const response = await fetch(import.meta.env.VITE_APP_URL + props.content._id, {
      method: 'DELETE'
    })
    const json = await response.json()

    if(response.ok) {
      props.cont()
    } 
  }

  const handleEdit = () => {
    
  }

  return (
    <div className='details'>
      
      <h4>{content.title}</h4>
      <p>{content.body}</p>
    
      <span className="material-symbols-outlined top" onClick={handleDelete}>delete</span>
      <NavLink to={{pathname:'edit'}} state={{content: content}}>
        <span className="material-symbols-outlined bottom">edit</span>
      </NavLink> 
  
    </div>
  )
}
