import React, { useState } from "react";

const faqLinks = {
  tracks: "/microbiome-conference-tracks/",
  abstractSubmission: "/abstract-submission",
  schedule:"/microbiome-event-schedule",
  email: "mailto:hello@helixconferences.com",

};

export const faqData = [
  {
    question: "What is MICROBIOME-2026?",
    answer:
      "MICROBIOME-2026, officially titled the “Microbiome Therapeutics Summit”, is a premier international forum organized by Helix Conferences. It brings together researchers, clinicians, biotech innovators, industry leaders, startups, and policymakers to explore advances in microbiome research, therapeutics, diagnostics, precision medicine, and host–microbiome interactions.",
  },
  {
    question: "When and where will MICROBIOME-2026 take place?",
    answer:
      "MICROBIOME-2026 will take place in 2026. The exact dates and venue will be announced soon.",
  },
  {
    question: "What are the highlights of MICROBIOME-2026?",
    answer:
      "Keynote talks by global microbiome experts, clinical and translational research presentations, microbiome therapeutics showcases, panel discussions, startup innovation forums, hands-on workshops, and high-impact networking opportunities.",
  },
  {
    question: "What scientific and clinical tracks are featured at MICROBIOME-2026?",
    answer: (
      <>
        You can explore the complete list of summit tracks here:{" "}
        <a
          href={faqLinks.tracks}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline"
        >
          MICROBIOME-2026 Tracks
        </a>
        .
      </>
    ),
  },
  {
    question: "How can I showcase my research, technology, or explore sponsorship options?",
    answer: (
      <>
        To present your research, exhibit microbiome technologies, or discuss
        sponsorship opportunities, please contact our team at{" "}
        <a href={faqLinks.email} className="text-blue-600 underline">
          hello@helixconferences.com
        </a>
        .
      </>
    ),
  },
  {
    question: "How can I submit an abstract or presentation proposal for MICROBIOME-2026?",
    answer: (
      <>
        Abstract and presentation submissions can be made{" "}
        <a
          href={faqLinks.abstractSubmission}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline"
        >
          here
        </a>
        .
      </>
    ),
  },
  {
    question: "How will I receive my invoice?",
    answer:
      "Invoices will be sent to the email address provided during registration. Please check your inbox and spam folder if needed.",
  },
  {
    question: "What materials will participants receive?",
    answer:
      "Registered participants will receive a digital summit kit including the program agenda, speaker profiles, session abstracts, and exhibitor information.",
  },
  {
    question: "How long are presentation slots?",
    answer:
      "Standard presentation slots are typically 15–20 minutes, including discussion time. Final presentation guidelines will be shared upon acceptance.",
  },
  {
    question: "Who should attend MICROBIOME-2026?",
    answer:
      "Microbiome researchers, clinicians, gastroenterologists, immunologists, oncologists, biotech professionals, pharmaceutical scientists, AI and data scientists, startups, investors, academicians, and healthcare policymakers.",
  },
  {
    question: "How many participants are expected at MICROBIOME-2026?",
    answer:
      "MICROBIOME-2026 is expected to host 150+ international participants, including speakers, delegates, exhibitors, startups, and sponsors.",
  },
  {
    question: "Can I submit multiple abstracts or proposals?",
    answer:
      "Yes, participants may submit multiple abstracts, provided each submission represents a distinct research topic or therapeutic innovation.",
  },
  {
    question: "Are keynote and featured speaker opportunities available?",
    answer:
      "Yes, a limited number of keynote and featured speaker opportunities are available. Interested applicants should indicate their preference during submission.",
  },
  {
    question: "What is expected from speakers and exhibitors?",
    answer:
      "Speakers and exhibitors are expected to deliver high-quality scientific, clinical, or application-focused sessions and actively engage with the global microbiome community.",
  },
  {
    question: "Is there a participation or registration fee?",
    answer:
      "Yes, registration and participation fees apply for speakers, exhibitors, and attendees. Detailed pricing information is available in the “Buy A Ticket” section.",
  },
  {
    question: "How can I view the summit schedule?",
    answer: (
      <>
        The detailed summit schedule will be published soon. You can access it{" "}
        <a
          href={faqLinks.schedule}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline"
        >
          here
        </a>
        .
      </>
    ),
  },
  {
    question: "Can I preview the agenda and speaker list before the event?",
    answer:
      "Yes, the complete agenda, speaker lineup, and exhibitor details will be released ahead of the summit dates.",
  },
  {
    question: "Can I register early?",
    answer:
      "Yes, early registration is encouraged as availability may be limited closer to the event.",
  },
  {
    question: "How can I get help with travel or accommodation?",
    answer: (
      <>
        For travel and accommodation assistance, please reach out to us at{" "}
        <a href={faqLinks.email} className="text-blue-600 underline">
          hello@helixconferences.com
        </a>
        .
      </>
    ),
  },
];




const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6 text-center">Frequently Asked Questions</h2>
      {faqData.map((item, index) => (
        <div key={index} className="border-b border-gray-300 mb-4">
          <button
            className="w-full text-left py-4 px-2 font-medium text-lg flex justify-between items-center"
            onClick={() => toggle(index)}
          >
            {item.question}
            <span className="text-xl">{openIndex === index ? "−" : "+"}</span>
          </button>
          {openIndex === index && (
            <div className="px-4 pb-4 text-gray-700">{item.answer}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Faq;
