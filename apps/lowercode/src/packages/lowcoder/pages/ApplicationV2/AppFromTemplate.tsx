import ApplicationApi from "#lowcoder/api/applicationApi";
import { useParams } from "react-router-dom";
import { validateResponse } from "#lowcoder/api/apiUtils";
import history from "#lowcoder/util/history";
import { APPLICATION_VIEW_URL, ALL_APPLICATIONS_URL } from "#lowcoder/constants/routesURL";
import { WhiteLoading } from "#lowcoder-design/index";
import React, { useEffect } from "react";
import { CommonTextLabel } from "#lowcoder-design/index";
import styled from "styled-components";
import { trans } from "#lowcoder/i18n";
import { ERROR_CODES } from "#lowcoder/constants/apiConstants";
import { messageInstance } from "#lowcoder-design/components/GlobalInstances";

const CreateDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  gap: 8px;
`;

export default function AppFromTemplate() {
  const templateId = useParams<any>().templateId;

  useEffect(() => {
    ApplicationApi.createFromTemplate(templateId)
      .then((resp) => {
        if (validateResponse(resp)) {
          history.replace(
            APPLICATION_VIEW_URL(resp.data.data.applicationInfoView.applicationId, "edit")
          );
        }
      })
      .catch((e) => {
        messageInstance.error(trans("home.importError", { message: e.message }));
        if (e.code !== ERROR_CODES.REQUEST_NOT_AUTHORISED) {
          history.replace(ALL_APPLICATIONS_URL);
        }
      });
  }, [templateId]);

  return (
    <CreateDiv>
      <WhiteLoading size={25} />
      <CommonTextLabel>{trans("createAppButton.creating")}</CommonTextLabel>
    </CreateDiv>
  );
}
