import { FC, ReactNode } from 'react';
import Location from '~/assets/svgs/location';
import Notifications from '~/assets/svgs/notifications';

// Define the type for individual carousel data
export type CarouselDataType = {
  Image: ReactNode; // Represents a functional component (like an SVG)
  Title: string;
  Description: string;
};

// Define the array of carousel items
export const ImageSlider: CarouselDataType[] = [
  {
    Image: <Location width={328.665} height={528.55} />, // Pass the component directly, not as JSX
    Title: 'Location access',
    Description:
      "Don't miss your ride and important updates location \nbased updates like traffic details.",
  },
  {
    Image: <Notifications width={328.665} height={528.55} />,
    Title: 'Notification access',
    Description: 'Get important travel deals, personalized \nrecommendations and more.',
  },
];
