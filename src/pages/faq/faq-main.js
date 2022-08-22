import React from "react";
import Breadcrumb from "../../components/Breadcrumb";
import Accordion from "../../components/Accordion";
const FaqMain = () => {
  const questionsAnswers = [
    {
      question: "How does an energy broker get paid?",
      answer:
        "The majority of brokers, including Pay4less Energy use a commission-based payment method. This means that the supplier offers you a small uplift in the form of a unit rate which will be paid to the broker. For example, your unit rate is 30p and broker add 1p uplift in it then the final unit rate will be 31p",
    },
    {
      question: "Do I need to change any pipes or wires if I change suppliers?",
      answer:
        "The actual electricity and gas you use is the same with whichever supplier you use, and it all travels down the same pipes and wires - so you can switch your supplier without any extra installations. There are some households using local supply networks that cannot switch, but these are very rare and usually only in remote areas. ",
    },
    {
      question: "What is the process for switching?",
      answer: `Once a supplier has been chosen, they will need to give your current supplier 28 days’ notice to hand over the reigns - so the process should take 5 to 8 weeks.

      During this time, you will be contacted and asked for a meter reading. If unable to do this yourself, they will arrange for the meter to be read.
      
      The meter reading will determine the final amount paid to your current supplier, so make a note of it and the date it was taken.
      The next bill will be from your new supplier(s).`,
    },
    {
      question: "Do you recommend everybody should switch?",
      answer: `If price is your only criterion and the savings are very small, we recommend staying with your current supplier. It is possible they may become more or less competitive, so it’s a good idea to still check with us every now and then. People currently with the Big Six who have never switched will usually have the most to gain by switching.`,
    },
    {
      question:
        "I have special needs. Will this affect my choice of companies?",
      answer: `All suppliers are required to comply with a code of practice setting out services for elderly, disabled and chronically sick customers. Also, they must provide facilities to assist blind, partially sighted, deaf and hearing impaired customers – so this should not affect your choice of supplier.`,
    },
  ];
  const questionsAnswers2 = [
    {
      question: "What type of contract will I be asked to sign?",
      answer:
        "The most common type of contract is rolling contract, where the price can fluctuate and has a 28 day cancellation period. There are also fixed term contracts for one or two years, where the price is set for this duration.",
    },
    {
      question: "I owe money to my current supplier. Do I have to settle this?",
      answer:
        "Once you decide to change supplier, you will have to settle any outstanding balance with your old supplier.",
    },
    {
      question: "What is an LOA?",
      answer: `A letter of authority (LOA) is a legal documentation that hands over authority to us so that we can deal with your current supplier when transferring you leaving you with minimal hassle`,
    },
    {
      question: "Do I need to sign an LOA?",
      answer: `It is not mandatory to sign an LOA as you do reserve the right to deal with matters independently, however it is advisable as it may ensure a swift transfer. An LOA is available on request and we will forward it to your supplier once you have signed it.`,
    },
    {
      question: "Does an LOA hand over full rights to you?",
      answer: `There are various levels to an LOA which will be highlighted on the document itself. The level you sign is at your discretion and will solely be used for the transfer of your utilities once you have agreed. Once transfer is completed, the LOA is void and disregarded.`,
    },
  ];
  return (
    <React.Fragment>
      <Breadcrumb pageTitle="FAQs" />
      <div className="container p-5">
        <h1 className="faq__title">Frequentyly Asked Questions</h1>
        <div className="row">
          <div className="col-12 col-md-6">
            <Accordion questionsAnswers={questionsAnswers} />
          </div>
          <div className="col-12 col-md-6">
            <Accordion questionsAnswers={questionsAnswers2} />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default FaqMain;
