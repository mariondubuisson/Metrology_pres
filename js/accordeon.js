class Accordeon {
  constructor(containerRef) {
    this.containerRef = containerRef;
    this.sections = this.createSections();
  }

  createSections = () => {
    const sections = this.containerRef.querySelectorAll(".accordeon_section");
    return Array.from(sections).map(section => ({
      title: section.querySelector(".accordeon_section_title"),
      content: section.querySelector(".accordeon_section_content")
    }));
  };

  closeAllSections = () => {
    this.sections.forEach(section => {
      section.content.classList.add("accordeon_section_content--hide");
    });
  };

  addOnClickListenerOnSectionTitles = () => {
    this.sections.forEach(section => {
      section.title.addEventListener("click", () => {
        section.content.classList.toggle("accordeon_section_content--hide");
      });
    });
  };

  initAccordeon = () => {
    this.closeAllSections();
    this.addOnClickListenerOnSectionTitles();
  };
}

export { Accordeon };
