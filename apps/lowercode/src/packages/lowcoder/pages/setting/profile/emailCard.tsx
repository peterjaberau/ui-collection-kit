import { checkEmailValid } from "#lowcoder/util/stringUtils";
import {
  BindCardWrapper,
  CardConfirmButton,
  StyledFormInput,
} from "#lowcoder/pages/setting/profile/profileComponets";
import React, { useState } from "react";
import UserApi from "#lowcoder/api/userApi";
import { validateResponse } from "#lowcoder/api/apiUtils";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserAction } from "#lowcoder/redux/reduxActions/userActions";
import { trans } from "i18n";
import { selectSystemConfig } from "#lowcoder/redux/selectors/configSelectors";
import { messageInstance } from "#lowcoder-design/components/GlobalInstances";

function EmailCard() {
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();
  const config = useSelector(selectSystemConfig);
  const authId = config?.form.id;

  const bindEmail = (email: string) => {
    UserApi.bindEmail({ email: email, authId })
      .then((resp) => {
        if (validateResponse(resp)) {
          messageInstance.success(trans("profile.bindEmailSuccess"));
          dispatch(fetchUserAction());
        }
      })
      .catch((e) => {
        messageInstance.error(e.message);
      });
  };
  return (
    <BindCardWrapper>
      <StyledFormInput
        mustFill
        label={trans("profile.email")}
        onChange={(value, valid) => setEmail(valid ? value : "")}
        placeholder={trans("profile.emailPlaceholder")}
        checkRule={{
          check: (value) => checkEmailValid(value),
          errorMsg: trans("profile.emailCheck"),
        }}
      />
      <CardConfirmButton buttonType="primary" disabled={!email} onClick={() => bindEmail(email)}>
        {trans("profile.submit")}
      </CardConfirmButton>
    </BindCardWrapper>
  );
}

export default EmailCard;
