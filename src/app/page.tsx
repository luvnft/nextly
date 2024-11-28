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
        title="IN LOVE WE TRUST"
      >
        <p>
          The HAHZ LOVE Manifestation Game is a positivity-driven social game where
          players have one job: to keep other holders' vibes high by sharing positive
          energy in their comments, DMs, or in real life—even by helping them manifest.
          In return, the person receiving the positive vibes tips the player who raised
          their vibe with HAHZ LOVE, sent to their Solana Phantom wallet (@username).
        </p>
      </SectionTitle>

      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />

      <SectionTitle
        preTitle="HOW TO PLAY"
        title="Spirit Game Guide"
      >
        <p>
          All you need to play is a Phantom wallet username, some Solana LOVE meme coins, 
          and an imagination fueled by 100% belief.
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
