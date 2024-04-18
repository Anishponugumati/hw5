import React, { useState } from 'react'
import './App.css'
import { getActivity } from './controller';

function App() {
  const [activity, setActity] = useState('');

  const requestActivity = async () => {
    const result = await getActivity();

    setActity(result);
  }

  return (
    <div className="card">
      <p>
        {activity}
      </p>
      <button onClick={requestActivity}>
        Click me for an activity
      </button>
    </div>
  )
}

export default App
