interface ServiceInterface {
  title: string;
  price: number;
}

interface ListOfServicesInterface {
  category: string;
  services: ServiceInterface[];
}

export const mock: Array<ListOfServicesInterface> = [
  {
    category: "Manicure",
    services: [
      {
        title: "Manicure con diseño",
        price: 40,
      },
      {
        title: "Manicure Spa",
        price: 120,
      },
      {
        title: "Manicure OPI Infinite Shine",
        price: 150,
      },
    ],
  },
  {
    category: "Pedicure",
    services: [
      {
        title: "Pedicure con diseño",
        price: 50,
      },
      {
        title: "Pedicure Spa",
        price: 80,
      },
      {
        title: "Pedicure OPI Infinite Shine",
        price: 170,
      },
    ],
  },
];
