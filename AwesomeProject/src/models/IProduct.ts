export interface IProduct {
  id: number;
  category: string;
  productName: string;
  productPrice: number;
  description: string;
  isOff: boolean;
  offPercentage?: number;
  productImage: string;
  isAvailable: boolean;
  productImageList: string[];
  counter?: number;
}
