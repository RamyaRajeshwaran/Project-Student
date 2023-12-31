import React,{useState} from 'react'
import { useSelector,useDispatch } from 'react-redux';
import './table2.css'
import { remove as removeAction,edit as editAction } from '../features/user';
import { selectUsers } from '../features/user';
import { addTable2RollNo } from '../features/user';
import { removeTable3RollNo } from '../features/user';

function Table2() {
  const dispatch = useDispatch();
  const users = useSelector(selectUsers);
  const [selectedRollNo,setSelectedRollNo] = useState('');
  const [data,setData]=useState([]);
  const [maths, setMaths] = useState('');
  const [physics, setPhysics] = useState('');
  const [chemistry, setChemistry] = useState('');
    const[formdata,setFormdata]=useState([ ]);
    const[editIndex, setEditIndex] = useState(null);
    const [showtable,setShowtable]=useState(false);
    const [uniqueRollNos, setUniqueRollNos] = useState([]);


    const handleAddrow =()=>{
      const selectedUser = users.find((user) => user.rollno === selectedRollNo);
      const mathsValue = parseInt(maths) || 0;
      const physicsValue = parseInt(physics) || 0;
      const chemistryValue = parseInt(chemistry) || 0;
      const total = mathsValue + physicsValue + chemistryValue;
      const cutoff = total / 3;
      const newRow={
      rollno: selectedRollNo,
      name: selectedUser?.name || '',
      department: selectedUser?.department || '',
      maths: mathsValue,
      physics: physicsValue,
      chemistry: chemistryValue,
      total,
      cutoff,
      };
      setData([...data, newRow]);  
      if (!uniqueRollNos.includes(selectedRollNo)) {
        setUniqueRollNos([...uniqueRollNos, selectedRollNo]);
        dispatch(addTable2RollNo(selectedRollNo));
      }
      setMaths('');
      setPhysics('');
      setChemistry(''); 
      }
      const handleShowtable =() =>{
          const rollnos=formdata.map((row)=>(row.rollno));
          setData(rollnos);
          setShowtable(true);
        };
    
    const handleSelectRollNo = (e) => {
      setSelectedRollNo(e.target.value);
    };
    const handleMathsChange = (e) => {
      setMaths(e.target.value);
    };
  
    const handlePhysicsChange = (e) => {
      setPhysics(e.target.value);
    };
  
    const handleChemistryChange = (e) => {
      setChemistry(e.target.value);
    };
  // const getDetails = () => {
  //     const selectedUser = users.find((user) => user.rollno === selectedRollNo);
  //     return selectedUser ? `${selectedUser.name}, ${selectedUser.department}` : '';
  //   };
    
     const handleSave=()=>{
            const deletedRollNo = selectedRollNo;
          const selectElement = document.getElementById('rollnoSelect');
          const optionToRemove = selectElement.querySelector(`option[value="${deletedRollNo}"]`);
          if (optionToRemove) {
            selectElement.removeChild(optionToRemove);
          }
          dispatch(saveTable3Data(data));
        };
        const handleDelete1 = () => {
          const deletedRollNo = selectedRollNo;
          const newOption = document.createElement('option');
          newOption.value = deletedRollNo;
          newOption.text = deletedRollNo;
          rollnoSelect.appendChild(newOption);
          dispatch(removeTable3RollNo(deletedRollNo));
       
        }
          const handleDelete = (rollno) => {
            dispatch(removeAction(rollno));
          };
          const handleEdit = (rollno) => {
            
            const updatedUser = 
            dispatch(editAction({ rollno, updatedUser }));
          };
             
  return (
    <div className='container'>
        <table className='table2'>
        <thead>
          <tr>
          <th>Name</th>
          <th>Rollno</th>
          <th>Dob</th>
          <th>Age</th>
          <th>Department</th>
          <th>Gender</th>
          <th>Action</th>
          </tr>
        </thead>
        <tbody>
        {users &&
            users.map((user, index) => (
              <tr key={index}>
            <td>{user.name}</td>
            <td>{user.rollno}</td>
            <td>{user.dob}</td>
            <td>{user.age}</td>
            <td>{user.department}</td>
            <td>{user.gender}</td>
            
            <td><button onClick={() => handleEdit(user.rollno)} className='edit'>
                  Edit
                </button>
                <button onClick={() => handleDelete(user.rollno)} className='delete'>
                  Delete
                </button>
            </td>
        </tr>
        ))}
              
</tbody>
        
        <button onClick={() => { handleAddrow(); handleShowtable(); }} className='add'>ADD</button>
        
        </table>
        {showtable&&(
           <table className='table3'>
      <thead className='new class'>
                <tr>
                <th>Rollno</th>
                <th>Name</th>
                <th>Department</th>
                <th>Maths</th>
                <th>Physics</th>
                <th>Chemistry</th>
                <th>Total</th>
                <th>Cutoff</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
            {data.map((row, index) => (
               <tr key={index}>
              <td>{row.rollno}</td>
              <td>{row.name}</td>
              <td>{row.department}</td>
              <td>{row.maths}</td>
              <td>{row.physics}</td>
              <td>{row.chemistry}</td>
              <td>{row.total}</td>
              <td>{row.cutoff}</td>
              <td><button onClick={handleSave} className='save'>Save</button>
                  <button onClick={handleDelete1} className='delete'>Delete</button></td>
              </tr>
                  ))}
                   </tbody>
                <select id="rollnoSelect" onChange={handleSelectRollNo}  value={selectedRollNo}>
                   <option value="">Select Roll No</option>
                {users.map((user) => (
                  <option key={user.rollno} value={user.rollno}>
                    {user.rollno}
              </option>
        ))}
      </select>
    <input type="text" value={maths} onChange={handleMathsChange} placeholder="Maths" />
    <input type="text" value={physics} onChange={handlePhysicsChange} placeholder="Physics" />
    <input type="text" value={chemistry} onChange={handleChemistryChange} placeholder="Chemistry" />
    <button onClick={handleAddrow} className='add'>ADD</button>
    </table>
        )}
    </div>
  )
}

export default Table2