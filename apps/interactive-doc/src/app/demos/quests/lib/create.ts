const isApp = {
  isPreviewSubdomain: true,
  isProjectSubdomain: true,
  isSandboxSubdomain: true,
  isVersionSubdomain: true,
}
const { isPreviewSubdomain, isProjectSubdomain, isSandboxSubdomain, isVersionSubdomain }: any = isApp

export function createAppConfig({ subdomain, workspaceConfig }: any) {
  if (isProjectSubdomain(subdomain)) {
    return createProjectConfig(subdomain, workspaceConfig) as any
  }

  if (isPreviewSubdomain(subdomain)) {
    return createPreviewConfig(subdomain, workspaceConfig) as any
  }

  if (isSandboxSubdomain(subdomain)) {
    return createSandboxConfig(subdomain, workspaceConfig) as any
  }

  if (isVersionSubdomain(subdomain)) {
    return createVersionConfig(subdomain, workspaceConfig) as any
  }

  throw new Error(`Invalid subdomain format: ${subdomain}`)
}

function createPreviewConfig(subdomain: any, workspaceConfig: any) {
  return {}
}

function createProjectConfig(subdomain: any, workspaceConfig: any): any {
  return {}
}

function createSandboxConfig(subdomain: any, workspaceConfig: any) {
  return {}
}

function createVersionConfig(subdomain: any, workspaceConfig: any) {
  return {}
}

function isValidProjectPart(part: string) {
  return {}
}
