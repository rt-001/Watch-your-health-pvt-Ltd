module.exports = {
  as_hr_02: {
    sections: [
      "Key Body Vitals",
      "Heart Health",
      "Stress Level",
      "Fitness Levels",
      "Posture",
      "Body Composition",
    ],
    mappings: {
      accuracy: "accuracy",
      heart_rate: "vitalsMap.vitals.heart_rate",
      bp_sys: "vitalsMap.vitals.bp_sys",
      bp_dia: "vitalsMap.vitals.bp_dia",
      bmi: "bodyCompositionData.BMI",
      cardio_time: "exercises[2].setList[0].time",
    },
    classification: {
      bmi: [
        { range: [0, 18.5], label: "Underweight" },
        { range: [18.5, 24.9], label: "Normal" },
        { range: [25, 29.9], label: "Overweight" },
        { range: [30, Infinity], label: "Obese" },
      ],
    },
  },
  as_card_01: {
    sections: [
      "Key Body Vitals",
      "Cardiovascular Endurance",
      "Body Composition",
    ],
    mappings: {
      accuracy: "accuracy",
      heart_rate: "vitalsMap.vitals.heart_rate",
      bmi: "bodyCompositionData.BMI",
      cardio_time: "exercises[2].setList[0].time",
    },
    classification: {},
  },
};
