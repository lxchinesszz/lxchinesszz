export type CardTag = {
  tag: string;
  color: string;
};

export type Badge = {
  text: string;
  bgColor: string;
  color: string;
};

export type Description = {
  content: string;
  rows: number;
};

export type ButtonType =
  | 'primary'
  | 'secondary'
  | 'dashed'
  | 'outline'
  | 'text';

export type ButtonStatus = 'normal' | 'success' | 'warning' | 'danger';

export type Button = {
  text: string;
  type: ButtonType;
  status: ButtonStatus;
  onClick: () => void;
};

export type FootButton = {
  leftButton: Button;
  rightButton: Button;
};

export type Image = {
  link?: string;
  src: string;
  alt?: string;
};

export type CardProps = {
  title: string | '${title}';
  image: Image;
  tags?: CardTag[];
  description: Description;
  badge?: Badge;
  footButton?: FootButton;
};

export type PositionType = 'left' | 'right';

export type AnimateOption = {
  type: string;
  duration?: number;
  disabled?: boolean;
};

export type ImagePosition = {
  position: PositionType;
  animate?: AnimateOption;
  image: Image;
};

export type AroundBannerType = {
  title: string;
  secondary: string;
  animate?: AnimateOption;
  imagePosition: ImagePosition;
  textItems: IconText[];
};

export type IconText = {
  icon: string;
  text: string;
};
