function initFaq() {
  const faqContainer = document.getElementById('faqAccordion');

  if (!faqContainer) return;

  faqContainer.innerHTML = faqList.map((item, index) => {
    const collapseId = `faq${index}`;

    return `
      <div class="accordion-item">
        <h2 class="accordion-header">
          <button
            class="accordion-button ${index === 0 ? '' : 'collapsed'}"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#${collapseId}"
          >
            ${item.question}
          </button>
        </h2>

        <div
          id="${collapseId}"
          class="accordion-collapse collapse ${index === 0 ? 'show' : ''}"
          data-bs-parent="#faqAccordion"
        >
          <div class="accordion-body">
            ${item.answer}
          </div>
        </div>
      </div>
    `;
  }).join('');
}