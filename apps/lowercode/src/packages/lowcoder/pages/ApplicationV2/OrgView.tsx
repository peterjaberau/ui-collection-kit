import { Helmet } from "react-helmet";
import { OrgLayout } from "./OrgLayout";
import { trans } from "#lowcoder/i18n";

export function OrgView() {

  return (
    <><Helmet>
      {<title>{trans("home.orgHomeTitle")}</title>}
    </Helmet><OrgLayout /></>
  );

};
