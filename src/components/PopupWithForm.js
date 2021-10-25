import { popupClassList as popupClasses } from '../utils/constants';

function PopupWithForm(props) {
  const sectionClassName = `${popupClasses.popupClass} ${
    popupClasses.popupTypeClassPrefix
  }${props.name} ${props.isOpen ? popupClasses.openedPopup : ""}`;
  const formPopupClassName = `${popupClasses.formPopupClass} ${popupClasses.formPopupTypePrefix}${props.name}`;

  return (
    <section className={sectionClassName}>
      <div className={formPopupClassName}>
        {props.children}
        <button className="close-button" type="button" aria-label="Close" onClick={props.onClose}></button>
      </div>
    </section>
  );
}

export default PopupWithForm;
