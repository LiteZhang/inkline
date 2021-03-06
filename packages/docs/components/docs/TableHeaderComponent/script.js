import { IIcon, IButton, IDropdown, IDropdownMenu, IDropdownItem, IDropdownDivider } from "@inkline/inkline/src/components";

export default {
    name: 'TableHeaderComponent',
    props: ['column', 'index'],
    components: {
        IIcon,
        IButton,
        IDropdown,
        IDropdownMenu,
        IDropdownItem,
        IDropdownDivider
    }
};
