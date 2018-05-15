import React from 'react'
import Link from 'gatsby-link'

const WorkPage = () => (
<main>
<div className="">
      <section className="hero" style={{paddingBottom: "2em"}}>
  <div className="row">
    <div className="recipe">
      <div className="recipe_text">
      <div className="recipe_text_title">
        <h1 className="recipe_overflow">Current Work &amp; Portfolio</h1>
      </div>
      <div className="recipe_text_content">
        <hr className="header_line" style={{backgroundColor: "#3f5688"}} />
        <span className="recipe_rating" style={{color: "#3f5688"}}></span>
        <p className="recipe_lead">From Lincoln Logs and Legos to art, music, graphics, code, markup, photography and any other projects I can get my hands on.</p>
      </div>
    </div>
    <div className="recipe_image">
      <img src='/img/penguins800x600.jpg' alt="Penguins800X600" />
    </div>
    </div>
  </div>
</section>

      <section id="half">
  <div className="row half">
    <div className="half_text" style={{float: "left"}}>
      <h2 className="">Feed the Children</h2>
      <hr className="header_line" style={{backgroundColor: "#c6007e"}} />
      <p>Creating a world where no child goes to bed hungry. Combined big vision ideas at conception along with deep, data-driven design to grow fundraising efforts across all digital
platforms.</p>

      <a href="https://www.behance.net/gallery/65595011/Feed-the-Children" ><button className="half_button" style={{backgroundColor: "#c6007e"}} >View Project</button></a>


    </div>
    <div className="half_image">
              <img src='/img/feed-the-children_600.png' alt="Feed The Children 600" />
          </div>
  </div>
</section>
      <section id="half">
  <div className="row half">
    <div className="half_text" style={{float: "right"}}>
      <h2 className="">Oklahoma City Thunder Statlab</h2>
      <hr className="header_line" style={{backgroundColor: "#1e325f"}} />
      <p>Challenges students with montly projects and activites focused on statistics with real life NBA analytics,</p>
      <a href="https://www.behance.net/gallery/65421157/NBAcom-OKC-Thunder-Statlab" ><button className="half_button" style={{backgroundColor: "#1e325f"}}>View Project</button></a>


    </div>
    <div className="half_image">
              <img src='/img/okc-statlab.png' alt="NBA Oklahoma City Thunder Statlab" />
          </div>
  </div>
</section>
      <section id="half">
  <div className="row half">
    <div className="half_text" style={{float: "left"}}>
      <h2 className="">University of Oklahoma</h2>
      <hr className="header_line" style={{backgroundColor: "#660000"}}/>
      <p>iPhone Developer at OU IT. In charge of updating one of two major OU apps, OU2GO, to blend new standards in mobile web with native iOS code. Prepped the new universal app, OU, that launched in Summer 2013.</p>

      <a href="https://www.behance.net/gallery/65421385/University-of-Oklahoma-Redesign-Concept" ><button className="half_button" style={{backgroundColor: "#660000"}}>View Project</button></a>


    </div>
    <div className="half_image">
              <img src='/img/OU_600.png' alt="Ou 600" />
          </div>
  </div>
</section>
<div className="row">
      <div className="other__projects">
  <h2>Some other projects I&#039;ve loved working on</h2>
    <div className="other__projects--grid">
      <img src='/img/1okh_600.jpg' alt="1Okh 600" />
      <img src='/img/fs_600.jpg' alt="Fs 600" />
      <img src='/img/hockey-icons.png' alt="Hockey Icons" />
      <img src='/img/oksounds.jpg' alt="Oksounds" />
      <img src='/img/penguins800x600.jpg' alt="Penguins800X600" />
      <img src='/img/wm_600.jpg' alt="Wm 600" />
      <img src='/img/raisemore.png' alt="Raisemore" />
      <img src='/img/dupuis_800x600.jpg' alt="Dupuis 800X600" />
    </div>
      </div>
</div>

        </div>

</main>
)

export default WorkPage
