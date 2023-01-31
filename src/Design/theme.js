const light = {
  border: "lightgray",
  backgroundColor: "lightgray",
  buttonColor: " #0d6efd",
  ToggleColor: "lightgreen",
  primaryColor: "#ffffff",
  secondaryColor: "#000000",
  textColor: "#000000",
  lightbgColor: "#ffffff",
};

const dark = {
  ...light,
  textColor: "white",
  lightbgColor: "black",
};

const themes = { light, dark };

export default themes;
