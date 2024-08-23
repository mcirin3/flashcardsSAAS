'use client'

import {useUser} from '@clerk/nextjs'
import { useEffect, useState} from 'react'

import {collection, CollectionReference, doc, getDoc, setDoc } from 'firebase/firestore'
import {db} from '@/firebase'
import {useRouter} from 'next/navigation'
import {
    Container,
    TextField,
    Button, 
    Typography,
    Box,
    Card,
    CardActionArea,
    CardContent,
    Dialog,
    DialogTitle,
    DialogContentText,
    DialogContent,
    DialogActions,
    Grid,
} from '@mui/material'


export default function Flashcards(){
    const {isLoaded, isSignedIn, user} = useUser()
    const [flashcards, setFlashCards] = useState([])
    const router = useRouter()

    useEffect(() => {
        async function getFlashcards() {
            if(!user) return
            const docRef = doc(collection(db, 'users'), user.id)
            const docSnap = await getDoc(docRef)

            if(docSnap.exists()){
                const collections = docSnap.data().flashcards || []
                setFlashCards(collections)
            } else {
                await setDoc(docRef, {flashcards: []})
            }
        }
        getFlashcards()
    }, [user])


    if(!isLoaded || !isSignedIn){
        return <></>
    }

    const handleCardCClick = (id) => {
        router.push('/flashcards?id=${id}')
    }

    return(<Container maxWidth = "100vw">
        <Grid container spacing = {3} sx={{
            mt:4

        }}> 
            {flashcards.map((flashcard, index)=>(
                <Grid item xs={12} sm={6} md={4} key={index}>
                    <Card>
                        <CardActionArea onClick={() => {
                            handleCardCClick(id)
                        }}
                        >
                        <CardContent>
                            <Typography variant='h6'>
                                {flashcard.name}
                            </Typography>
                        </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
            ))}
        </Grid>    

    </Container>)
}