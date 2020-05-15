import { getStoredOptions, persistOptions } from './utils';
import { FirstModifierOptions, SecondModifierOptions,  RefinedWhatsappOptions } from './constants';

const getModifierOptions = (id: string, options: typeof FirstModifierOptions | typeof SecondModifierOptions, selected: string) => `
  <select>
    ${
      options.map(({
        id: optionId, label
      }) => `
        <option value="${optionId}" ${selected === optionId && 'selected'}>
          ${label}
        </option>
      `).join('')
    }
  </select>
`;

const createControls = async (options: RefinedWhatsappOptions) => {
  const fragment = document.createDocumentFragment();
  const { hotkeys } = options;
  const table = document.createElement('table');
  fragment.append(table);

  table.innerHTML = hotkeys.map(hotkey => {
    const { id, keyCombo: { modifiers }, name } = hotkey;
    return `
      <tr>
        <td>
          ${name}
        </td>
        <td>
          ${getModifierOptions(id, FirstModifierOptions, modifiers[0])}
        </td>
        <td>
          ${getModifierOptions(id, SecondModifierOptions, modifiers[1])}
        </td>
        <td>
          <input type="text" />
        </td>
      </tr>
    `;
  }).join('');

  return fragment;
}

const setupOptions = async () => {
  const form = document.forms[0];
  const options = await getStoredOptions();
  console.log("setupOptions -> options", options)
  const controls = await createControls(options);

  form.appendChild(controls);
  form.style.opacity = '1';

  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    // const formData = new FormData(form);
    // // const data: RefinedWhatsappOptions = {
    // //   enabled: formData.get('enabled') === 'on',
    // // };

    // console.table(data);
    // await persistOptions(data);
    // const status = document.getElementById('status') as HTMLDivElement;
    // status.textContent = 'Options saved.';
    // setTimeout(() => { status.textContent = ''; }, 900);
  });
};

document.addEventListener('DOMContentLoaded', setupOptions);
