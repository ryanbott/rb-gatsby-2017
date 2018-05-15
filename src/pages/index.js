import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'

const IndexPage = ({data}) => (
  <main>
<section className="hero" style={{paddingBottom: "2em"}}>
<div className="row">
  <div className="recipe">
    <div className="recipe_text">
    <div className="recipe_text_title">
      <h1 className="recipe_overflow">Ryan Bott</h1>
    </div>
    <div className="recipe_text_content">
      <hr className="header_line" style={{backgroundColor: "#4C5156"}} />
      <span className="recipe_rating" style={{color: "#4C5156"}}></span>
      <p className="recipe_lead">Web Developer. UX. Music Maker. Food Crafter. Board Gamer.</p>
    </div>
  </div>
  <div className="recipe_image">
    <Img className="recipe_image--img" sizes={data.background.sizes} alt="Foggy Night Print Web"/>

  </div>
  </div>
</div>
</section>
<div className="row">
<div className="contentArea">
    <h2>I love the creative process, ideas swirling, calculations forever being crunched in my head. </h2>
    <p>I’m a Web Developer and UX Designer living and working in Chicago. I’m passionate about creating and building new projects and growing the local community.</p>
  <br />
</div>
</div>
<section id="half">
<div className="row half">
  <div className="half_text" style={{float: "left"}}>
    <h2 className="">Life at STAPLEGUN</h2>
    <hr className="header_line" style={{backgroundColor:"#CD2228"}} />
    <p>Producing modern, future-thinking code and design for some of Oklahoma’s largest names (Chesapeake Energy, OKC Thunder Basketball, University of Oklahoma and more).</p>

    <a href="http://staplegun.us/" ><button className="half_button" style={{backgroundColor:"#CD2228"}}>STAPLEGUN&#039;s Site</button></a>


  </div>
  <div className="half_image">
    <img src='/img/staplegun-20.jpg' alt="Staplegun 20" />
  </div>
</div>
</section>
            <section id="half">
<div className="row half">
  <div className="half_text" style={{float: "right"}}>
    <h2 className="">Other Projects</h2>
    <hr className="header_line" style={{backgroundColor:"#242A46"}} />
    <p>Check out a comprehensive timeline of work, including websites, art, product design and more.</p>

    <a href="/work"><button className="half_button" style={{backgroundColor:"#242A46"}}>View Work</button></a>
  </div>
  <div className="half_image">
    <img src='/img/home-Office.jpg' alt="Home Office" />
  </div>
</div>
</section>
<div style={{padding: "3em"}}></div>
<div className="row">
<div className="gallery">
      <img src='/img/work/nba.png' alt="1Okh 600" />
      <img src='/img/work/okc-thunder.png' alt="Fs 600" />
      <img src='/img/work/ou-pharmacy.png' alt="Hockey Icons" />
      <img src='/img/work/chesapeake.png' alt="Oksounds" />
      <img src='/img/work/feed-the-children.png' alt="Penguins800X600" />
      <img src='/img/work/cap-tulsa.png' alt="Wm 600" />
      <img src='/img/work/freestyle.png' alt="Raisemore" />
      <img src='/img/work/raisemore.png' alt="Dupuis 800X600" />
</div>
</div>


<section id="featuredBlog">
<div className="featuredBlog">
<div className="row">

<img className="featuredBlog_image" src='/img/ryanbott-bonaparte.jpg' />

  <div className="featuredBlog_title">
    <h3><a href="/contact">About Ryan</a></h3>
  <hr className="header_line" style={{backgroundColor: "#D8DDDD"}} />
        </div>
</div>
<div className="featuredBlog_text">
      <div className="featuredBlog_gallery">
            <img src='/img/ryan-uganda.jpg' alt="Ryan Uganda" />
            <img src='/img/WEB_a-mess-of-time_800x600.jpg' alt="Web A Mess Of Time 800X600" />
            <img src='/img/pit-small.jpg' alt="Pit Small" />
            <img src='/img/cabin-small.jpg' alt="Cabin Small" />
        </div>
      <div className="featuredBlog_summary">
    <p>When getting away from pixels and code, I love to cook, visit coffee shops, read, explore new cities and play board games with friends from my ever-growing collection. If you want to know anything else, get in touch.</p>
  </div>
  <div className="featuredBlog_button">
    <a href="/contact"><button className="contactButton" style={{border: "1px solid #D8DDDD"}}>Contact Me</button></a>
  </div>
</div>
</div>
</section>
<section id="half">
<div className="row half">
  <div className="half_text" style={{float: "left"}}>
    <h2 className="">Prints and Shirts</h2>
    <hr className="header_line" style={{backgroundColor: "#242A46"}} />
    <p>I'm in the process of turning many of my favorite art pieces and graphics into shirts, prints, phone cases and more.</p>

    <a href="https://www.teepublic.com/user/ryanbott" ><button className="half_button" style={{backgroundColor: "#242A46"}}>Shop Merch</button></a>


  </div>
  <div className="half_image">
    <img src='/img/art-on-desk-web.jpg' alt="Art On Desk Web" />
  </div>
</div>
</section>
</main>
)

export default IndexPage


export const query = graphql`
  query SiteMeta {
    site {
      siteMetadata {
        title
      }
    }
    background: imageSharp(id: {regex: "/Foggy-Night-Print_web.jpg/"}) {
      sizes(maxWidth: 800) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`
