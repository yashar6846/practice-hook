import React, { useState } from "react";
// import "./condition.css";
const Condition = () => {
  const [isim, setIsim] = useState("");
  const [hataMesaji, setHataMesaji] = useState("");
  const [girisYapildi, setGirisYapildi] = useState(false);

  const handleChange = (e) => setIsim(e.target.value);

  const handleSubmit = (isim) => {
    if (isim.length < 6) {
      setHataMesaji("Kullanici ismi en az 6 karakter olmalidir.");
    } else {
      setHataMesaji("");
      setGirisYapildi(true);
    }
  };
  return (
    <div className="con">
      <h3>react Darslari</h3>
      {girisYapildi && <p>cikis yapildi</p>}
      {girisYapildi ? (
        <>
          <h2>Hosgeldiniz, {isim}</h2>
          <button onClick={() => setGirisYapildi(false)}>cikis Yap</button>
        </>
      ) : (
        <React.Fragment>
          <input
            name="isim"
            placeholder="isiminz"
            value={isim}
            onChange={handleChange}
          />
          <button onClick={() => handleSubmit(isim)}>Giris</button>
          <br />
          {hataMesaji ? <h4>{hataMesaji}</h4> : <h2>Giris yapiniz.</h2>}
        </React.Fragment>
      )}
    </div>
  );
};

export default Condition;
