import React, { useEffect, useState } from "react";

function App() {

  const [trains, setTrains] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4444/vonat")
      .then((res) => res.json())
      .then((data) => setTrains(data))
  }, [])

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-12'>
          <select className="form-select" aria-label="Default select example" defaultValue="">
            {trains.map((train) => 
              <option key={train.vId} value={train.vId}>
                {train.vNev}
              </option>
            )}

          </select>

        </div>
      </div>
    </div>
  );
}

export default App;
