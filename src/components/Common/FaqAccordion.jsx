import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FaqAccordion = ({ faqs }) => {
    const [openFaq, setOpenFaq] = useState(0);

    const toggleFaq = (index) => {
        setOpenFaq(openFaq === index ? -1 : index);
    };

    return (
        <div className="prod-faq-list">
            {faqs.map((faq, index) => (
                <div className="prod-faq-item" key={index}>
                    <button
                        type="button"
                        className="prod-faq-question"
                        onClick={() => toggleFaq(index)}
                    >
                        <span>{faq.question}</span>
                        {openFaq === index ? <ChevronUp size={22} /> : <ChevronDown size={22} />}
                    </button>
                    {openFaq === index && (
                        <p className="prod-faq-answer">{faq.answer}</p>
                    )}
                    <div className="prod-faq-divider"></div>
                </div>
            ))}
        </div>
    );
};

export default FaqAccordion;