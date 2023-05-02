import { useState } from 'react';
import header from "./components/header"
import FeedbackList from './components/FeedbackList';
import FeedbackData from './data/FeedbackData';


function App() {
  const [feedback, setFeedback] = useState(FeedbackData)
  
  return (
    <>
    <header />
    <div className="container">
      <FeedbackList feedback={feedback}/>
      </div>
    </>
     
  );
}


export default App;
