import React from "react";
import "../css/about.css";

const AboutUs: React.FC = () => {
  return (
    
    <div className="about-section" id="bio-section">
        <h1>Bio</h1>
      <section className="about-intro">
        <h2>Introduction</h2>
        <p>
          Purple Thunder Band is a glam metal band from Stockholm that fuses the blues rock of the '70s with the glam metal of the '80s, creating a sound reminiscent of bands like Survivor, Def Leppard, and TOTO. The band blends melodic vocal lines with Keith Moon-inspired drumming and a powerful mix of keyboards and guitars reminiscent of Deep Purple.
        </p>
      </section>

      <section className="about-history">
        <h2>Our Story</h2>
        <p>
          Purple Thunder Band draws inspiration from many rock songs of the '80s and '90s. Hailing from Södertälje, Stockholm County, the band has been together since 2018—six years and counting.  
        </p>
        <p>
          The band began when Frans (guitarist) and Pontus (bassist) met in the same guitar course at the Södertälje Cultural School. Over the next two years, several members joined and left, most staying no longer than six months. Eventually, the band found a second guitarist, Felix.
        </p>
        <p>
          During a summer music camp arranged by the Cultural School, the band met two key members: Luis (drummer) and Victor (vocals). Felix already knew Victor from elementary school, and both Victor and Luis were eager to join the band.
        </p>
        <p>
          Once the Cultural School reopened after the summer, the band started meeting weekly. Over the following year, they performed covers of songs such as <a href="https://open.spotify.com/track/08mG3Y1vljYA6bvDt4Wqkj?si=97ea5d94380e412b">Back in Black</a>, <a href="https://open.spotify.com/track/37ZJ0p5Jm13JPevGcx4SkF?si=1293b61749424a42">Livin’ on a Prayer</a>, and <a href="https://open.spotify.com/track/4y7EaP5J09FJmclmmvM1jN?si=a6e5fd0d44a74a7b">Over the Hills and Far Away</a>. The next summer, at another music camp, the band met their keyboardist, Lo, who joined as soon as rehearsals resumed. Around this time, they also started writing their own original songs.
        </p>
        <p>
          Two years later, both Lo and Felix left the band—Lo, due to musical differences, and Felix, to focus on his swimming career. Despite these changes, Purple Thunder Band continues to evolve, crafting their signature sound and performing with passion.
        </p>
      </section>
    </div>
  );
};

export default AboutUs;
