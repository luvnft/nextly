import { Container } from "@/components/Container"; // Ensure the path is correct
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
      <SectionTitle preTitle="Spiritual 5D Game" title="PURPOSE ECONOMY">
        <p>
          HAHZ LOVE is a Web5 purpose-driven memecoin game designed to make every
          VC (Vibe Capitalist) spiritually wealthy by embracing 💯% belief, staying
          in high vibes, and having fun. 
        </p>
      </SectionTitle>

      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />

      <SectionTitle preTitle="HOW TO PLAY" title="You can only lose with doubt">
        <p>
          VC playas remix negative real-life experiences into positive ones with
          HAHZ Spiritual Gawd memes as modern day spiritual therapy. If your meme
          spiritual bars 📶 uplift a VCs vibe they will send LOVE to your Phantom
          @username left in the social media post with a 👻. How to start 1️⃣ Download
          a Phantom wallet app, then create a Phantom username (see video). 2️⃣ Top up
          your Phantom with SOL 3️⃣ Buy LOVE with SOL to get in the game. 4️⃣ Follow
          @HAHZLOVE on all socials to learn the game and grow your local tribe.
          Use your imagination with 100% belief in your spiritual wealth and you won.
        </p>
      </SectionTitle>

      <Video videoId="_rhndty3FVk" />

      <SectionTitle preTitle="Challenge" title="TikTok Effects">
        <p>
          HAHZ LOVE game uses TikTok AR effects to create LGC (love-generated content) memes.
          Use the HAHZ TAG and tag @hahzlove for a chance to get your reel re-posted! The reel
          with the most monthly views wins 🥰 11M LOVE, a featured spot for the TikTok AR Effect,
          and a branded Solana NFT Osiris 🏆 award airdropped straight to your 👻 account.
        </p>
      </SectionTitle>

      <Testimonials />

      <SectionTitle preTitle="FAQ" title="Frequently Asked Questions">
        <p>FAQ asked below.</p>
      </SectionTitle>

      <Faq />
      <Cta />
    </Container>
  );
}
