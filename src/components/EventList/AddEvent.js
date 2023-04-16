import React, { useRef } from 'react'
import InputField from '../InputField/InputField'



function AddEvent() {
    const mEventRef = useRef(null)
    const EventTypeRef = useRef(null)
    const sEventRef = useRef(null)
    const genderRef = useRef(null)
    const forERef = useRef(null)
    const dateRef = useRef(null)

    const btnClick = (e) => {
        e.preventDefault()
        console.log('Event Type : ' + mEventRef.current.value)
        console.log('Major Event : ' + EventTypeRef.current.value)
        console.log('Sub Event : ' + sEventRef.current.value)
        console.log('Gender : ' + genderRef.current.value)
        console.log('Event for : ' + forERef.current.value)
        console.log('dateFeild : ' + dateRef.current.value)
    }

    const eventTypeDict = [
        { id: 1, name: "sports" },
        { id: 2, name: "technical" },
        { id: 3, name: "demo1" },
        { id: 4, name: "demo2" },
        { id: 5, name: "demo3" },
    ]

    return (
        <div className='Event-body'>
            <form className='Event-form'>
                <h3>Add Event</h3>

                <label htmlFor=""> Select Event Type</label>
                <select className='form-control' id='eventType' ref={EventTypeRef} >
                    {eventTypeDict.map((data) => (
                        <option key={data.id} value={data.name}>{data.name}</option>
                    ))}
                </select>

                <InputField id='majorEvent' cutWidth={80} fRef={mEventRef} type='text' label='Major Event' />

                <InputField id='subEvent' cutWidth={80} fRef={sEventRef} type='text' label='Sub Event' />

                <InputField id='gender' cutWidth={80} fRef={genderRef} type='text' label='Gender' />

                <InputField id='email' cutWidth={80} fRef={forERef} type='text' label='Event For' />
                <InputField id='email' cutWidth={80} fRef={dateRef} type='date' label='Date' />

                <button onClick={btnClick} className='Event-btn'>Submit Event</button>
            </form>

        </div>
    )
}

export default AddEvent



