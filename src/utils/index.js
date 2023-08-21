import Chance from "chance";
const chance = Chance();
export const FetchFakeData = () => {
  return chance.name({ middle: true });
};
