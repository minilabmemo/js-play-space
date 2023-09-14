


//JavaScript 遍歷 Array 的四種方法：for、for-in、for-of、forEach()

let array = [1, -1, 5, -0, 3, 6, 10, 28]

for (var i = 0; i < array.length; i++) {
  const item = array[i];
  if (item < 0) {
    continue;//繼續執行下一次的循環
  }
  console.log(i, item)

  if (item > 5) {
    break;//中斷“for迴圈”的意思
  }

}

//1 5 -0 3 6


//forEach是for迴圈的好讀版，但不能用continue/break,須轉換用return/flag

array.forEach(function (item, i) {
  if (item < 0) {
    // continue;//跳躍目標不得跨越函式界限。ts(1107)
    return //不能用continue，可以用return
  }
  console.log(i, item)
  // if (item > 5) {
  //   break;//跳躍目標不得跨越函式界限。ts(1107) 不能用，只能在外用全域變數flag來自行紀錄
  // }
});



//for-in 迴圈:
//for-in 特別慢應該是因為它是將 Index 當作 String 在處理
for (const key in array) {
  if (key < 3) {
    continue;//繼續執行下一次的循環
  }
  console.log(key);


}

//for-of 迴圈:
for (const elem of array) {
  if (elem < 0) {
    continue;//繼續執行下一次的循環
  }
  console.log(elem);
  if (elem > 5) {
    break;//中斷“for迴圈”的意思
  }
}




//==================================
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


//希望找出某個選項
const datas = [
  {"name": "cat", "animal_kind": '鳥'},
  {"name": "dog", "animal_kind": '鳥'},
  {"name": "snak", "animal_kind": '貓'},
  {"name": "tesla", "animal_kind": '鳥'},
  {"name": "bmw", "animal_kind": '鳥'}];

const animalKinds = Array.from(new Set(datas.map(data => data.animal_kind)));

console.log(animalKinds);