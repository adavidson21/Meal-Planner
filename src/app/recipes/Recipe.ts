export interface Recipe {
  name: string;
  type: string;
  method: string;
  ingredients: Array<object>;
  steps: Array<object>;
}
