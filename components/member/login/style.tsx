import styled from "styled-components";

export const LoginUI = styled.div`
  display: block;
  .inner {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    min-height: calc(100vh - 15rem);
    max-width: 120rem;
    margin: auto;
    padding: 0 2rem;
    box-sizing: border-box;
  }
`;

export const LoginForm = styled.div`
  display: block;
  width: 32rem;
  padding: 2rem;
  border: 0.1rem solid #eee;
  border-radius: 0.5rem;
  dl {
    dt {
      padding: 2rem 0 1rem;
      font-weight: 200;
      font-size: 2.4rem;
      color: #7a7a7a;
      text-align: center;
    }
    dd {
      padding: 0.5rem 0;
      box-sizing: border-box;
      p {
        height: 1.5rem;
        padding-top: 0.5rem;
        font-size: 1.2rem;
        text-align: right;
      }
      input {
        width: 100%;
        padding: 1.2rem;
        box-sizing: border-box;
        border: 0.1rem solid #eee;
        border-radius: 0.2rem;
      }
      button {
        width: 100%;
        padding: 1.4rem 0;
        font-weight: 300;
        font-size: 1.4rem;
        color: #fff;
        background-color: #473726;
        border-radius: 0.4rem;
        transition: 0.3s;
        &:hover {
          background-color: #986935;
        }
      }
    }
  }
`;
