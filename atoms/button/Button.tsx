import { ButtonUI, LinkUI } from "./ButtonStyle";

interface ButtonType {
  btnType?: string | undefined;
  btnName?: string | undefined;
  onClick?: () => void | undefined;
  linkURL?: string | undefined;
}

const Button = ({ btnType, btnName, onClick, linkURL }: ButtonType) => {
  return (
    <>
      {btnType === `box` ? (
        <ButtonUI onClick={onClick}>{btnName}</ButtonUI>
      ) : (
        <LinkUI href={linkURL} onClick={onClick}>
          {btnName}
        </LinkUI>
      )}
    </>
  );
};
export default Button;
