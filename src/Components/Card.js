import React  from "react";
import {
    Card,
    CardContent,
    CardMedia,
  } from "@mui/material";
  import Typography from '@mui/material/Typography';


  const CardData = ({product}) => {

    const {title , images } = product;
    
    
    
        return (
         <>
           <Card >
               
                <CardMedia
                component="img"
                height="200"
                image={images[0]}
                alt={title} />
    
                <CardContent style={{backgroundColor: "white" , color: "black" , height : "15vh"}} >
                <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>

                 
                </CardContent>
                
            </Card>
            </>
    
        )
    }
    
    export default CardData;