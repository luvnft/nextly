import Image from "next/image";
import { Container } from "@/components/Container";
import heroImg from "../../public/img/hero.png";

export const Hero = () => {
  return (
    <>
      <Container className="flex flex-wrap">
        <div className="flex items-center w-full lg:w-1/2">
          <div className="max-w-2xl mb-8">
            <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
              MANIFEST SPIRITUAL
              WEALTH WITH LOVE LIKE HAHZ
            </h1>
            <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
              💫 HAHZ LOVE: Is social Solana memecoin manifesting game for worldwide VCs (Vibe Capitalists).
              📶 Level 🆙 your ✨ spiritual wealth by ⚡️ airdropping 🫶 LOVE to other VCs 👻 Phantom wallet @username
              who claim their ✨ wealth in @HAHZLOVE social media posts comments. 
            </p>

            <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
              <a
                href="https://pump.fun/coin/7iNzESXq8Ln3wyww5hgLM1G2NKKkmzczk1bv2tARpump"
                target="_blank"
                rel="noopener"
                className="px-8 py-4 text-lg font-medium text-center text-white bg-green-600 rounded-md ">
                2️⃣ Buy LOVE
              </a>
              <a
                href="https://t.me/hahzlove"
                target="_blank"
                rel="noopener"
                className="flex items-center space-x-2 text-gray-500 dark:text-gray-400">
                <title>Telegram</title>
                <span>3️⃣ Join Telegram</span>
              </a>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full lg:w-1/2">
          <div className="">
            <Image
              src={heroImg}
              width="616"
              height="617"
              className={"object-cover"}
              alt="Hero Illustration"
              loading="eager"
              placeholder="blur"
            />
          </div>
        </div>
      </Container>
      <Container>
        <div className="flex flex-col justify-center">
          <div className="text-xl text-center text-gray-700 dark:text-white">
            IN <span className="text-green-600">LOVE</span> WE TRUST{" "}
          </div>
        </div>
      </Container>
    </>
  );
};

