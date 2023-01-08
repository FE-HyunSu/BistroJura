import { HeaderBox } from "./style";
import AtomButton from "../../../atoms/AtomButton";

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
                <AtomButton btnType={`box`} btnName={`LOGIN`}></AtomButton>
              </li>
            </ul>
          </nav>
        </div>
      </HeaderBox>
    </>
  );
};
export default Header;
