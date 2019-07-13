import React from "react"

const CognitoEventSubmission = () => (
    <div className="cognito">
      <iframe
        src="https://services.cognitoforms.com/f/MjekXXvWxki85XYiMgfR4w?id=2"
        style={{position:'relative', width:'1px', minWidth:'100%',}}
        frameBorder="0"
        scrolling="yes"
        seamless={true}
        height="100%"
        width="100%"
      ></iframe>
      <script src="https://services.cognitoforms.com/scripts/embed.js"></script>
    </div>
)

export default CognitoEventSubmission

