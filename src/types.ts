export type FoodType = {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  available: boolean;
}

export type EditingFood = Omit<FoodType, 'id' | 'available'>
