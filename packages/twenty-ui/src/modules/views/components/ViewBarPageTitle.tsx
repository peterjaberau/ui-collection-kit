import { useParams } from 'react-router-dom';

import { PageTitle } from '@twenty-modules/ui/utilities/page-title/components/PageTitle';
import { useGetCurrentViewOnly } from '@twenty-modules/views/hooks/useGetCurrentViewOnly';
import { capitalize } from '@ui-collection-kit/twenty-shared/src/utils';

export const ViewBarPageTitle = () => {
  const { objectNamePlural } = useParams();

  const { currentView } = useGetCurrentViewOnly();

  if (!objectNamePlural) {
    return;
  }

  const pageTitle = currentView?.name
    ? `${currentView?.name} - ${capitalize(objectNamePlural)}`
    : capitalize(objectNamePlural);

  return <PageTitle title={pageTitle} />;
};
