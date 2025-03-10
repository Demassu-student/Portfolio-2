// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 5nhZ9m14m3GkNgmNfUwqFT
// Component: zQBsHka-k5kj_Z
import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/host";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_copy_of_demassus_portfolio.module.css"; // plasmic-import: 5nhZ9m14m3GkNgmNfUwqFT/projectcss
import sty from "./PlasmicNavMenuItemBase.module.css"; // plasmic-import: zQBsHka-k5kj_Z/css

import NavIconBase2Icon from "./icons/PlasmicIcon__NavIconBase2"; // plasmic-import: HC8Bn3jMp04xoH/icon
import NavIconBase3Icon from "./icons/PlasmicIcon__NavIconBase3"; // plasmic-import: 0Ed_0b6Yb7SHu2/icon
import NavIconBaseIcon from "./icons/PlasmicIcon__NavIconBase"; // plasmic-import: 3pXVHpKYlxcDrO/icon

export type PlasmicNavMenuItemBase__VariantMembers = {
  navMenuVariants: "uxWriting" | "uix" | "gd";
};

export type PlasmicNavMenuItemBase__VariantsArgs = {
  navMenuVariants?: MultiChoiceArg<"uxWriting" | "uix" | "gd">;
};

type VariantPropType = keyof PlasmicNavMenuItemBase__VariantsArgs;
export const PlasmicNavMenuItemBase__VariantProps = new Array<VariantPropType>(
  "navMenuVariants"
);

export type PlasmicNavMenuItemBase__ArgsType = {};
type ArgPropType = keyof PlasmicNavMenuItemBase__ArgsType;
export const PlasmicNavMenuItemBase__ArgProps = new Array<ArgPropType>();

export type PlasmicNavMenuItemBase__OverridesType = {
  root?: p.Flex<"a"> & Partial<LinkProps>;
  svg?: p.Flex<"svg">;
  textAndSupportingText2?: p.Flex<"div">;
  textAndBadge2?: p.Flex<"div">;
  text3?: p.Flex<"div">;
  theLatestIndustryNewsUpdatesAndInfo2?: p.Flex<"div">;
};

export interface DefaultNavMenuItemBaseProps {
  navMenuVariants?: MultiChoiceArg<"uxWriting" | "uix" | "gd">;
  className?: string;
}

function PlasmicNavMenuItemBase__RenderFunc(props: {
  variants: PlasmicNavMenuItemBase__VariantsArgs;
  args: PlasmicNavMenuItemBase__ArgsType;
  overrides: PlasmicNavMenuItemBase__OverridesType;

  forNode?: string;
}) {
  const { variants, args, overrides, forNode } = props;

  return (
    <p.Stack
      as={p.PlasmicLink}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(
        projectcss.all,
        projectcss.a,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.root,
        {
          [sty.rootnavMenuVariants_gd]: hasVariant(
            variants,
            "navMenuVariants",
            "gd"
          ),
          [sty.rootnavMenuVariants_uix]: hasVariant(
            variants,
            "navMenuVariants",
            "uix"
          ),
          [sty.rootnavMenuVariants_uxWriting]: hasVariant(
            variants,
            "navMenuVariants",
            "uxWriting"
          )
        }
      )}
      component={Link}
      href={
        hasVariant(variants, "navMenuVariants", "uix")
          ? ("/uiux" as const)
          : hasVariant(variants, "navMenuVariants", "uxWriting")
          ? ("/ux-writing" as const)
          : ("/GD" as const)
      }
      platform={"nextjs"}
      target={
        hasVariant(variants, "navMenuVariants", "gd")
          ? ("_blank" as const)
          : hasVariant(variants, "navMenuVariants", "uix")
          ? ("_blank" as const)
          : hasVariant(variants, "navMenuVariants", "uxWriting")
          ? ("_blank" as const)
          : undefined
      }
    >
      <p.PlasmicIcon
        data-plasmic-name={"svg"}
        data-plasmic-override={overrides.svg}
        PlasmicIconType={
          hasVariant(variants, "navMenuVariants", "gd")
            ? NavIconBase3Icon
            : hasVariant(variants, "navMenuVariants", "uix")
            ? NavIconBaseIcon
            : NavIconBase2Icon
        }
        className={classNames(projectcss.all, sty.svg, {
          [sty.svgnavMenuVariants_gd]: hasVariant(
            variants,
            "navMenuVariants",
            "gd"
          ),
          [sty.svgnavMenuVariants_uix]: hasVariant(
            variants,
            "navMenuVariants",
            "uix"
          ),
          [sty.svgnavMenuVariants_uxWriting]: hasVariant(
            variants,
            "navMenuVariants",
            "uxWriting"
          )
        })}
        role={"img"}
      />

      <p.Stack
        as={"div"}
        data-plasmic-name={"textAndSupportingText2"}
        data-plasmic-override={overrides.textAndSupportingText2}
        hasGap={true}
        className={classNames(projectcss.all, sty.textAndSupportingText2, {
          [sty.textAndSupportingText2navMenuVariants_gd]: hasVariant(
            variants,
            "navMenuVariants",
            "gd"
          ),
          [sty.textAndSupportingText2navMenuVariants_uxWriting]: hasVariant(
            variants,
            "navMenuVariants",
            "uxWriting"
          )
        })}
      >
        <p.Stack
          as={"div"}
          data-plasmic-name={"textAndBadge2"}
          data-plasmic-override={overrides.textAndBadge2}
          hasGap={true}
          className={classNames(projectcss.all, sty.textAndBadge2)}
        >
          <div
            data-plasmic-name={"text3"}
            data-plasmic-override={overrides.text3}
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text3,
              {
                [sty.text3navMenuVariants_gd]: hasVariant(
                  variants,
                  "navMenuVariants",
                  "gd"
                ),
                [sty.text3navMenuVariants_uix]: hasVariant(
                  variants,
                  "navMenuVariants",
                  "uix"
                ),
                [sty.text3navMenuVariants_uxWriting]: hasVariant(
                  variants,
                  "navMenuVariants",
                  "uxWriting"
                )
              }
            )}
          >
            {hasVariant(variants, "navMenuVariants", "gd")
              ? "Graphic Design"
              : hasVariant(variants, "navMenuVariants", "uix")
              ? "UI/UX Design"
              : hasVariant(variants, "navMenuVariants", "uxWriting")
              ? "UX Writing"
              : "Heading"}
          </div>
        </p.Stack>

        <div
          data-plasmic-name={"theLatestIndustryNewsUpdatesAndInfo2"}
          data-plasmic-override={overrides.theLatestIndustryNewsUpdatesAndInfo2}
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.theLatestIndustryNewsUpdatesAndInfo2,
            {
              [sty.theLatestIndustryNewsUpdatesAndInfo2navMenuVariants_gd]:
                hasVariant(variants, "navMenuVariants", "gd"),
              [sty.theLatestIndustryNewsUpdatesAndInfo2navMenuVariants_uix]:
                hasVariant(variants, "navMenuVariants", "uix"),
              [sty.theLatestIndustryNewsUpdatesAndInfo2navMenuVariants_uxWriting]:
                hasVariant(variants, "navMenuVariants", "uxWriting")
            }
          )}
        >
          {hasVariant(variants, "navMenuVariants", "gd")
            ? "I’ve done a lot of graphic works in the past, check it out!"
            : hasVariant(variants, "navMenuVariants", "uix")
            ? "Selection of my work as a UI/UX Designer"
            : hasVariant(variants, "navMenuVariants", "uxWriting")
            ? "As an UI/UX, I want to know how to write, so that i can do better"
            : "Isi deskripsinya disini maximal 2 baris yep"}
        </div>
      </p.Stack>
    </p.Stack>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "svg",
    "textAndSupportingText2",
    "textAndBadge2",
    "text3",
    "theLatestIndustryNewsUpdatesAndInfo2"
  ],
  svg: ["svg"],
  textAndSupportingText2: [
    "textAndSupportingText2",
    "textAndBadge2",
    "text3",
    "theLatestIndustryNewsUpdatesAndInfo2"
  ],
  textAndBadge2: ["textAndBadge2", "text3"],
  text3: ["text3"],
  theLatestIndustryNewsUpdatesAndInfo2: ["theLatestIndustryNewsUpdatesAndInfo2"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "a";
  svg: "svg";
  textAndSupportingText2: "div";
  textAndBadge2: "div";
  text3: "div";
  theLatestIndustryNewsUpdatesAndInfo2: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicNavMenuItemBase__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicNavMenuItemBase__VariantsArgs;
    args?: PlasmicNavMenuItemBase__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicNavMenuItemBase__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicNavMenuItemBase__ArgsType, ReservedPropsType> &
    // Specify overrides for each element directly as props
    Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    // Specify props for the root element
    Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicNavMenuItemBase__ArgProps,
      internalVariantPropNames: PlasmicNavMenuItemBase__VariantProps
    });

    return PlasmicNavMenuItemBase__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicNavMenuItemBase";
  } else {
    func.displayName = `PlasmicNavMenuItemBase.${nodeName}`;
  }
  return func;
}

export const PlasmicNavMenuItemBase = Object.assign(
  // Top-level PlasmicNavMenuItemBase renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    svg: makeNodeComponent("svg"),
    textAndSupportingText2: makeNodeComponent("textAndSupportingText2"),
    textAndBadge2: makeNodeComponent("textAndBadge2"),
    text3: makeNodeComponent("text3"),
    theLatestIndustryNewsUpdatesAndInfo2: makeNodeComponent(
      "theLatestIndustryNewsUpdatesAndInfo2"
    ),

    // Metadata about props expected for PlasmicNavMenuItemBase
    internalVariantProps: PlasmicNavMenuItemBase__VariantProps,
    internalArgProps: PlasmicNavMenuItemBase__ArgProps
  }
);

export default PlasmicNavMenuItemBase;
/* prettier-ignore-end */
