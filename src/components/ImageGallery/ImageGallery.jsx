import React, { useState, useEffect } from "react";
import s from "./ImageGallery.module.css";
import ImageGalleryItem from "../ImageGalleryItem";
import Loader from "../Loader";
import Modal from "../Modal";
import Button from "../Button";
import PropTypes from "prop-types";

const fetchData = (input, page) => {
  return fetch(
    `https://pixabay.com/api/?q=${input}&page=${page}&key=22223449-0f7605970ab6351a0732adfe1&image_type=photo&orientation=horizontal&per_page=12`
  );
};

function ImageGallery({ query }) {
  const [modal, setModal] = useState(false);
  const [url, setUrl] = useState("");
  const [imagesArray, setImagesArray] = useState([]);
  const [page, setPage] = useState(1);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState("idle");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (query === "") {
      return;
    }

    setPage(1);
    setImagesArray([]);
    setIsLoading(true);

    fetchData(query, page)
      .then((res) => {
        if (res.ok) {
          setIsLoading(true);
          return res.json();
        }
        return Promise.reject(
          new Error(
            `there are some problems with server or your input is bizarre.`
          )
        );
      })
      .then((result) => {
        if (result.hits.length > 0) {
          setImagesArray(result.hits);
          setStatus("resolved");
          setIsLoading(false);
          return;
        }
        setStatus("idle");
        setIsLoading(false);
        return alert("there are no results!");
      })
      .catch((err) => {
        setStatus("rejected");
        setError(err);
      });
  }, [query]);

  useEffect(() => {
    if (page === 1) {
      return;
    }

    setIsLoading(true);

    fetchData(query, page)
      .then((res) => {
        if (res.ok) {
          setIsLoading(true);
          return res.json();
        }
        return Promise.reject(
          new Error(
            `there are some problems with server or your input is bizarre.`
          )
        );
      })
      .then((result) => {
        if (result.hits.length > 0) {
          setImagesArray((array) => [...array, ...result.hits]);
          setStatus("resolved");
          setIsLoading(false);

          window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: "smooth",
          });
          return;
        }

        setStatus("idle");
        setIsLoading(false);
        return alert("there are no results!");
      })
      .catch((err) => {
        setStatus("rejected");
        setError(err);
      });
  }, [page]);

  const onClickHandler = () => {
    setPage((prev) => prev + 1);
  };

  const onClick = (e) => {
    setUrl(e.target.dataset.largeurl);
    setModal(true);
  };

  const closeModal = (e) => {
    setModal(false);
  };

  return (
    <div>
      {status === "rejected" && (
        <div className={s.div}>
          <h2>{error.message}</h2>
        </div>
      )}

      {status === "resolved" && (
        <div className={s.div}>
          <ul className={s.list}>
            <ImageGalleryItem
              array={imagesArray}
              onClick={onClick}
              onClose={closeModal}
            />
          </ul>
          {isLoading && <Loader />}
          {imagesArray.length >= 12 && (
            <Button onButtonClick={onClickHandler} />
          )}
        </div>
      )}

      {modal && <Modal src={url} onCloseModalWindow={closeModal} />}
    </div>
  );
}

ImageGallery.propTypes = {
  query: PropTypes.string,
};

export default ImageGallery;
