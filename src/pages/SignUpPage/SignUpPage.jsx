
import { SignUpForm } from "../../components/SignUpForm/SignUpForm";
import {AuthWrapper} from "../../components/AuthWrapper/AuthWrapper";
import css from "./SignUpPage.module.css";

export default function SignUpPage() {
  return (
    <div className={css.SignUpPageWrapper}>
      
      <AuthWrapper>
      <SignUpForm />
      </AuthWrapper>
    </div>
  );
}
