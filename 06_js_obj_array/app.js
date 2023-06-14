const data = [
  {"name": "cat", "value": 17, "group": "animal", },
  {"name": "dog", "value": 6, "group": "animal", },
  {"name": "snak", "value": 2, "group": "animal", },
  {"name": "tesla", "value": 11, "group": "car", },
  {"name": "bmw", "value": 23, "group": "car", }];

const res = Array.from(
  data.reduce((a, {group, ...rest}) => {
    return a.set(group, [rest].concat(a.get(group) || []));
  }, new Map())
).map(([group, children]) => ({group, children}));

console.log(res);




//case 2-----------------------------------
//台灣區域資料
const availableLocations = [
  {
    cityName: '台北市',
    districts: [
      {
        "zip": "100",
        "name": "中正區"
      },
      {
        "zip": "103",
        "name": "大同區"
      },
      {
        "zip": "104",
        "name": "中山區"
      },
      {
        "zip": "105",
        "name": "松山區"
      },
      {
        "zip": "106",
        "name": "大安區"
      },
      {
        "zip": "108",
        "name": "萬華區"
      },
      {
        "zip": "110",
        "name": "信義區"
      },
      {
        "zip": "111",
        "name": "士林區"
      },
      {
        "zip": "112",
        "name": "北投區"
      },
      {
        "zip": "114",
        "name": "內湖區"
      },
      {
        "zip": "115",
        "name": "南港區"
      },
      {
        "zip": "116",
        "name": "文山區"
      }
    ],
  },
  {
    cityName: '宜蘭縣',
    districts: [
      {
        "zip": "100",
        "name": "中正區"
      },
      {
        "zip": "103",
        "name": "大同區"
      },
      {
        "zip": "104",
        "name": "中山區"
      },
      {
        "zip": "105",
        "name": "松山區"
      },
      {
        "zip": "106",
        "name": "大安區"
      },
      {
        "zip": "108",
        "name": "萬華區"
      },
      {
        "zip": "110",
        "name": "信義區"
      },
      {
        "zip": "111",
        "name": "士林區"
      },
      {
        "zip": "112",
        "name": "北投區"
      },
      {
        "zip": "114",
        "name": "內湖區"
      },
      {
        "zip": "115",
        "name": "南港區"
      },
      {
        "zip": "116",
        "name": "文山區"
      }
    ],
  }
];


//使用 map 將陣列中的物件變更格式
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map#using_map_to_reformat_objects_in_an_array
var reformattedArray = availableLocations.map(function (obj) {
  var rObj = {};
  rObj['cityName'] = obj.cityName;
  rObj['areas'] = obj.districts.map((district) => district.name);
  return rObj;
});


console.log("availableLocations" + JSON.stringify(availableLocations));
console.log("reformattedArray" + JSON.stringify(reformattedArray));