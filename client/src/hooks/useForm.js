import { useState } from "react";
import axios from "axios";

const useForm = callback => {
  const [values, setValues] = useState({
    title: "",
    isbn: "",
    author: "",
    description: "",
    published_date: "",
    publisher: "",
    toHome: false
  });

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
    values
  };
};

export default useForm;
