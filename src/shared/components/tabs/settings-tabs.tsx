import useSettingsFilter from "@/shared/hooks/use-settings-filter";
import { Tab, Tabs } from "@nextui-org/react";

const SettingsTabs = () => {

   const { activeItem, setActiveItem } = useSettingsFilter()

  return (
    <Tabs variant={"underlined"}
    aria-label="Tabs variants"
    selectedKey={activeItem}
    // @ts-ignore
    onSelectionChange={setActiveItem}>
      <Tab key="API Access" title="API Access" />
      <Tab key="Customize Profile" title="Customize Profile" />
    </Tabs>
  )
}

export default SettingsTabs