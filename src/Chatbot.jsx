import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Chatbot = () => {
  const [question, setQuestion] = useState("");
  const [response, setResponse] = useState("");

  const documentationLinks = {
    segment: "https://segment.com/docs/?ref=nav",
    mparticle: "https://docs.mparticle.com/",
    lytics: "https://docs.lytics.com/",
    zeotap: "https://docs.zeotap.com/home/en-us/"
  };

  const handleAskQuestion = async () => {
    if (!question.trim()) {
      setResponse("Please enter a question.");
      return;
    }
    
    const answers = {
      "how do i set up a new source in segment?": "To set up a new source in Segment, go to the Segment UI, navigate to 'Sources', click 'Add Source', select your source type, and follow the setup instructions.",
      "how can i create a user profile in mparticle?": "In mParticle, user profiles are created automatically when user data is ingested via SDKs or API integrations.",
      "how do i build an audience segment in lytics?": "To build an audience in Lytics, go to the 'Audiences' section, click 'New Audience', set your filters, and save the segment.",
      "how can i integrate my data with zeotap?": "Zeotap allows data integration through API connections or direct file uploads in the Zeotap dashboard."
    };

    const lowerCaseQuestion = question.toLowerCase();
    
    if (answers[lowerCaseQuestion]) {
      setResponse(answers[lowerCaseQuestion]);
    } else {
      setResponse(
        <>I'm not sure. Please check the <a href={documentationLinks.segment} target="_blank" rel="noopener noreferrer">official documentation</a>.</>
      );
    }
  };

  return (
    <div className="container mt-5">
      <div className="card p-4">
        <h2 className="text-center">CDP Support Chatbot</h2>
        <div className="mb-3">
          <label className="form-label">Ask a question:</label>
          <input
            type="text"
            className="form-control"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="E.g., How do I set up a new source in Segment?"
          />
        </div>
        <button className="btn btn-primary w-100" onClick={handleAskQuestion}>Ask</button>
        {response && <div className="alert alert-info mt-3">{response}</div>}
      </div>
    </div>
  );
};

export default Chatbot;
