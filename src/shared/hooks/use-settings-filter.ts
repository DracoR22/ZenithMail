import { settingsActiveItem } from "@/configs/constants";
import { useAtom } from "jotai";

const useSettingsFilter = () => {
  const [activeItem, setActiveItem] = useAtom<string>(settingsActiveItem);

  return { activeItem, setActiveItem };
};

export default useSettingsFilter;