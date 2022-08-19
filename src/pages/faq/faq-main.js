import React from "react";
import Breadcrumb from "../../components/Breadcrumb";
import Accordion from "../../components/Accordion";
const FaqMain = () => {
  const questionsAnswers = [
    {
      question: "How many team members can I invite?",
      answer:
        "You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.",
    },
    {
      question: "What is the maximum file upload size?",
      answer:
        "No more than 2GB. All files in your account must fit your allotted storage space.",
    },
    {
      question: "How do I reset my password?",
      answer: `Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you.`,
    },
    {
      question: "Can I cancel my subscription?",
      answer: `Yes! Send us a message and we’ll process your request no questions asked.`,
    },
    {
      question: "Do you provide additional support?",
      answer: `Chat and email support is available 24/7. Phone lines are open during normal business hours.`,
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
            <Accordion questionsAnswers={questionsAnswers} />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default FaqMain;
