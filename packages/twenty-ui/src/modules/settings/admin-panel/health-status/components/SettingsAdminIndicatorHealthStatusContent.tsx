import { ConnectedAccountHealthStatus } from '@twenty-modules/settings/admin-panel/health-status/components/ConnectedAccountHealthStatus';
import { JsonDataIndicatorHealthStatus } from '@twenty-modules/settings/admin-panel/health-status/components/JsonDataIndicatorHealthStatus';
import { WorkerHealthStatus } from '@twenty-modules/settings/admin-panel/health-status/components/WorkerHealthStatus';
import { useParams } from 'react-router-dom';
import { HealthIndicatorId } from '@twenty-ui/front/generated/graphql';

export const SettingsAdminIndicatorHealthStatusContent = () => {
  const { indicatorId } = useParams();

  switch (indicatorId) {
    case HealthIndicatorId.database:
    case HealthIndicatorId.redis:
    case HealthIndicatorId.app:
      return <JsonDataIndicatorHealthStatus />;
    case HealthIndicatorId.worker:
      return <WorkerHealthStatus />;
    case HealthIndicatorId.connectedAccount:
      return <ConnectedAccountHealthStatus />;

    default:
      return null;
  }
};
