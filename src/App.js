
import React,{useState} from 'react'
import Accordian from './components/Accordian';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
// import {  
//   BrowserRouter ,  
//   Routes,  
//   Route
// }   
// from 'react-router-dom'; 



function App() {
  const [myStyle,setmyStyle] = useState('light')
  const[btnText,setbtnText] = useState('Dark mode')
  const changeBodyClass = ()=>{
    document.body.classList.remove('bg-primary')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-success')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-light')
  }

  const mode = (cls)=>{
    changeBodyClass(cls)
    document.body.classList.add('bg-'+cls)
    
    if(myStyle==='light'){
      setmyStyle('dark')
      setbtnText('Light Mode')
      document.body.style.background = '#262a2f'
    }else{
      setmyStyle('light')
      setbtnText('Dark Mode')
      document.body.style.background = 'white'
    }
  }
  return (
    <div className="App">
      <Navbar one='House' two='Links' mode={mode} theme={myStyle} btnText={btnText}/>
      <Textform theme={myStyle}/>
      <Accordian theme={myStyle}/>
    </div>
    // <BrowserRouter>
    // <div className="App">
    //   <Routes>
    //     <Route path='/' element={<Navbar one='House' two='Links' mode={mode} theme={myStyle} btnText={btnText}/>} />
    //     <Route path='/home' element={<Textform theme={myStyle}/>}/>
    //     <Route path='/about' element={<Accordian theme={myStyle}/>}/>
    //   </Routes>
    // </div>
    // </BrowserRouter>
    
  );
}

export default App;

{/* <Navbar one='House' two='Links' mode={mode} theme={myStyle} btnText={btnText}/>
      <Textform theme={myStyle}/>
      <Accordian theme={myStyle}/> */}