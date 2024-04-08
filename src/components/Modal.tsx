import mailIcon from "../assets/images/icons/mail.svg";
import Wrapper from "./UI/Wrapper";
import Button from "./UI/Button";
import { soMeArray } from "../social-media";

const Modal: React.FC<{
  open: boolean;
  onCloseModal: React.ReactEventHandler<HTMLDivElement>;
}> = ({ open, onCloseModal }) => {

  return (
    <div className={`modal ${open ? "modal--is-visible" : ""}`}>
      <div className="modal__inner">
        <h2 className="section-title section-title--blue section-title--less-margin">
          <img src={mailIcon} className="section-title__icon" />
          Get in <strong>Touch</strong>
        </h2>
        <Wrapper className="wrapper--narrow">
          <p className="modal__description">
            We will have an online order system in place soon. Until then,
            connect with us on any of the platforms below!
          </p>
        </Wrapper>

        <div className="social-icons">
          {soMeArray.map((platform) => (
            <Button
              key={platform.name}
              color="orange"
              className="social-icons__icon"
            >
              <img src={platform.icon} alt={platform.name} />
            </Button>
          ))}
        </div>
      </div>
      <div className="modal__close" onClick={onCloseModal}>
        X
      </div>
    </div>
  );
};

export default Modal;
