import React from 'react';

class Mentor extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className='main'>
          <div className='search'><input type='search' placeholder='Search'/></div>
          <form id='form' encType='multipart/form-data' method="POST" action="https://glacial-citadel-47306.herokuapp.com/api/mentors">
          <label id='label'>Name</label>
          <input type='text' required name="Name" style={{marginLeft:'20%'}} /><br/><br/><br/>
          <label id='label'>Email Id</label>
          <input type='email' required name="EmailID" style={{marginLeft:'20%'}}/><br/><br/><br/>
          <label id='label'>Contact Number</label>
          <input type='number' required name='ContactNum' style={{marginLeft:'15%'}}/><br/><br/><br/>
          <label id='label'>What are services you can give to students</label>
          <select name="Services" style={{marginLeft:'9%'}}>
                    <option type='any' value='Counselling'>Conselling</option>
                    <option type='any' value='Coaching'>Technical Coaching</option>
                    <option type="any" value='Career'>Career Advice</option>
                </select><br/><br/><br/>
            <label id='label'>University Name</label>
          <input name='UniversityName' style={{marginLeft:'18%'}}/><br/><br/><br/>
          <label id='label'>Major</label>
          <select name="Major"style={{marginLeft:'23%'}}>
                    <option value='AI'>AI</option>
                    <option value='MICRO'>microelectronics</option>
                    <option value='IMAGING'>imaging</option>
                </select><br/><br/><br/>
          <label id='label'>Any Particular Specialization</label>
          <input name='Specialization' style={{marginLeft:'13%'}}/><br/><br/><br/>
          <label id='label'>Resume</label>
          <input type='text' name='ResumeUrl' style={{marginLeft:'21%'}} /><br/><br/><br/>
          <label id='label'>LinkedIn Proifle URL</label>
          <input name='LinkedinUrl' style={{marginLeft:'16%'}}/><br/><br/><br/>
          <label id='label'>Profile Picture</label>
          <input type='file' name='ProfilePic' style={{marginLeft:'19%'}} /><br/><br/><br/>
          <label id='label'>How many hours you can give</label>
          <input type='number' name='Hrs' required style={{marginLeft:'15%'}}/><br/><br/><br/>
          <label id='label'>Your Best Availability</label>
          <select  name="Availability"style={{marginLeft:'9%'}}>
                    <option value='Counselling'>Conselling</option>
                    <option value='Coaching'>Technical Coaching</option>
                    <option value='Career'>Career Advice</option>
                </select><br/><br/><br/>
          <label id='label'>Brief Description(about yourself)</label>
          <textarea name="Description"placeholder='Brief Description' style={{marginLeft:'11%',height:'4em',width:'20%'}} ></textarea><br/><br/>
          <button type='submit' style={{marginLeft:'50%',font:'2em'}} >Submit</button>
          </form>
         </div>
        )
    }
}
export default Mentor;