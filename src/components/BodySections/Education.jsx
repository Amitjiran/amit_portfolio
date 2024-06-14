import React, { useState } from "react";

const Education = () => {
  const [selectedOption, setSelectedOption] = useState(1);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <div
      id="education"
      className="EducationBody flex flex-col justify-center items-center h-screen w-full
relative bg-cover bg-no-repeat bg-fixed text-white"
    >
      <div className="education-body-title text-3xl font-extrabold absolute right-10 top-10 font-mono  text-amber-400">
         academic history
      </div>
      <div className="flex w-9/12">
        {/* Sidebar */}
        <div className="w-1/7">
          <ul className="p-4">
            <li
              className={`cursor-pointer text-lg font-semibold p-3 mb-2 rounded bg-black/60 hover:bg-black/80 ${
                selectedOption === 1 ? "text-amber-300" : ""
              }`}
              onClick={() => handleOptionClick(1)}
            >
              B. Tech
            </li>
            <li
              className={`cursor-pointer text-lg font-semibold p-3 mb-2 rounded bg-black/60 hover:bg-black/80  ${
                selectedOption === 2 ? "text-amber-300 " : ""
              }`}
              onClick={() => handleOptionClick(2)}
            >
              12th
            </li>
            <li
              className={`cursor-pointer text-lg font-semibold p-3 mb-2 rounded bg-black/60 hover:bg-black/80 ${
                selectedOption === 3 ? "text-amber-300 " : ""
              }`}
              onClick={() => handleOptionClick(3)}
            >
             10th
            </li>
          </ul>
        </div>
        {/* Content Box */}
        <div className="flex-1 p-4 w-auto">
          {selectedOption === 1 && (
            <div className="h-full w-full backdrop-blur-sm bg-black/40 pt-10 pb-10 pr-6 pl-6 flex flex-col gap-6">
              <div className="degree flex flex-col gap-2 bg-black/50 rounded-lg p-4">
                <div className="d-title text-3xl font-semibold  text-amber-300">
                  Bachelor of Technology
                </div>
                <div className="d-address text-lg">
                  Chandigarh University
                   <br /> Punjab, India
                </div>
              </div>
              <div className="degree-extra flex justify-between">
                <div className="d-major flex flex-col gap-2 bg-black/70 rounded-lg p-4">
                  <div className="d-major-title text-3xl font-medium  text-amber-300">
                    Major:
                  </div>
                  <div className="d-major-text text-lg">
                    Computer Science and Engineering
                  </div>
                  <div className="d-major-link text-blue-400">
                    <a
                      href="http://"
                      target="_blank"
                      rel="noopener noreferrer"
                      title="section under development"
                    >
                      Learn more
                    </a>
                  </div>
                </div>
                <div className="d-tenure flex flex-col gap-2 bg-black/70 rounded-lg pt-4 pb-4 text-center pr-12 pl-12">
                  <div className="text-3xl font-medium  text-amber-300">
                    Tenure:
                  </div>
                  <div className="text-lg">4 Years</div>
                  <div className="text-base">2020-2024</div>
                </div>
                <div className="d-grades flex flex-col gap-2 bg-black/70 rounded-lg p-4 text-right">
                  <div className="text-3xl font-medium  text-amber-300">
                    CGPA:
                  </div>
                  <div className="text-lg">7.67 </div>
                  
                </div>
              </div>
            </div>
          )}
          {selectedOption === 2 && (
            <div className="h-full w-full backdrop-blur-sm bg-black/40 pt-10 pb-10 pr-6 pl-6 flex flex-col gap-6">
              <div className="degree flex flex-col gap-2 bg-black/50 rounded-lg p-4">
                <div className="d-title text-3xl font-semibold  text-amber-300">
                  Higher Secondary Certificate Examination
                </div>
                <div className="d-address text-lg">
                  Shishu Niketan Model School
                  <br /> Chandigarh ,India
                </div>
              </div>
              <div className="degree-extra flex justify-between">
                <div className="d-major flex flex-col gap-2 bg-black/70 rounded-lg p-4">
                  <div className="d-major-title text-3xl font-medium  text-amber-300">
                    BOARD-CBSE:
                  </div>
                  <div className="d-major-text text-lg">Non-Medical</div>
                  <div className="d-major-link text-blue-400">
                    <a
                      href="http://"
                      target="_blank"
                      rel="noopener noreferrer"
                      title="section under development"
                    >
                      Learn more
                    </a>
                  </div>
                </div>
                <div className="d-tenure flex flex-col gap-2 bg-black/70 rounded-lg pt-4 pb-4 text-center pr-12 pl-12">
                  <div className="text-3xl font-medium  text-amber-300">
                    Tenure:
                  </div>
                  <div className="text-lg">2 Years</div>
                  <div className="text-base">2017-2019</div>
                </div>
                <div className="d-grades flex flex-col gap-2 bg-black/70 rounded-lg p-4 text-right">
                  <div className="text-3xl font-medium  text-amber-300">
                    12th %:
                  </div>
                  <div className="text-lg">78.40</div>
                </div>
              </div>
            </div>
          )}
          {selectedOption === 3 && (
            <div className="h-full w-full backdrop-blur-sm bg-black/40 pt-10 pb-10 pr-6 pl-6 flex flex-col gap-6">
              <div className="degree flex flex-col gap-2 bg-black/50 rounded-lg p-4">
                <div className="d-title text-3xl font-semibold  text-amber-300">
                  10th- H.P board (state board)
                </div>
                <div className="d-address text-lg">
                 Aradhana Public School
                  <br /> Shimla,Rohru
                </div>
              </div>
              <div className="degree-extra flex justify-between">
                <div className="d-major flex flex-col gap-2 bg-black/70 rounded-lg p-4">
                  <div className="d-major-title text-3xl font-medium  text-amber-300">
                    10th completed
                  </div>
                  <div className="d-major-text text-lg">state board</div>
                  <div className="d-major-link text-blue-400">
                    <a
                      href="http://"
                      target="_blank"
                      rel="noopener noreferrer"
                      title="section under development"
                    >
                      Learn more
                    </a>
                  </div>
                </div>
                <div className="d-tenure flex flex-col gap-2 bg-black/70 rounded-lg pt-4 pb-4 text-center pr-12 pl-12">
                  <div className="text-3xl font-medium  text-amber-300">
                    Tenure:
                  </div>
                  <div className="text-lg">10th completed</div>
                </div>
                <div className="d-grades flex flex-col gap-2 bg-black/70 rounded-lg p-4 text-right">
                  <div className="text-3xl font-medium  text-amber-300">
                    10th %:
                  </div>
                  <div className="text-lg">90.40</div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Education;
