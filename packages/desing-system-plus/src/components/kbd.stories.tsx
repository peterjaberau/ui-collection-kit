import { Kbd } from "./kbd";

export default {
  title: "Builder/Hooks",
};

const KbdStory = () => <Kbd value={["meta", "z"]} />;

export { KbdStory as Kbd };
