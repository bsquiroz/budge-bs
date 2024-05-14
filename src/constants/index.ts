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

export const categories: Record<Category, { icon: string; color: string }> = {
  rent_house: {
    icon: "<i class='bx bx-building-house'></i>",
    color: "#57A6A1",
  },
  bus: {
    icon: "<i class='bx bx-bus'></i>",
    color: "#FFDB5C",
  },
  university: {
    icon: "<i class='bx bxs-graduation'></i>",
    color: "#A91D3A",
  },
  eat: {
    icon: "<i class='bx bxs-pizza'></i>",
    color: "#F97300",
  },
  cinema: {
    icon: "<i class='bx bx-camera-movie'></i>",
    color: "#640D6B",
  },
  other: {
    icon: "<i class='bx bx-hive'></i>",
    color: "#153448",
  },
};
