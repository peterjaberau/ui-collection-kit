import { getUserDevice } from '../../utilities/device/getUserDevice';

export const getOsControlSymbol = () => {
  const device = getUserDevice();

  return device === 'mac' ? '⌘' : 'Ctrl';
};
