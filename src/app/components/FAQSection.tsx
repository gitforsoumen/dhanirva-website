import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'What is Dhanirva and how does it work?',
      answer: 'Dhanirva is a comprehensive investment consultation platform that connects you with certified financial advisors and provides AI-powered insights. Simply create an account, set your investment goals, and get personalized recommendations tailored to your financial situation.'
    },
    {
      question: 'Is my financial data secure?',
      answer: 'Absolutely. We use bank-grade 256-bit encryption to protect all your data. Dhanirva is SEBI registered and fully compliant with financial security standards. Your information is never shared without your explicit consent.'
    },
    {
      question: 'What types of investments can I make through Dhanirva?',
      answer: 'Dhanirva supports a wide range of investment options including stocks, mutual funds, ETFs, bonds, and more. Our expert advisors help you build a diversified portfolio based on your risk appetite and financial goals.'
    },
    {
      question: 'How much does it cost to use Dhanirva?',
      answer: 'Dhanirva offers flexible pricing plans to suit different needs. Basic portfolio tracking is free, while premium features including personalized consultations and advanced AI insights are available through our subscription plans starting at ₹499/month.'
    },
    {
      question: 'Can I speak with a real financial advisor?',
      answer: 'Yes! All our advisors are SEBI-registered and certified professionals. You can schedule one-on-one consultations via video call, phone, or chat. Premium members get priority access to our expert advisors.'
    },
    {
      question: 'How do I get started?',
      answer: 'Getting started is easy! Download the Dhanirva app, create your account, complete a short questionnaire about your financial goals, and you\'ll receive personalized investment recommendations within minutes. Our onboarding process takes less than 5 minutes.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-gradient-to-b from-blue-50/30 to-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-[#1a1a1a] mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Got questions? We've got answers. Find everything you need to know about Dhanirva.
            </p>
          </div>

          {/* FAQ Items */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className="text-[#1a1a1a] pr-8">
                    {faq.question}
                  </span>
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300 ${
                    openIndex === index 
                      ? 'bg-blue-500 text-white' 
                      : 'bg-gray-100 text-gray-600'
                  }`}>
                    {openIndex === index ? (
                      <Minus className="w-5 h-5" />
                    ) : (
                      <Plus className="w-5 h-5" />
                    )}
                  </div>
                </button>
                
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Contact CTA */}
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">
              Still have questions?
            </p>
            <a 
              href="#contact" 
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors"
            >
              Contact our support team
              <svg className="w-5 h-5" fill="none" viewBox="0 0 20 20">
                <path d="M4.16667 10H15.8333" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                <path d="M10 4.16667L15.8333 10L10 15.8333" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}