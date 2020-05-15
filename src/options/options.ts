import { getStoredOptions, persistOptions } from './utils';
import type { RefinedWhatsappOptions } from './constants';

const setupOptions = async () => {
  const form = document.forms[0];
  const options = await getStoredOptions();

  const enabled = document.getElementById('enabled') as HTMLInputElement;
  enabled.checked = options.enabled;

  form.style.opacity = '1';

  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const data: RefinedWhatsappOptions = {
      enabled: formData.get('enabled') === 'on',
    };

    console.table(data);
    await persistOptions(data);
    const status = document.getElementById('status') as HTMLDivElement;
    status.textContent = 'Options saved.';
    setTimeout(() => { status.textContent = ''; }, 900);
  });
};

document.addEventListener('DOMContentLoaded', setupOptions);
