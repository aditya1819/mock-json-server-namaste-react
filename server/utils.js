const { readFileSync } = require('fs');
const path = require('path');
const mock = require('../data/mockhotels.json');

const getAllHotels = (req, res) => {
  console.log('json-server :: /hotels');

  const data =
    // Introduce a delay using setTimeout
    setTimeout(() => {
      console.log('json-server :: 2s Timeout completed');
      res.json(
        mock.map((item) => {
          return {
            info: {
              id: item.info.id,
              name: item.info.name,
              avgRating: item.info.avgRating,
              cuisines: item.info.cuisines,
              sla: item.info.sla,
              cloudinaryImageId: item.info.cloudinaryImageId
            }
          };
        })
      );
    }, 2000);
};

const getDataFromFile = async (id) => {
  console.log(`Fetching data for hotel: ${id}`);

  // Determine the base directory dynamically based on the current script's location
  const baseDirectory = path.join(__dirname, '..', 'data', 'hoteldata');

  const filePath = path.join(baseDirectory, `${id}.json`);

  data = await readFileSync(filePath, 'utf8');

  // Parse the JSON data
  data = JSON.parse(data);
  let info = data.data.cards[0].card.card.info;

  info = {
    id: info.id,
    name: info.name,
    city: info.city,
    cloudinaryImageId: info.cloudinaryImageId,
    areaName: info.areaName,
    cost: info.costForTwoMessage,
    cuisines: info.cuisines,
    avgRating: info.avgRating,
    veg: info.veg,
    feesDetails: info.feesDetails,
    sla: {
      deliveryTime: info.sla.deliveryTime
    },
    offerlabel: info.aggregatedDiscountInfoV2?.header ?? ''
  };

  let foodOptionsByCategory =
    data.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards;

  foodOptionsByCategory = foodOptionsByCategory.slice(1);

  // add category in data object instead of key
  let foodOptions = [];
  const foodIds = new Set();

  foodOptionsByCategory.forEach((foodOption) => {
    let items = foodOption.card.card.itemCards;
    if (items) {
      items = items.map((item) => {
        return { ...item, category: foodOption.card.card.title };
      });

      foodOptions.push(...items);
    }
  });

  foodOptions = foodOptions.filter((item) => {
    if (!foodIds.has(item.card.info.id)) {
      foodIds.add(item.card.info.id);
      return true;
    }
    return false;
  });

  return { info, foodOptions };
};

const getHotelByIdWithCategory = async (req, res) => {
  const id = req.params.id;
  let dataObj = [];

  try {
    const data = await getDataFromFile(id);

    const items = data.foodOptions;

    const categories = new Set(items.map((item) => item.category));

    dataObj = [...categories].map((category) => {
      return {
        category,
        foodItems: items.filter((item) => item.category === category)
      };
    });
  } catch (error) {
    console.error('Error while getting data:', error);
  }

  res.json(dataObj);
};

const getHotelById = async (req, res) => {
  const id = req.params.id;
  let data = [];

  try {
    data = await getDataFromFile(id);
  } catch (error) {
    console.error('Error while getting data:', error);
  }

  res.json(data);
};

module.exports = { getAllHotels, getHotelById, getHotelByIdWithCategory };
