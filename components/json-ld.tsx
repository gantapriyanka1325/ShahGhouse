const restaurantData = {
  '@context': 'https://schema.org',
  '@type': 'Restaurant',
  name: 'Shah Ghouse',
  description:
    'Authentic Hyderabadi cuisine since 1985. Legendary dum biryani, haleem, kebabs and traditional desserts across six Hyderabad branches.',
  servesCuisine: ['Hyderabadi', 'Mughlai', 'Indian'],
  priceRange: '₹₹',
  telephone: '+91 98480 12345',
  email: 'dine@shahghouse.com',
  url: 'https://shahghouse.example.com',
  image:
    'https://images.pexels.com/photos/28674660/pexels-photo-28674660.jpeg?auto=compress&cs=tinysrgb&w=1200',
  acceptsReservations: 'True',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Road No 36, Toli Chowki, Mehdipatnam',
    addressLocality: 'Hyderabad',
    addressRegion: 'Telangana',
    postalCode: '500008',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '17.3938',
    longitude: '78.4348',
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday'],
      opens: '11:00',
      closes: '23:30',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Friday', 'Saturday'],
      opens: '11:00',
      closes: '00:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Sunday',
      opens: '10:30',
      closes: '23:30',
    },
  ],
  hasMenu: {
    '@type': 'Menu',
    hasMenuSection: [
      {
        '@type': 'MenuSection',
        name: 'Biryani',
        hasMenuItem: [
          { '@type': 'MenuItem', name: 'Chicken Dum Biryani', price: '280', priceCurrency: 'INR' },
          { '@type': 'MenuItem', name: 'Mutton Biryani', price: '360', priceCurrency: 'INR' },
        ],
      },
    ],
  },
};

export function JsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurantData) }}
    />
  );
}
