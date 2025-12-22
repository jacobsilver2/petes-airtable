import React from "react"

const SubscriptionEmbed: React.FC = () => {
  return (
    <div style={{ textAlign: "center", margin: "2rem 0" }}>
      <h3 style={{ marginBottom: "1rem", fontSize: "1.2rem", fontWeight: "bold" }}>
        Subscribe to our Weekly Roundup
      </h3>
      <iframe
        src="https://petescandystore.substack.com/embed"
        width="480"
        height="320"
        style={{
          border: "1px solid #EEE",
          background: "white",
          maxWidth: "100%",
        }}
        frameBorder="0"
        scrolling="no"
      />
    </div>
  )
}

export default SubscriptionEmbed
