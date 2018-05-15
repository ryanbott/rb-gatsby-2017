import React from 'react'
import Link from 'gatsby-link'

const ContactPage = () => (
  <div>
    <h2>I&#039;m always looking for new projects, ideas and conversations to have coffee over</h2>
    <p>Whether it's just to say hi or for any inquiries, please feel free to connect with me through the contact form below or through social media.</p>

    <form
      name="contact"
      method="post"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      >
      <input name="name" type="text" placeholder="Enter your Name"></input>
      <input name="email" type="email" placeholder="name@email.com"></input>
      <input name="website" type="text" placeholder="Enter your Website"></input>
      <textarea name="website" type="text" placeholder="Enter your Website"></textarea>
      <button>Send me</button>
    </form>
  </div>
)

export default ContactPage
