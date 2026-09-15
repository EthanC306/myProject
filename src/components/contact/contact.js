export async function sendContactMessage(fields, request = fetch) {
  if (globalThis.location?.protocol === 'file:') {
    throw new Error('Open the site through its web address or local development server before sending a message.');
  }

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 20000);

  try {
    const response = await request('https://formsubmit.co/ajax/ec036824@ohio.edu', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        name: fields.name.trim(),
        email: fields.email.trim(),
        message: fields.message.trim(),
        _subject: `Portfolio: ${fields.subject.trim()}`,
        _replyto: fields.email.trim(),
      }),
      signal: controller.signal,
    });

    let result;

    try {
      result = await response.json();
    } catch {
      throw new Error(`The email service returned an unexpected response (HTTP ${response.status}). Please try again later or use the email link above.`);
    }

    if (!response.ok || ![true, 'true'].includes(result?.success)) {
      const detail = typeof result?.message === 'string' ? result.message.trim().slice(0, 500) : '';
      throw new Error(detail
        ? `Email service: ${detail}`
        : `The email service rejected the message (HTTP ${response.status}). Please try again later or use the email link above.`);
    }
  } catch (error) {
    if (controller.signal.aborted) {
      throw new Error('The email service took too long to respond. Delivery is unconfirmed. Please try again later or use the email link above.');
    }
    if (error instanceof TypeError) {
      throw new Error('Could not connect to the email service. Check your connection and whether your browser is blocking formsubmit.co, or use the email link above.');
    }
    throw error;
  } finally {
    clearTimeout(timeout);
  }
}

export function mountContact() {
  const dialog = document.getElementById('contact-dialog');
  const trigger = document.getElementById('contact-email');
  const form = document.getElementById('contact-form');
  const status = document.getElementById('contact-status');
  const submit = form.querySelector('button[type="submit"]');

  trigger.addEventListener('click', (event) => {
    event.preventDefault();
    dialog.showModal();
  });
  dialog.querySelector('.contact-close').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', (event) => {
    const bounds = dialog.getBoundingClientRect();
    if (event.target === dialog && (event.clientX < bounds.left || event.clientX > bounds.right ||
        event.clientY < bounds.top || event.clientY > bounds.bottom)) dialog.close();
  });
  dialog.addEventListener('close', () => trigger.focus());

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    if (submit.disabled) return;
    const fields = Object.fromEntries(new FormData(form));
    if (Object.values(fields).some((value) => !value.trim())) {
      status.textContent = 'Please fill in every field before sending.';
      return;
    }

    submit.disabled = true;
    submit.textContent = 'Sending…';
    form.setAttribute('aria-busy', 'true');
    status.textContent = '';
    
    try {
      await sendContactMessage(fields);
      status.textContent = 'Your message was submitted. Thanks for reaching out!';
      form.reset();
    } catch (error) {
      status.textContent = `${error.message} Your draft is still in this form.`;
    } finally {
      submit.disabled = false;
      submit.textContent = 'Send message';
      form.removeAttribute('aria-busy');
    }
  });
}
