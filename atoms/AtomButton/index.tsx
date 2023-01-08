import { ButtonUI, LinkUI } from "./style";

interface AtomButtonType {
  btnType?: string | undefined;
  btnName?: string | undefined;
  onClick?: () => void | undefined;
  linkURL?: string | undefined;
}

const AtomButton = ({ btnType, btnName, onClick, linkURL }: AtomButtonType) => {
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
export default AtomButton;
