import { useState } from "react";
import './styles/ListItem.css'

function Form(){
    const [/*file*/, setFile] = useState();
    function handleChange(e) {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    }
    return(
        <div className="form">
            <label>Title:</label><br/>
            <input className="type" /><br/>
            <label>Description:</label><br/>
            <textarea />
            <br/>
            <br/><label>Exhange:</label><br/>
            <input placeholder="What do you want in return" className="type"  />
            <h2>Add Images:</h2>
            <input type="file" onChange={handleChange} />
            <input type="file" onChange={handleChange} />
            <input type="file" onChange={handleChange} />
            {//<img src={file} />
            }<br/>
            <label>Whatsapp contact:</label><br/>
            <input type="number" className="type" placeholder="+234" /><br/>
            <button className="listBtn list">List Item</button>
            
        </div>
    )
}
export default Form