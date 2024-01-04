import React, { useRef } from 'react'
import InputField from '../InputField/InputField'



function AddEvent() {
    const EventTypeRef = useRef(null)
    const mEventRef = useRef(null)
    const sEventRef = useRef(null)

   
    const dateRef = useRef(null)

    const btnClick = (e) => {
        e.preventDefault()
        console.log('Event Type : ' + EventTypeRef.current.value)
        console.log('Major Event : ' + mEventRef.current.value)
        console.log('Sub Event : ' + sEventRef.current.value)
        console.log('dateFeild : ' + dateRef.current.value)
    }

    const eventTypeDict = [
        { id: 1, name: "sports" },
        { id: 2, name: "technical" },
        { id: 3, name: "demo1" },
        { id: 4, name: "demo2" },
        { id: 5, name: "demo3" },
    ]


    const MajorEventDict = [
        { id: 1, name: "sports" },
        { id: 2, name: "technical" },
        { id: 3, name: "demo1" },
        { id: 4, name: "demo2" },
        { id: 5, name: "demo3" },
    ]


    const SubEventDict = [
        { id: 1, name: "sports" },
        { id: 2, name: "technical" },
        { id: 3, name: "demo1" },
        { id: 4, name: "demo2" },
        { id: 5, name: "demo3" },
    ]


    return (
        <div className='Event-body'>
            <div className="Event-form">
            <form >
                <h3>Add Event</h3>

                <select className='form-control' id='majorEvent' ref={mEventRef} >
                    <option disabled value={''} selected>Major Event</option>
                    {MajorEventDict.map((data) => (
                        <option key={data.id} value={data.name}>{data.name}</option>
                    ))}
                </select>
                
                
                <select className='form-control' id='eventType' ref={EventTypeRef} >
                    <option disabled value={''} selected> Select Event Type</option>
                    {eventTypeDict.map((data) => (
                        <option key={data.id} value={data.name}>{data.name}</option>
                    ))}
                </select>


                <InputField id='majorEvent' cutWidth={80} fRef={mEventRef} type='text' label='Major Event' />
                <InputField id='subEvent' cutWidth={80} fRef={sEventRef} type='text' label='Sub Event' />
              
                <InputField id='email' cutWidth={80} fRef={dateRef} type='date' label='Date' />

                <button onClick={btnClick} className='Event-btn'>Submit Event</button>
            </form>
            </div>

        </div>
    )
}

export default AddEvent



