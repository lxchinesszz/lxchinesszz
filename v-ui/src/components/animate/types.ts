export type AnimateOption = {
  type: string;
  duration?: number;
  disabled?: boolean;
  intersecting?: boolean
};


export type TextStaggerType =
  {
    type: 'letterPullUp' | 'letterPullLeft' | 'gradualSpacing';
  }
