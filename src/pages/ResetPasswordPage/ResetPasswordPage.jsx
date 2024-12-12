
import { ResetPasswordForm } from "../../components/ResetPasswordForm/ResetPasswordForm";
import {AuthWrapper} from "../../components/AuthWrapper/AuthWrapper";
import css from "./ResetPasswordPage.module.css";

export default function ResetPasswordPage() {
  return (
    <div className={css.ResetPasswordPageWrapper}>
      
      <AuthWrapper>
      <ResetPasswordForm />
      </AuthWrapper>
    </div>
  );
}
