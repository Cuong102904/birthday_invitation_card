import taiwanCuisineImage from '../assets/cuisine-icons/taiwan.svg';
import chinaCuisineImage from '../assets/cuisine-icons/china.svg';
import koreaCuisineImage from '../assets/cuisine-icons/korea.svg';
import europeCuisineImage from '../assets/cuisine-icons/europe.svg';
import russiaCuisineImage from '../assets/cuisine-icons/russia.svg';

export const cuisines = [
  {
    id: 'taiwan',
    label: 'Lẩu Taiwan',
    accent: 'Taiwan',
    image: taiwanCuisineImage,
    imageAlt: 'Minh hoạ lẩu Taiwan',
  },
  {
    id: 'china',
    label: 'Đồ Trung Quốc',
    accent: 'China',
    image: chinaCuisineImage,
    imageAlt: 'Minh hoạ lẩu Trung Quốc',
  },
  {
    id: 'korea',
    label: 'Korea',
    accent: 'Korea',
    image: koreaCuisineImage,
    imageAlt: 'Minh hoạ đồ ăn Hàn Quốc',
  },
  {
    id: 'europe',
    label: 'Đồ Âu',
    accent: 'Western',
    image: europeCuisineImage,
    imageAlt: 'Minh hoạ ẩm thực châu Âu',
  },
  {
    id: 'russia',
    label: 'Đồ Nga',
    accent: 'Russia',
    image: russiaCuisineImage,
    imageAlt: 'Minh hoạ đồ ăn Nga',
  },
];

export const restaurants = [
  {
    id: 'taiwan-manwah',
    cuisineId: 'taiwan',
    name: 'Lẩu Manwah',
    summary: 'Lẩu Đài Loan cho một bữa tối ấm bụng.',
    link: 'https://manwah.com.vn/mon-le',
  },
  {
    id: 'china-haidilao',
    cuisineId: 'china',
    name: 'Lẩu Haidilao',
    summary: 'Lẩu Trung Quốc cho buổi tối rôm rả.',
    link: 'https://haidilaovn.org/',
  },
  {
    id: 'korea-gogi',
    cuisineId: 'korea',
    name: 'GOGI',
    summary: 'Korean BBQ for a cozy, lively date.',
    link: 'https://www.tiktok.com/@gogilottenhatrang/photo/7418175147246390529?is_from_webapp=1&sender_device=pc&web_id=7629282912063882770',
  },
  {
    id: 'korea-so-dam-k-pasta-pizza',
    cuisineId: 'korea',
    name: 'So Đậm K Pasta & Pizza',
    summary: 'Korean comfort food with pasta and pizza.',
    link: 'https://www.tiktok.com/@nhi.i.date/video/7624774652702756116?is_from_webapp=1&sender_device=pc&web_id=7629282912063882770',
  },
  {
    id: 'europe-4p-ha-noi-center',
    cuisineId: 'europe',
    name: "Pizza 4P's Hà Nội Center",
    summary: 'Đồ Âu, không gian đẹp cho buổi hẹn.',
    link: 'https://pizza4ps.com/vn/location/4138/',
  },
  {
    id: 'europe-4p-au-co',
    cuisineId: 'europe',
    name: "Pizza 4P's Âu Cơ",
    summary: 'Đồ Âu, hợp bữa tối nhẹ nhàng.',
    link: 'https://pizza4ps.com/vn/location/2620/',
  },
  {
    id: 'europe-4p-lotte-west-lake',
    cuisineId: 'europe',
    name: "Pizza 4P's Lotte West Lake",
    summary: 'Đồ Âu, phù hợp đổi gió cuối tuần.',
    link: 'https://pizza4ps.com/vn/location/2021/',
  },
  {
    id: 'europe-la-bete',
    cuisineId: 'europe',
    name: 'La Bete',
    summary: 'Đồ Âu, không khí hẹn hò vui mắt.',
    link: 'https://www.tiktok.com/@didaukhong_/video/7562199118320241927?is_from_webapp=1&sender_device=pc&web_id=7629282912063882770',
  },
  {
    id: 'europe-la-libra',
    cuisineId: 'europe',
    name: 'LA LIBRA',
    summary: 'Đồ Âu, vibe steakhouse sáng sủa.',
    link: 'https://www.tiktok.com/@lalibrasteakhouse/video/7503591711189273864?is_from_webapp=1&sender_device=pc&web_id=7629282912063882770',
  },
  {
    id: 'europe-muoi-charcoal-kitchen',
    cuisineId: 'europe',
    name: 'Muoi Charcoal Kitchen',
    summary: 'Đồ Âu, hợp buổi tối ấm và chậm.',
    link: 'https://www.tiktok.com/@muoicharcoalkitchen/video/7488713171172216119?is_from_webapp=1&sender_device=pc&web_id=7629282912063882770',
  },
  {
    id: 'europe-garden-kitchen',
    cuisineId: 'europe',
    name: 'Garden Kitchen',
    summary: 'Đồ Âu, không gian xanh và nhẹ.',
    link: 'https://www.tiktok.com/@ngocbuonlam/video/7353642621480340743?is_from_webapp=1&sender_device=pc&web_id=7629282912063882770',
  },
  {
    id: 'europe-tablestar',
    cuisineId: 'europe',
    name: 'TABLESTAR',
    summary: 'Đồ Âu, chọn khi muốn đổi gió.',
    link: 'https://www.tiktok.com/@chaudidau92/video/7528030184973405448?is_from_webapp=1&sender_device=pc&web_id=7629282912063882770',
  },
  {
    id: 'russia-emmi-film',
    cuisineId: 'russia',
    name: 'CCCP',
    summary: 'Comfort food with a more cinematic feel.',
    link: 'https://www.tiktok.com/@emmifilm/video/7636034344678706440?is_from_webapp=1&sender_device=pc&web_id=7629282912063882770',
  },
];

export const timeSlots = [
  {
    value: '16:00',
    label: '16h',
    description: 'Đi dạo thêm một vòng, ghé vài chỗ xinh rồi mình mới qua bữa tối.',
  },
  {
    value: '17:00',
    label: '17h',
    description: 'Săn hoàng hôn, tạt qua một điểm chill rồi đi ăn tối cùng nhau.',
  },
  {
    value: '18:00',
    label: '18h',
    description: 'Đi thêm một nhịp nhẹ nhàng, rồi chuẩn bị vào bàn tối 19h30.',
  },
  {
    value: '19:00',
    label: '19h',
    description: 'Hẹn nhau gọn hơn, dạo một chút rồi vào bàn ăn tối 19h30.',
  },
];
