
export class WorkerEnv {
  static flags: any = {} as any;
  static cloudHosting: boolean;

  static setFeatureFlags(featureFlags: any) {
    WorkerEnv.flags = featureFlags;
  }

  static setCloudHosting(cloudHosting: boolean) {
    WorkerEnv.cloudHosting = cloudHosting;
  }

  static getFeatureFlags() {
    return WorkerEnv.flags
  }

  static getCloudHosting() {
    return WorkerEnv.cloudHosting;
  }
}
