import React,{useState} from 'react'

export default function Textform(props) {
    const[mytext,setmytext] = useState('Write your text here')
    const toUp = ()=>{
        let newText = mytext.toUpperCase()
        setmytext(newText)
    }
    const toLo = ()=>{
        let newText = mytext.toLowerCase()
        setmytext(newText)
    }
    const toClear = ()=>{
        let newText = ''
        setmytext(newText)
    }
    const toChange = (e)=>{
        let newText = e.target.value
        setmytext(newText)
    }
  return (
    <div>
        <div className={`container mb-3 mt-5 text-${props.theme==='dark'?'light':'dark'}`}>
            <label htmlFor="exampleFormControlTextarea1" className={`form-label text-${props.theme==='dark'?'light':'dark'}`}><h2>Text Editor</h2></label>
            <textarea className={` form-control bg-${props.theme ==='dark'?'grey':'light'}`} id="exampleFormControlTextarea1" value={mytext} onChange={toChange} rows="5"></textarea>
            <button className="btn btn-primary my-2" onClick={toUp}>Change to UPPERCASE</button>
            <button className="btn btn-primary mx-2" onClick={toLo}>Change to lowercase</button>
            <button className="btn btn-primary " onClick={toClear}>Clear Text</button>
            <h2 className="heading my-3">Text preview</h2>
            <p className="summary">Total words = {mytext.split(' ').filter((element=>{
                return element.length !== 0
            })).length} and total characters = {mytext.length}</p>
        </div>
    </div>
  )
}
