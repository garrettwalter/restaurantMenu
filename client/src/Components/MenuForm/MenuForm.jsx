import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../../utils/API";

const MenuForm = ({buttonText, handleFormSubmit }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [img, setImg] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");

  const { id } = useParams();

  useEffect(() => {
    console.log(id);
    if (id) {
      API.getItem(id).then((response) => {
        console.log(response.data);
       
        setTitle(response.data.title);
        setDescription(response.data.description);
        setImg(response.data.img);
        setPrice(response.data.price);
        setCategory(response.data.category);
      });
    }
  }, [id]);

  return (
    <form
      className="col s12"
      onSubmit={(e) => {
        handleFormSubmit(e, { title, description, img, price, category }, id);
      }}
    >
      <div className="row">
        <div className="input-field col s6">
          <input
            placeholder="Dish Name"
            id="title"
            type="text"
            className="validate"
            name="title"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </div>

        <div className="input-field col s6">
          <input
            placeholder="Image Url"
            id="img"
            type="text"
            className="validate"
            name="img"
            value={img}
            onChange={(e) => {
              setImg(e.target.value);
            }}
          />
        </div>
        <div className="input-field col s6">
          <input
            placeholder="Price"
            id="price"
            type="text"
            className="validate"
            name="price"
            value={price}
            onChange={(e) => {
              setPrice(e.target.value);
            }}
          />
        </div>
        <div className="input-field col s6">
          <select
            className="browser-default"
            name="category"
            value={category}
            onChange={(e) => {
              setCategory(e.target.value);
            }}
          >
            <option value="" selected>
              Category
            </option>
            <option value="Appetizer">Appetizer</option>
            <option value="Entree">Entree</option>
            <option value="Dessert">Dessert</option>
          </select>
        </div>
        <div className="input-field col s12">
          <input
            placeholder="description"
            id="description"
            type="text"
            className="validate"
            name="description"
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
        </div>
        <div className="col s12">
          <button
            className="btn waves-effect waves-light submit-button"
            type="submit"
            name="action"
          >
            {buttonText}
          </button>
        </div>
      </div>
    </form>
  );
};

export default MenuForm;