"use client";

import { useState } from "react";

const FAQS = [
  {
    question: "What services do you offer?",
    answer:
      "Placeholder answer \u2014 describe the web development, streaming, vlogging, and numismatics services you offer.",
  },
  {
    question: "How fast will I receive my work?",
    answer: "Placeholder answer \u2014 describe your typical turnaround time.",
  },
  {
    question: "What's your refund policy?",
    answer: "Placeholder answer \u2014 describe your refund policy.",
  },
  {
    question: "What if I have a single project?",
    answer: "Placeholder answer \u2014 describe how one-off projects work.",
  },
  {
    question: "Do you offer ongoing support?",
    answer: "Placeholder answer \u2014 describe your support options.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-12 flex flex-col gap-2">
          <span className="text-sm font-semibold text-accent">&#10022; Support</span>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">FAQ</h2>
          <p className="text-muted">
            Not sure yet? Have some questions? We listed the most frequent
            asked ones.
          </p>
        </div>

        <ul className="flex flex-col divide-y divide-border border-y border-border">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <li key={faq.question}>
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-medium">{faq.question}</span>
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-border text-accent">
                    {isOpen ? "\u2212" : "+"}
                  </span>
                </button>
                {isOpen && (
                  <p className="pb-5 text-sm text-muted">{faq.answer}</p>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
