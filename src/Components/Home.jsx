import React, { useState } from "react";
import "./home.css";
import QRCode from "react-qr-code";
import { usePDF } from "react-to-pdf";
const Home = () => {
  const [inputName, setInputName] = useState("");
  const [inputTin, setInputTin] = useState("");
  const [inputFather, setInputFather] = useState("");
  const [inputMother, setInputMother] = useState("");
  const [inputCurrentAddress, setInputCurrentAddress] = useState("");
  const [inputPermanentAddress, setInputPermanentAddress] = useState("");
  const [zone, setZone] = useState("");
  const [zcircle, setZcircle] = useState("");
  const [location, setLocation] = useState("");
  const [qrtext, setQrtext] = useState("");
  const { toPDF, targetRef } = usePDF({filename: 'page.pdf'});

  return (
    <div className="font-serif flex justify-between">
      <div className="m-10">
        <h2>Form Area</h2>
        <div className="flex flex-col gap-3">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            placeholder="Name"
            value={inputName}
            onChange={(e) => setInputName(e.target.value)}
          />
          <label htmlFor="tin">Tin</label>
          <input
            type="text"
            placeholder="Tin"
            value={inputTin}
            onChange={(e) => setInputTin(e.target.value)}
          />
          <label htmlFor="father">Father</label>
          <input
            type="text"
            placeholder="Father"
            value={inputFather}
            onChange={(e) => setInputFather(e.target.value)}
          />
          <label htmlFor="mother">Mother</label>
          <input
            type="text"
            placeholder="Mother"
            value={inputMother}
            onChange={(e) => setInputMother(e.target.value)}
          />
          <label htmlFor="currentAddress">Current Address</label>
          <input
            type="text"
            placeholder="Current Address"
            value={inputCurrentAddress}
            onChange={(e) => setInputCurrentAddress(e.target.value)}
          />
          <label htmlFor="permanentAddress">Permanent Address</label>
          <input
            type="text"
            placeholder="Permanent Address"
            value={inputPermanentAddress}
            onChange={(e) => setInputPermanentAddress(e.target.value)}
          />
          <label htmlFor="zone">Zone</label>
          <input
            type="text"
            placeholder="Zone"
            value={zone}
            onChange={(e) => setZone(e.target.value)}
          />
          <label htmlFor="circle">Circle</label>
          <input
            type="text"
            placeholder="Circle"
            value={zcircle}
            onChange={(e) => setZcircle(e.target.value)}
          />
          <label htmlFor="location">Location</label>
          <input
            type="text"
            placeholder="Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
          <label htmlFor="qrtext">QR Text</label>
          <input
            type="text"
            placeholder="QR Text"
            value={qrtext}
            onChange={(e) => setQrtext(e.target.value)}
          />
        </div>
        <button onClick={() => toPDF()} className="mt-5 bg-blue-600 text-white px-7 py-3 rounded-xl">Download</button>
      </div>
      <div ref={targetRef} className="template flex w-[595px] gap-10 flex-col items-center my-20 mx-3">
        <div className="ms-[360px] flex flex-col items-end">
          <img src="https://i.postimg.cc/02sDM6S8/rutern-01.jpg" className="w-[100px]" />
          <p>Reference Number: 000000000</p>
        </div>
        <div className="text-center flex flex-col justify-center items-center">
          <img className="size-12" src="https://i.postimg.cc/G3YvmPH7/National-Board-of-Revenue-1.jpg" alt="e" />
          <p>
            Government of the People's Republic of Bangladesh
            <br />
            National Board of Revenue
            <br />
            Income Tax Department
          </p>
          <p className="pt-5">
            Income Tax Certificate
            <br />
            Assessment Year: 2023-2024
          </p>
        </div>
        <div className="flex gap-10">
          <div>
            <p>Taxpayer's Name</p>
            <p>Taxpayer's Identification Number (TIN)</p>
            <p>Father's Name</p>
            <p>Mother's Name</p>
            <p>Current Address</p>
            <p>Permanent Address</p>
            <br />
            <p>Status</p>
          </div>
          <div>
            <p>:</p>
            <p>:</p>
            <p>:</p>
            <p>:</p>
            <p>:</p>
            <p>:</p>
            <br />
            <p>:</p>
          </div>
          <div className="displayp">
            <p>{inputName}</p>
            <p>{inputTin}</p>
            <p>{inputFather}</p>
            <p>{inputMother}</p>
            <p>{inputCurrentAddress}</p>
            <p>{inputPermanentAddress}</p>
            <br />
            <p>Individual</p>
          </div>
        </div>
        <p className="px-28">
          This is to certify that {inputName} is a registered taxpayer of Taxes
          Circle-{zcircle}, Taxes Zone- {zone}, {location}. The taxpayer has
          filled the return of income for the Assessment Year 2023-24. Shown
          Total Income {"2,99,999"} BDT, Net Wealth {"10,00,000"} BDT and Paid
          Tax 0 BDT. .
        </p>
        <div className="bg-red-200 h-10 w-10">
            <QRCode value={qrtext}
            size={256}
            style={{ height: "auto", maxWidth: "100%", width: "100%" }}
            viewBox={`0 0 256 256`}
             />
        </div>
        <p>
          This is a system generated certificate, and requires no signature.{" "}
        </p>
      </div>
    </div>
  );
};

export default Home;
