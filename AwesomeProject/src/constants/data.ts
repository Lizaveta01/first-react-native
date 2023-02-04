import {IProduct} from '../models/IProduct';
import {images} from './images';

export const productsData: IProduct[] = [
  {
    id: 1,
    category: 'product',
    productName: 'MI Super Bass Bluetooth Wireless Headphones',
    productPrice: 17,
    description:
      'Up to 20 hours battery life | Super powerful Bass | 40mm dynamic driver | Pressure less ear muffs | Bluetooth 5.0 | Voice control',
    isOff: true,
    offPercentage: 10,
    productImage: images.Mi[0],
    isAvailable: true,
    productImageList: images.Mi,
  },
  {
    id: 2,
    category: 'product',
    productName: 'boAt Rockerz 450 Bluetooth Headphone',
    productPrice: 14,
    description:
      'boAt Rockerz 450 M is an on-ear wireless headset that has been ergonomically designed to meet the needs of music lovers.',
    isOff: false,
    productImage: images.boat[0],
    isAvailable: true,
    productImageList: images.boat,
  },
  {
    id: 3,
    category: 'accessory',
    productName: 'boAt Airdopes 441',
    productPrice: 19,
    description:
      'Bluetooth: It has Bluetooth v5.0 with a range of 10m and is compatible with Android & iOS',
    isOff: true,
    offPercentage: 18,
    productImage: images.boatairpods[0],
    isAvailable: true,
    productImageList: images.boatairpods,
  },
  {
    id: 4,
    category: 'accessory',
    productName: 'boAt Bassheads 242',
    productPrice: 3,
    description:
      'Fly into your workouts with precise tones that inspire and energize your system with its HD sound, all the time.',
    isOff: false,
    productImage: images.boatbassheads[0],
    isAvailable: true,
    productImageList: images.boatbassheads,
  },
  {
    id: 5,
    category: 'accessory',
    productName: 'boAt Rockerz 255 Pro+',
    productPrice: 14,
    description:
      'The unbeatable boAt signature sound shines through no matter what are you playing courtesy its 10mm drivers.',
    isOff: false,
    productImage: images.boatrockerz[0],
    isAvailable: false,
    productImageList: images.boatrockerz,
  },
  {
    id: 6,
    category: 'accessory',
    productName: 'Boult Audio AirBass Propods TWS',
    productPrice: 12,
    description:
      'One Touch Control & Voice Assistant: With one multifunction button, you can play/pause, previous/next track and answer/hang-up calls.Voice assistant function lets you access siri/Google Assistant',
    isOff: false,
    productImage: images.boultairbass[0],
    isAvailable: true,
    productImageList: images.boultairbass,
  },
];
