import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../../styles/reset.css";
import LogoImage from "../../assets/logo/logo_vertical.svg";
import { startTokenAutoReissue } from "./Reissue";
import EyeIcon from "../../assets/eyes.svg";
import EyeOpenIcon from "../../assets/eyes_open.svg";
import RedIcon from "../../assets/signup_error.png";
import UserIcon from "../../assets/account.svg";
import LockIcon from "../../assets/password.svg";
import { showAlerts } from "../../alert";

import {
  Container,
  Loginarea,
  Left_area,
  Logo,
  Slogan,
  LoginDiv,
  Logintitle,
  Inputtext,
  ErrorIcon,
  Input,
  ToggleButton,
  EyeImage,
  Button,
  SubText,
  LinkText,
  Inputcontainer,
  Inputcontainer1,
} from "./login.styles";

function Login() {
  const [form, setForm] = useState({ accountId: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const [fieldErrors, setFieldErrors] = useState({
    accountId: false,
    password: false,
  });

  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  // 입력 제한 추가 (아이디: 영문, 숫자, _, 비밀번호: 영문, 숫자, !@#$%^&* 만)
  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "accountId") {
      const filtered = value.replace(/[^a-zA-Z0-9_]/g, "");
      setForm((prev) => ({ ...prev, accountId: filtered }));
    } else if (name === "password") {
      const filtered = value.replace(/[^a-zA-Z0-9!@#$%^&*]/g, "");
      setForm((prev) => ({ ...prev, password: filtered }));
    }
  };

  useEffect(() => {
    if (error) {
      console.error("[로그인 에러]", error);
      alert(error + "\n잠시 후 다시 시도해주세요.");
    }
  }, [error]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) return;

    setLoading(true);
    setError("");

    try {
      localStorage.clear();
      document.cookie =
        "accessTokenNumber=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/;";

      const response = await fetch(
        `${import.meta.env.VITE_REACT_APP_API_BASE_URL}/auth/signin`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
          mode: "cors",
          credentials: "include",
        }
      );

      if (!response.ok) {
        switch (response.status) {
          case 400:
            throw new Error("잘못된 요청입니다.");
          case 401:
            setFieldErrors({ accountId: false, password: true });
            setTimeout(
              () => setFieldErrors({ accountId: false, password: false }),
              3000
            );
            throw new Error("비밀번호가 잘못되었습니다.");
          case 404:
            setFieldErrors({ accountId: true, password: false });
            setTimeout(
              () => setFieldErrors({ accountId: false, password: false }),
              3000
            );
            throw new Error("아이디를 찾을 수 없습니다.");
          case 500:
            throw new Error(
              "서버 오류가 발생했습니다. 잠시 후 다시 시도해주세요."
            );
          default:
            throw new Error(
              `알 수 없는 오류가 발생했습니다. (HTTP ${response.status})`
            );
        }
      }

      let data;
      try {
        data = await response.json();
      } catch (parseError) {
        throw new Error("서버 응답 파싱 중 오류가 발생했습니다.");
      }

      if (!data.accessToken || !data.refreshToken) {
        throw new Error(
          "서버 응답이 올바르지 않습니다. 토큰이 존재하지 않습니다."
        );
      }

      try {
        localStorage.setItem("accessToken", data.accessToken);
        localStorage.setItem("refreshToken", data.refreshToken);
        localStorage.setItem("accountId", form.accountId);
        document.cookie = "accessTokenNumber=0; path=/;";

        startTokenAutoReissue();
      } catch (storageError) {
        throw new Error("localStorage 저장 중 오류가 발생했습니다.");
      }

      showAlerts();
      navigate("/");
    } catch (err) {
      console.error("로그인 에러:", err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <Loginarea>
        <Left_area>
          <Logo src={LogoImage} alt="로고" />
          <Slogan>
            <strong>SemiWiki</strong>에서 대마고의 모든 정보를
          </Slogan>
          <Slogan>
            <strong>기록하고 공유</strong>하세요
          </Slogan>
        </Left_area>

        <LoginDiv>
          <Logintitle>로그인</Logintitle>
          <form onSubmit={handleSubmit}>
            <Inputtext>
              <img
                src={UserIcon}
                alt=""
                style={{ marginRight: "8px", width: "20px", height: "20px" }}
              />
              아이디
            </Inputtext>
            <Inputcontainer1 hasError={fieldErrors.accountId}>
              <Input
                type="text"
                name="accountId"
                value={form.accountId}
                onChange={handleChange}
                placeholder="아이디를 입력해주세요"
                hasError={fieldErrors.accountId}
              />
              {fieldErrors.accountId && <ErrorIcon src={RedIcon} alt="오류" />}
            </Inputcontainer1>

            <Inputtext>
              <img
                src={LockIcon}
                alt=""
                style={{ marginRight: "8px", width: "20px", height: "20px" }}
              />
              비밀번호
            </Inputtext>
            <Inputcontainer hasError={fieldErrors.password}>
              <Input
                type={showPassword ? "text" : "password"}
                name="password"
                value={form.password}
                onChange={handleChange}
                placeholder="비밀번호를 입력해주세요"
              />
              {!fieldErrors.password && (
                <ToggleButton type="button" onClick={togglePassword}>
                  <EyeImage
                    src={showPassword ? EyeOpenIcon : EyeIcon}
                    alt="비밀번호 보기"
                  />
                </ToggleButton>
              )}
              {fieldErrors.password && <ErrorIcon src={RedIcon} alt="오류" />}
            </Inputcontainer>

            <Button type="submit" disabled={loading}>
              {loading ? "로딩 중..." : "로그인"}
            </Button>
          </form>

          <SubText>
            아직 회원이 아니신가요?{" "}
            <LinkText as={Link} to="/signup">
              회원가입
            </LinkText>
          </SubText>
        </LoginDiv>
      </Loginarea>
    </Container>
  );
}

export default Login;
