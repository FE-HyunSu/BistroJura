import { LoginUI, LoginForm } from "./style";

const LoginBox = () => {
  return (
    <>
      <LoginUI>
        <div className="inner">
          <LoginForm>
            <dl>
              <dt>LOGIN</dt>
              <dd>
                <input type="text" placeholder="로그인" />
              </dd>
              <dd>
                <input type="password" placeholder="비밀번호" />
              </dd>
              <dd>
                <button type="button">로그인</button>
                <p>로그인 결과 문구</p>
              </dd>
            </dl>
          </LoginForm>
        </div>
      </LoginUI>
    </>
  );
};
export default LoginBox;
