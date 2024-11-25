
import { Button, Stack, TextField } from '@mui/material'
import './App.css'
import { useState } from 'react'



function App() 
{

  const [amount,setAmount]=useState("")
  const [rate,setRate]=useState("")
  const [year,setYear]=useState("")
  const [isInvalidPrinciple,setInvalidPrinciple]=useState(false)
  const [isInvalidRate,setInvalidRate]=useState(false)
  const [isInvalidPeriod,setInvalidPeriod]=useState(false)
  const [ResultStore,setResultStore]=useState("0")



  console.log(amount);
  console.log(rate);
  console.log(year);




  

  const validateInput=(tag)=>{
    const {name,value}=tag
    // console.log(name,value);
    
    if(value==""){
      if(name=='principle'){
        setAmount("")
      }
      else if(name=='rate'){
        setRate("")
      }
      else{
        setYear("")
      }
    }
    
    else{
      if(!!value.match(/^[0-9]*.?[0-9]+$/)){
      
        if(name=="principle"){
          setAmount(value)
          setInvalidPrinciple(false)
  
        }
        else if(name=="rate"){
          setRate(value)
          setInvalidRate(false)
  
  
        }
        else{
          setYear(value)
          setInvalidPeriod(false)
  
  
        }
      }
      else{
        if(name=='principle'){
          setInvalidPrinciple(true)
          
      }
         else if(name=='rate'){
         setInvalidRate(true)
      }
         else{
         setInvalidPeriod(true)
      }
  
    }
  

    }
    
    
    
    
    
  }
  



  const handleCalculate=(e)=>{
    e.preventDefault()
    console.log("button clicked");


    if(amount && rate && year){

      setResultStore(amount*rate*year/100)



    }
    else{
      alert("enter the field completely")
    }

}

const handleReset=()=>{
  setAmount("")
  setRate("")
  setYear("")
  setInvalidPrinciple(false)
  setInvalidRate(false)
  setInvalidPeriod(false)
  setResultStore(0)
}
  

  return (
    <>
      <div className='container mt-5 rounded' style={{backgroundColor:"beige",height:"610px",width:"450px"}}>
      <h2 className='text-center fw-bold'>SIMPLE INTEREST CALCULATOR</h2>
      <p className='fw-bold'>Calculate your Simple Interest Easily</p>

      <div className='ms-2 rounded' style={{height:"170px",width:"400px",backgroundColor:"rgb(225, 180, 12)"}}>
          <h1 className='text-center text-light' style={{fontSize:"80px"}}>₹<span>{ResultStore}</span></h1>
          <p className='text-center text-light'>Total Column Interest</p>
          <form className='mt-5'>
          
          <TextField name='principle' value={amount} onChange={(e)=>validateInput(e.target)} className='w-100 mt-2' id="principle_amount" label="Amount" variant="outlined" />
            { isInvalidPrinciple &&
            <div className='text-danger fw-bold'>Invalid Principle Amount</div>
}
          
          
          <TextField name='rate' value={rate} onChange={(e)=>validateInput(e.target)} className='w-100 mt-2' id="interest" label="Rate" variant="outlined" />
          { isInvalidRate &&
            <div className='text-danger fw-bold'>Invalid Interest Rate</div>
}
          <TextField name='period' value={year} onChange={(e)=>validateInput(e.target)} className='w-100 mt-2' id="year" label="Year" variant="outlined" />
          { isInvalidPeriod &&
            <div className='text-danger fw-bold'>Invalid Year</div>
}
          <Stack direction="row" spacing={2}>

          <Button disabled={isInvalidPrinciple || isInvalidRate || isInvalidPeriod} type='submit' onClick={(e)=>handleCalculate(e)} className='w-100 bg-dark p-3 mt-2' variant="contained">Calculate

          </Button>
          <Button onClick={handleReset} className='w-100 p-3 mt-2' variant="outlined">Reset</Button>
            

         </Stack>
          </form>
          
          

      </div>
    </div>

    </>
  )
}

export default App

