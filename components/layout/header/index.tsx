import { HeaderBox } from "./style";

const Header = () => {
  return (
    <>
      <HeaderBox>
        <div className="inner">
          <h1>
            <a href="/">BISTROJURA</a>
          </h1>
          <nav>
            <ul>
              <li>
                <a href="">menu1</a>
              </li>
              <li>
                <a href="">menu2</a>
              </li>
              <li>
                <a href="">menu3</a>
              </li>
            </ul>
          </nav>
        </div>
      </HeaderBox>
    </>
  );
};
export default Header;
