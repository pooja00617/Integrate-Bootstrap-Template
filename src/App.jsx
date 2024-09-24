
import React, { useState } from "react";
import { FaGrinStars, FaSmile, FaMeh, FaFrown, FaAngry } from "react-icons/fa";

const FeedbackForm = () => {
  const [selectedSmiley, setSelectedSmiley] = useState(null);
  const [hoveredSmiley, setHoveredSmiley] = useState(null);
  const [selectedNavigationSmiley, setSelectedNavigationSmiley] = useState(null);
  const [hoveredNavigationSmiley, setHoveredNavigationSmiley] = useState(null);
  const [feedbackText, setFeedbackText] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [submittedData, setSubmittedData] = useState(null);
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = {};

    if (!firstName) validationErrors.firstName = "First Name is required.";
    if (!lastName) validationErrors.lastName = "Last Name is required.";
    if (!email) validationErrors.email = "Email is required.";
    if (!selectedSmiley) validationErrors.smiley = "Please select a rating for overall experience.";
    if (!selectedNavigationSmiley) validationErrors.navigationSmiley = "Please select a rating for website navigation.";

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setSubmittedData({
      smiley: selectedSmiley,
      navigationSmiley: selectedNavigationSmiley,
      feedbackText,
      firstName,
      lastName,
      email,
    });

    setFeedbackText("");
    setFirstName("");
    setLastName("");
    setEmail("");
    setSelectedSmiley(null);
    setSelectedNavigationSmiley(null);
    setErrors({});
  };

  return (
    <div style={{ maxWidth: "600px", margin: "auto", padding: "20px" }}>
      <h2>User Registration Feedback</h2>
      <p>We would love to hear your thoughts about your registration experience.</p>

      <form onSubmit={handleSubmit}>
     
        <div style={{ marginBottom: "15px" }}>
          <label>First Name</label>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            style={{ width: "100%", padding: "8px", marginTop: "5px" }}
          />
          {errors.firstName && (
            <span style={{ color: "red", fontSize: "12px" }}>{errors.firstName}</span>
          )}
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label>Last Name</label>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            style={{ width: "100%", padding: "8px", marginTop: "5px" }}
          />
          {errors.lastName && (
            <span style={{ color: "red", fontSize: "12px" }}>{errors.lastName}</span>
          )}
        </div>

       
        <div style={{ marginBottom: "15px" }}>
          <label>Email Address</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ width: "100%", padding: "8px", marginTop: "5px" }}
          />
          {errors.email && (
            <span style={{ color: "red", fontSize: "12px" }}>{errors.email}</span>
          )}
        </div>

        <h3 style={{ fontFamily:"unset", color:"dark"}}>User Registration Feedback</h3>

        <br />          

        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ marginBottom: "15px", flex: 1, marginRight: "20px" }}>
            <label>How was your experience?</label>
            <p style={{ fontSize: "12px", marginTop: "5px" }}>How would you rate your registration process?</p>
            <div style={{ marginTop: "10px", textAlign: "center" }}>
            <FaAngry
                size={40}
                color={selectedSmiley === "very sad" || hoveredSmiley === "very sad" ? "darkred" : "gray"}
                onClick={() => setSelectedSmiley("very sad")}
                onMouseOver={() => setHoveredSmiley("very sad")}
                onMouseOut={() => setHoveredSmiley(null)}
                style={{ cursor: "pointer", margin: "0 5px" }}
              />
              <FaFrown
                size={40}
                color={selectedSmiley === "sad" || hoveredSmiley === "sad" ? "red" : "gray"}
                onClick={() => setSelectedSmiley("sad")}
                onMouseOver={() => setHoveredSmiley("sad")}
                onMouseOut={() => setHoveredSmiley(null)}
                style={{ cursor: "pointer", margin: "0 5px" }}
              />
              <FaMeh
                size={40}
                color={selectedSmiley === "neutral" || hoveredSmiley === "neutral" ? "orange" : "gray"}
                onClick={() => setSelectedSmiley("neutral")}
                onMouseOver={() => setHoveredSmiley("neutral")}
                onMouseOut={() => setHoveredSmiley(null)}
                style={{ cursor: "pointer", margin: "0 5px" }}
              />
              <FaSmile
                size={40}
                color={selectedSmiley === "happy" || hoveredSmiley === "happy" ? "green" : "gray"}
                onClick={() => setSelectedSmiley("happy")}
                onMouseOver={() => setHoveredSmiley("happy")}
                onMouseOut={() => setHoveredSmiley(null)}
                style={{ cursor: "pointer", margin: "0 5px" }}
              />
              <FaGrinStars
                size={40}
                color={selectedSmiley === "very happy" || hoveredSmiley === "very happy" ? "limegreen" : "gray"}
                onClick={() => setSelectedSmiley("very happy")}
                onMouseOver={() => setHoveredSmiley("very happy")}
                onMouseOut={() => setHoveredSmiley(null)}
                style={{ cursor: "pointer", margin: "0 5px" }}
              />
              
            </div>
            {errors.smiley && (
              <div style={{ color: "red", fontSize: "12px", marginTop: "5px" }}>
                {errors.smiley}
              </div>
            )}
          </div>
  

          <div style={{ marginBottom: "15px", flex: 1 }}>
            <label>Website Navigation</label>
            <p style={{ fontSize: "12px", marginTop: "5px" }}>How was your experience navigating our website?</p>  
            <div style={{ marginTop: "10px", textAlign: "center" }}>
              <FaGrinStars
                size={40}
                color={selectedNavigationSmiley === "very happy" || hoveredNavigationSmiley === "very happy" ? "limegreen" : "gray"}
                onClick={() => setSelectedNavigationSmiley("very happy")}
                onMouseOver={() => setHoveredNavigationSmiley("very happy")}
                onMouseOut={() => setHoveredNavigationSmiley(null)}
                style={{ cursor: "pointer", margin: "0 5px" }}
              />
              <FaSmile
                size={40}
                color={selectedNavigationSmiley === "happy" || hoveredNavigationSmiley === "happy" ? "green" : "gray"}
                onClick={() => setSelectedNavigationSmiley("happy")}
                onMouseOver={() => setHoveredNavigationSmiley("happy")}
                onMouseOut={() => setHoveredNavigationSmiley(null)}
                style={{ cursor: "pointer", margin: "0 5px" }}
              />
              <FaMeh
                size={40}
                color={selectedNavigationSmiley === "neutral" || hoveredNavigationSmiley === "neutral" ? "orange" : "gray"}
                onClick={() => setSelectedNavigationSmiley("neutral")}
                onMouseOver={() => setHoveredNavigationSmiley("neutral")}
                onMouseOut={() => setHoveredNavigationSmiley(null)}
                style={{ cursor: "pointer", margin: "0 5px" }}
              />
              <FaFrown
                size={40}
                color={selectedNavigationSmiley === "sad" || hoveredNavigationSmiley === "sad" ? "red" : "gray"}
                onClick={() => setSelectedNavigationSmiley("sad")}
                onMouseOver={() => setHoveredNavigationSmiley("sad")}
                onMouseOut={() => setHoveredNavigationSmiley(null)}
                style={{ cursor: "pointer", margin: "0 5px" }}
              />
              <FaAngry
                size={40}
                color={selectedNavigationSmiley === "very sad" || hoveredNavigationSmiley === "very sad" ? "darkred" : "gray"}
                onClick={() => setSelectedNavigationSmiley("very sad")}
                onMouseOver={() => setHoveredNavigationSmiley("very sad")}
                onMouseOut={() => setHoveredNavigationSmiley(null)}
                style={{ cursor: "pointer", margin: "0 5px" }}
              />
            </div>
            {errors.navigationSmiley && (
              <div style={{ color: "red", fontSize: "12px", marginTop: "5px" }}>
                {errors.navigationSmiley}
              </div>
            )}
          </div>
        </div>

        {/* Feedback Text Section */}
        <div style={{ marginBottom: "15px" }}>
          <label>Feedback</label>
          <textarea
            value={feedbackText}
            onChange={(e) => setFeedbackText(e.target.value)}
            rows="3"
            style={{ width: "100%", padding: "8px", marginTop: "5px" }}
            placeholder="Please provide any feedback you have about experience"
          />
        </div>

        {/* Submit Button */}
        <div style={{ textAlign: "center" }}>
          <button type="submit" style={{ padding: "10px 20px", fontSize: "16px" }}>
            Submit Feedback
          </button>
        </div>
      </form>

      {/* Display submitted feedback */}
      {submittedData && (
        <div style={{ marginTop: "20px" }}>
          <h4>Thank you for your feedback!</h4>
          <p><strong>First Name:</strong> {submittedData.firstName}</p>
          <p><strong>Last Name:</strong> {submittedData.lastName}</p>
          <p><strong>Email:</strong> {submittedData.email}</p>
          <p>
            <strong>Overall Experience Rating:</strong> {submittedData.smiley === "very happy"
              ? "Very Happy 😁"
              : submittedData.smiley === "happy"
              ? "Happy 😊"
              : submittedData.smiley === "neutral"
              ? "Neutral 😐"
              : submittedData.smiley === "sad"
              ? "Sad 😢"
              : "Very Sad 😡"}
          </p>
          <p>
            <strong>Website Navigation Rating:</strong> {submittedData.navigationSmiley === "very happy"
              ? "Very Happy 😁"
              : submittedData.navigationSmiley === "happy"
              ? "Happy 😊"
              : submittedData.navigationSmiley === "neutral"
              ? "Neutral 😐"
              : submittedData.navigationSmiley === "sad"
              ? "Sad 😢"
              : "Very Sad 😡"}
          </p>
          {submittedData.feedbackText && (
            <p><strong>Comments:</strong> {submittedData.feedbackText}</p>
          )}
        </div>
      )}
    </div>
  );
};

export default FeedbackForm;





