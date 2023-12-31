
import React,{useState} from 'react';
import { useDispatch } from 'react-redux';
import './table1.css';
import { submit } from '../features/user';

function Table1() {
  const dispatch = useDispatch();
  
  const [name, setName] = useState('');
  const [rollno, setRollno] = useState();
  const [age, setAge] = useState();
  const [dob, setDob] = useState();
  const [department, setDepartment] = useState('');
  const [gender, setGender] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(
      submit({
        name: name,
        rollno: rollno,
        age: age,
        dob: dob,
        department: department,
        gender: gender,
      })
    );
    setName('');
    setRollno('');
    setAge(null);
    setDob('');
    setDepartment('');
    setGender('male');
  };
  const calculateAge = (dob) => {
    const today = new Date();
    const birthDate = new Date(dob);
    const age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      return age - 1;
    }

    return age;
  };
  const handleDobChange = (e) => {
    const newDob = e.target.value;
    setDob(newDob);
    const newAge = calculateAge(newDob);
    setAge(newAge);
  };
  return (
    <div className="container">
      <h3>New Student</h3>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="name" className="textl">
          Name:
        </label>
        <input className="inp" value={name} onChange={(e) => setName(e.target.value)} />
        <br />
        <label htmlFor="rollno" className="textl">
          RollNo:
        </label>
        <input
          className="inp"
          id="rollno"
          value={rollno}
          onChange={(e) => setRollno(e.target.value)}
        />
        <br />
        <label htmlFor="dob" className="textl">
          Dob:
        </label>
        <input
          className="inp"
          type="date"
          id="dob"
          value={dob}
          onChange={(e) => handleDobChange(e)}
        />
        <br />
        <label htmlFor="age" className="textl">
          Age:
        </label>
        <input className="inp" value={age} id="age" onChange={(e) => setAge(e.target.value)} />
        <br />
        <label htmlFor="department" className="textl">
          Department:
        </label>
        <select
          className="inp"
          id="department"
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
        >
          <option>ECE</option>
          <option>CA</option>
          <option>MATHS</option>
        </select>
        <br />
        <label htmlFor="gender">Gender:</label>
        <input type="radio" className="gender" value="male" id="male" name="gender"  checked={gender === 'male'}  onChange={() => setGender('male')} />
        <label htmlFor="male">Male</label>
        <input type="radio" className="gender" value="female" id="female" name="gender"  checked={gender === 'female'} onChange={() => setGender('female')} />
        <label htmlFor="female">Female</label>
        <br />
        <div className="btn">
          <button className="submit" htmlFor="submit">
            Submit
          </button>

        </div>
      </form>
    </div>
  );
}

export default Table1;