import { HeaderUI } from "./HeaderStyle";
import Button from "../../../atoms/button/Button";

const Header = () => {
  return (
    <>
      <HeaderUI>
        <div className="inner">
          <h1>
            <a href="/">BISTROJURA</a>
          </h1>
          <nav>
            <ul>
              <li>
                <Button btnType={`box`} btnName={`LOGIN`}></Button>
              </li>
            </ul>
          </nav>
        </div>
      </HeaderUI>
    </>
  );
};
export default Header;
