
'use client'

import { useRouter } from "next/router"
import { use } from "react"

export default function Generate() {

    const {isLoaded, isSignedIn, user} = usedUser()
    const [flashcards, setFlashCards] = useState([])
    const [flipped, setFlipped] = useState([])
    const [text, setText] = useState('')
    const [name, setName] = useState('')
    const [open, setOpen] = useState(false)
    const router = useRouter


    const handleSubmit = async () => {

        fetch('api/generate', {
            method: 'POST',
            body: text,
            
        })
        
            .then(res=>res.json())
            .then((data)> setFlashCards(data))
    }

}