'use client'

import { useUser } from "@clerk/nextjs"
import {useEffect, useState} from 'react'
import {collection, doc, getDoc, getDocs} from 'firebase/firestore'
import {db} from '@/firebase'

import { useSearchParams } from "next/navigation"

export default function Flashcard(){
    const {isLoaded, isSignedIn, user} = useUser()
    const [flashcards, setFlashCards] = useState([])
    const [flipped, setFlipped] = useState([])
    const [text, setText] = useState('')
    const [name, setName] = useState('')
    const [open, setOpenI] = useState(false)
 
    const [dialogOpen, setDialogOpen] = useState(false)

    const handleOpenDialog = () => setDialogOpen(true)
    const handleCloseDialog = () => setDialogOpen(false)
    const router = useRouter()

    const searchParams = useSearchParams()
    const search = searchParams.get('id')

    useEffect(() => {
        async function getFlashcard() {
            if(!search || !user) return
            const colRef = collection(doc(collection(db, 'users'), user.id), search)
            const docs = await getDocs(colRef)

            const flashcards = []

            docs.forEach((doc)=>{
                flashcards.push({id: doc, id, ...doc.data()})
            }) 
            setFlashCards(flashcards)

       
        }
        getFlashcard()
    }, [user, search])

    const handleCardCClick = (id) => {
        setFlipped((prev) => ({

        ...prev,
        [id]: !prev[id],
        }))
    }

    if(!isLoaded || !isSignedIn){
        return <></>
    }

    return(
        <Container maxWidth = "100vw">

            <Grid container spacing ={3} sx={{mt:4}}>
                
            </Grid>
        </Container>
    )

}