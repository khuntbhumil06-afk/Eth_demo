function Marquee() {
  const items = [
    "Every Bite, a New Experience",
    "Bold Flavours",
    "Fresh Delights",
    "Snackful Adventure"
  ];

  const marqueeItems = [...items, ...items, ...items];

  return (
    <div className="marquee-container">
      <div className="marquee-track">
        {marqueeItems.map((item, index) => (
          <span key={index} className="marquee-text">
            <span className="marquee-dot"> ● </span>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export default Marquee;