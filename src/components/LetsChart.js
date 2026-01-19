import React, { useState } from "react";
import Modal from "react-modal";
import CTAButton from "./CTAButton";

Modal.setAppElement("#root"); // Accessibility requirement

const GetStarted = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    budget: "",
    purpose: "",
    note: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.note.trim()) return;

    try {
      const response = await fetch("https://sheetdb.io/api/v1/YOUR_SHEET_ID", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ data: formData }),
      });

      const result = await response.json();
      console.log("✅ Result:", result);

      if (response.ok) {
        setSubmitted(true);
        setTimeout(() => {
          setSubmitted(false);
          onClose();
        }, 3000);
      } else {
        alert("❌ Failed to send message. Try again.");
      }
    } catch (error) {
      console.error("❌ Error:", error);
      alert("❌ Failed to send message. Try again.");
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Let's Chat Form"
      overlayClassName="fixed inset-0 bg-black bg-opacity-60 z-50 flex items-center justify-center"
      className="bg-background border border-neutral-default/20 text-neutral-default w-full max-w-4xl max-h-screen overflow-y-auto rounded-[12px] p-6 sm:p-8 md:p-12 relative shadow-lg"
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-neutral hover:opacity-70 text-2xl p-4"
        aria-label="Close modal"
      >
        ×
      </button>

      {/* Title */}
      <h2 className="font-satoshi text-h3 md:text-h2 font-semibold mb-4 py-4">
        How can I support your team?
      </h2>

      {submitted ? (
        <p className="font-generalsans text-neutral-default text-body">
          ✅ Your message was sent successfully. You’ll hear from us within 24 hours.
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Inputs */}
          <div className="font-generalsans text-body grid grid-cols-1 lg:grid-cols-2 gap-6">
            <InputField
              label="Full Name *"
              name="fullName"
              placeholder="Enter your name"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
            <InputField
              label="Email *"
              name="email"
              type="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <SelectField
              label="Project Budget"
              name="budget"
              options={[
                "Under $1,000",
                "$1,000 – $5,000",
                "$5,000 – $10,000",
                "Above $10,000",
              ]}
              value={formData.budget}
              onChange={handleChange}
            />
            <SelectField
              label="Let me know your goal *"
              name="purpose"
              options={[
                "HR Consultation",
                "Executive Support Services",
                "General Inquiry",
                "Resume Review",
                "Interview Preparation",
              ]}
              value={formData.purpose} // ✅ fixed bug
              onChange={handleChange}
              required
            />
          </div>

          {/* Notes */}
          <div className="flex flex-col gap-1.5">
            <label className="font-generalsans text-bodySm font-medium">
              Additional Note *
            </label>
            <textarea
              name="note"
              placeholder="Tell me about your goal"
              className="w-full p-2.5 rounded-md border border-neutral bg-transparent min-h-[150px] font-generalsans placeholder:text-bodySm"
              value={formData.note}
              onChange={handleChange}
              required
            />
          </div>

          <CTAButton text="Send a Message" type="submit" />
        </form>
      )}
    </Modal>
  );
};

export default GetStarted;

// 🔹 Reusable Input
const InputField = ({
  label,
  name,
  type = "text",
  placeholder,
  value,
  onChange,
  required,
}) => (
  <div className="flex flex-col gap-1.5">
    <label className="font-generalsans text-bodySm">{label}</label>
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      className="w-full p-2.5 rounded-md border border-neutral bg-transparent min-h-[50px] font-generalsans placeholder:text-bodySm"
      value={value}
      onChange={onChange}
      required={required}
    />
  </div>
);

// 🔹 Reusable Select
const SelectField = ({ label, name, options, value, onChange, required }) => (
  <div className="flex flex-col gap-1.5">
    <label className="font-generalsans text-bodySm">{label}</label>
    <select
      name={name}
      value={value}
      onChange={onChange}
      className="w-full p-2.5 pr-10 rounded-md border border-neutral bg-transparent min-h-[50px] font-generalsans placeholder:text-bodySm"
      required={required}
    >
      <option value="" disabled hidden>
        Select an option
      </option>
      {options.map((opt) => (
        <option key={opt} value={opt}>
          {opt}
        </option>
      ))}
    </select>
  </div>
);
