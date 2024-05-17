type Category =
  | "rent_house"
  | "bus"
  | "university"
  | "eat"
  | "cinema"
  | "other";

export interface Sell {
  id: string;
  date: string;
  name: string;
  amount: number;
  type: Category;
}

export interface ObjCategory {
  icon: string;
  color: string;
  name: string;
}

export type Categories = Record<Category, ObjCategory>;

export const categories: Categories = {
  rent_house: {
    icon: "<i class='bx bx-building-house'></i>",
    color: "#57A6A1",
    name: "Casa",
  },
  bus: {
    icon: "<i class='bx bx-bus'></i>",
    color: "#FFDB5C",
    name: "Transporte",
  },
  university: {
    icon: "<i class='bx bxs-graduation'></i>",
    color: "#A91D3A",
    name: "Estudio",
  },
  eat: {
    icon: "<i class='bx bxs-pizza'></i>",
    color: "#F97300",
    name: "Comida",
  },
  cinema: {
    icon: "<i class='bx bx-camera-movie'></i>",
    color: "#640D6B",
    name: "Salidas",
  },
  other: {
    icon: "<i class='bx bx-hive'></i>",
    color: "#153448",
    name: "Otros",
  },
};
