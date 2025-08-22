import {
  MicrosoftSqlResource,
  MicrosoftSqlSSL,
} from "@/public/public-types"

export const MicrosoftSqlSSLInitial: MicrosoftSqlSSL = {
  ssl: false,
  privateKey: "",
  clientCert: "",
  caCert: "",
  verificationMode: "full",
}

export const MicrosoftSqlResourceInitial: MicrosoftSqlResource = {
  connectionOpts: [
    {
      key: "",
      value: "",
    },
  ],
  databaseName: "",
  host: "",
  password: "",
  port: "1433",
  ssl: MicrosoftSqlSSLInitial,
  username: "",
}
