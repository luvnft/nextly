import Image from "next/image";
import React from "react";
import { Container } from "@/components/Container";

import userOneImg from "../../public/img/user1.png";
import userTwoImg from "../../public/img/user2.png";
import userThreeImg from "../../public/img/user3.png";

export const Testimonials = () => {
  return (
    <Container>
      <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-3">
        <div className="lg:col-span-2 xl:col-auto">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <p className="text-2xl leading-normal ">
              After you top up your Phantom wallet with LOVE, create a TikTok reel
              using the <Mark>HAHZ FLAG</Mark> letting your spiritual followers know
              your not a NPC character and discover local playas near you. 
            </p>

            <Avatar
              image={userOneImg}
              name="#️⃣HAHZFLAG"
              title="HAHZ FLAG"
            />
          </div>
        </div>
        <div className="">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <p className="text-2xl leading-normal ">
              Nobody got time for boring black-and-white business reviews! Use the <Mark>HAHZ VIBES</Mark>
              TikTok AR Effect to leave a spiritual review sharing the vibes of a location. Drop your
              Phantom 👻 @username to earn LOVE from other players who appreciate your ReelView. 
            </p>

            <Avatar
              image={userTwoImg}
              name="#️⃣HAHZVIBES"
              title="HAHZ VIBES"
            />
          </div>
        </div>
        <div className="">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <p className="text-2xl leading-normal ">
              Phantom wallet is your Web5 public game account and all playas need to
              have is your 👻 @username to airdrop your LOVE to expedite their manifestation
              Use the <Mark>Phantom</Mark> TikTok AR Effect to promote your 👻 @username.
            </p>

            <Avatar
              image={userThreeImg}
              name="#️⃣HAHZPAY"
              title="Phantom"
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

interface AvatarProps {
  image: any;
  name: string;
  title: string;
}

function Avatar(props: Readonly<AvatarProps>) {
  return (
    <div className="flex items-center mt-8 space-x-3">
      <div className="flex-shrink-0 overflow-hidden rounded-full w-14 h-14">
        <Image
          src={props.image}
          width="40"
          height="40"
          alt="Avatar"
          placeholder="blur"
        />
      </div>
      <div>
        <div className="text-lg font-medium">{props.name}</div>
        <div className="text-gray-600 dark:text-gray-400">{props.title}</div>
      </div>
    </div>
  );
}

function Mark(props: { readonly children: React.ReactNode }) {
  return (
    <>
      {" "}
      <mark className="text-green-800 bg-green-100 rounded-md ring-green-100 ring-4 dark:ring-green-900 dark:bg-green-900 dark:text-green-200">
        {props.children}
      </mark>{" "}
    </>
  );
}
