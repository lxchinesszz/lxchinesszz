import { ComponentOptionsMixin } from 'vue';
import { DefineComponent } from 'vue';
import { ExtractPropTypes } from 'vue';
import { PropType } from 'vue';
import { PublicProps } from 'vue';

declare type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};

declare type __VLS_WithTemplateSlots_2<T, S> = T & {
    new (): {
        $slots: S;
    };
};

declare type AlignType = 'center' | 'end' | 'start' | 'baseline' | undefined;

export declare type AnimateOption = {
    type: string;
    duration?: number;
    disabled?: boolean;
};

declare type AnimateOption_2 = {
    type: string;
    duration?: number;
    disabled?: boolean;
};

declare type AroundBannerType = {
    title: string;
    secondary: string;
    animate?: AnimateOption_2;
    imagePosition: ImagePosition;
    textItems: IconText[];
};

declare type Badge = {
    text: string;
    bgColor: string;
    color: string;
};

declare type Button = {
    text: string;
    type: ButtonType;
    status: ButtonStatus;
    onClick: () => void;
};

declare type ButtonStatus = 'normal' | 'success' | 'warning' | 'danger';

declare type ButtonType = 'primary' | 'secondary' | 'dashed' | 'outline' | 'text';

declare type CardProps = {
    title: string | '${title}';
    image: Image_2;
    tags?: CardTag[];
    description: Description;
    badge?: Badge;
    footButton?: FootButton;
};

declare type CardTag = {
    tag: string;
    color: string;
};

declare type Description = {
    content: string;
    rows: number;
};

declare type FootButton = {
    leftButton: Button;
    rightButton: Button;
};

declare type IconText = {
    icon: string;
    text: string;
};

declare type Image_2 = {
    link?: string;
    src: string;
    alt?: string;
};

declare type ImagePosition = {
    position: PositionType;
    animate?: AnimateOption_2;
    image: Image_2;
};

declare type PositionType = 'left' | 'right';

export declare const VAnimate: __VLS_WithTemplateSlots<DefineComponent<    {
animate: {
type: PropType<AnimateOption>;
default: {
type: string;
duration: number;
disabled: boolean;
};
};
}, {
replay: () => void;
}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<ExtractPropTypes<    {
animate: {
type: PropType<AnimateOption>;
default: {
type: string;
duration: number;
disabled: boolean;
};
};
}>>, {
animate: AnimateOption;
}, {}>, {
    default?(_: {}): any;
}>;

export declare const VAroundBanner: DefineComponent<    {
line: BooleanConstructor;
template: {
type: PropType<AroundBannerType[]>;
default: {
imagePosition: {
image: {
src: string;
};
position: string;
animate: {
type: string;
duration: number;
disable: boolean;
};
};
title: string;
animate: {
type: string;
duration: number;
disable: boolean;
};
secondary: string;
textItems: {
text: string;
}[];
}[];
};
}, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<ExtractPropTypes<    {
line: BooleanConstructor;
template: {
type: PropType<AroundBannerType[]>;
default: {
imagePosition: {
image: {
src: string;
};
position: string;
animate: {
type: string;
duration: number;
disable: boolean;
};
};
title: string;
animate: {
type: string;
duration: number;
disable: boolean;
};
secondary: string;
textItems: {
text: string;
}[];
}[];
};
}>>, {
template: AroundBannerType[];
line: boolean;
}, {}>;

export declare const VIcon: DefineComponent<    {
icon: StringConstructor;
}, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<ExtractPropTypes<    {
icon: StringConstructor;
}>>, {}, {}>;

export declare const VImage: DefineComponent<    {
src: StringConstructor;
}, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
success: (...args: any[]) => void;
error: (...args: any[]) => void;
}, string, PublicProps, Readonly<ExtractPropTypes<    {
src: StringConstructor;
}>> & {
onError?: ((...args: any[]) => any) | undefined;
onSuccess?: ((...args: any[]) => any) | undefined;
}, {}, {}>;

export declare const VImageCard: __VLS_WithTemplateSlots_2<DefineComponent<    {
template: {
type: PropType<CardProps>;
default: {
title: string;
image: {
src: string;
};
tags: {
tag: string;
color: string;
}[];
description: {
rows: number;
content: string;
};
footButton: {
leftButton: {
text: string;
type: string;
status: string;
};
rightButton: {
text: string;
type: string;
status: string;
};
};
};
};
}, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<ExtractPropTypes<    {
template: {
type: PropType<CardProps>;
default: {
title: string;
image: {
src: string;
};
tags: {
tag: string;
color: string;
}[];
description: {
rows: number;
content: string;
};
footButton: {
leftButton: {
text: string;
type: string;
status: string;
};
rightButton: {
text: string;
type: string;
status: string;
};
};
};
};
}>>, {
template: CardProps;
}, {}>, {
    footer?(_: {}): any;
}>;

export declare const VTextCenter: DefineComponent<    {
align: {
type: PropType<AlignType>;
default: string;
};
title: StringConstructor;
secondary: StringConstructor;
tag: PropType<CardTag>;
}, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<ExtractPropTypes<    {
align: {
type: PropType<AlignType>;
default: string;
};
title: StringConstructor;
secondary: StringConstructor;
tag: PropType<CardTag>;
}>>, {
align: AlignType;
}, {}>;

export declare const VTextStatistic: DefineComponent<    {
src: StringConstructor;
title: StringConstructor;
color: StringConstructor;
secondary: StringConstructor;
}, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<ExtractPropTypes<    {
src: StringConstructor;
title: StringConstructor;
color: StringConstructor;
secondary: StringConstructor;
}>>, {}, {}>;

declare const VUI: {
    install(app: any): void;
};
export default VUI;

export { }
