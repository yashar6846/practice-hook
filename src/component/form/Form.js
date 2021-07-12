import React, { useState } from "react";
// import "./styles.css";
const Form = () => {
  const [form, setForm] = useState({ isim: "", sehir: "", bio: "" });

  console.log("FORM", form);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.value]: e.target.value });
  return (
    <div className="App">
      <h2>React Darsleri</h2>
      <form>
        <input
          value={form.isim}
          onChange={handleChange}
          placeholder="adiniz"
          name="isim"
        />
        <select value={form.sehir} onChange={handleChange} name="sehir">
          <option value="" disabled>
            sehir seciniz
          </option>
          <option value="ankara">Ankara</option>
          <option value="istanbul">Istanbul</option>
          <option value="izmir">Izmir</option>
        </select>
        <textarea
          value={form.bio}
          onChange={handleChange}
          rows="10"
          placeholder="biyografiniz"
          name="bio"
        />
        <button>Gondar</button>
      </form>
    </div>
  );
};

export default Form;
