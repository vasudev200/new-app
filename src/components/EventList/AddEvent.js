import React,{useRef} from 'react'
import InputField from '../InputField/InputField'
function AddEvent() {

    

    const mEventRef = useRef(null)

    const sEventRef = useRef(null)
    const genderRef = useRef(null)
    const forERef = useRef(null)

    const dateRef = useRef(null)

    const btnClick = (e) => {
        e.preventDefault()
        console.log('Major Event : ' + mEventRef.current.value)
        console.log('Sub Event : ' + sEventRef.current.value)
        console.log('Gender : ' + genderRef.current.value)
        console.log('Event for : ' + forERef.current.value)

        console.log('dateFeild : '+ dateRef.current.value)
    }



    const eventTypeDict = {
        "data1": [1,"sports"],
        "data2": [2,"technical"],
        
    
    }

  return (
    <div className='Event-body'>

    <form className='Event-form'>

    <h3>Add Event</h3>


   
<InputField listType={true} etd={eventTypeDict}  />


{props.listType?(
	<select id={props.id}>
	{etd.map((data)=>(
		<option value={data[0]}>{data[1]}</option>
    ))}
	</select>
    ) : (
        <span></span>
)}



    <InputField id='majorEvent' cutWidth={80}  fRef={mEventRef}  type='text' label='Major Event' />

    <InputField id='subEvent' cutWidth={80}  fRef={sEventRef}    type='text' label='Sub Event' />

    <InputField id='gender' cutWidth={80} fRef={genderRef} type='text' label='Gender' />

    <InputField id='email' cutWidth={80}  fRef={forERef} type='text' label='Event For' />
    <InputField id='email' cutWidth={80}  fRef={dateRef} type='date' label='Date' />
    



       
        <button onClick={btnClick} className='Event-btn'>Submit Event</button>
    </form>

    </div>
  )
}

export default AddEvent



