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
  <div className="half_text">
    <h2 className="">Life at STAPLEGUN</h2>
    <hr className="header_line" style={{backgroundColor:"#CD2228"}} />
    <p>Producing modern, future-thinking code and design for some of Oklahoma’s largest names (Chesapeake Energy, OKC Thunder Basketball, University of Oklahoma and more).</p>

    <a href="http://staplegun.us/" ><button className="half_button" style={{backgroundColor:"#CD2228"}}>STAPLEGUN&#039;s Site</button></a>


  </div>
  <div className="half_image">
    <Img sizes={data.staplegun.sizes} alt="Staplegun 20" />
  </div>
</div>
</section>
            <section id="half">
<div className="row half">
  <div className="half_text" style={{order: "2"}}>
    <h2 className="">Other Projects</h2>
    <hr className="header_line" style={{backgroundColor:"#242A46"}} />
    <p>Check out a comprehensive timeline of work, including websites, art, product design and more.</p>

    <a href="/work"><button className="half_button" style={{backgroundColor:"#242A46"}}>View Work</button></a>
  </div>
  <div className="half_image">
    <Img sizes={data.otherProjects.sizes} alt="Home Office" />
  </div>
</div>
</section>
<div style={{padding: "3em"}}></div>
<div className="row">
  <div className="gallery">
    <Img className="gallery--img" sizes={data.nba.sizes} alt="NBA.com" />
    <Img className="gallery--img" sizes={data.okcThunder.sizes} alt="Oklahoma City Thunder" />
    <Img className="gallery--img" sizes={data.oucop.sizes} alt="University of Oklahoma College of Pharmacy" />
    <Img className="gallery--img" sizes={data.chk.sizes} alt="Chesapeake Energy Center" />
    <Img className="gallery--img" sizes={data.ftc.sizes} alt="Feed the Children" />
    <Img className="gallery--img" sizes={data.cap.sizes} alt="CAP Tulsa" />
    <Img className="gallery--img" sizes={data.fs.sizes} alt="Freestyle Creative" />
    <Img className="gallery--img" sizes={data.rm.sizes} alt="RaiseMore" />
  </div>
</div>


<section id="featuredBlog">
<div className="featuredBlog">
<div className="row">
  <div className="featuredBlog_image">
    <Img sizes={data.aboutRyan.sizes} alt="About Ryan" />
  </div>
  <div className="featuredBlog_title">
    <h3><a href="/contact">About Ryan</a></h3>
    <hr className="header_line" style={{backgroundColor: "#D8DDDD"}} />
  </div>
</div>
<div className="featuredBlog_text">
      <div className="featuredBlog_gallery">
        <Img sizes={data.ryanUganda.sizes} alt="Ryan in Uganda" />
        <Img sizes={data.messOfTime.sizes} alt="A Mess of Time" />
        <Img sizes={data.pit.sizes} alt="Pittsburgh" />
        <Img sizes={data.cabin.sizes} alt="Breckenridge, Colorado" />
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
  <div className="half_text">
    <h2 className="">Prints and Shirts</h2>
    <hr className="header_line" style={{backgroundColor: "#242A46"}} />
    <p>I'm in the process of turning many of my favorite art pieces and graphics into shirts, prints, phone cases and more.</p>

    <a href="https://www.teepublic.com/user/ryanbott" ><button className="half_button" style={{backgroundColor: "#242A46"}}>Shop Merch</button></a>


  </div>
  <div className="half_image">
    <Img sizes={data.artOnTable.sizes} alt="Art On Desk Web" />
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
    staplegun: imageSharp(id: {regex: "/staplegun-20.jpg/"}) {
      sizes(maxWidth: 600) {
        ...GatsbyImageSharpSizes
      }
    }
    otherProjects: imageSharp(id: {regex: "/home-Office.jpg/"}) {
      sizes(maxWidth: 600) {
        ...GatsbyImageSharpSizes
      }
    }


    nba: imageSharp(id: {regex: "/nba.png/"}) {
      sizes(maxWidth: 300) {
        ...GatsbyImageSharpSizes
      }
    }
    okcThunder: imageSharp(id: {regex: "/okc-thunder.png/"}) {
      sizes(maxWidth: 300) {
        ...GatsbyImageSharpSizes
      }
    }
    oucop: imageSharp(id: {regex: "/ou-pharmacy.png/"}) {
      sizes(maxWidth: 300) {
        ...GatsbyImageSharpSizes
      }
    }
    chk: imageSharp(id: {regex: "/chesapeake.png/"}) {
      sizes(maxWidth: 300) {
        ...GatsbyImageSharpSizes
      }
    }
    ftc: imageSharp(id: {regex: "/feed-the-children.png/"}) {
      sizes(maxWidth: 300) {
        ...GatsbyImageSharpSizes
      }
    }
    cap: imageSharp(id: {regex: "/cap-tulsa.png/"}) {
      sizes(maxWidth: 300) {
        ...GatsbyImageSharpSizes
      }
    }
    fs: imageSharp(id: {regex: "/freestyle.png/"}) {
      sizes(maxWidth: 300) {
        ...GatsbyImageSharpSizes
      }
    }
    rm: imageSharp(id: {regex: "/raisemore.png/"}) {
      sizes(maxWidth: 300) {
        ...GatsbyImageSharpSizes
      }
    }

    aboutRyan: imageSharp(id: {regex: "/ryanbott-bonaparte.jpg/"}) {
      sizes(maxWidth: 600) {
        ...GatsbyImageSharpSizes
      }
    }
    ryanUganda: imageSharp(id: {regex: "/ryan-uganda.jpg/"}) {
      sizes(maxWidth: 200) {
        ...GatsbyImageSharpSizes
      }
    }
    messOfTime: imageSharp(id: {regex: "/WEB_a-mess-of-time_800x600.jpg/"}) {
      sizes(maxWidth: 200) {
        ...GatsbyImageSharpSizes
      }
    }
    pit: imageSharp(id: {regex: "/pit-small.jpg/"}) {
      sizes(maxWidth: 300) {
        ...GatsbyImageSharpSizes
      }
    }
    cabin: imageSharp(id: {regex: "/cabin-small.jpg/"}) {
      sizes(maxWidth: 300) {
        ...GatsbyImageSharpSizes
      }
    }
    artOnTable: imageSharp(id: {regex: "/art-on-desk-web.jpg/"}) {
      sizes(maxWidth: 600) {
        ...GatsbyImageSharpSizes
      }
    }


  }
`
