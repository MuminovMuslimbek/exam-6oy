import React, { useState } from 'react';

const App = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [contact, setContact] = useState('');
  const [country, setCountry] = useState('Uzbekistan');
  const [code, setCode] = useState('');
  const [number, setNumber] = useState('');
  const [card, setCard] = useState([]);

  function validate() {
    if (name.trim() === '') {
      alert('Iltimos ismingizni kiriting!!');
      return false;
    }
    if (email.trim() === '') {
      alert('Iltimos emailingizni kiriting!!');
      return false;
    }
    if (contact.trim() === '') {
      alert('Iltimos telefon raqamingizni kiriting!!');
      return false;
    }
    if (code.trim() === '') {
      alert('Iltimos ZIP-kodni kiriting!!');
      return false;
    }
    if (number.trim() === '') {
      alert('Iltimos VAT raqamini kiriting!!');
      return false;
    }
    return true;
  }

  function handleSubmit(e) {
    e.preventDefault();
    let isValid = validate();
    if (!isValid) {
      return;
    }
    const newCard = {
      name,
      email,
      address,
      contact,
      country,
      code,
      number,
    };
    setCard([...card, newCard]);
    e.target.reset();
    setName('');
    setEmail('');
    setAddress('');
    setContact('');
    setCountry('Uzbekistan');
    setCode('');
    setNumber('');
  }

  return (
    <div className='flex flex-col items-center justify-center gap-[50px]'>
      <form
        onSubmit={handleSubmit}
        className="max-w-[586px] w-full p-4 bg-white rounded-[12px] flex flex-col gap-[32px] h-full"
      >
        <h1 className="text-[18px] text-[#353535] font-medium">Edit address</h1>
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-4 justify-between">
            <label
              htmlFor="name"
              className="flex flex-col gap-2 font-medium text-[#353535] text-[14px] w-full"
            >
              Name
              <input
                onChange={(e) => setName(e.target.value)}
                className="py-[11px] px-[16px] outline-none border border-[#CACACA] rounded-[8px]"
                id="name"
                type="text"
                placeholder="Name"
              />
            </label>
            <label
              htmlFor="email"
              className="flex flex-col gap-2 font-medium text-[#353535] text-[14px] w-full"
            >
              Email
              <input
                onChange={(e) => setEmail(e.target.value)}
                className="py-[11px] px-[16px] outline-none border border-[#CACACA] rounded-[8px]"
                id="email"
                type="email"
                placeholder="JohnDoe@gmail.com"
              />
            </label>
          </div>
          <label
            htmlFor="address"
            className="flex flex-col gap-2 font-medium text-[#353535] text-[14px] w-full"
          >
            Billing address
            <textarea
              onChange={(e) => setAddress(e.target.value)}
              className="py-[11px] px-[16px] outline-none border border-[#CACACA] rounded-[8px]"
              id="address"
              placeholder="Address"
            ></textarea>
          </label>
          <div className="flex items-center gap-4">
            <label
              htmlFor="contact"
              className="flex flex-col gap-2 font-medium text-[#353535] text-[14px] w-full"
            >
              Contact
              <input
                onChange={(e) => setContact(e.target.value)}
                className="py-[11px] px-[16px] outline-none border border-[#CACACA] rounded-[8px]"
                id="contact"
                type="tel"
                placeholder="+998 ** *** ** **"
              />
            </label>
            <label
              htmlFor="country"
              className="flex flex-col gap-2 font-medium text-[#353535] text-[14px] w-full"
            >
              Country
              <select
                onChange={(e) => setCountry(e.target.value)}
                className="py-[11px] px-[16px] cursor-pointer outline-none border border-[#CACACA] rounded-[8px]"
                defaultValue="Uzbekistan"
                id="country"
              >
                <option value="Uzbekistan">Uzbekistan</option>
                <option value="England">England</option>
                <option value="USA">USA</option>
                <option value="Russia">Russia</option>
              </select>
            </label>
          </div>
          <div className="flex items-center gap-4">
            <label
              htmlFor="code"
              className="flex flex-col gap-2 font-medium text-[#353535] text-[14px] w-full"
            >
              Zip code
              <input
                onChange={(e) => setCode(e.target.value)}
                className="py-[11px] px-[16px] outline-none border border-[#CACACA] rounded-[8px]"
                id="code"
                type="number"
                placeholder="000000"
                maxLength={6}
              />
            </label>
            <label
              htmlFor="number"
              className="flex flex-col gap-2 font-medium text-[#353535] text-[14px] w-full"
            >
              Vat Number
              <input
                onChange={(e) => setNumber(e.target.value)}
                className="py-[11px] px-[16px] outline-none border border-[#CACACA] rounded-[8px]"
                id="number"
                type="number"
                placeholder="000000"
                maxLength={6}
              />
            </label>
          </div>
        </div>
        <button
          className="text-white text-[16px] font-medium bg-[#A020F0] w-full py-[11px] rounded-[8px] active:scale-95 transition-[0.5s]"
          type="submit"
        >
          Submit
        </button>
      </form>
      <div>
        {
          card.map((value, index) => (
            <div key={index} className='p-[20px] flex flex-col gap-[5px] text-blue-955 bg-white rounded-[8px] text-center'>
              <h3><strong>Name:</strong> {value.name}</h3>
              <p className='underline cursor-pointer'><strong>Email:</strong> {value.email}</p>
              {value.address ? <p><strong>Address:</strong> {value.address}</p> : ''}
              <p><strong>Contact:</strong> {value.contact}</p>
              <p><strong>Country:</strong> {value.country}</p>
              <p><strong>Zip code:</strong> {value.code}</p>
              <p><strong>Vat Number:</strong> {value.number}</p>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default App;
