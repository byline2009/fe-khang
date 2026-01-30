// interface ILink {
//   label: string
//   link: string
// }

const infoLink = [
  {
    label: 'Báo cáo - Thị trường',
    link: 'https://blog.houze.vn/thi-truong',
    newTab: true,
  },
  {
    label: 'Đánh giá dự án',
    link: 'https://blog.houze.vn/phan-tich',
    newTab: true,
  },
  {
    label: 'Khoá học cho môi giới',
    link: '#',
    isFunc: true,
  },
] as any[]

const companyLink = [
  {
    label: 'Về chúng tôi',
    link: '/about-us',
  },
  {
    label: 'Tuyển dụng',
    link: 'https://houze.group/careers/',
    newTab: true,
  },
  {
    label: 'Đội ngũ',
    link: '/agent',
  },
  {
    label: 'Sàn giao dịch',
    link: '#',
    isFunc: true,
  },
  {
    label: 'Liên hệ',
    link: '/contact-us',
  },
] as any[]

const serviceLink = [
  {
    label: 'Bán & Cho thuê nhà',
    link: '#',
    isFunc: true,
  },
  {
    label: 'Mua nhà',
    link: '/mua-nha-voi-houze',
  },
  {
    label: 'Thuê nhà ',
    link: '#',
    isFunc: true,
  },
  {
    label: 'Gói hỗ trợ vay mua ',
    link: '#',
    isFunc: true,
  },
  {
    label: 'Gặp chuyên viên tư vấn',
    link: '/chuyen-vien-tu-van',
  },
] as any[]

const menuData = [
  {
    label: 'Dự án',
    link: '/du-an',
  },
  {
    label: 'Đầu tư vốn nhỏ',
    link: 'https://houzeinvest.vn',
    newTab: true,
  },
  {
    label: 'Chuyên viên',
    link: '/agent',
  },
  {
    label: 'Dịch vụ',
    link: '/mua-nha-voi-houze',
    children: [
      {
        label: 'Mua Nhà',
        link: '/mua-nha-voi-houze',
        description: '',
        newTab: false,
      },
      {
        label: 'Chuyên viên tư vấn',
        link: '/chuyen-vien-tu-van',
        description: '',
        newTab: false,
      },
      {
        label: 'Bán & Cho thuê',
        link: '/ban-va-cho-thue',
        description: '',
        newTab: false,
      },
    ],
  },
  {
    label: 'Tin tức',
    link: 'https://blog.houze.vn',
    newTab: true,
    children: [
      {
        label: 'Phân tích',
        link: 'https://blog.houze.vn/phan-tich',
        description: '',
        newTab: true,
      },
      {
        label: 'Thị trường',
        link: 'https://blog.houze.vn/thi-truong',
        description: '',
        newTab: true,
      },
      {
        label: 'Kiến thức',
        link: 'https://blog.houze.vn/kien-thuc',
        description: '',
        newTab: true,
      },
      {
        label: 'Đầu tư',
        link: 'https://blog.houze.vn/dau-tu',
        description: '',
        newTab: true,
      },
      {
        label: 'Tất cả tin tức',
        link: 'https://blog.houze.vn/',
        description: '',
        newTab: true,
      },
    ],
  },
  {
    label: 'Về chúng tôi',
    link: '/about-us',
  },
]

const projectStatus = [
  {
    value: 1,
    label: 'Đang cập nhật',
    className: 'updating',
  },
  {
    value: 2,
    label: 'Sắp mở bán',
    className: 'comming-status',
  },
  {
    value: 3,
    label: 'Đang mở bán',
    className: 'on-sale-status',
  },
  {
    value: 4,
    label: 'Đã bàn giao',
    className: 'handed-over',
  },
]

const projectType = [
  {
    value: 1,
    label: 'Căn hộ',
  },
  {
    value: 2,
    label: 'Biệt thự',
  },
  {
    value: 3,
    label: 'Nhà phố',
  },
  {
    value: 4,
    label: 'Shophouse',
  },
  {
    value: 5,
    label: 'Đất nền',
  },
]

const arrayDirection = [
  {
    value: 1,
    label: 'Đông',
  },
  {
    value: 2,
    label: 'Tây',
  },
  {
    value: 3,
    label: 'Nam',
  },
  {
    value: 4,
    label: 'Bắc',
  },
  {
    value: 5,
    label: 'Đông - Bắc',
  },
  {
    value: 6,
    label: 'Đông - Nam',
  },
  {
    value: 7,
    label: 'Tây - Bắc',
  },
  {
    value: 8,
    label: 'Tây - Nam',
  },
] as any[]

const apartmentType = [
  {
    value: 1,
    label: 'Studio',
  },
  {
    value: 2,
    label: '1PN',
  },
  {
    value: 3,
    label: '1PN+',
  },
  {
    value: 4,
    label: '2PN',
  },
  {
    value: 5,
    label: '2PN+',
  },
  {
    value: 6,
    label: '3PN',
  },
  {
    value: 7,
    label: '4PN',
  },
  {
    value: 8,
    label: 'Penthouse',
  },
  {
    value: 9,
    label: 'Shophouse',
  },
  {
    value: 10,
    label: 'Duplex',
  },
  {
    value: 11,
    label: 'Sky villa',
  },
  {
    value: 12,
    label: 'Dual-Key',
  },
  {
    value: 13,
    label: 'Officetel',
  },
  {
    value: 14,
    label: 'Văn phòng',
  },
] as any[]

const internalFacilities = [
  {
    value: 1,
    iconName: '1-icon-Parking.svg',
    label: 'Chỗ đậu xe',
  },
  {
    value: 2,
    iconName: '2-icon-Park.svg',
    label: 'Công viên',
  },
  {
    value: 3,
    iconName: '3-icon-Elevator.svg',
    label: 'Thang máy',
  },
  {
    value: 4,
    iconName: '4-icon-Pet.svg',
    label: 'Nuôi thú cưng',
  },
  {
    value: 5,
    iconName: '5-icon-Receptionist.svg',
    label: 'Sảnh lễ tân',
  },
  {
    value: 6,
    iconName: '6-icon-SuperMarket.svg',
    label: 'Siêu thị / Shophouse',
  },
  {
    value: 7,
    iconName: '7-icon-BBQ.svg',
    label: 'Sân nướng BBQ',
  },
  {
    value: 8,
    iconName: '8-icon-Eating.svg',
    label: 'Quán ăn / quán cafe',
  },
  {
    value: 9,
    iconName: '9-icon-ShopingCenter.svg',
    label: 'Trung tâm thương mại',
  },
  {
    value: 10,
    iconName: '10-icon-Swimming.svg',
    label: 'Hồ bơi',
  },
  {
    value: 11,
    iconName: '11-icon-Security.svg',
    label: 'Bảo vệ 24/7',
  },
  {
    value: 12,
    iconName: '12-icon-Gym.svg',
    label: 'Gym',
  },
  {
    value: 13,
    iconName: '13-icon-School.svg',
    label: 'Trường học',
  },
  {
    value: 14,
    iconName: '14-icon-RestRoom.svg',
    label: 'Vệ sinh công cộng',
  },
  {
    value: 15,
    iconName: '15-icon-Hospital.svg',
    label: 'Hiệu thuốc / Bệnh viện',
  },
  {
    value: 16,
    iconName: '16-icon-ExerciseWorkout.svg',
    label: 'Khu thể thao ngoài trời',
  },
  {
    value: 17,
    iconName: '17-icon-ChildrenPlace.svg',
    label: 'Khu vui chơi trẻ em',
  },
  {
    value: 18,
    iconName: '18-icon-Hall.svg',
    label: 'Phòng sinh hoạt cộng đồng',
  },
]
const furnitureOptions = [
  {
    value: 1,
    iconName: 'icon-kitchen.svg',
    label: 'Bếp',
  },
  {
    value: 2,
    iconName: 'icon-cabinet-kitchen.svg',
    label: 'Tủ bếp',
  },
  {
    value: 3,
    iconName: 'icon-loggia.svg',
    label: 'Lô gia',
  },
  {
    value: 4,
    iconName: 'icon-lavabo.svg',
    label: 'Lavabo',
  },
  {
    value: 5,
    iconName: 'icon-sink.svg',
    label: 'Bồn rửa chén',
  },
  {
    value: 6,
    iconName: 'icon-shower.svg',
    label: 'Sen tắm',
  },
  {
    value: 7,
    iconName: 'icon-toilet.svg',
    label: 'Bồn cầu',
  },
  {
    value: 8,
    iconName: 'icon-balcony.svg',
    label: 'Ban công',
  },
  {
    value: 9,
    iconName: 'icon-mirror.svg',
    label: 'Gương',
  },
  {
    value: 10,
    iconName: 'icon-water-heater.svg',
    label: 'Máy nước nóng',
  },
  {
    value: 11,
    iconName: 'icon-hood.svg',
    label: 'Máy hút mùi',
  },

  {
    value: 12,
    iconName: 'icon-electric-stove.svg',
    label: 'Bếp điện từ',
  },
  {
    value: 13,
    iconName: 'icon-gas-stove.svg',
    label: 'Bếp ga',
  },
  {
    value: 14,
    iconName: 'icon-ceiling-light.svg',
    label: 'Đèn âm tường',
  },
  {
    value: 15,
    iconName: 'icon-electric-lock-door.svg',
    label: 'Cửa khoá điện tử',
  },
  {
    value: 16,
    iconName: 'icon-ceramic-tile-floor.svg',
    label: 'Sàn gạch men',
  },
  {
    value: 17,
    iconName: 'icon-wood-tile-floor.svg',
    label: 'Sàn gỗ phòng ngủ',
  },
  {
    value: 18,
    iconName: 'icon-wall-cabinet.svg',
    label: 'Tủ âm tường',
  },
  {
    value: 19,
    iconName: 'icon-fan.svg',
    label: 'Quạt',
  },
  {
    value: 20,
    iconName: 'icon-curtains.svg',
    label: 'Rèm cửa',
  },
  {
    value: 21,
    iconName: 'icon-tivi.svg',
    label: 'Tivi',
  },
  {
    value: 22,
    iconName: 'icon-refrigerator.svg',
    label: 'Tủ lạnh',
  },
  {
    value: 23,
    iconName: 'icon-dishwasher.svg',
    label: 'Máy rửa chén',
  },
  {
    value: 24,
    iconName: 'icon-washing-machine.svg',
    label: 'Máy giặt',
  },
  {
    value: 25,
    iconName: 'icon-air-condition.svg',
    label: 'Máy lạnh',
  },
  {
    value: 26,
    iconName: 'icon-ceiling-fan.svg',
    label: 'Quạt trần',
  },
  {
    value: 27,
    iconName: 'icon-sofa.svg',
    label: 'Sofa',
  },

  {
    value: 28,
    iconName: 'icon-coffe-table.svg',
    label: 'Bàn trà / Cafe',
  },
  {
    value: 29,
    iconName: 'icon-wardrobe.svg',
    label: 'Tủ quần áo',
  },
  {
    value: 30,
    iconName: 'icon-bed.svg',
    label: 'Giường ngủ',
  },
  {
    value: 31,
    iconName: 'icon-tivi-cabinet.svg',
    label: 'Tủ Tivi',
  },

  {
    value: 32,
    iconName: 'icon-table-chair.svg',
    label: 'Bộ bàn ghế',
  },
  {
    value: 33,
    iconName: 'icon-cloth-rack.svg',
    label: 'Giá phơi đồ',
  },
  {
    value: 34,
    iconName: 'icon-microwave.svg',
    label: 'MicroWare',
  },
  {
    value: 35,
    iconName: 'icon-oven-mitts.svg',
    label: 'Lò nướng',
  },

  {
    value: 36,
    iconName: 'icon-decorative-light.svg',
    label: 'Đèn trang trí',
  },
  {
    value: 37,
    iconName: 'icon-bookshelf.svg',
    label: 'Kệ sách',
  },
  {
    value: 38,
    iconName: 'icon-shoes-cabinet.svg',
    label: 'Tủ giày dép',
  },
  {
    value: 39,
    iconName: 'icon-car-park.svg',
    label: 'Chỗ để ô tô',
  },
]

const buyStep = [
  {
    num: '01',
    label: 'Gặp chuyên viên tư vấn Houze Agent',
    content: `<p><b>Tip:</b> Bạn nên sớm đồng hành cùng chuyên viên tư vấn để tiết kiệm thời gian tìm kiếm thông tin.</p><p>Bạn có thể truy cập website hoặc ứng dụng điện thoại Houze, liên hệ số hotline <b style="color:#6100d2">0886 048 899</b> hoặc tới văn phòng Houze để chuyên viên tư vấn phù hợp nhất bắt đầu hỗ trợ bạn.</p>`,
  },
  {
    num: '02',
    label: 'Xác định BĐS phù hợp dựa trên nhu cầu và ngân sách.',
    content: `<p><b>Tip:</b> Trao đổi kỹ càng với chuyên viên tư vấn về nhu cầu và ngân sách của bạn để Houze Agent gợi ý cho bạn BĐS phù hợp nhất.</p><p>Houze Agent có sẵn hàng chục ngàn sản phẩm BĐS được đăng tải trên web & app Houze, đồng thời cũng liên kết rộng khắp với nhiều đối tác uy tín, sẵn sàng phục vụ cho mọi nhu cầu mua BĐS của bạn.</p>`,
  },
  ,
  {
    num: '03',
    label: 'Xem nhà và tiến hành các thủ tục giao dịch.',
    content: `<p><b>Tip:</b> Nền tảng công nghệ tiên tiến của Houze giúp bạn tiếp cận hình ảnh 3D trực quan về BĐS, cho dù bạn đang ở bất kỳ đâu.</p><p>Chuyên viên tư vấn hỗ trợ bạn trong suốt quá trình đặt cọc, vay ngân hàng, và hoàn tất mọi thủ tục giấy tờ một cách nhanh chóng.</p>`,
  },
  {
    num: '04',
    label: 'Nhận thông tin cập nhật cho đến khi bàn giao.',
    content: `<p><b>Tip:</b> Theo dõi mọi thông tin giao dịch và cập nhật tiến độ cho đến khi bàn giao ngay trên nền tảng Houze.</p><p>Bạn có nhu cầu tìm kiếm đối tác hoàn chỉnh tổ ấm của mình theo phong cách riêng? Bạn muốn chuyển nhượng, cho thuê lại BĐS? Houze Agent luôn sẵn sàng hỗ trợ!</p>`,
  },
]
const depositStep = [
  {
    num: '01',
    label: 'Gửi yêu cầu bán / cho thuê',
    content: `<p><b>Tip:</b> Bạn nên sớm đồng hành cùng chuyên viên tư vấn để tiết kiệm thời gian.</p><p>Bạn có thể liên hệ ký gửi theo cách phù hợp nhất cho bạn (gửi thông tin BĐS trực tiếp trên web/app, qua hotline hoặc qua chuyên viên tư vấn). Chúng tôi sẽ liên hệ lại ngay để xác thực thông tin.</p>`,
  },
  {
    num: '02',
    label: 'Xuất bản & quảng bá tin đăng',
    content: `<p><b>Tip:</b> Sử dụng nền tảng công nghệ tiên tiến của Houze để xây dựng hình ảnh 3D trực quan về BĐS sẽ giúp bạn quảng cáo tin đăng tốt hơn.</p><p>Chuyên viên tư vấn sẽ hỗ trợ bạn trong việc hoàn tất tin đăng theo mong muốn của bạn cũng như tiêu chuẩn nội dung của Houze và xuất bản lên hệ thống sau tối đa 3 giờ (kể từ khi nhận yêu cầu).</p>`,
  },
  ,
  {
    num: '03',
    label: 'Thương lượng giá',
    content: `<p><b>Tip:</b> Trao đổi kỹ càng với chuyên viên tư vấn về nhu cầu và giá bán / cho thuê mong muốn của bạn để Houze Agent gợi ý giá đăng phù hợp nhất.<p/><p>Houze Agent tìm kiếm & tương tác với các khách hàng tiềm năng, đại diện cho bạn trong việc thương lượng giá và các vấn đề khác...</p>`,
  },
  {
    num: '04',
    label: 'Chốt giao dịch & Hoàn tất thủ tục',
    content: `<p><b>Tip:</b> Theo dõi thông tin & trạng thái giao dịch mọi lúc mọi nơi ngay trên web/app Houze.</p><p>Sau khi hai bên đạt được thoả thuận, Houze Agent sẽ hỗ trợ bạn trong việc nhận cọc, tiến hành các thủ tục giấy tờ để hoàn tất giao dịch.</p> `,
  },
]
const questionStep = [
  {
    num: '01',
    label: 'Phí môi giới bán bao nhiêu? cho thuê bao nhiêu?',
    content: `Ứng với từng yêu cầu của khách hàng mà Houze Agent có mức phí môi giới phù hợp.
(Vui lòng liên hệ với chuyên viên Houze Agent mà bạn đang làm việc cùng để biết thêm chi tiết).<br><br>Tuy nhiên ở hiện tại, mức phí sẽ không khác nhiều so với thị trường chung hiện nay 
(khoảng 1 - 2% giá trị giao dịch cho nhu cầu bán, và khoảng 1 - 2 tháng giá thuê cho nhu cầu cho thuê). `,
  },
  {
    num: '02',
    label:
      'Các khu vực / dự án mà Houze Agent đang triển khai dịch vụ tốt nhất ở hiện tại? ',
    content: `<p>Để có thể đáp ứng tốt nhất nhu cầu của khách hàng và đảm bảo chất lượng dịch vụ vượt trội mà Houze đề ra. Trong giai đoạn 2022 - 2023, chúng tôi tập trung vào các khu vực <b>Trung Tâm, Khu Đông </b>và <b>Khu Nam </b>của TP.HCM (TP. Thủ Đức, Quận 1, Quận 7, Quận 4…) và các dự án mà Houze Agent đã tham gia phân phối (nhằm phục vụ cho khách hàng đã từng mua BĐS qua Houze Agent trước đây được tốt nhất).</p>`,
  },
  {
    num: '03',
    label: 'Thường thì trong bao lâu thì tôi sẽ bán / cho thuê được nhà?',
    content: `Tùy theo tình trạng của BĐS, nhu cầu thị trường hiện tại, vị trí của BĐS và mức giá mong muốn từ chủ nhà mà thời gian bán / cho thuê được sẽ nhanh (ngay trong vài ngày) hoặc chậm hơn (kéo dài tới 60 ngày),\n Houze Agent luôn đặt mục tiêu bán/cho thuê được BĐS nhanh hơn gấp đôi so với trung bình thị trường.`,
  },
  {
    num: '04',
    label: 'Có ưu đãi gì khi tôi là khách hàng thường xuyên của Houze?',
    content: `Houze Agent luôn ưu tiên cao và có chính sách vô cùng hấp dẫn cho những khách hàng đã từng giao dịch qua Houze, bạn vui lòng trao đổi với chuyên viên Houze Agent đang đồng hành để khám phá những điều bất ngờ nhé!`,
  },
  {
    num: '05',
    label:
      'Tôi không hài lòng về chất lượng dịch vụ, hoặc cần gửi khiếu nại thì liên hệ tới ai?',
    content: `Houze Agent luôn ý thức phải nỗ lực hết sức mình để mang tới chất lượng dịch vụ tốt nhất cho khách hàng, nếu bạn cảm thấy chưa hài lòng về bất cứ điều gì, vui lòng gửi thông tin trực tiếp tới Ban Lãnh Đạo của Houze Agent qua:<br><br><p class="contact"><i class="icon-email"></i>Email : <span class="info"> ha.ceo@houze.vn</span> </p><p class="contact"><i class="icon-call-connecting"></i>Hotline : <span class="info phone"> 0886 048 899</span> </p>`,
  },
]

const introHaArr = [
  {
    img: 'icon-why-1.svg',
    label: 'Am hiểu thị trường',
    desc: 'Nền tảng công nghệ giúp chuyên viên mang tới bạn thông tin thị trường toàn diện và chính xác.',
  },
  {
    img: 'icon-why-2.svg',
    label: 'Thấu hiểu khách hàng',
    desc: 'Là người bạn đồng hành đáng tin cậy, luôn lắng nghe để giúp bạn đưa ra quyết định phù hợp nhất.',
  },
  {
    img: 'icon-why-3.svg',
    label: 'Trải nghiệm ấn tượng',
    desc: 'Cam kết mang tới bạn sự hiệu quả, an toàn với tiêu chuẩn chất lượng dịch vụ khác biệt.',
  },
]

const commitHaArr = [
  {
    img: 'commit-ha-1.jpg',
    label: 'Lợi ích của khách hàng luôn là ưu tiên hàng đầu',
    desc: 'Chuyên viên Houze Agent chú trọng lắng nghe, tìm hiểu thông tin và nhu cầu của bạn, nỗ lực tìm kiếm giải pháp để giúp bạn ra quyết định một cách hợp lý nhằm mang tới lợi ích tốt nhất.',
  },
  {
    img: 'commit-ha-2.jpg',
    label: 'Chính trực trong mọi lời nói & hành động',
    desc: 'Chuyên viên Houze Agent hướng tới việc xây dựng & củng cố niềm tin với khách hàng bằng việc luôn nhất quán giữa nói & làm, truyền tải chính xác thông tin, tình trạng để khách hàng có góc nhìn khách quan nhất.',
  },
  {
    img: 'commit-ha-3.jpg',
    label: 'Mang đến tiêu chuẩn chất lượng dịch vụ cao nhất.',
    desc: 'Không ngừng học hỏi, nâng cao kỹ năng chuyên môn và kiến thức thị trường, cùng với sự hỗ trợ đắc lực từ nền tảng công nghệ vượt trội, chuyên viên Houze Agent tự tin luôn  mang đến cho bạn sự hài lòng đầy bất ngờ.',
  },
]
const propertySimilar = [
  {
    img: '/imgs/listing-detail/property-similar/property-similar-1.png',
    title:
      'Bán căn hộ chính chủ The Park Avenue MT, chiết khấu 20% trong tháng 12',
    location: 'The Sun Avenue, An Phú, TP. Thủ Đức, TP. HCM',
    price: '2,35 tỷ',
    acreage: '123.4',
    numberBedroom: '2',
  },
  {
    img: '/imgs/listing-detail/property-similar/property-similar-2.png',
    title: 'Bán gấp căn hộ chính chủ tại chung cư Goldmark ',
    location: 'The Sun Avenue, An Phú, TP. Thủ Đức, TP. HCM',
    price: '18.4 tỷ',
    acreage: '68',
    numberBedroom: '2',
  },
  {
    img: '/imgs/listing-detail/property-similar/property-similar-3.png',
    title:
      'Chính chủ cần bán gấp căn hộ số 10 tòa S1 chung cư Precia full nội thất ',
    location: 'The Sun Avenue, An Phú, TP. Thủ Đức, TP. HCM',
    price: '4.23 tỷ',
    acreage: '68',
    numberBedroom: '2',
  },
  {
    img: '/imgs/listing-detail/property-similar/property-similar-4.png',
    title:
      'Bán căn hộ chính chủ The Park Avenue MT, chiết khấu 20% trong tháng 12 ',
    location: 'The Sun Avenue, An Phú, TP. Thủ Đức, TP. HCM',
    price: '2.35 tỷ',
    acreage: '68',
    numberBedroom: '2',
  },
  {
    img: '/imgs/listing-detail/property-similar/property-similar-5.png',
    title: 'Bán gấp căn hộ chính chủ tại chung cư Goldmark  ',
    location: 'The Sun Avenue, An Phú, TP. Thủ Đức, TP. HCM',
    price: '2.35 tỷ',
    acreage: '68',
    numberBedroom: '2',
  },
  {
    img: '/imgs/listing-detail/property-similar/property-similar-6.png',
    title:
      'Chính chủ cần bán gấp căn hộ số 10 tòa S1 chung cư Precia full nội thất',
    location: 'The Sun Avenue, An Phú, TP. Thủ Đức, TP. HCM',
    price: '2.35 tỷ',
    acreage: '68',
    numberBedroom: '2',
  },
]
const propertyTypeOptions = [
  { value: 1, label: 'Căn hộ' },
  { value: 2, label: 'Officetel' },
  { value: 3, label: 'Penthouse' },
  { value: 4, label: 'Duplex' },
  { value: 5, label: 'Studio' },
  { value: 6, label: 'Shophouse' },
  { value: 7, label: 'Nhà phố' },
  { value: 8, label: 'Nhà hẻm' },
  { value: 9, label: 'Nghỉ dưỡng, du lịch' },
  { value: 10, label: 'Biệt thự phố' },
]
const utilityStaticOptions = [
  { value: 1, label: 'Đầy đủ nội thất' },
  { value: 2, label: 'Nội thất cơ bản' },
  { value: 3, label: 'Không có nội thất' },
  { value: 4, label: 'Nhà thô' },
]
const positionAgentOptions = [
  { value: '1', label: 'Sales Consultant' },
  { value: '2', label: 'Senior Sales Consultant' },
  { value: '3', label: 'Sales Manager' },
  { value: '4', label: 'Senior Sales Manager' },
  { value: '5', label: 'Senior Director' },
  { value: '6', label: 'Senior Sales Director' },
  { value: '7', label: 'Head of Sales' },
  { value: '8', label: 'Vice President of Sales' },
]
const transactionDemandOptions = [
  { label: 'Bán', value: '1' },
  { label: 'Cho thuê', value: '2' },
  { label: 'Bán và cho thuê', value: '3' },
]
const viewPropertyOptions = [
  { label: 'Nội khu', value: '1' },
  { label: 'Thành phố', value: '2' },
  { label: 'Sông', value: '3' },
  { label: 'Biển', value: '4' },
  { label: 'Hồ bơi', value: '5' },
  { label: 'Núi', value: '6' },
  { label: 'Đường lộ', value: '2' },
]
export {
  infoLink,
  companyLink,
  serviceLink,
  menuData,
  projectStatus,
  apartmentType,
  projectType,
  internalFacilities,
  arrayDirection,
  buyStep,
  introHaArr,
  commitHaArr,
  depositStep,
  questionStep,
  propertySimilar,
  propertyTypeOptions,
  utilityStaticOptions,
  positionAgentOptions,
  transactionDemandOptions,
  viewPropertyOptions,
  furnitureOptions,
}
