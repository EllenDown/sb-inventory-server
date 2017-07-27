
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('DELETE FROM "product" ; ALTER SEQUENCE product_id_seq RESTART WITH 25;')
    .then(function() {
      var products = [{
        id: 1,
        name: "Suffer Better Throwback T",
        category: "Men's Apperal",
        price: '28',
        totalQuantity: '10',
        smallQuantityAvailable: '1',
        mediumQuantityAvailable: '3',
        largeQuantityAvailable: '3',
        xlQuantityAvailable: '3'
      },{
        id: 2,
        name: "Power and Light T",
        category: "Men's Apperal",
        price: 28,
        totalQuantity: '10',
        smallQuantityAvailable: '1',
        mediumQuantityAvailable: '3',
        largeQuantityAvailable: '3',
        xlQuantityAvailable: '3'
      },{
        id: 3,
        name: "Suffer Better Totally Casual 3/4 Sleeve T",
        category: "Men's Apperal",
        price: '28',
        totalQuantity: '10',
        smallQuantityAvailable: '1',
        mediumQuantityAvailable: '3',
        largeQuantityAvailable: '3',
        xlQuantityAvailable: '3'
      },
{
        id: 4,
        name: "Suffer Better Hoody T",
        category: "Men's Apperal",
        price: '32',
        totalQuantity: '10',
        smallQuantityAvailable: '1',
        mediumQuantityAvailable: '3',
        largeQuantityAvailable: '3',
        xlQuantityAvailable: '3'
      },{
        id: 5,
        name: "Power and Light T",
        category: "Women's Apperal",
        price: '28',
        totalQuantity: '10',
        smallQuantityAvailable: '1',
        mediumQuantityAvailable: '3',
        largeQuantityAvailable: '3',
        xlQuantityAvailable: '3'
      },{
        id: 6,
        name: "Suffer Better Throwback T",
        category: "Women's Apperal",
        price: '28',
        totalQuantity: '10',
        smallQuantityAvailable: '1',
        mediumQuantityAvailable: '3',
        largeQuantityAvailable: '3',
        xlQuantityAvailable: '3'
      },{
        id: 7,
        name: "Suffer Better Semi-Tech T",
        category: "Women's Apperal",
        price: 12,
        totalQuantity: '10',
        smallQuantityAvailable: 1,
        mediumQuantityAvailable: '3',
        largeQuantityAvailable: '3',
        xlQuantityAvailable: '3'
      },{
        id: 8,
        name: "Suffer Better New Look T",
        category: "Women's Apperal",
        price: '15',
        totalQuantity: '10',
        smallQuantityAvailable: '1',
        mediumQuantityAvailable: '3',
        largeQuantityAvailable: '3',
        xlQuantityAvailable: '3'
      },{
        id: 9,
        name: "Suffer Better Tech T",
        category: "Women's Apperal",
        price: '10',
        totalQuantity: '10',
        smallQuantityAvailable: '1',
        mediumQuantityAvailable: '3',
        largeQuantityAvailable: '3',
        xlQuantityAvailable: '3'
      },{
        id: 10,
        name: "Suffer Better High Tech T",
        category: "Women's Apperal",
        price: '12',
        totalQuantity: '10',
        smallQuantityAvailable: '1',
        mediumQuantityAvailable: '3',
        largeQuantityAvailable: '3',
        xlQuantityAvailable: '3'
      },{
        id: 11,
        name: "Suffer Better Totally Casual 3/4 Sleeve T",
        category: "Women's Apperal",
        price: '28',
        totalQuantity: '10',
        smallQuantityAvailable: '1',
        mediumQuantityAvailable: '3',
        largeQuantityAvailable: '3',
        xlQuantityAvailable: '3'
      },{
        id: 12,
        name: "Suffer Better Totally Casual '3'/4 Sleeve T",
        category: "Women's Apperal",
        price: '28',
        totalQuantity: '10',
        smallQuantityAvailable: '1',
        mediumQuantityAvailable: '3',
        largeQuantityAvailable: '3',
        xlQuantityAvailable: '3'
      },{
        id: 13,
        name: "Suffer Better Hoody",
        category: "Women's Apperal",
        price: 32,
        totalQuantity: '10',
        smallQuantityAvailable: '1',
        mediumQuantityAvailable: '3',
        largeQuantityAvailable: '3',
        xlQuantityAvailable: '3'
      },{
        id: 14,
        name: "Suffer Better Buffs",
        category: "Accessories",
        price: '18',
        totalQuantity: '10'
      },{
        id: 15,
        name: "Suffer Better Water Bottle / Sticker Package",
        category: "Accessories",
        price: '5',
        totalQuantity: '10'
      },{
        id: 16,
        name: "Suffer Better Arm Warmers",
        category: "Accessories",
        price: 35,
        totalQuantity: '10',
        mediumQuantityAvailable: '5',
        largeQuantityAvailable: '5'
      },{
        id: 17,
        name: "Suffer Better Reversible Beanie",
        category: "Accessories",
        price: '20',
        totalQuantity: '10',
        smallQuantityAvailable: '1',
      },{
        id: 18,
        name: "Suffer Better Striped Socks",
        category: "Accessories",
        price: '12',
        totalQuantity: '10',
        smallQuantityAvailable: '1',
        mediumQuantityAvailable: '3',
        largeQuantityAvailable: '3',
        xlQuantityAvailable: '3'
      },{
        id: 19,
        name: "Skratch Labs -Exercise Nutrition Package",
        category: "Accessories",
        price: '13',
        totalQuantity: '10'
      },{
        id: 20,
        name: "Power and Light Trucker Hat",
        category: "Accessories",
        price: '25',
        totalQuantity: '10'
      },{
        id: 21,
        name: "Throwback Trucker Hat",
        category: "Accessories",
        price: '25',
        totalQuantity: '10',
      },{
        id: 22,
        name: "Gift Card",
        category: "Accessories",
        price: '25',
        totalQuantity: '10',
      },{
        id: 23,
        name: "Suffer Better Cycling Bib",
        category: "Men's Apperal",
        price: '110',
        totalQuantity: '10',
        smallQuantityAvailable: '1',
        mediumQuantityAvailable: '3',
        largeQuantityAvailable: '3',
        xlQuantityAvailable: '3'
      },{
        id: 24,
        name: "Suffer Better Cycling Jersey",
        category: "Men's Apperal",
        price: '90',
        totalQuantity: '10',
        smallQuantityAvailable: '1',
        mediumQuantityAvailable: '3',
        largeQuantityAvailable: '3',
        xlQuantityAvailable: '3'
      }];
      return knex('product').insert(products);
  });
};
