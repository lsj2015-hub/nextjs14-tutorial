import { Metadata } from 'next';

// dynatic metadata
export const generateMetadata = ({ params }: Props): Metadata => {
  return {
    title: `Product ${params.productId}`,
  };
};

// dynamic metadata by using Promise
// export const generateMetadata = async ({
//   params,
// }: Props): Promise<Metadata> => {
//   const title = await new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(`iPhone ${params.productId}`);
//     }, 100);
//   });

//   return {
//     title: `Product ${title}`,
//   };
// };

type Props = {
  params: {
    productId: string;
  };
};

const ProductDetails = ({ params }: Props) => {
  return <h1>Details about product {params.productId}</h1>;
};

export default ProductDetails;
