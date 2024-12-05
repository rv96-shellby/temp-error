import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTimes } from "@fortawesome/free-solid-svg-icons";
import "./_accordion.scss";

const AccordionSection = ({ section, isActive, onClick }) => (
  <li className="faq-accordion__card" onClick={onClick}>
    <h3>
      {section.title} <FontAwesomeIcon icon={isActive ? faTimes : faPlus} />
    </h3>
    {isActive && (
      <div
        className="faq-accordion__content"
        dangerouslySetInnerHTML={{ __html: section.content }}
      />
    )}
  </li>
);

const Accordion = ({ sections }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleSection = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section className="section--faq" data-section="more-faq">
      <h2>Frequently Asked Questions</h2>
      <ul className="faq-accordion__container">
        {sections.map((section, index) => (
          <AccordionSection
            key={index}
            section={section}
            isActive={index === activeIndex}
            onClick={() => toggleSection(index)}
          />
        ))}
      </ul>
    </section>
  );
};

export default Accordion;
