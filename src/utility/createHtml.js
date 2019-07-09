import React from 'react'


export default function createHtml(data) {
  switch (data.type) {
    case 'button':
      return <section key={data.id}><a href={data.website} className="button">{data.Content}</a></section>
    case 'image':
      return <figure className="image is-128x128" key={data.id}><img src={data.Attachments[0].url} alt=""/></figure>
    case 'text':
      return <section key={data.id} className="content">{data.Content}</section>
    default:
      return <section key={data.id}><p>I guess I'm the default...</p></section>
  }
}

