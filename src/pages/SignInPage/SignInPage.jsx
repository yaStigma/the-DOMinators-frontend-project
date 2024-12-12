
import { SignInForm } from "../../components/SignInForm/SignInForm";
import {AuthWrapper} from "../../components/AuthWrapper/AuthWrapper";
import css from "./SignInPage.module.css";

export default function SignInPage() {
  return (
    <div className={css.SignInPageWrapper}>
      
      <AuthWrapper>
      <SignInForm />
      </AuthWrapper>
    </div>
  );
}
