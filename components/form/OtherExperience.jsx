import FormButton from "./FormButton";
import React, { useContext } from "react";
import { ResumeContext } from "../../pages/builder";

const OtherExperience = () => {
  const {
    resumeData,
    setResumeData,
  } = useContext(ResumeContext);

  const handleOtherExperience = (e, index) => {
    const newOtherExperience = [...resumeData.otherExperience];
    newOtherExperience[index][e.target.name] = e.target.value;
    setResumeData({ ...resumeData, OtherExperience: newOtherExperience });
  };

  const addOtherExperience = () => {
    setResumeData({
      ...resumeData,
      otherExperience: [
        ...resumeData.otherExperience,
        {
          title: "",
          description: ""
        },
      ],
    });
  };

  const removeOtherExperience = (index) => {
    const newOtherExperience = [...resumeData.otherExperience];
    newOtherExperience[index] = newOtherExperience[newOtherExperience.length - 1];
    newOtherExperience.pop();
    setResumeData({ ...resumeData, otherExperience: newOtherExperience });
  };

  return (
    <div className="flex-col-gap-2">
      <h2 className="input-title">Other Experience</h2>
      {resumeData.otherExperience.map((otherExperience, index) => (
        <div key={index} className="f-col">
          <input
            type="text"
            placeholder="Title"
            name="title"
            className="w-full other-input"
            value={otherExperience.title}
            onChange={(e) => handleOtherExperience(e, index)}
          />
          <input
            type="text"
            placeholder="Description"
            name="description"
            className="w-full other-input"
            value={otherExperience.description}
            onChange={(e) => handleOtherExperience(e, index)}
          />
        </div>
      ))}
      <FormButton
        size={resumeData.otherExperience.length}
        add={addOtherExperience}
        remove={removeOtherExperience}
      />
    </div>
  );
};

export default OtherExperience;
