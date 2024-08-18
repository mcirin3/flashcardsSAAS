import Image from "next/image";
// import getStripe from '@/flashcards/utils/getStripe'
import {SignedIn, SignedOut, UserButton} from '@clerk/nextjs'
import {Container, Toolbar, Typography, Button, AppBar, Box, Grid} from '@mui/material'
import Head from 'next/head'

export default function Home() {
  return (
    <Container maxWidth = "flex">
      <Head>
        <title>"Flashcard SaaS</title>
        <meta name = "description" content = "Create flashcard from your text"/>
      </Head> 

       <AppBar position = "static">
        <Toolbar>
          <Typography variant = "h6" style = {{flexGrow: 1}}>Flashcard SaaS</Typography> 
          <SignedOut>
            <Button color = "inherit" href = "/sign-in">Login</Button>
            <Button color = "inherit" href = "/sign-up">Sign Up</Button>
          </SignedOut> 
          <SignedIn>
            <UserButton/>
          </SignedIn>
        </Toolbar>
      </AppBar> 

      <Box sx={{
        textAlign: 'center' 
      }}>
        <Typography variant="h2">Welcome to Flashcards SaaS</Typography>
        <Typography variant="h5">
          {' '}
          The easiest way to make flashcards from your text
          </Typography>
            <Button variant = 'contained' color= "primary" sx = {{mt: 2}}>Get Started
              
            </Button>
        </Box> 
        <Box sx = {{my: 6, textAlign: 'center'}}>
          <Typography variant="h5" components="h2">
            {' '}
            Features
          </Typography>
          <Grid container spacing = {4}>
            <Grid item xs = {12} md={4}>
              
              <Typography variant="h6">Easy Text input </Typography>
              <Typography>Simply input your text and let our software do the rest. Creating flashcards has never been easier.</Typography>
              </Grid>  
            <Grid item xs = {12} md={4}>
              
              <Typography variant="h6">Smart Flashcards </Typography>
              <Typography>
                {' '}
                Our AI intelligently breaks down your text into concise flashcards, perfect for studying.

                </Typography>
              </Grid>  
            <Grid item xs = {12} md={4}>
              
              <Typography variant="h6">Accessible Anywhere </Typography>
              <Typography>Access your flashcards at any time, anywhere on the go.</Typography>
              </Grid>  
          </Grid>
        </Box> 
        <Box sx = {{my: 6,  textAlign: 'center'}}>
          <Typography variant = "h4" gutterBottom>Pricing</Typography>
          <Grid container spacing = {4}>
            <Grid item xs = {12} md={6}>
             <Box
              sx = {{
                p: 3,
                border: '1px solid',
                borderColor: 'grey.300',
                borderRadius: 2,

              }} 
             
             
             
             >      
              <Typography variant="h6" gutterBottom>Basic </Typography>
              <Typography gutterBottom>$5 / month</Typography>
              <Typography gutterBottom>
                {' '}
                Access to basic flashcard features and limited storage.
              </Typography>
              <Button variant = "contained" color = "primary">Choose Basic</Button>
              </Box></Grid>
            <Grid item xs = {12} md={6}>
             <Box
              sx = {{
                p: 3,
                border: '1px solid',
                borderColor: 'grey.300',
                borderRadius: 2,

              }} 
             
             
             
             >      
              <Typography variant="h6" gutterBottom>Pro </Typography>
              <Typography gutterBottom>$10 / month</Typography>
              <Typography gutterBottom>
                {' '}
                Unlimited Flashcards and Storage, with priority support.
              </Typography>
              <Button variant = "contained" color = "primary">Choose Pro</Button>
              </Box></Grid>
           
            
          </Grid>

        </Box>

    </Container>
    
  )
}
