import { useEffect } from "react";

const BloomEmbed = ({ formId }: { formId: string }) => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Check if window is defined (client-side)
      window.bloomSettings = {
        userId: "pk37ok3godqwz",
        profileId: "po871l118dw41",
      };

      if (typeof window.bloomScript === "undefined") {
        // Check if bloomScript is already loaded
        const bloomScript = document.createElement("script");
        bloomScript.async = true;

        fetch("https://code.bloom.io/version?t=" + Date.now())
          .then((t) => t.text())
          .then((t) => {
            bloomScript.src = "https://code.bloom.io/widget.js?v=" + t;
            document.head.appendChild(bloomScript);
            window.bloomScript = bloomScript; // Set bloomScript on window
          });
      }
    }
  }, []); // Empty dependency array ensures this runs only once on mount

  return <div data-bloom-form-id={formId} style={{ width: "100%" }}></div>;
};

export default BloomEmbed;
