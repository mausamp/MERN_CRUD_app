import { useState } from "react"

export default function ContentForm(props) {

    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [error,setError] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()

        const content = {title, body}

        const response = await fetch(import.meta.env.VITE_APP_URL, {
            method: 'POST',
            body: JSON.stringify(content),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const json = await response.json()

        if(!response.ok) {
            setError(json.error)
        }
        if(response.ok){
            setError(null)
            setTitle('')
            setBody('')
            props.cont()
        }
    }

  return (
    <form className="create" onSubmit={handleSubmit}>
        <h3>Add to list:</h3>

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

        <button>Add Note</button>

    </form>
  )
}
