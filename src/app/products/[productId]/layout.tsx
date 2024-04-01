const getRandomInt = (count: number) => {
  return Math.floor(Math.random() * count);
};

const ProductDetailsLayout = ({ children }: { children: React.ReactNode }) => {
  const random = getRandomInt(2);

  if (random === 1) {
    throw new Error('Error loading review');
  }

  return (
    <>
      {children}
      <h2>Features products</h2>
    </>
  );
};

export default ProductDetailsLayout;
