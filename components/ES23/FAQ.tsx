import React from 'react';
import { FAQs } from '../../data/ES23/faqData';

type FAQ = {
  ques: string;
  ans: string;
};

type FAQCardProps = {
  faq: FAQ;
};

const FAQCard = ({ faq }: FAQCardProps) => {
  const { ques, ans } = faq;
  return (
    <details>
      <summary className="py-2 outline-none cursor-pointer focus:underline">
        {ques}
      </summary>
      <div className="px-4 pb-4">
        <p>{ans}</p>
      </div>
    </details>
  );
};

const FAQ = () => {
  return (
    <section id="es23_faqs" className="text-gray-100 px-6 sm:px-0">
      <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
        <h2 className="mb-12 heading">Frequently Asked Questions</h2>
        <div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 divide-gray-700">
          {FAQs.map((faq, idx) => {
            return <FAQCard faq={faq} key={idx} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
