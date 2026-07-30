export type NavItem = {
  label: string;
  href: string;
};

export const navItems: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Menu', href: '/menu' },
  { label: 'About', href: '/about' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Branches', href: '/branches' },
  { label: 'Contact', href: '/contact' },
];

export type Dish = {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
  alt: string;
  tag?: string;
  category: string;
};

export const signatureDishes: Dish[] = [
  {
    id: 'chicken-biryani',
    name: 'Chicken Dum Biryani',
    description:
      'Slow-cooked basmati layered with marinated chicken, fried onions and saffron, sealed and dum-cooked the traditional way.',
    price: '₹280',
    image:
      'https://images.pexels.com/photos/28674660/pexels-photo-28674660.jpeg?auto=compress&cs=tinysrgb&w=900',
    alt: 'Chicken dum biryani served with curry',
    tag: 'Signature',
    category: 'Biryani',
  },
  {
    id: 'mutton-biryani',
    name: 'Mutton Biryani',
    description:
      'Tender mutton on the bone married with fragrant rice, whole spices and a hint of kewra — a Hyderabadi classic.',
    price: '₹360',
    image:
      'https://images.pexels.com/photos/9609856/pexels-photo-9609856.jpeg?auto=compress&cs=tinysrgb&w=900',
    alt: 'Mutton biryani with traditional sides',
    tag: 'Chef’s Pick',
    category: 'Biryani',
  },
  {
    id: 'chicken-65',
    name: 'Chicken 65',
    description:
      'Fiery deep-fried chicken tossed with curry leaves, red chillies and ginger-garlic — crisp outside, juicy within.',
    price: '₹240',
    image:
      'https://images.pexels.com/photos/28674535/pexels-photo-28674535.jpeg?auto=compress&cs=tinysrgb&w=900',
    alt: 'Spicy fried chicken drumsticks on a platter',
    tag: 'Bestseller',
    category: 'Starters',
  },
  {
    id: 'haleem',
    name: 'Haleem',
    description:
      'A slow-simmered blend of wheat, lentils and mutton, beaten to a silky texture and crowned with fried onions and lime.',
    price: '₹220',
    image:
      'https://images.pexels.com/photos/30119013/pexels-photo-30119013.jpeg?auto=compress&cs=tinysrgb&w=900',
    alt: 'Hearty haleem stew served with naan',
    tag: 'Seasonal',
    category: 'Specials',
  },
  {
    id: 'kebabs',
    name: 'Seekh Kebabs',
    description:
      'Minced meat skewers grilled over charcoal with green chillies, coriander and secret spice blends from 1985.',
    price: '₹300',
    image:
      'https://images.pexels.com/photos/12889677/pexels-photo-12889677.jpeg?auto=compress&cs=tinysrgb&w=900',
    alt: 'Grilled meat skewers on a charcoal grill',
    tag: 'Charcoal Grilled',
    category: 'Kebabs',
  },
  {
    id: 'double-ka-meetha',
    name: 'Double Ka Meetha',
    description:
      'Saffron-soaked bread pudding layered with reduced milk, nuts and cardamom — the royal Hyderabad dessert.',
    price: '₹160',
    image:
      'https://images.pexels.com/photos/20446398/pexels-photo-20446398.jpeg?auto=compress&cs=tinysrgb&w=900',
    alt: 'Indian sweet dessert platter with shahi tukda',
    tag: 'Dessert',
    category: 'Desserts',
  },
];

export type MenuCategory = {
  name: string;
  items: {
    name: string;
    description: string;
    price: string;
    veg?: boolean;
    popular?: boolean;
  }[];
};

export const menuCategories: MenuCategory[] = [
  {
    name: 'Biryani',
    items: [
      {
        name: 'Chicken Dum Biryani',
        description: 'Basmati rice, marinated chicken, saffron, fried onions, dum-cooked.',
        price: '₹280',
        popular: true,
      },
      {
        name: 'Mutton Biryani',
        description: 'Bone mutton, whole spices, kewra water, slow-cooked on dum.',
        price: '₹360',
        popular: true,
      },
      {
        name: 'Veg Dum Biryani',
        description: 'Seasonal vegetables, paneer, fragrant rice, mint and saffron.',
        price: '₹220',
        veg: true,
      },
      {
        name: 'Fish Biryani',
        description: 'Pomfret marinated in Hyderabadi spices with layered rice.',
        price: '₹340',
      },
      {
        name: 'Egg Biryani',
        description: 'Boiled eggs, basmati rice and a robust masala base.',
        price: '₹200',
      },
    ],
  },
  {
    name: 'Starters',
    items: [
      {
        name: 'Chicken 65',
        description: 'Deep-fried chicken with curry leaves and red chillies.',
        price: '₹240',
        popular: true,
      },
      {
        name: 'Mutton Shami Kebab',
        description: 'Patties of minced mutton and lentils, pan-seared.',
        price: '₹260',
      },
      {
        name: 'Paneer Tikka',
        description: 'Char-grilled cottage cheese with mint chutney.',
        price: '₹220',
        veg: true,
      },
      {
        name: 'Fish Fry',
        description: 'Spiced pomfret fillets shallow-fried to a crisp.',
        price: '₹320',
      },
    ],
  },
  {
    name: 'Kebabs & Curries',
    items: [
      {
        name: 'Seekh Kebab',
        description: 'Charcoal-grilled minced meat skewers.',
        price: '₹300',
        popular: true,
      },
      {
        name: 'Mutton Rogan Josh',
        description: 'Slow-cooked mutton in a rich red Kashmiri gravy.',
        price: '₹380',
      },
      {
        name: 'Chicken Korma',
        description: 'Creamy chicken curry with cashew and poppy seed paste.',
        price: '₹300',
      },
      {
        name: 'Paneer Butter Masala',
        description: 'Cottage cheese in a silky tomato-butter gravy.',
        price: '₹260',
        veg: true,
      },
      {
        name: 'Dal Makhani',
        description: 'Black lentils simmered overnight with butter and cream.',
        price: '₹220',
        veg: true,
      },
    ],
  },
  {
    name: 'Specials',
    items: [
      {
        name: 'Haleem',
        description: 'Wheat, lentils and mutton slow-cooked to a silky consistency.',
        price: '₹220',
        popular: true,
      },
      {
        name: 'Pathar Ka Gosht',
        description: 'Mutton marinated overnight, grilled on a hot stone.',
        price: '₹420',
      },
      {
        name: 'Maghaz Masala',
        description: 'Lamb brain in a robust Hyderabadi spice gravy.',
        price: '₹300',
      },
    ],
  },
  {
    name: 'Desserts & Beverages',
    items: [
      {
        name: 'Double Ka Meetha',
        description: 'Saffron bread pudding with reduced milk and nuts.',
        price: '₹160',
        popular: true,
      },
      {
        name: 'Qubani Ka Meetha',
        description: 'Stewed apricots served with cream and almonds.',
        price: '₹170',
      },
      {
        name: 'Lassi',
        description: 'Thick sweet yogurt drink, blended chilled.',
        price: '₹90',
        veg: true,
      },
      {
        name: 'Irani Chai',
        description: 'Traditional Hyderabadi milky tea with khoya.',
        price: '₹60',
        veg: true,
      },
    ],
  },
];

export type Feature = {
  title: string;
  description: string;
  icon: 'utensils' | 'leaf' | 'users' | 'map-pin';
  stat?: string;
};

export const features: Feature[] = [
  {
    title: 'Authentic Recipes',
    description:
      'Recipes guarded since 1985, passed through three generations — the same hand-pounded spices, the same dum seal.',
    icon: 'utensils',
    stat: '3 Generations',
  },
  {
    title: 'Premium Ingredients',
    description:
      'Basmati aged for two years, grass-fed meat, pure ghee and saffron sourced directly from the growers.',
    icon: 'leaf',
    stat: '100% Pure Ghee',
  },
  {
    title: 'Family Dining',
    description:
      'Spacious halls and private family rooms designed for gatherings, celebrations and quiet meals alike.',
    icon: 'users',
    stat: 'Private Halls',
  },
  {
    title: 'Multiple Branches',
    description:
      'Six branches across Hyderabad — the same legendary taste, closer to wherever you are in the city.',
    icon: 'map-pin',
    stat: '6 Branches',
  },
];

export type Testimonial = {
  name: string;
  role: string;
  rating: number;
  text: string;
  initials: string;
};

export const testimonials: Testimonial[] = [
  {
    name: 'Arjun Reddy',
    role: 'Food Blogger, Hyderabad Eats',
    rating: 5,
    text: "Shah Ghouse has been my family's go-to for biryani for over twenty years. The mutton biryani is unmatched in the city — the meat falls off the bone and the rice is perfectly separate. A true Hyderabad institution.",
    initials: 'AR',
  },
  {
    name: 'Sana Khan',
    role: 'Regular Guest since 2005',
    rating: 5,
    text: 'The haleem during Ramadan is something I look forward to all year. It tastes exactly like my grandmother used to make. The service is warm and the family rooms make celebrations effortless.',
    initials: 'SK',
  },
  {
    name: 'Vikram Iyer',
    role: 'Corporate Client',
    rating: 5,
    text: 'We cater every office gathering from Shah Ghouse. Consistent quality, generous portions and always on time. Their seekh kebabs and double ka meetha have become office favourites.',
    initials: 'VI',
  },
];

export type Branch = {
  id: string;
  name: string;
  area: string;
  address: string;
  phone: string;
  hours: string;
  mapsUrl: string;
};

export const branches: Branch[] = [
  {
    id: 'tolichowki',
    name: 'Shah Ghouse — Toli Chowki',
    area: 'Toli Chowki',
    address: 'Road No 36, Toli Chowki, Mehdipatnam, Hyderabad, Telangana 500008',
    phone: '+91 98480 12345',
    hours: '11:00 AM – 11:30 PM',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Shah+Ghouse+Toli+Chowki+Hyderabad',
  },
  {
    id: 'banjara-hills',
    name: 'Shah Ghouse — Banjara Hills',
    area: 'Banjara Hills',
    address: 'Road No 12, Banjara Hills, Hyderabad, Telangana 500034',
    phone: '+91 98480 23456',
    hours: '11:00 AM – 12:00 AM',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Shah+Ghouse+Banjara+Hills+Hyderabad',
  },
  {
    id: 'gachibowli',
    name: 'Shah Ghouse — Gachibowli',
    area: 'Gachibowli',
    address: 'Gachibowli Flyover, Financial District, Hyderabad, Telangana 500032',
    phone: '+91 98480 34567',
    hours: '11:00 AM – 11:30 PM',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Shah+Ghouse+Gachibowli+Hyderabad',
  },
  {
    id: 'charminar',
    name: 'Shah Ghouse — Charminar',
    area: 'Charminar',
    address: 'Pathergatti, Charminar, Hyderabad, Telangana 500002',
    phone: '+91 98480 45678',
    hours: '10:30 AM – 11:30 PM',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Shah+Ghouse+Charminar+Hyderabad',
  },
  {
    id: 'kondapur',
    name: 'Shah Ghouse — Kondapur',
    area: 'Kondapur',
    address: 'Kondapur Main Road, Cyberabad, Hyderabad, Telangana 500084',
    phone: '+91 98480 56789',
    hours: '11:00 AM – 11:30 PM',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Shah+Ghouse+Kondapur+Hyderabad',
  },
  {
    id: 'secunderabad',
    name: 'Shah Ghouse — Secunderabad',
    area: 'Secunderabad',
    address: 'Sarojini Devi Road, Secunderabad, Hyderabad, Telangana 500003',
    phone: '+91 98480 67890',
    hours: '11:00 AM – 11:30 PM',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Shah+Ghouse+Secunderabad',
  },
];

export type GalleryImage = {
  src: string;
  alt: string;
  span?: 'tall' | 'wide' | 'normal';
};

export const galleryImages: GalleryImage[] = [
  {
    src: 'https://images.pexels.com/photos/28674660/pexels-photo-28674660.jpeg?auto=compress&cs=tinysrgb&w=900',
    alt: 'Chicken biryani with curry and raita',
    span: 'tall',
  },
  {
    src: 'https://images.pexels.com/photos/7956506/pexels-photo-7956506.jpeg?auto=compress&cs=tinysrgb&w=900',
    alt: 'Colourful Indian spices on spoons',
    span: 'wide',
  },
  {
    src: 'https://images.pexels.com/photos/9316203/pexels-photo-9316203.jpeg?auto=compress&cs=tinysrgb&w=900',
    alt: 'Elegant restaurant interior',
    span: 'normal',
  },
  {
    src: 'https://images.pexels.com/photos/30119013/pexels-photo-30119013.jpeg?auto=compress&cs=tinysrgb&w=900',
    alt: 'Haleem served with naan',
    span: 'normal',
  },
  {
    src: 'https://images.pexels.com/photos/12889677/pexels-photo-12889677.jpeg?auto=compress&cs=tinysrgb&w=900',
    alt: 'Grilled seekh kebabs on skewers',
    span: 'wide',
  },
  {
    src: 'https://images.pexels.com/photos/35539324/pexels-photo-35539324.jpeg?auto=compress&cs=tinysrgb&w=900',
    alt: 'Traditional Indian thali platter',
    span: 'tall',
  },
  {
    src: 'https://images.pexels.com/photos/5779781/pexels-photo-5779781.jpeg?auto=compress&cs=tinysrgb&w=900',
    alt: 'Chef grilling over open flames',
    span: 'normal',
  },
  {
    src: 'https://images.pexels.com/photos/20446398/pexels-photo-20446398.jpeg?auto=compress&cs=tinysrgb&w=900',
    alt: 'Indian dessert platter with shahi tukda',
    span: 'normal',
  },
];

export const heroImage =
  'https://images.pexels.com/photos/35287418/pexels-photo-35287418.jpeg?auto=compress&cs=tinysrgb&w=1920';

export const aboutImage =
  'https://images.pexels.com/photos/24433378/pexels-photo-24433378.jpeg?auto=compress&cs=tinysrgb&w=900';

export const stats = [
  { value: '1985', label: 'Established' },
  { value: '6', label: 'City Branches' },
  { value: '40+', label: 'Years of Heritage' },
  { value: '1M+', label: 'Guests Served' },
];

export const contactInfo = {
  phone: '+91 98480 12345',
  email: 'dine@shahghouse.com',
  address: 'Road No 36, Toli Chowki, Mehdipatnam, Hyderabad, Telangana 500008',
  hours: [
    { day: 'Monday – Thursday', time: '11:00 AM – 11:30 PM' },
    { day: 'Friday – Saturday', time: '11:00 AM – 12:00 AM' },
    { day: 'Sunday', time: '10:30 AM – 11:30 PM' },
  ],
};

export const socialLinks = [
  { name: 'Facebook', href: 'https://facebook.com', icon: 'facebook' },
  { name: 'Instagram', href: 'https://instagram.com', icon: 'instagram' },
  { name: 'Twitter', href: 'https://twitter.com', icon: 'twitter' },
  { name: 'YouTube', href: 'https://youtube.com', icon: 'youtube' },
] as const;

export const reservationTimes = [
  '11:00 AM',
  '11:30 AM',
  '12:00 PM',
  '12:30 PM',
  '1:00 PM',
  '1:30 PM',
  '2:00 PM',
  '7:00 PM',
  '7:30 PM',
  '8:00 PM',
  '8:30 PM',
  '9:00 PM',
  '9:30 PM',
  '10:00 PM',
];
