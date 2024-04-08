import { ProductType } from "../const";
import { TProducts } from "../types/products";

export const productsMock: TProducts = [
  {
    id: 1,
    name: 'Гематит',
    type: ProductType.iron,
    previewImg: 'img/hematite.jpg',
  },
  {
    id: 2,
    name: 'Магнетит',
    type: ProductType.iron,
    previewImg: 'img/magnetit.jpg',
  },
  {
    id: 3,
    name: 'Лимонит',
    type: ProductType.iron,
    previewImg: 'img/limonite.jpg',
  },
  {
    id: 4,
    name: 'Полипропилен',
    type: ProductType.plastic,
    previewImg: 'img/polipropilen.jpg',
  },
  {
    id: 5,
    name: 'Полистирол',
    type: ProductType.plastic,
    previewImg: 'img/polystyrene.jpg',
  },
  {
    id: 6,
    name: 'Поливинил-хлорид',
    type: ProductType.plastic,
    previewImg: 'img/polyvinyl-chloride.jpg',
  },
  {
    id: 7,
    name: 'Дуб',
    type: ProductType.tree,
    previewImg: 'img/dub.jpg',
  },
  {
    id: 8,
    name: 'Ясень',
    type: ProductType.tree,
    previewImg: 'img/yasen.jpg',
  },
  {
    id: 9,
    name: 'Орех',
    type: ProductType.tree,
    previewImg: 'img/nut.jpg',
  },
];