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
  const [inputCurrentAddress2, setInputCurrentAddress2] = useState("");
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
        <h2 className="mb-4 text-2xl font-semibold">Form Area</h2>
        <div className="grid grid-cols-2 gap-4">
          {/* Input Field Structure */}
          {[
            { label: "Name", state: inputName, setState: setInputName },
            { label: "Tin", state: inputTin, setState: setInputTin },
            {
              label: "Father's Name",
              state: inputFather,
              setState: setInputFather,
            },
            {
              label: "Mother's Name",
              state: inputMother,
              setState: setInputMother,
            },
            {
              label: "Current Address",
              state: inputCurrentAddress,
              setState: setInputCurrentAddress,
            },
            {
              label: "Current Address2",
              state: inputCurrentAddress2,
              setState: setInputCurrentAddress2,
            },
            {
              label: "Permanent Address",
              state: inputPermanentAddress,
              setState: setInputPermanentAddress,
            },
            {
              label: "Permanent Address 2nd Line",
              state: inputPermanentAddress2,
              setState: setInputPermanentAddress2,
            },
            { label: "Zone", state: zone, setState: setZone },
            { label: "Circle", state: zcircle, setState: setZcircle },
            { label: "Location", state: location, setState: setLocation },
            { label: "Income", state: inputIncome, setState: setInputIncome },
            { label: "Wealth", state: inputWealth, setState: setInputWealth },
          ].map((field, index) => (
            <div key={index} className="mb-4 flex flex-col">
              <label
                htmlFor={field.label}
                className="mb-1 text-sm font-semibold"
              >
                {field.label}
              </label>
              <input
                type="text"
                placeholder={field.label}
                value={field.state}
                onChange={(e) => field.setState(e.target.value)}
                className="rounded border border-gray-300 p-2 focus:border-blue-500 focus:outline-none"
              />
            </div>
          ))}
        </div>
        <button
          onClick={() => toPDF()}
          className="mt-5 rounded-xl bg-blue-600 px-7 py-3 text-white hover:bg-blue-700 focus:outline-none"
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
          <div className="flex flex-col px-[62px]">
            <div className="flex">
              <div className="w-[240px]">
                <p>Taxpayer's Name</p>
                <p>Taxpayer's Identification Number (TIN)</p>
                <p>Father's Name</p>
                <p>Mother's Name</p>
                <p>Current Address</p>
                {inputCurrentAddress2 ? <br /> : null}
                <p>Permanent Address</p>
              </div>
              <div className="w-[25px]">
                <p>:</p>
                <p>:</p>
                <p>:</p>
                <p>:</p>
                <p>:</p>
                {inputCurrentAddress2 ? <br /> : null}
                <p>:</p>
              </div>
              <div className="displayp">
                <p>{inputName}</p>
                <p>{inputTin}</p>
                <p>{inputFather}</p>
                <p>{inputMother}</p>
                <p>{inputCurrentAddress}</p>
                {inputCurrentAddress2 ? <p>{inputCurrentAddress2}</p> : null}
                <p>{inputPermanentAddress}</p>
                {inputPermanentAddress2 ? (
                  <p>{inputPermanentAddress2}</p>
                ) : null}
                {/* <br /> */}
                {/* <p>
                  Individual {`->`} Bangladeshi {`->`} Having NID
                </p> */}
              </div>
            </div>
            <div className="flex">
              <div className="w-[240px]">
                <p>Status</p>
              </div>
              <div className="w-[25px]">
                <p>:</p>
              </div>
              <div className="displayp">
                <p>
                  Individual {`->`} Bangladeshi {`->`} Having NID
                </p>
              </div>
            </div>
            <p className="text-ellipsis text-pretty mt-8">
              This is to certify that {inputName} is a registered taxpayer of
              Taxes Circle-{zcircle}, Taxes Zone- {zone}, {location}. The
              taxpayer has filled the return of income for the Assessment Year
              2023-24. Shown Total Income {inputIncome} BDT, Net Wealth{" "}
              {inputWealth} BDT and Paid Tax 0 BDT.
            </p>
          </div>
          <div className="h-16 w-16 bg-red-200">
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
