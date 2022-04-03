import React,{useState} from 'react'
import './work-card.css'
function WorkCard({item}) {
  const [text,setText] = useState(false)
  const click = () =>{
    setText(!text)
    console.log("MF")
  }
  return (
    <div className='work-card'>
        <img src={item.Logo} className="work-logo" />
        <div className='work-info'>
        <label className='compney-name'><b>{item.company}</b></label>
        <p>{item.designation}</p>
        <div className='work-dates'>
            <label>{item.joiningDate}</label>-<label>{item.endDate}</label>
        </div>
        <div className='work-desc'>
        { text ? <><p>{item.work}</p>
        <span onClick={click}>Read Less</span></> : <><p>{item.sw}</p>
        <span onClick={click}>Read More</span></>}
        </div>
        </div>
    </div>  
  )
}

export default WorkCard