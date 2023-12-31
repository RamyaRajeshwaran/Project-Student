// import React ,{useState}from 'react'

// function Table3() {
//     const [selectedRollNo,setSelectedRollNo] = useState('');
//     const [showtable,setShowtable]=useState(false);

//     const handleAddrow = () => {
//         const rollno = document.getElementById("rollnoSelect").value;
//           const maths = document.getElementById("mathsInput").value;
//           const physics = document.getElementById("physicsInput").value;
//           const chemistry = document.getElementById("chemistryInput").value;
//            const student=formdata.find((student) => student.rollno === selectedRollNo);
//         const total = parseInt(maths) + parseInt(physics) + parseInt(chemistry);
//       const cutoff = total / 3;
      
//       const newRow={
//         rollno,
//         name: student?.name,
//             department: student?.department,
//             maths,
//             physics,
//             chemistry,
//             total,
//             cutoff,
//           };
//           data.push(newRow);
         
//         }
//         const remove=( value)=>{
//             const deletedRollNo = selectedRollNo;
//           const selectElement = document.getElementById('rollnoSelect');
//           const optionToRemove = selectElement.querySelector(`option[value="${deletedRollNo}"]`);
//           if (optionToRemove) {
//             selectElement.removeChild(optionToRemove);
//           }
//         };
//         const handleDelete1 = () => {
//           const deletedRollNo = selectedRollNo;
//           const newOption = document.createElement('option');
//           newOption.value = deletedRollNo;
//           newOption.text = deletedRollNo;
//           rollnoSelect.appendChild(newOption);
//         };
//   return (
//     <div className='Container'>
    
//       {showtable&&(
//            <table className='table3'>
//       <thead className='new class'>
//                 <tr>
//                 <th>Rollno</th>
//                 <th>Name</th>
//                 <th>Department</th>
//                 <th>Maths</th>
//                 <th>Physics</th>
//                 <th>Chemistry</th>
//                 <th>Total</th>
//                 <th>Cutoff</th>
//                 <th>Action</th>
//               </tr>
//             </thead>
//             <tbody>
//               {data.map((row,index)=>(
//                 <tr key={index}>
//               <td>{row.rollno}</td>
//               <td>{row.name}</td>
//               <td>{row.department}</td>
//               <td>{row.maths}</td>
//               <td>{row.physics}</td>
//               <td>{row.chemistry}</td>
//               <td>{row.total}</td>
//               <td>{row.cutoff}</td>
//               <td><button onClick={remove}>Save</button>
//                   <button onClick={handleDelete1}>Delete</button></td>
//               </tr>
//                   ))}
//                    </tbody>
//            <select id="rollnoSelect" onChange={(e)=>setSelectedRollNo(e.target.value)}>{formdata.map((student)=>(<option value={student.rollno}>{student.rollno}</option>))}</select>
//             <input type="text" id="mathsInput"/>
//             <input type="text" id="physicsInput"/>
//             <input type="text" id="chemistryInput"/>
//             <button onClick={handleAddrow}>ADD</button>
//           </table>
//         )}
//     </div>
//   )
// }



// export default Table3
