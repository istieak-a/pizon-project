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
  const [inputPermanentAddress2, setInputPermanentAddress2] = useState("");
  const [zone, setZone] = useState("");
  const [zcircle, setZcircle] = useState("");
  const [location, setLocation] = useState("");
  const [inputIncome, setInputIncome] = useState("2,99,999");
  const [inputWealth, setInputWealth] = useState("10,00,000");
  const { toPDF, targetRef } = usePDF({ filename: inputName });
  const generateRandomNumber = () => {
    const randomNumber = Math.floor(1000000000 + Math.random() * 9000000000);
    return randomNumber;
  };
  const randomTenDigitNumber = generateRandomNumber();

  return (
    <div className="flex font-serif ">
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
          <label htmlFor="permanentAddress2">Permanent Address 2nd line</label>
          <input
            type="text"
            placeholder="Permanent Address"
            value={inputPermanentAddress2}
            onChange={(e) => setInputPermanentAddress2(e.target.value)}
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
          <label htmlFor="Income">Income</label>
          <input
            type="text"
            placeholder="Income"
            value={inputIncome}
            onChange={(e) => setInputIncome(e.target.value)}
          />
          <label htmlFor="Wealth">Wealth</label>
          <input
            type="text"
            placeholder="Income"
            value={inputWealth}
            onChange={(e) => setInputWealth(e.target.value)}
          />
        </div>
        <button
          onClick={() => toPDF()}
          className="mt-5 rounded-xl bg-blue-600 px-7 py-3 text-white"
        >
          Download
        </button>
      </div>
      <div
        ref={targetRef}
        className="flex h-full w-full items-center justify-center"
      >
        <div className="template flex h-[842px] w-[595px] flex-col items-center justify-center gap-10">
          <div className="flex w-full flex-col items-end">
            <img
              src="https://i.postimg.cc/02sDM6S8/rutern-01.jpg"
              className="w-[100px]"
            />
            <p>Reference Number: {randomTenDigitNumber}</p>
          </div>
          <div className="flex flex-col items-center justify-center text-center">
            <img
              className="size-12"
              src="https://i.postimg.cc/mgwgXkhy/rutern-02.jpg"
              alt="e"
            />
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
          <div className="flex flex-col gap-10 px-[62px]">
            <div className="flex">
              <div className="w-[240px]">
                <p>Taxpayer's Name</p>
                <p>Taxpayer's Identification Number (TIN)</p>
                <p>Father's Name</p>
                <p>Mother's Name</p>
                <p>Current Address</p>
                <p>Permanent Address</p>
                <br />
                <p>Status</p>
              </div>
              <div className="w-[25px]">
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
                <p>{inputPermanentAddress2}</p>
                {/* <br /> */}
                <p>
                  Individual {`->`} Bangladeshi {`->`} Having NID
                </p>
              </div>
            </div>
            <p className="text-ellipsis text-pretty">
              This is to certify that {inputName} is a registered taxpayer of
              Taxes Circle-{zcircle}, Taxes Zone- {zone}, {location}. The
              taxpayer has filled the return of income for the Assessment Year
              2023-24. Shown Total Income {inputIncome} BDT, Net Wealth{" "}
              {inputWealth} BDT and Paid Tax 0 BDT. .
            </p>
          </div>
          <div className="h-10 w-10 bg-red-200">
            <QRCode
              value={`TIN: ${inputTin}, Reference Number: ${randomTenDigitNumber}`}
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
    </div>
  );
};

export default Home;
