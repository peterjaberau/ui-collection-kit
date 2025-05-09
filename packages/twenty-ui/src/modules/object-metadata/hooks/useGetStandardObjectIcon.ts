import { getIconColorForObjectType } from '@twenty-modules/object-metadata/utils/getIconColorForObjectType';
import { getIconForObjectType } from '@twenty-modules/object-metadata/utils/getIconForObjectType';
import { useTheme } from '@emotion/react';

export const useGetStandardObjectIcon = (objectNameSingular: string) => {
  const theme = useTheme();

  const { Icon, IconColor } = {
    Icon: getIconForObjectType(objectNameSingular),
    IconColor: getIconColorForObjectType({
      objectType: objectNameSingular,
      theme,
    }),
  };

  return { Icon, IconColor };
};
