const menuData = [
  {
    label: "Solution",
    link: "/solution",
  },

  {
    label: "Dịch vụ",
    link: "/dich-vu",
    children: [
      {
        label: "booking",
        link: "/booking",
        description: "",
        newTab: false,
      },
      {
        label: "contact",
        link: "/contact",
        description: "",
        newTab: false,
      },
    ],
  },

  {
    label: "Về chúng tôi",
    link: "/about-us",
  },
];

const projectStatus = [
  {
    value: 1,
    label: "Đang cập nhật",
    className: "updating",
  },
  {
    value: 2,
    label: "Sắp mở bán",
    className: "comming-status",
  },
  {
    value: 3,
    label: "Đang mở bán",
    className: "on-sale-status",
  },
  {
    value: 4,
    label: "Đã bàn giao",
    className: "handed-over",
  },
];

export { menuData };
