import styled from "styled-components";

export const HeaderUI = styled.header`
  display: block;
  position: relative;
  width: 100%;
  height: 8rem;
  border: 0.1rem solid #eee;
  .inner {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    max-width: 120rem;
    margin: auto;
    padding: 0 2rem;
    box-sizing: border-box;
    h1 {
      flex: 1 auto;
      a {
        display: inline-block;
        height: 100%;
        text-decoration: none;
        font-size: 1.4rem;
        color: #1d1d1d;
      }
    }
    nav {
      ul {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        li {
          a {
            padding: 0 1rem;
            text-decoration: none;
            font-size: 1.3rem;
            color: #1d1d1d;
          }
        }
      }
    }
  }
`;
