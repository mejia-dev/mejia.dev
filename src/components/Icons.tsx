import type { ComponentType, JSX, SVGProps } from "react";
import ArrowUpRight from "bootstrap-icons/icons/arrow-up-right.svg?react";
import Book from "bootstrap-icons/icons/book.svg?react";
import Check from "bootstrap-icons/icons/check-lg.svg?react";
import CodeSlash from "bootstrap-icons/icons/code-slash.svg?react";
import Envelope from "bootstrap-icons/icons/envelope.svg?react";
import Copy from "bootstrap-icons/icons/copy.svg?react";
import Github from "bootstrap-icons/icons/github.svg?react";
import List from "bootstrap-icons/icons/list.svg?react";
import PersonRaisedHand from "bootstrap-icons/icons/person-raised-hand.svg?react";
import ShieldCheck from "bootstrap-icons/icons/shield-check.svg?react";
import X from "bootstrap-icons/icons/x-lg.svg?react";
import BuyMeACoffee from "../assets/icons/buy-me-a-coffee.svg?react";

interface IconProps {
  size?: number;
}

type SvgComponent = ComponentType<SVGProps<SVGSVGElement>>;

function createIcon(Svg: SvgComponent) {
  return function Icon({ size = 20 }: IconProps): JSX.Element {
    return <Svg width={size} height={size} aria-hidden="true" focusable="false" />;
  };
}

export const GitHubIcon = createIcon(Github);
export const CoffeeIcon = createIcon(BuyMeACoffee);
export const CodeIcon = createIcon(CodeSlash);
export const ShieldIcon = createIcon(ShieldCheck);
export const BookIcon = createIcon(Book);
export const HandIcon = createIcon(PersonRaisedHand);
export const ArrowUpRightIcon = createIcon(ArrowUpRight);
export const CopyIcon = createIcon(Copy);
export const CheckIcon = createIcon(Check);
export const MailIcon = createIcon(Envelope);
export const MenuIcon = createIcon(List);
export const CloseIcon = createIcon(X);