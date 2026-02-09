import * as nodemailerNamespace from "nodemailer";
import nodemailerDefault from "nodemailer";

console.log("Namespace:", Object.keys(nodemailerNamespace));
console.log(
  "Default:",
  nodemailerDefault ? Object.keys(nodemailerDefault) : "null",
);
console.log(
  "createTransporter type:",
  typeof nodemailerNamespace.createTransporter,
);
try {
  console.log(
    "Default createTransporter type:",
    typeof nodemailerDefault.createTransporter,
  );
} catch (e) {
  console.log("Default createTransporter error:", e.message);
}
