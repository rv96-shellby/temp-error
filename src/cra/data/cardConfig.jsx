const Image = ({ url, width, height }) => (
  <img width={width} height={height} src={`${url}`} alt="" loading="lazy" />
);

export const landingCardConfig = () => {
  return [
    {
      title: "Stories tailored to your taste",
      imagePath: "/images/hand-star-core-small.svg",
    },
    {
      title: "Cancel or switch plans anytime",
      imagePath: "/images/handshake-core-small.svg",
    },
    {
      title: "A place just for kids",
      imagePath: "/images/heart-core-small.svg",
    },
    {
      title: "For your phone, tablet, laptop and TV",
      imagePath: "/images/tv-mobile-core-small.svg",
    },
  ].map((card) => ({
    ...card,
    image: <Image url={card.imagePath} width={100} height={100} />,
  }));
};
