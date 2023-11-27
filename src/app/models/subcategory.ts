export interface Subcategory {
  _id?: string;
  name: string;
  name_ar: string;
  image: object;
  parentCategory: string;
  createdAt?: Date;
  updatedAt?: Date;
}
