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

    const frontend = 'frontend'
    const backend = 'backend'

    const submitDeveloper = () =>{
        fetch(`https://62b47af3da3017eabb0b778e.mockapi.io/frontend`, {
            method : 'POST',
            body : JSON.stringify(body),
            headers : {'content-type' : 'application/json'}
        })
        .then(res => res.json())
        .then(res => props.activateFetch())
    }

    return <div id='hiring-page'>
        <Header/>
        <div className='put'>
            <h1>Join Us!</h1>
            <div className='formica'>
                <div className='div-position'>

                <label>
                    Position:
                </label>
                <select name="position" >
                    <option value={frontend}>frontend</option>
                    <option value={backend}>backend</option>
                </select>
                </div>
        <label>
            Full Name:
            <input onChange={(event) => {
                setBody({...body, fullName: event.target.value})
            }} type="text" name="" id='fullname' placeholder='Your name'/>
        </label>
        <label>
            Technologies:
            <input onChange={(event) =>{
                setBody({...body, technology: event.target.value.split(',')})
            }} type="text" name="" id='technology' placeholder='Technologies'/>
        </label>
        <label>
            Seniority:
            <input onChange={(event) =>{
                setBody({...body, seniority: event.target.value})
            }} type="text" name="" id='seniority' placeholder='Seniority'/>
        </label>
        <label>
            Salary:
            <input onChange={(event) =>{
                setBody({...body, salary: event.target.value})
            }} type="number" name="" id='salary' placeholder='Salary'/>
        </label>
        <label>
           LinkedIn:
            <input onChange={(event) =>{
                setBody({...body, linkedIn: event.target.value})
            }} type="text" name="" id='linkedin' placeholder='Your LinkedIn Profile'/>
        </label>
        <label>
           Image URL:
            <input onChange={(event) =>{
                setBody({...body, image: event.target.image})
            }} type="text" name="" id='linkedin' placeholder='Picture url'/>
        </label>
        </div>
            <button onClick={submitDeveloper}>Become Our Employee :)</button>
            </div>
        </div>
}
export default HiringPage