import React from "react";
import { Link, Redirect } from "react-router-dom";
import "../App.css";

import useForm from "../hooks/useForm";

function CreateBook() {
  const { values, handleChange, handleSubmit } = useForm();

  return (
    <>
      {values.toHome ? <Redirect to="/" /> : null}
      <div className="CreateBook">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <br />
              <Link to="/" className="btn btn-outline-warning float-left">
                Show BooK List
              </Link>
            </div>
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Add Book</h1>
              <p className="lead text-center">Create new book</p>

              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    placeholder="Title of the book"
                    name="title"
                    className="form-control"
                    onChange={handleChange}
                    value={values.title}
                  />
                </div>
                <br />

                <div className="form-group">
                  <input
                    type="text"
                    placeholder="ISBN"
                    name="isbn"
                    className="form-control"
                    onChange={handleChange}
                    value={values.isbn}
                  />
                </div>

                <div className="form-group">
                  <input
                    type="text"
                    placeholder="Author"
                    name="author"
                    className="form-control"
                    onChange={handleChange}
                    value={values.author}
                  />
                </div>

                <div className="form-group">
                  <input
                    type="text"
                    placeholder="Describe this book"
                    name="description"
                    className="form-control"
                    onChange={handleChange}
                    value={values.description}
                  />
                </div>

                <div className="form-group">
                  <input
                    type="date"
                    placeholder="published_date"
                    name="published_date"
                    className="form-control"
                    onChange={handleChange}
                    value={values.published_date}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    placeholder="Publisher of this book"
                    name="publisher"
                    className="form-control"
                    onChange={handleChange}
                    value={values.publisher}
                  />
                </div>

                <input
                  value="Add book"
                  type="submit"
                  className="btn btn-outline-warning btn-block mt-4"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CreateBook;
