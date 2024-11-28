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
        preTitle="Spiritual Game"
        title="IN LOVE WE TRUST"
      > 
        The HAHZ LOVE Manifestation Game is a positivity-driven social game where
        players have one job: to keep other holders vibes high by sharing positive
        energy in their comments, DMs, or in real life, or even by helping them manifest
        In return, the person who receives the positive vibes will tip the player who raised
        their vibe with HAHZ LOVE to their Solana Phantom wallet (@username). The rule is
        simple: if you doubt your spiritual wealth, you lose the game. 
      </SectionTitle>

      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />

      <SectionTitle
        preTitle="HOW TO PLAY"
        title="Spirit Game Guide"
      >
        All you need to play is a Phantom wallet username, some Solana LOVE meme coins, and an imagination fueled by 100% belief.
      </SectionTitle>

      <Video videoId="_rhndty3FVk" />

      <SectionTitle
        preTitle="ROADMAP"
        title="Level up"
      >
        Playas will join TV.HAHZ.LIVE livestream events where those tapped receive
        LOVE airdrops, holders receive private invite links to private XO.HAHZ.LIVE
        channels to receive daily social media challenge assignments.
      </SectionTitle>

      <Testimonials />

      <SectionTitle preTitle="FAQ" title="Frequently Asked Questions">
        Answer your customers possible questions here, it will increase the
        conversion rate as well as support or chat requests.
      </SectionTitle>

      <Faq />
      <Cta />
    </Container>
  );
}
