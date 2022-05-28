import React, { useState } from "react";
import "./styles/AddPost.css";
import Loader from "react-loader-spinner";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import { signup } from "../../apis/users";
import { useContext } from "react";
import { UserContext } from "../../context/UserContextProvider";

export default function SignUp({ history }) {
  document.title = "BLOGGING - SignUp";

  const { setUser } = useContext(UserContext);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = (event) => {
    setLoading(true);
    setError(null);
    event.preventDefault();
    signup(formData)
      .then((user) => {
        setUser(user);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error.response.data.message);
        setLoading(false);
        setError(error.response.data.message);
      });
  };

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  return (
    <div className="add-new-post">
      <div className="form-wrapper">
        <h1 className="text-2xl font-bold mb-2">Sign up for new account</h1>
        <hr />
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            onChange={handleChange}
            value={formData.name}
            required
            maxLength={60}
            type="text"
            name="name"
            id="name"
          />

          <label htmlFor="email">Email</label>
          <input
            onChange={handleChange}
            value={formData.email}
            required
            maxLength={60}
            type="email"
            name="email"
            id="email"
          />

          <label htmlFor="password">Password</label>
          <input
            onChange={handleChange}
            value={formData.password}
            required
            maxLength={60}
            type="password"
            name="password"
            id="password"
          />

          <div className="publish-btns">
            {loading ? (
              <Loader type="TailSpin" color="#fFFF" height={20} width={20} />
            ) : (
              <Button action={() => {}} text="Submit" />
            )}
          </div>
          <div>
            already have an account? <Link to="//user/signin">Sign in</Link>{" "}
            instead
          </div>
          {error && (
            <p className="box-border rounded px-4 py-2 shadow-sm border-2 text-red-400 font-bold bg-red-200">
              {error}
            </p>
          )}
        </form>
      </div>
    </div>
  );
}
