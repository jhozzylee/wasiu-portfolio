import React, { useEffect } from "react";
import Modal from "react-modal";
import Cal, { getCalApi } from "@calcom/embed-react";

Modal.setAppElement("#root");

const BookCall = ({ isOpen, onClose }) => {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "booking" });
      cal("ui", {
        theme: "dark",
        layout: "month_view",
        hideEventTypeDetails: true,
        cssVarsPerTheme: {
          dark: {
            "cal-brand": "#D4AF37",
            "cal-text": "#EDEDED",
            "cal-background": "#0F1419",
            "cal-border-radius": "12px",
          },
          light: {
            "cal-brand": "#EDEDED",
          },
        },
      });
    })();
  }, []);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      shouldCloseOnOverlayClick={true}
      contentLabel="Book a Call"
      overlayClassName="fixed inset-0 bg-black/60 z-50 flex items-center justify-center"
      className="bg-[#171717] border border-neutral-800 max-w-4xl w-full rounded-2xl p-6 md:p-8 max-h-[95vh] overflow-y-auto shadow-xl"
    >
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-h2 font-satoshi text-neutral-default">
          Schedule a Call, Simplify Your Success
        </h2>
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="text-neutral-default hover:text-neutral-muted text-2xl leading-none"
        >
          &times;
        </button>
      </div>

      {/* Booking Calendar */}
      <div className="h-[650px]">
        <Cal
          namespace="booking"
          calLink="zi-creates/booking"
          style={{ width: "100%", height: "100%" }}
          config={{
            layout: "month_view",
            theme: "dark",
          }}
        />
      </div>
    </Modal>
  );
};

export default BookCall;
