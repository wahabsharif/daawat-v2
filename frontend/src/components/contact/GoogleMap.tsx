import React from "react";

function GoogleMap() {
  return (
    <section className="p-4">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d425292.8128645101!2d72.75644191021944!3d33.61567899376378!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbfd07891722f%3A0x6059515c3bdb02b6!2sIslamabad%2C%20Islamabad%20Capital%20Territory%2C%20Pakistan!5e0!3m2!1sen!2s!4v1724934944385!5m2!1sen!2s"
        width="100%"
        height="500"
        loading="lazy"
        className="rounded-xl"
      />
    </section>
  );
}

export default GoogleMap;
