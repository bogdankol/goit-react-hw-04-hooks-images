import React from "react";
import s from "./ImageGalleryItem.module.css";
import PropTypes from "prop-types";

function ImageGalleryItem({ array, onClick }) {
  const onClickHandler = (e) => {
    onClick(e);
  };

  return array.map((el) => (
    <li key={el.id} className={s.item} onClick={onClickHandler}>
      <img
        src={el.webformatURL}
        alt={el.tags}
        className={s.img}
        data-largeurl={el.largeImageURL}
      ></img>
    </li>
  ));
}

ImageGalleryItem.propTypes = {
  array: PropTypes.array,
  onClick: PropTypes.func,
  onClose: PropTypes.func,
};

export default ImageGalleryItem;
