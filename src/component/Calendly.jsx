import React, { useEffect } from 'react';

function CalendlyWidget() {
  useEffect(() => {
    // Load the Calendly script
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    // Clean up the script when the component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="calendly-inline-widget" data-url="https://calendly.com/verbung_consulting?primary_color=4cbd94" style={{ minWidth: '320px', height: '700px' }}></div>
  );
}

export default CalendlyWidget;