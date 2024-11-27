"use client";
import React from "react";
import { Container } from "@/components/Container";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/24/solid";

export const Faq = () => {
  return (
    <Container className="!p-0">
      <div className="w-full max-w-2xl p-2 mx-auto rounded-2xl">
        {faqdata.map((item, index) => (
          <div key={item.question} className="mb-5">
            <Disclosure>
              {({ open }) => (
                <>
                  <DisclosureButton className="flex items-center justify-between w-full px-4 py-4 text-lg text-left text-gray-800 rounded-lg bg-gray-50 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-green-100 focus-visible:ring-opacity-75 dark:bg-trueGray-800 dark:text-gray-200">
                    <span>{item.question}</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-green-500`}
                    />
                  </DisclosureButton>
                  <DisclosurePanel className="px-4 pt-4 pb-2 text-gray-500 dark:text-gray-300">
                    {item.answer}
                  </DisclosurePanel>
                </>
              )}
            </Disclosure>
          </div>
        ))}
      </div>
    </Container>
  );
}

const faqdata = [
  {
    question: "Where can I buy HAHZ LOVE to manifest spiritual wealth?",
    answer: "On pump.fun, click the buy HAHZ LOVE button and make sure you have enough SOL in your Phantom wallet.",
  },
  {
    question: "How does this game guarantee that I will become spiritually wealthy?",
    answer: "Because HAHZ manifested a purpose economy to teach others how to manifest spiritual wealth. All you need is belief to become spiritually wealthy.",
  },
  {
    question: "Memecoins are risky, how is LOVE games different?",
    answer:
      "HAHZ parted the crypto sea by separating Web5 purpose economy from Web3 profit economy to allow others who want to use this advanced tech for a hire purpose of solving real world problems because he is spiritual.",
  },
  {
    question: "Do you offer technical support? ",
    answer:
      "Yes, LOVE holders can text HAHZ, join our Telegram or Discord to ask questions. Playas earn LOVE for helping others.",
  },
];
