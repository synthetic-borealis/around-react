import {
  popupClassList as popupClasses,
  imagePopupContainerSelector,
} from '../utils/constants';

function ImagePopup() {
  const className = `${popupClasses.popupClass} ${popupClasses.popupTypeClassPrefix}image`;

  return (
    <section className={className}>
      <div className="image-popup">
        <img className="image-popup__image" src="#" alt="PLACEHOLDER" />
        <p className="image-popup__caption"></p>
        <button className="close-button close-button_type_image-popup" type="button"></button>
      </div>
    </section>
  );
}

export default ImagePopup;
