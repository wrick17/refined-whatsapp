export enum HotkeyAction {
  OPEN_NEW_CHAT_WITH = 'OPEN_NEW_CHAT_WITH',
  TOGGLE_CURRENT_CHAT_VISIBILITY = 'TOGGLE_CURRENT_CHAT_VISIBILITY',
  TOGGLE_SIDEBAR = 'TOGGLE_SIDEBAR',
  TOGGLE_CURRENT_CHAT_PROFILE_INFO = 'TOGGLE_CURRENT_CHAT_PROFILE_INFO'
}

// use for keys
export type HotkeyActions = keyof typeof HotkeyAction;

export const FirstModifierOptions = [
  {
    id: 'ctrl',
    label: 'Ctrl',
  },
  {
    id: 'meta',
    label: '⌘ Cmd'
  },
  {
    id: 'ctrl,meta',
    label: '⌘ Cmd / Ctrl'
  }
]

export const SecondModifierOptions = [
  {
    id: 'shift',
    label: '⇧ Shift',
  },
  {
    id: 'none',
    label: 'None',
  },
];

export interface HotkeyConfiguration {
  id: HotkeyAction;
  name: string;
  keyCombo: {
    key: string;
    modifiers: string[];
  };
}

export interface RefinedWhatsappOptions {
  hotkeys: HotkeyConfiguration[];
}

export const DEFAULT_OPTIONS: RefinedWhatsappOptions = {
  hotkeys: [
    {
      id: HotkeyAction.OPEN_NEW_CHAT_WITH,
      name: 'New Chat',
      keyCombo: {
        key: 'k',
        modifiers: ['ctrl,meta'],
      },
    },
    {
      id: HotkeyAction.TOGGLE_CURRENT_CHAT_VISIBILITY,
      name: 'Show/Hide Current Chat',
      keyCombo: {
        key: 'l',
        modifiers: ['ctrl,meta'],
      },
    },
    {
      id: HotkeyAction.TOGGLE_SIDEBAR,
      name: 'Show/Hide Left Sidebar',
      keyCombo: {
        key: '\\',
        modifiers: ['ctrl,meta', 'shift'],
      },
    },
    {
      id: HotkeyAction.TOGGLE_CURRENT_CHAT_PROFILE_INFO,
      name: 'Show/Hide Chat Contact Info',
      keyCombo: {
        key: 'i',
        modifiers: ['ctrl,meta'],
      },
    },
  ],
};

export const OPTION_KEYS = Object.keys(DEFAULT_OPTIONS);
