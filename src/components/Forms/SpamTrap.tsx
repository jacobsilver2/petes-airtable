import React from "react"
import { HONEYPOT_FIELD } from "../../utility/spamTrap"

const hiddenStyle: React.CSSProperties = {
  position: "absolute",
  left: "-10000px",
  top: "auto",
  width: "1px",
  height: "1px",
  overflow: "hidden",
}

const SpamTrap: React.FC = () => {
  return (
    <div style={hiddenStyle} aria-hidden="true">
      <label htmlFor={HONEYPOT_FIELD}>Leave this field empty</label>
      <input
        id={HONEYPOT_FIELD}
        name={HONEYPOT_FIELD}
        type="text"
        tabIndex={-1}
        autoComplete="off"
        defaultValue=""
      />
    </div>
  )
}

export default SpamTrap
