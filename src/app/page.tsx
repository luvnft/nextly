import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { SectionTitle } from "@/components/SectionTitle";
import { Benefits } from "@/components/Benefits";
import { Video } from "@/components/Video";
import { Testimonials } from "@/components/Testimonials";
import { Faq } from "@/components/Faq";
import { Cta } from "@/components/Cta";

import { benefitOne, benefitTwo } from "@/components/data";

export default function Home() {
  return (
    <Container>
      <Hero />

      <SectionTitle
        preTitle="Spiritual 5D Game"
        title="PURPOSE ECONOMY"
      >
        <p>
          HAHZ LOVE is a memecoin game of teaching the world the Web5 spiritual
          purpose economy that answered the prayers of none NPC humans powered
          by Solana LOVE money. 
          
          HAHZ is a 5D Spiritual Gawd that lives within us all having a 3D real word
          experience turning dark to light with memes because 2024 is the year of
          truth. 
          <br></br>
          📶 Level up by create the funniest HAHZ LOVE content. 
          <br></br>
          Verify LOVE 
          🧿<a href="https://sol.hahz.live" target="_blank" rel="noopener noreferrer">
            SOL.HAHZ.LIVE
          </a>  
          <br></br>
          LOVE HAHZ 👻 @HEALXYZ
        </p>
      </SectionTitle>

      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />

      <SectionTitle
        preTitle="HOW TO PLAY"
        title="You can only lose with doubt"
      >
        <p>
          All you need to play is a Phantom wallet username, some Solana LOVE memecoins, 
          and an imagination fueled by 100% belief. 
          
          If you ❌ you lose your LOVE and have to find a random 👻 and send them LOVE.
          If you cheat, you cheat your own spiritual wealth. 
        </p>
      </SectionTitle>

      <Video videoId="_rhndty3FVk" />

      <SectionTitle
        preTitle="Challenge"
        title="TikTok Effects"
      >
        <p>
          HAHZ LOVE game uses TikTok AR effects to create playa SGC (spiritual generated content)
          for those tapped in. 
          📺 Livestream events <a href="https://tv.hahz.live" target="_blank" rel="noopener noreferrer">
            TV.HAHZ.LIVE
          </a>  
          💬 LOVE social <a href="https://xo.hahz.live" target="_blank" rel="noopener noreferrer">
            XO.HAHZ.LIVE
          </a> 
        </p>
      </SectionTitle>

      <Testimonials />

      <SectionTitle preTitle="FAQ" title="Frequently Asked Questions">
        <p>
          The most common questions asked below.
        </p>
      </SectionTitle>

      <Faq />
      <Cta />
    </Container>
  );
}
