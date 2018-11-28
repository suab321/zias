import React from 'react';
import './student.css';

class Student extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
           <div className='main'>
          <div className='search'><input type='search' placeholder='Search'/></div>
          <form id='form' method='POST' action="https://glacial-citadel-47306.herokuapp.com/api/students">
          <label id='label'>Name</label>
          <input type='text' required name="name" style={{marginLeft:'20%'}}/><br/><br/><br/>
          <label id='label'>Email Id</label>
          <input type='email' required name="emailID" style={{marginLeft:'20%'}}/><br/><br/><br/>
          <label id='label'>Contact Number</label>
          <select name="contactNo" style={{marginLeft:'15%'}}>
                    <option value='Mobile'>Cell</option>
                    <option value='LanLine'>Landline</option>
                    </select>
          <input type='number' required name='contactNo' style={{marginLeft:'0.9%'}}/><br/><br/><br/>
          <label id='label'>What Do You Want to Study</label>
          <select name="ApplyingFor"style={{marginLeft:'15%'}}>
                    <option value='Btech'>Btech</option>
                    <option value='Medical'>Medical</option>
                    <option value='Law'>Law</option>
                    <option value='Fashion'>Fashion</option>
                </select><br/><br/><br/>
          <label id='label'>Target App Session</label>
          <input name='TargetAppSession' style={{marginLeft:'13%'}}/><br/><br/><br/>
          <label id='label'>Area of Study</label>
          <input name='StudyField' style={{marginLeft:'13%'}}/><br/><br/><br/>
          <label id='label'>Any Particular Specialization</label>
          <input name='Specialization' style={{marginLeft:'13%'}}/><br/><br/><br/>
          <label id='label'>Where Do You  Study</label>
          <input type='checkbox' name='StudyCountry' value='USA' style={{marginLeft:'15%'}}/>USA<br/><br/>
          <input type='checkbox' name='StudyCountry' value='india' style={{marginLeft:'43%'}}/>INDIA<br/><br/><br/>
          <label id='label'>GRE Score(if already appeared)</label>
          <input type='text' name='GreScore' style={{marginLeft:'12%'}}/><br/><br/><br/>
          <label id='label'>TOEFL/IELTS score(if appeared)</label>
          <input type='text' name='ToeflIeltsScore' style={{marginLeft:'12%'}}/><br/><br/><br/>
          <label id='label'>Undergraduate Score(if applicable)</label>
          <input type='text' name='UgGPA' style={{marginLeft:'11%'}}/><br/><br/><br/>
          <label id='label'>UnderGraduate University Name</label>
          <input type='text' required name='UgUniversity' style={{marginLeft:'12%'}}/><br/><br/><br/>
          <label id='label'>Resume</label>
          <input type='text' name='ResumeUrl' style={{marginLeft:'21%'}} required/><br/><br/><br/>
          <label id='label'>Date of Appointment</label>
          <input type='date' name='appointemnt_date' required style={{marginLeft:'15%'}}/><br/><br/><br/>
          <label id='label'>Time of Appointment</label>
          <input type='time' name='appointemnt_time' required style={{marginLeft:'15%'}}/><br/><br/><br/>
          <label id='label'>How can we help You</label>
          <textarea required placeholder='Explain here' style={{marginLeft:'15%',height:'4em',width:'20%'}}></textarea><br/><br/>
          <button type='submit' style={{marginLeft:'50%',font:'2em'}}>Submit</button>
          </form>
         </div>
        )
    }
}
export default Student;