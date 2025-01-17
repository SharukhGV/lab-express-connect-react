import { useParams, useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const API = process.env.REACT_APP_API_URL;

function NewForm() {
  let {index} = useParams();
  // console.log(index)
// const [checked, setChecked] = useState(false)
  //logs is the previous data populated into the form

// useEffect(()=>{

    
// })


// const [log, setlog] = useState([])


  const [log, setlog] = useState(
     {
        captainName: "",
        title: "",
        post: "",
        mistakesWereMadeToday: false,
        daysSinceLastCrisis: 0
});

  const navigate = useNavigate();

  //uses setEdit value of edit to 

//   useEffect(() => {
//   axios.get(`${API}/logs/${index}`)
//     .then((response) => {
//         console.log(response.data)
//         // setChecked(response.data.mistakesWereMadeToday)
//       setlog(response.data);
//     })
//     .catch((e) => console.error(e));

//   }, [index]);

  // const [edit, newEdit]= useState([])

  // useEffect(()=>{
  //   newEdit(log)
  // },[log])

  const handleTextChange = (event) => {
    setlog({ ...log, [event.target.id]: event.target.value });
  };

  const handleChange = () => { 
    // console.log(checked)
    setlog({ ...log, mistakesWereMadeToday: !log.mistakesWereMadeToday });
    // setChecked(!checked) 
    
  }; 

//   const updatelog = () => {
//     axios
//       .post(`${API}/logs/${index}`, log)
//       .then((response) => {
//         // setlog(response.data); NO NEED TO DO ANYTHING WITH THE DATE IN AN EDIT FORM, JUST HAVE TO NAVIGATE BACK TO TO WHAT YOU WERE EDITING
//         navigate(`/logs/${index}`);
//       })
//       .catch((e) => console.error("catch", e));
//   };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post(`${API}/logs`, log)
      .then(() => {
        navigate("/logs");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="edit">
      <form onSubmit={handleSubmit}>
        <label htmlFor="captainName">Captain's Name</label>
        <input
          id="captainName"
        //   value={log.captainName}
          type="text"
          onChange={handleTextChange}
          placeholder="Captain's Name"
          required
        />
        <label htmlFor="title">Title</label>
        <input
          id="title"
          type="text"
          // pattern="http[s]*://.+"
          required
        //   value={log.title}
          placeholder="Title"
          onChange={handleTextChange}
        />
        <label htmlFor="post">Post</label>
        <textarea
          id="post"
          // type="textarea"
          name="post"
        //   value={log.post}
          placeholder="Post"
          onChange={handleTextChange}
        />
        <label htmlFor="mistakesWereMadeToday">Mistakes were made today</label>
        <input
          id="mistakesWereMadeToday"
          type="checkbox"
          name="mistakesWereMadeToday"
          onChange={handleChange} //should handle separate checkbox...
          checked={log.mistakesWereMadeToday}
        />
        <label htmlFor="daysSinceLastCrisis">Days Since Last Crisis</label>
        <input
          id="daysSinceLastCrisis"
          name="daysSinceLastCrisis"
          type="number"
          value={log.daysSinceLastCrisis}
          onChange={handleTextChange}
        />
        <br />
        <input type="submit" />
      </form>
      <Link to={`/logs/${(index)}`}>
        <button>Nevermind!</button>
      </Link>
    </div>
  );
}

export default NewForm;

// return(
// <div>

// <form onSubmit={handleSubmit}>

// {/* DATE */}
// <label htmlFor="date">Date:</label><br></br>

// <input type="date" id="date" name="date" value={log.date} onChange={handleTextChange}></input><br></br>

// <label htmlFor="transName">Name of log:</label><br></br>
// <input type="text" id="transName" name="transName" value={log.name} onChange={handleTextChange}></input><br></br>

// <label htmlFor="amount">Amount</label><br></br>
// <input type="number" id="amount" name="amount" value={log.amount} onChange={handleTextChange}></input><br></br>

// <label htmlFor="from">log Origin:</label><br></br>
// <input type="text" id="from" name="from" value={log.from} onChange={handleTextChange}></input><br></br>

// <label htmlFor="category">log Category:</label><br></br>
// <input type="text" id="category" name="category" value={log.category} onChange={handleTextChange}></input><br></br>

// <button type="submit">Submit</button><br></br>
// </form>
// <span>
//           <Link to={`/logs`}>
//             <button>Nevermind!</button>
//           </Link>
//         </span>
//     </div>
// )

// }
