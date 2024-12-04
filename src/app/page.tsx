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
          HAHZ LOVE is a Solana memecoin spiritual game of spreading LOVE
          to other playas and converting negative IRL experiences to positive
          ones with Spiritual Gawd memes.
        </p>
      </SectionTitle>

      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />

      <SectionTitle
        preTitle="HOW TO PLAY"
        title="You can only lose with doubt"
      >
        <p>
          Create a Phantom wallet username, HODL Solana LOVE memecoins, 
          and use your imagination with 100% belief in your spiritual wealth. 
          <br></br>
        </p>
      </SectionTitle>

      <Video videoId="_rhndty3FVk" />

      <SectionTitle
        preTitle="Challenge"
        title="TikTok Effects"
      >
        <p>
          HAHZ LOVE game uses TikTok AR effects to create SGC (spiritual generated content) meme.
          Use the HAHZ TAG and tag @hahzlove for a chance to get your reel reposted! The reel
          with the most monthly views wins 🥰 11M LOVE, a featured spot for the TikTok AR Effect,
          and a branded Solana NFT Osiris 🏆 award airdropped straight to you.
          <br></br>
          </a> 
        </p>
      </SectionTitle>

      <Testimonials />

      <SectionTitle preTitle="FAQ" title="Frequently Asked Questions">
        <p>
          FAQ asked below.
        </p>
      </SectionTitle>

      <Faq />
      <Cta />
    </Container>
  );
}
