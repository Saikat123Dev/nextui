import type {VariantProps} from "tailwind-variants";

import {tv} from "tailwind-variants";

import {colorVariants} from "../utils";

/**
 * Tabs wrapper **Tailwind Variants** component
 *
 * @example
 * ```js
 * const {base, tabList, tab, panel} = tabs({...})
 *
 * <div className={base())}>
 *  <div className={tabList())}>
 *    <div className={tab())} data-selected="boolean">Tab 1</div>
 *    <div className={tab())} data-selected="boolean" data-disabled="boolean">Tab 2</div>
 *    <div className={tab())} data-selected="boolean">Tab 3</div>
 *  </div>
 *  <div className={panel())}>Selected panel</div>
 * </div>
 * ```
 */
const tabs = tv({
  slots: {
    base: "inline-flex",
    tabList: [
      "flex",
      "p-1",
      "h-fit",
      "gap-2",
      "items-center",
      "flex-nowrap",
      "overflow-x-scroll",
      "scrollbar-hide",
      "bg-default-100",
    ],
    tab: [
      "z-0",
      "w-full",
      "px-3",
      "py-1",
      "flex",
      "group",
      "relative",
      "justify-center",
      "items-center",
      "outline-none",
      "cursor-pointer",
      "transition-opacity",
      "data-[disabled=true]:cursor-not-allowed",
      "data-[disabled=true]:opacity-30",
      "data-[hover-unselected=true]:opacity-50",
      // focus ring
      "data-[focus-visible=true]:outline-none",
      "data-[focus-visible=true]:ring-2",
      "data-[focus-visible=true]:ring-primary",
      "data-[focus-visible=true]:ring-offset-2",
      "data-[focus-visible=true]:ring-offset-background",
      "data-[focus-visible=true]:dark:ring-offset-background-dark",
    ],
    tabContent: [
      "relative",
      "z-10",
      "text-inherit",
      "transition-colors",
      "text-default-500",
      "group-data-[selected=true]:text-foreground",
    ],
    cursor: ["absolute", "z-0", "bg-white"],
    panel: [
      "py-3",
      "px-1",
      "outline-none",
      // focus ring
      "data-[focus-visible=true]:outline-none",
      "data-[focus-visible=true]:ring-2",
      "data-[focus-visible=true]:ring-primary",
      "data-[focus-visible=true]:ring-offset-2",
      "data-[focus-visible=true]:ring-offset-background",
      "data-[focus-visible=true]:dark:ring-offset-background-dark",
    ],
  },
  variants: {
    variant: {
      solid: {
        cursor: "inset-0",
      },
      light: {
        tabList: "bg-transparent dark:bg-transparent",
        cursor: "inset-0",
      },
      underlined: {
        tabList: "bg-transparent dark:bg-transparent",
        cursor: "h-[2px] w-[80%] bottom-0 shadow-[0_1px_0px_0_rgba(0,0,0,0.05)]",
      },
      bordered: {
        tabList: "bg-transparent dark:bg-transparent border-1 border-default-200 shadow-sm",
        cursor: "inset-0",
      },
    },
    color: {
      default: {},
      primary: {},
      secondary: {},
      success: {},
      warning: {},
      danger: {},
    },
    size: {
      xs: {
        tab: "h-7 text-xs",
      },
      sm: {
        tab: "h-8 text-sm",
      },
      md: {
        tab: "h-9 text-sm",
      },
      lg: {
        tab: "h-10 text-base",
      },
      xl: {
        tab: "h-11 text-base",
      },
    },
    radius: {
      none: {
        tabList: "rounded-none",
        tab: "rounded-none",
        cursor: "rounded-none",
      },
      base: {
        tabList: "rounded",
        tab: "rounded",
        cursor: "rounded",
      },
      sm: {
        tabList: "rounded-sm",
        tab: "rounded",
        cursor: "rounded",
      },
      md: {
        tabList: "rounded-md",
        tab: "rounded-sm",
        cursor: "rounded-sm",
      },
      lg: {
        tabList: "rounded-lg",
        tab: "rounded-md",
        cursor: "rounded-md",
      },
      xl: {
        tabList: "rounded-xl",
        tab: "rounded-lg",
        cursor: "rounded-lg",
      },
      full: {
        tabList: "rounded-full",
        tab: "rounded-full",
        cursor: "rounded-full",
      },
    },
    shadowCursor: {
      none: {
        cursor: "shadow-none",
      },
      sm: {
        cursor: "shadow-sm",
      },
      md: {
        cursor: "shadow-md",
      },
      lg: {
        cursor: "shadow-lg",
      },
      xl: {
        cursor: "shadow-xl",
      },
      "2xl": {
        cursor: "shadow-2xl",
      },
      inner: {
        cursor: "shadow-inner",
      },
    },
    fullWidth: {
      true: {
        base: "w-full",
        tabList: "w-full",
      },
    },
    isDisabled: {
      true: {
        tabList: "opacity-50 pointer-events-none",
      },
    },
    disableAnimation: {
      true: {
        tab: "transition-none",
        tabContent: "transition-none",
      },
    },
  },
  defaultVariants: {
    radius: "xl",
    color: "default",
    variant: "solid",
    shadowCursor: "md",
    size: "md",
    fullWidth: false,
    isDisabled: false,
    disableAnimation: false,
  },
  compoundVariants: [
    /**
     * Variants & Colors
     */
    // solid + bordered + light && color
    {
      variant: ["solid", "bordered", "light"],
      color: "default",
      class: {
        cursor: ["bg-background", "dark:bg-default", "border border-default-100 dark:border-none"],
        tabContent: "group-data-[selected=true]:text-default-foreground",
      },
    },
    {
      variant: ["solid", "bordered", "light"],
      color: "primary",
      class: {
        cursor: colorVariants.solid.primary,
        tabContent: "group-data-[selected=true]:text-primary-foreground",
      },
    },
    {
      variant: ["solid", "bordered", "light"],
      color: "secondary",
      class: {
        cursor: colorVariants.solid.secondary,
        tabContent: "group-data-[selected=true]:text-secondary-foreground",
      },
    },
    {
      variant: ["solid", "bordered", "light"],
      color: "success",
      class: {
        cursor: colorVariants.solid.success,
        tabContent: "group-data-[selected=true]:text-success-foreground",
      },
    },
    {
      variant: ["solid", "bordered", "light"],
      color: "warning",
      class: {
        cursor: colorVariants.solid.warning,
        tabContent: "group-data-[selected=true]:text-warning-foreground",
      },
    },
    {
      variant: ["solid", "bordered", "light"],
      color: "danger",
      class: {
        cursor: colorVariants.solid.danger,
        tabContent: "group-data-[selected=true]:text-danger-foreground",
      },
    },
    // underlined && color
    {
      variant: "underlined",
      color: "default",
      class: {
        cursor: "bg-foreground",
        tabContent: "group-data-[selected=true]:text-foreground",
      },
    },
    {
      variant: "underlined",
      color: "primary",
      class: {
        cursor: "bg-primary",
        tabContent: "group-data-[selected=true]:text-primary",
      },
    },
    {
      variant: "underlined",
      color: "secondary",
      class: {
        cursor: "bg-secondary",
        tabContent: "group-data-[selected=true]:text-secondary",
      },
    },
    {
      variant: "underlined",
      color: "success",
      class: {
        cursor: "bg-success",
        tabContent: "group-data-[selected=true]:text-success",
      },
    },
    {
      variant: "underlined",
      color: "warning",
      class: {
        cursor: "bg-warning",
        tabContent: "group-data-[selected=true]:text-warning",
      },
    },
    {
      variant: "underlined",
      color: "danger",
      class: {
        cursor: "bg-danger",
        tabContent: "group-data-[selected=true]:text-danger",
      },
    },
    /**
     * Disable animation & Variants & Colors
     */
    // disabledAnimation && underlined
    {
      disableAnimation: true,
      variant: "underlined",
      class: {
        tab: [
          "after:content-['']",
          "after:absolute",
          "after:bottom-0",
          "after:h-[2px]",
          "after:w-[80%]",
          "after:opacity-0",
          "after:shadow-[0_1px_0px_0_rgba(0,0,0,0.05)]",
          "data-[selected=true]:after:opacity-100",
        ],
      },
    },

    // disableAnimation && color && solid/bordered
    {
      disableAnimation: true,
      color: "default",
      variant: ["solid", "bordered", "light"],
      class: {
        tab: "data-[selected=true]:bg-default data-[selected=true]:text-default-foreground",
      },
    },
    {
      disableAnimation: true,
      color: "primary",
      variant: ["solid", "bordered", "light"],
      class: {
        tab: "data-[selected=true]:bg-primary data-[selected=true]:text-primary-foreground",
      },
    },
    {
      disableAnimation: true,
      color: "secondary",
      variant: ["solid", "bordered", "light"],
      class: {
        tab: "data-[selected=true]:bg-secondary data-[selected=true]:text-secondary-foreground",
      },
    },
    {
      disableAnimation: true,
      color: "success",
      variant: ["solid", "bordered", "light"],
      class: {
        tab: "data-[selected=true]:bg-success data-[selected=true]:text-success-foreground",
      },
    },
    {
      disableAnimation: true,
      color: "warning",
      variant: ["solid", "bordered", "light"],
      class: {
        tab: "data-[selected=true]:bg-warning data-[selected=true]:text-warning-foreground",
      },
    },
    {
      disableAnimation: true,
      color: "danger",
      variant: ["solid", "bordered", "light"],
      class: {
        tab: "data-[selected=true]:bg-danger data-[selected=true]:text-danger-foreground",
      },
    },
    // disableAnimation && color && underlined
    {
      disableAnimation: true,
      color: "default",
      variant: "underlined",
      class: {
        tab: "data-[selected=true]:after:bg-foreground",
      },
    },
    {
      disableAnimation: true,
      color: "primary",
      variant: "underlined",
      class: {
        tab: "data-[selected=true]:after:bg-primary",
      },
    },
    {
      disableAnimation: true,
      color: "secondary",
      variant: "underlined",
      class: {
        tab: "data-[selected=true]:after:bg-secondary",
      },
    },
    {
      disableAnimation: true,
      color: "success",
      variant: "underlined",
      class: {
        tab: "data-[selected=true]:after:bg-success",
      },
    },
    {
      disableAnimation: true,
      color: "warning",
      variant: "underlined",
      class: {
        tab: "data-[selected=true]:after:bg-warning",
      },
    },
    {
      disableAnimation: true,
      color: "danger",
      variant: "underlined",
      class: {
        tab: "data-[selected=true]:after:bg-danger",
      },
    },
  ],
  compoundSlots: [
    {
      variant: "underlined",
      slots: ["tab", "tabList", "cursor"],
      class: ["rounded-none"],
    },
  ],
});

export type TabsVariantProps = VariantProps<typeof tabs>;
export type TabsSlots = keyof ReturnType<typeof tabs>;
export type TabsReturnType = ReturnType<typeof tabs>;

export {tabs};
