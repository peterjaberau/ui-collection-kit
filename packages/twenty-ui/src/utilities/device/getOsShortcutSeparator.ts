import { getUserDevice } from '../../utilities/device/getUserDevice';

export const getOsShortcutSeparator = () => {
  const device = getUserDevice();
  return device === 'mac' ? '' : ' ';
};
