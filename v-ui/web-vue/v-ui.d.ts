import { ComponentOptionsMixin } from 'vue';
import { ComponentProvideOptions } from 'vue';
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

declare type AnimateOption = {
    type: string;
    duration?: number;
    disabled?: boolean;
    intersecting?: boolean;
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

export declare function useScrollAnimate(): {
    createObserver: (cssName: string, changeClassName: string) => void;
    disconnect: () => void;
    addAnimatePrefixIfNeeded: (className: string) => string;
};

export declare const VAnimate: __VLS_WithTemplateSlots<DefineComponent<ExtractPropTypes<    {
/**
* 动画样式
*/
animate: {
type: PropType<AnimateOption>;
default: {
type: string;
duration: number;
disabled: boolean;
intersecting: boolean;
};
};
}>, {
replay: () => void;
}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<ExtractPropTypes<    {
/**
* 动画样式
*/
animate: {
type: PropType<AnimateOption>;
default: {
type: string;
duration: number;
disabled: boolean;
intersecting: boolean;
};
};
}>> & Readonly<{}>, {
animate: AnimateOption;
}, {}, {}, {}, string, ComponentProvideOptions, true, {}, any>, {
    default?(_: {}): any;
}>;

export declare const VAroundBanner: DefineComponent<ExtractPropTypes<    {
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
}>, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<ExtractPropTypes<    {
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
}>> & Readonly<{}>, {
template: AroundBannerType[];
line: boolean;
}, {}, {}, {}, string, ComponentProvideOptions, true, {}, any>;

export declare const VIcon: DefineComponent<ExtractPropTypes<    {
icon: StringConstructor;
}>, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<ExtractPropTypes<    {
icon: StringConstructor;
}>> & Readonly<{}>, {}, {}, {}, {}, string, ComponentProvideOptions, true, {}, any>;

export declare const VImage: DefineComponent<ExtractPropTypes<    {
src: StringConstructor;
}>, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
error: (...args: any[]) => void;
success: (...args: any[]) => void;
}, string, PublicProps, Readonly<ExtractPropTypes<    {
src: StringConstructor;
}>> & Readonly<{
onError?: (...args: any[]) => any;
onSuccess?: (...args: any[]) => any;
}>, {}, {}, {}, {}, string, ComponentProvideOptions, true, {}, any>;

export declare const VImageCard: __VLS_WithTemplateSlots_2<DefineComponent<ExtractPropTypes<    {
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
}>, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<ExtractPropTypes<    {
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
}>> & Readonly<{}>, {
template: CardProps;
}, {}, {}, {}, string, ComponentProvideOptions, true, {}, any>, {
    footer?(_: {}): any;
}>;

export declare const VTextCenter: DefineComponent<ExtractPropTypes<    {
align: {
type: PropType<AlignType>;
default: string;
};
title: StringConstructor;
secondary: StringConstructor;
tag: PropType<CardTag>;
}>, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<ExtractPropTypes<    {
align: {
type: PropType<AlignType>;
default: string;
};
title: StringConstructor;
secondary: StringConstructor;
tag: PropType<CardTag>;
}>> & Readonly<{}>, {
align: AlignType;
}, {}, {}, {}, string, ComponentProvideOptions, true, {}, any>;

export declare const VTextStatistic: DefineComponent<ExtractPropTypes<    {
src: StringConstructor;
title: StringConstructor;
color: StringConstructor;
secondary: StringConstructor;
}>, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<ExtractPropTypes<    {
src: StringConstructor;
title: StringConstructor;
color: StringConstructor;
secondary: StringConstructor;
}>> & Readonly<{}>, {}, {}, {}, {}, string, ComponentProvideOptions, true, {}, any>;

declare const VUI: {
    install(app: any): void;
};
export default VUI;

export { }


declare namespace advancedFormat {
    let exports: {};
}


declare namespace customParseFormat {
    let exports: {};
}


declare namespace dayjs_min {
    let exports: {};
}


declare namespace isBetween {
    let exports: {};
}


declare namespace leaderLine_min {
    let exports: {};
}


declare namespace quarterOfYear {
    let exports: {};
}


declare namespace weekOfYear {
    let exports: {};
}


declare namespace weekYear {
    let exports: {};
}


declare namespace zhCn {
    let exports: {};
}


declare namespace VUI {
    function install(app: any): void;
}
