import { useState, useEffect } from "react";
import axios from "axios";

function useForm(props, callback) {
  const [values, setValues] = useState({
    title: "",
    isbn: "",
    author: "",
    description: "",
    published_date: "",
    publisher: "",
    toHome: false
  });

  useEffect(() => {
    axios
      .get("http://localhost:8082/api/books/" + props.match.params.id)
      .then(res => {
        setValues(res.data);
      })
      .catch(err => {
        console.log("Error from UpdateBookInfo " + err);
      });

    return function cleanup() {
      setValues({});
    };
  }, [props.match.params.id]);

  const handleSubmit = event => {
    event.preventDefault();
    axios
      .post("http://localhost:8082/api/books", values)
      .then(res => {
        setValues({
          title: "",
          isbn: "",
          author: "",
          description: "",
          published_date: "",
          publisher: "",
          toHome: true
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  const handleUpdate = event => {
    console.log(values);
    event.preventDefault();
    axios
      .put("http://localhost:8082/api/books/" + props.match.params.id, values)
      .then(res => {
        setValues({
          title: "",
          isbn: "",
          author: "",
          description: "",
          published_date: "",
          publisher: "",
          toHome: true
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  const handleChange = event => {
    event.persist();
    setValues(values => ({
      ...values,
      [event.target.name]: event.target.value
    }));
  };

  return {
    handleChange,
    handleSubmit,
    handleUpdate,
    values
  };
};

export default useForm;
