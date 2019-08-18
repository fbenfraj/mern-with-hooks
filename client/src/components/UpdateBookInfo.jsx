import React from "react";
import { Link, Redirect } from "react-router-dom";
import "../App.css";

import useForm from "../hooks/useForm";

function UpdateBookInfo(props) {
  var { values, handleChange, handleUpdate } = useForm(props);

  return (
    <>
      {values.toHome ? <Redirect to="/" /> : null}
      <div className="UpdateBookInfo">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <br />
              <Link to="/" className="btn btn-outline-warning float-left">
                Show BooK List
              </Link>
            </div>
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Edit Book</h1>
              <p className="lead text-center">Update Book's Info</p>
            </div>
          </div>

          <div className="col-md-8 m-auto">
            <form noValidate onSubmit={handleUpdate}>
              <div className="form-group">
                <label htmlFor="title">Title</label>
                <input
                  type="text"
                  placeholder="Title of the Book"
                  name="title"
                  className="form-control"
                  value={values.title}
                  onChange={handleChange}
                />
              </div>
              <br />

              <div className="form-group">
                <label htmlFor="isbn">ISBN</label>
                <input
                  type="text"
                  placeholder="ISBN"
                  name="isbn"
                  className="form-control"
                  value={values.isbn}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="author">Author</label>
                <input
                  type="text"
                  placeholder="Author"
                  name="author"
                  className="form-control"
                  value={values.author}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="description">Description</label>
                <input
                  type="text"
                  placeholder="Describe this book"
                  name="description"
                  className="form-control"
                  value={values.description}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="published_date">Published Date</label>
                <input
                  type="date"
                  placeholder="published_date"
                  name="published_date"
                  className="form-control"
                  value={values.published_date}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="publisher">Publisher</label>
                <input
                  type="text"
                  placeholder="Publisher of this Book"
                  name="publisher"
                  className="form-control"
                  value={values.publisher}
                  onChange={handleChange}
                />
              </div>

              <button
                type="submit"
                className="btn btn-outline-info btn-lg btn-block"
              >
                Update Book
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default UpdateBookInfo;
