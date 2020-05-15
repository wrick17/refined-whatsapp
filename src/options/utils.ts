import type { RefinedWhatsappOptions } from './constants';
import { OPTION_KEYS, DEFAULT_OPTIONS } from './constants';

export const getStoredOptions = (): Promise<RefinedWhatsappOptions> =>
  new Promise((resolve) => {
    // eslint-disable-next-line no-undef
    chrome.storage.sync.get(OPTION_KEYS, (options: RefinedWhatsappOptions) => {
      resolve({
        ...DEFAULT_OPTIONS,
        ...options,
      });
    });
  });

export const persistOptions = (options: RefinedWhatsappOptions): Promise<void> =>
  new Promise((resolve) => {
    // eslint-disable-next-line no-undef
    chrome.storage.sync.set(options, resolve);
  });
