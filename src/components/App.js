
import React,{useState} from "react";
import './../styles/App.css';

const App = () => {
  const [gender, setGender] = useState("Male");
  const [shirtSize, setShirtSize] = useState("");
  const [dressSize, setDressSize] = useState("");

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  const handleShirtSizeChange = (event) => {
    setShirtSize(event.target.value);
  };

  const handleDressSizeChange = (event) => {
    setDressSize(event.target.value);
  };

  return (
    <div>
        {/* Do not remove the main div */}
        <h2 htmlFor="gender">Select your gender:</h2>
        <input type="radio" name="gender" onClick={handleGenderChange} value="Male" checked/>
        <label for="male">Male</label>
        <input type="radio" name="gender" onClick={handleGenderChange} value="Female" />
        <label for="female">Female</label>

        {gender === "Male" && (
          <div>
            <h2 htmlFor="shirtSize">Select your shirt size:</h2>
            <select id="shirtSize" name="shirtSize" onChange={handleShirtSizeChange}>
              <option value="Select size" disabled>Select size</option>
              <option value="Small">Small</option>
              <option value="Medium">Medium</option>
              <option value="Large">Large</option>
            </select>
          </div>
        )}

        {gender === "Female" && (
          <div>
            <h2 htmlFor="dressSize">Select your dress size:</h2>
            <select id="dressSize" name="dressSize" onChange={handleDressSizeChange}>
            <option value="Select size" disabled>Select size</option>
              <option value="2">2</option>
              <option value="4">4</option>
              <option value="6">6</option>
            </select>
          </div>
        )}
    </div>
  )
}

export default App
