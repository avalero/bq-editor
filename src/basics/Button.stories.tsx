import { Button } from '.';

export default {
  title: "Button",
  component: Button
};

export const Primary = {
  args: { children: "Botón" },
  title: "Button",
  component: Button
};

export const Secondary = {
  args: { secondary: true, children: "Botón" },
  title: "Button",
  component: Button
};

export const CallToAction = {
  args: { cta: true, children: "Botón" },
  title: "Button",
  component: Button
};

export const Danger = {
  args: { danger: true, children: "Botón" },
  title: "Button",
  component: Button
};
