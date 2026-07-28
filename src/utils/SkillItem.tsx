import { ReactNode } from "react";
import HTMLIcon from "../assets/icons/icons-html.svg?react";
import CSSIcon from "../assets/icons/icons-css.svg?react";
import JavaScriptIcon from "../assets/icons/icons-javascript.svg?react";
import PHPIcon from "../assets/icons/icons-php.svg?react";
import TypeScriptIcon from "../assets/icons/icons-typescript.svg?react";
import TailwindIcon from "../assets/icons/icons-tailwindcss.svg?react";
// import ReactIcon from "../assets/icons/icons-react.svg?react";
import LaravelIcon from "../assets/icons/icons-laravel.svg?react";
import MySQLIcon from "../assets/icons/icons-mysql.svg?react";
import GithubIcon from "../assets/icons/icons-github.svg?react";

interface SkillItem {
  title: string;
  icon: (className?: string) => ReactNode;
}

export const skillDatas: SkillItem[] = [
  { title: "HTML", icon: (className) => <HTMLIcon className={className} /> },
  { title: "CSS", icon: (className) => <CSSIcon className={className} /> },
  { title: "PHP", icon: (className) => <PHPIcon className={className} /> },
  {
    title: "JavaScript",
    icon: (className) => <JavaScriptIcon className={className} />,
  },
  {
    title: "TypeScript",
    icon: (className) => <TypeScriptIcon className={className} />,
  },
  {
    title: "Tailwind",
    icon: (className) => <TailwindIcon className={className} />,
  },
  // {
  //   title: "React",
  //   icon: (className) => <ReactIcon className={className} />,
  // },
  {
    title: "Laravel",
    icon: (className) => <LaravelIcon className={className} />,
  },
  { title: "MySQl", icon: (className) => <MySQLIcon className={className} /> },
  {
    title: "Github",
    icon: (className) => <GithubIcon className={className} />,
  },
];
