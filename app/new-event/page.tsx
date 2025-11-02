import React from 'react'


export default function NewEventPage() {
  return (
    <div style={{ width: '100%', minHeight: '100vh', display: 'flex', flexDirection: 'column', padding: '20px' }}>
      <h1 style={{ marginBottom: '20px' }}>Add New Event</h1>
      <iframe
        className="airtable-embed"
        src="https://airtable.com/embed/app4Eb0X39KtGToOS/pag2acn4uMjHqaTME/form"
        frameBorder="0"
        width="100%"
        height="1024"
        style={{ background: 'transparent', border: '1px solid #ccc' }}
      />
    </div>
  )
}
