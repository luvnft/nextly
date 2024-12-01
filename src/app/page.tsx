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
          The purpose economy works different than the profit economy focused on
          building brands to sell. This social game teaches playas how to manifest
          spiritual wealth, find your purpose and build your LOVE SOL credit score.
          Find other playas on social media that create, repost and engage with HAHZ
          LOVE meme content to create a new trending LOVE algorithm.
        </p>
      </SectionTitle>

      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />

      <SectionTitle
        preTitle="HOW TO PLAY"
        title="Spirit Game Guide"
      >
        <p>
          All you need to play is a Phantom wallet username, some Solana LOVE memecoins, 
          and an imagination fueled by 100% belief. The #1 viral game TikTok effect content
          becomes the featured video. Create HAHZ memes for LOVE.
        </p>
      </SectionTitle>

      <Video videoId="_rhndty3FVk" />

      <SectionTitle
        preTitle="ROADMAP"
        title="Level Up"
      >
        <p>
          Playas will join 
          <a href="https://tv.hahz.live" target="_blank" rel="noopener noreferrer">
            TV.HAHZ.LIVE
          </a> 
          livestream events, where selected participants receive LOVE airdrops. Holders
          will receive private invite links to exclusive 
          <a href="https://xo.hahz.live" target="_blank" rel="noopener noreferrer">
            XO.HAHZ.LIVE
          </a> 
          channels to participate in daily social media challenge assignments.
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
