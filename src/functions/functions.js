/* eslint-disable spaced-comment */
/* eslint-disable import/prefer-default-export */
//? { continent: 'Europe', name: 'Eiffel Tower', address: 'Paris, France'.... },
export const transformdata = (data) => {
  const groupByContinent = (list) => {
    const grouped = list?.reduce((acc, item) => {
      if (!acc[item?.continent]) {
        acc[item?.continent] = [];
      }
      acc[item?.continent].push(item);
      return acc;
    }, {});

    return Object.entries(grouped).map(([continent, itemss]) => ({ continent, itemss }));
  }
  return groupByContinent(data);
}
