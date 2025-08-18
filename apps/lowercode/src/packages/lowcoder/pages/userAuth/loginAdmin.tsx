import { trans } from "#lowcoder/i18n";
import FormLogin from "#lowcoder/pages/userAuth/formLoginAdmin";
import { AuthContainer } from "#lowcoder/pages/userAuth/authComponents";
import { requiresUnAuth } from "#lowcoder/pages/userAuth/authHOC";

// this is the classic Sign In for super admin
function LoginAdmin() {
  const loginHeading = trans("userAuth.userLogin");
  const loginSubHeading = trans("userAuth.poweredByLowcoder");

  return (
    <>
      <AuthContainer
        heading={loginHeading}
        subHeading={loginSubHeading}
      >
        <FormLogin />
      </AuthContainer>
    </>
  );
}

export default requiresUnAuth(LoginAdmin);
