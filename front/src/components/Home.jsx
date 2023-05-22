import { useEffect } from 'react'
import { useState } from 'react'
import Details from './Details'
import ContentForm from './ContentForm'
import { useDispatch, useSelector } from 'react-redux'
import { fetchData } from '../features/Contents'

export default function Home() {
    const [cont, setCont] = useState(0)

    const dispatch = useDispatch()
    const state = useSelector((state) => state)
    useEffect(() => {
        
        dispatch(fetchData())

        }, [cont])
    
    function handleState() {
        setCont(cont + 1)
    }

  return (
    <div className='home'>
        <div className='content'>
            {state.notes.data && state.notes.data.map(content => (
                <Details content={content} key={content._id} cont={handleState} />
            ))}
        </div>
        <div>
            <ContentForm cont={handleState} />
        </div>
    </div>
  )
}
