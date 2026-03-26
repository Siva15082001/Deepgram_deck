const roleMap = {
  capture:
    'Captures lane/phone audio, tags channel metadata, and forwards clean streams for transcription.',
  stt:
    'Deepgram Speech-to-Text API converts noisy speech into text with diarization and domain-aware parsing support.',
  agent:
    'Deepgram Voice Agent API orchestrates turn logic, slot collection, clarifications, and guardrail behavior.',
  tts:
    'Deepgram Text-to-Speech API returns fast, intelligible responses tuned for headset and speaker environments.',
  pos:
    'Structured order payloads flow into POS/KDS to preserve kitchen routing and store-level reporting continuity.'
};

const nodes = document.querySelectorAll('.arch-node');
const roleDescription = document.getElementById('roleDescription');

nodes.forEach((node) => {
  node.addEventListener('mouseenter', () => setNode(node));
  node.addEventListener('focus', () => setNode(node));
  node.addEventListener('click', () => setNode(node));
});

function setNode(activeNode) {
  nodes.forEach((n) => n.classList.remove('is-active'));
  activeNode.classList.add('is-active');
  roleDescription.textContent = roleMap[activeNode.dataset.role] || '';
}

const noteButtons = document.querySelectorAll('.expand-note');
noteButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    const card = btn.closest('.phase-card');
    const isOpen = card.classList.toggle('open');
    btn.setAttribute('aria-expanded', String(isOpen));
    btn.textContent = isOpen ? 'Hide execution note' : 'View execution note';
  });
});

const viewToggle = document.getElementById('viewToggle');
viewToggle.addEventListener('click', () => {
  const expanded = document.body.classList.toggle('expanded');
  viewToggle.setAttribute('aria-pressed', String(expanded));
  viewToggle.textContent = expanded ? 'Expanded On' : 'Expanded';
});
