import { useState } from "react"
import { useLocation } from "react-router"


export default function EditDetails() {
    const location = useLocation()

    const [title, setTitle] = useState(location.state.content.title)
    const [body, setBody] = useState(location.state.content.body)
    const [error,setError] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()

        const content = {title, body}

        const response = await fetch('http://localhost:4000/api/' + location.state.content._id, {
            method: 'PATCH',
            body: JSON.stringify(content),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const json = await response.json()

        if(!response.ok) {
            setError(json.error)
        }
        if(response.ok) {
            setError(null)
            setTitle('')
            setBody('')
        }
    }

  return (
    <form className="edit" onSubmit={handleSubmit}>
        <h3>Edit the note:</h3>

        <label>Title:</label>
        <input 
            type="text" 
            value={title} 
            onChange={(e) => setTitle(e.target.value)}
        />

        <label>Body:</label>
        <input 
            type="text"
            value={body}
            onChange={(e) => setBody(e.target.value)}
        />

        <button>Edit Note</button>

    </form>
  )
}
