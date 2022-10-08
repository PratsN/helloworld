import {useState , useEffect }from "react";
import axios from "axios";
import CardData from "./Components/Card";
import { Grid} from "@mui/material";
import { Box } from "@mui/system";


function App() {
 

const[data , setdata] = useState([]) //storing product data
const[page , setPage] = useState(0)


const fetchData = async () => {
  let response = await axios.get(`https://dummyjson.com/products?skip=${page}&limit=10`)
  setdata([...data , ...response.data.products])

}


useEffect(() => { 
  fetchData()
  window.addEventListener("scroll", handleScroll);
    } ,[page])

    const scrollToEnd = () => {
      setPage(page +5 )
    }

  
  const handleScroll = () => {
  let userScrollHeight = window.innerHeight + window.scrollY;
  let windowBottomHeight = document.documentElement.offsetHeight;

  if (userScrollHeight >= windowBottomHeight) {
    scrollToEnd()
  }
};
    
    
console.log(data)


  return (
    

    <div >
           
      
      <Box
                sx={{
                  width: { xs: '90%', md: '90%' },
                  margin: "auto",
                  padding: "2"
                }}
              >
                <Grid container spacing={2}>

          {data.map((item , index) => {
            return (
              <Grid item key={index} xs={12} sm={6} md={3}>
                <CardData product={item}></CardData>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    
    

    </div>
  )
}

export default App;
