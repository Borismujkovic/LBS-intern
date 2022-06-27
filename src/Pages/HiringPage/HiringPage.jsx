import React, {useState} from 'react';
import Header from '../../Components/Header/Header'
import './HiringPage.scss'

const HiringPage = (props) => {
    const [body, setBody] = useState({
        fullName: '',
        technology: [],
        seniority: '',
        salary: 0,
        linkedIn: ''
    })


const submitDeveloper = () =>{
    fetch('https://62b47af3da3017eabb0b778e.mockapi.io/frontend', {
        method : 'POST',
        body : JSON.stringify(body),
        headers : {'content-type' : 'aplication/json'}
    })
}

    return <div id='hiring-page'>
        <Header togglePages={props.togglePages}/>
        <div className='put'>
        <label htmlFor="">
            Full Name:
            <input onChange={(event) => {
                setBody({...body, fullName: event.target.value})
            }} type="text" name="" id='fullname' placeholder='Your name'/>
        </label>
        <label htmlFor="">
            Technologies:
            <input onChange={(event) =>{
                setBody({...body, technology: event.target.value.split(',')})
            }} type="text" name="" id='technology' placeholder='Technologies'/>
        </label>
        <label htmlFor="">
            Seniority:
            <input onChange={(event) =>{
                setBody({...body, seniority: event.target.value})
            }} type="text" name="" id='seniority' placeholder='Seniority'/>
        </label>
        <label htmlFor="">
            Salary:
            <input onChange={(event) =>{
                setBody({...body, salary: event.target.value})
            }} type="number" name="" id='salary' placeholder='Salary'/>
        </label>
        <label htmlFor="">
           LinkedIn:
            <input onChange={(event) =>{
                setBody({...body, linkedIn: event.target.value})
            }} type="text" name="" id='linkedin' placeholder='Your LinkedIn Profile'/>
        </label>
            <button onClick={submitDeveloper}>Become Our Employee :)</button>
            </div>
        </div>
}
export default HiringPage