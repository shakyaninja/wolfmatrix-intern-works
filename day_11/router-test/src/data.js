let invoices = [
    {
      name: "Santa Monica",
      number: 998,
      amount: "$10,800",
      due: "12/05/1995",
    },
    {
      name: "Stankonia",
      number: 1100,
      amount: "$8,000",
      due: "10/31/2000",
    },
    {
      name: "Ocean Avenue",
      number: 1300,
      amount: "$9,500",
      due: "07/22/2003",
    },
    {
      name: "Tubthumper",
      number: 995,
      amount: "$14,000",
      due: "09/01/1997",
    },
    {
      name: "Wide Open Spaces",
      number: 99,
      amount: "$4,600",
      due: "01/27/1998",
    },
      {
        name: "Christiane Fane",
        number: 36,
        amount: "$2169.71",
        due: "4/2/2022"
      },
      {
        name: "Alric Pauncefoot",
        number: 6,
        amount: "$3765.82",
        due: "2/10/2022"
      },
      {
        name: "Kirsteni Lander",
        number: 4569,
        amount: "$8255.40",
        due: "4/21/2022"
      },
      {
        name: "Tamera Book",
        number: 2,
        amount: "$9264.19",
        due: "5/2/2021"
      },
      {
        name: "Thekla Mungane",
        number: 84367,
        amount: "$7150.25",
        due: "9/16/2021"
      },
      {
        name: "Klarika Norquay",
        number: 500,
        amount: "$7167.35",
        due: "9/6/2021"
      },
      {
        name: "Letty Logie",
        number: 123,
        amount: "$3733.10",
        due: "4/7/2022"
      },
      {
        name: "Roseanna Fearnill",
        number: 82,
        amount: "$4527.93",
        due: "1/13/2022"
      },
      {
        name: "Arliene Spaven",
        number: 51637,
        amount: "$676.41",
        due: "5/9/2021"
      },
      {
        name: "Christina Grieger",
        number: 81,
        amount: "$3474.50",
        due: "3/10/2022"
      },
      {
        name: "Sig Castle",
        number: 61862,
        amount: "$7469.35",
        due: "2/26/2022"
      },
      {
        name: "Adena Crame",
        number: 45734,
        amount: "$5339.59",
        due: "10/13/2021"
      },
      {
        name: "Alvis Berens",
        number: 28,
        amount: "$342.01",
        due: "6/20/2021"
      },
      {
        name: "Carmelita Campanelli",
        number: 958,
        amount: "$553.49",
        due: "12/28/2021"
      },
      {
        name: "Albrecht Crowche",
        number: 6462,
        amount: "$3082.30",
        due: "10/7/2021"
      },
      {
        name: "Elaina Jiracek",
        number: 205,
        amount: "$1832.68",
        due: "11/17/2021"
      },
      {
        name: "Tamara Peschke",
        number: 8,
        amount: "$2031.53",
        due: "9/18/2021"
      },
      {
        name: "Liz Gianotti",
        number: 84,
        amount: "$2000.81",
        due: "7/29/2021"
      },
      {
        name: "Ursulina Van Driel",
        number: 88667,
        amount: "$4981.08",
        due: "11/17/2021"
      },
      {
        name: "Clywd Derkes",
        number: 45,
        amount: "$7692.32",
        due: "10/28/2021"
      },
      {
        name: "Ambrosi Wooldridge",
        number: 677,
        amount: "$9080.06",
        due: "9/1/2021"
      },
      {
        name: "Delcine Fullwood",
        number: 177,
        amount: "$7234.65",
        due: "7/28/2021"
      },
      {
        name: "Alley Goodby",
        number: 4,
        amount: "$2966.54",
        due: "6/1/2021"
      },
      {
        name: "Audrie Han",
        number: 671,
        amount: "$2532.74",
        due: "2/20/2022"
      },
      {
        name: "Griz Amey",
        number: 74134,
        amount: "$8699.64",
        due: "7/14/2021"
      },
      {
        name: "Dur Cosgrave",
        number: 53277,
        amount: "$4546.77",
        due: "12/13/2021"
      },
      {
        name: "Laurent Kingsworth",
        number: 4111,
        amount: "$639.60",
        due: "2/4/2022"
      },
      {
        name: "Arlyn Fraser",
        number: 3414,
        amount: "$3790.58",
        due: "2/26/2022"
      },
      {
        name: "Davey Trail",
        number: 643,
        amount: "$5894.43",
        due: "4/13/2022"
      },
      {
        name: "Rayna Dudson",
        number: 456,
        amount: "$4775.94",
        due: "3/11/2022"
      },
      {
        name: "Dmitri Staterfield",
        number: 329,
        amount: "$3743.29",
        due: "11/23/2021"
      },
      {
        name: "Rene Chsteney",
        number: 877,
        amount: "$9803.16",
        due: "5/6/2021"
      },
      {
        name: "Hailey Garlant",
        number: 80629,
        amount: "$548.03",
        due: "10/21/2021"
      },
      {
        name: "Burch Packer",
        number: 431,
        amount: "$2841.63",
        due: "12/27/2021"
      },
      {
        name: "Boothe Webster",
        number: 3,
        amount: "$6051.02",
        due: "6/19/2021"
      },
      {
        name: "Kristos Pechold",
        number: 6223,
        amount: "$6228.43",
        due: "7/20/2021"
      },
      {
        name: "Tabbitha Ferrar",
        number: 4033,
        amount: "$5163.88",
        due: "5/11/2021"
      },
      {
        name: "Lizabeth Evered",
        number: 15138,
        amount: "$6799.74",
        due: "1/27/2022"
      },
      {
        name: "Shamus Westhofer",
        number: 2756,
        amount: "$332.74",
        due: "8/25/2021"
      },
      {
        name: "Townsend Holgan",
        number: 9463,
        amount: "$5058.53",
        due: "10/5/2021"
      },
      {
        name: "Marius Giraudot",
        number: 2014,
        amount: "$850.69",
        due: "8/25/2021"
      },
      {
        name: "Carling Ondricek",
        number: 754,
        amount: "$3261.94",
        due: "2/14/2022"
      },
      {
        name: "Theresina Ind",
        number: 86,
        amount: "$7331.26",
        due: "7/11/2021"
      },
      {
        name: "Wynne McAreavey",
        number: 9,
        amount: "$1657.62",
        due: "3/19/2022"
      },
      {
        name: "Star Gudde",
        number: 47,
        amount: "$9623.77",
        due: "8/17/2021"
      },
      {
        name: "Cesaro Ainsley",
        number: 46,
        amount: "$2012.66",
        due: "11/23/2021"
      },
      {
        name: "Felic Wastell",
        number: 1782,
        amount: "$1520.82",
        due: "3/11/2022"
      },
      {
        name: "Kimberley Sloss",
        number: 30,
        amount: "$1034.53",
        due: "11/28/2021"
      },
      {
        name: "Vitoria Muscat",
        number: 94,
        amount: "$6241.02",
        due: "12/22/2021"
      },
      {
        name: "Aleda Breukelman",
        number: 307,
        amount: "$5005.66",
        due: "9/4/2021"
      },
      {
        name: "Darcee Theze",
        number: 7,
        amount: "$8556.47",
        due: "7/4/2021"
      },
      {
        name: "Odilia Cookson",
        number: 9800,
        amount: "$1768.15",
        due: "3/24/2022"
      },
      {
        name: "Mersey Meak",
        number: 635,
        amount: "$1659.23",
        due: "3/22/2022"
      },
      {
        name: "Lisle Taleworth",
        number: 157,
        amount: "$1481.92",
        due: "12/15/2021"
      },
      {
        name: "Phyllis Stickford",
        number: 3520,
        amount: "$6041.49",
        due: "3/25/2022"
      },
      {
        name: "Porter Janusz",
        number: 128,
        amount: "$2820.66",
        due: "1/9/2022"
      },
      {
        name: "Marni Paddison",
        number: 143,
        amount: "$1101.66",
        due: "10/7/2021"
      },
      {
        name: "Dorris Nolan",
        number: 1218,
        amount: "$8501.38",
        due: "7/5/2021"
      },
      {
        name: "Avrom Marchbank",
        number: 13,
        amount: "$899.58",
        due: "5/22/2021"
      },
      {
        name: "Mozelle Scurfield",
        number: 520,
        amount: "$7866.42",
        due: "1/2/2022"
      },
      {
        name: "Krystyna Krug",
        number: 442,
        amount: "$1339.66",
        due: "3/6/2022"
      },
      {
        name: "Mag Swannie",
        number: 780,
        amount: "$8251.32",
        due: "12/7/2021"
      },
      {
        name: "Jobina Hammatt",
        number: 35,
        amount: "$2792.87",
        due: "4/6/2022"
      },
      {
        name: "Tedman Erdis",
        number: 21664,
        amount: "$305.09",
        due: "3/16/2022"
      },
      {
        name: "Burt Hunnybun",
        number: 93601,
        amount: "$6496.66",
        due: "11/9/2021"
      },
      {
        name: "Jazmin Aldus",
        number: 797,
        amount: "$9670.11",
        due: "10/14/2021"
      },
      {
        name: "Edmund Beaver",
        number: 9771,
        amount: "$3602.92",
        due: "3/16/2022"
      },
      {
        name: "Angelo Palk",
        number: 9180,
        amount: "$9767.05",
        due: "4/30/2022"
      },
      {
        name: "Ninetta Pincked",
        number: 145,
        amount: "$9565.16",
        due: "5/31/2021"
      },
      {
        name: "Dorian Twining",
        number: 898,
        amount: "$3558.46",
        due: "7/27/2021"
      },
      {
        name: "Che Ballefant",
        number: 970,
        amount: "$3729.59",
        due: "1/11/2022"
      },
      {
        name: "Jaye Rubin",
        number: 980,
        amount: "$2091.89",
        due: "3/30/2022"
      },
      {
        name: "Cyndie Sawell",
        number: 7000,
        amount: "$7633.13",
        due: "11/26/2021"
      },
      {
        name: "Roma Richemond",
        number: 30517,
        amount: "$5706.10",
        due: "5/18/2021"
      },
      {
        name: "Sanderson Chaldecott",
        number: 999,
        amount: "$5685.04",
        due: "6/22/2021"
      },
      {
        name: "Scot Iverson",
        number: 3566,
        amount: "$7996.16",
        due: "6/14/2021"
      },
      {
        name: "Stormy Abrahami",
        number: 5363,
        amount: "$2909.26",
        due: "8/2/2021"
      },
      {
        name: "Chance Brocket",
        number: 196,
        amount: "$6087.11",
        due: "3/27/2022"
      },
      {
        name: "Tabby Tatnell",
        number: 820,
        amount: "$6068.80",
        due: "10/3/2021"
      }
  ];

  export function getInvoice(number) {
    return invoices.find(
      (invoice) => invoice.number === number
    );
  }
  
  export function getInvoices() {
    return invoices;
  }

  export function deleteInvoice(number) {
    invoices = invoices.filter(
      (invoice) => invoice.number !== number
    );
  }