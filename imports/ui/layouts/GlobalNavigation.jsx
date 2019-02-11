import React from "react";
import GlobalNavigation from "@atlaskit/global-navigation";
import AppSwitcherIcon from "@atlaskit/icon/glyph/app-switcher";
import { GlobalItem } from "@atlaskit/navigation-next";
import EmojiAtlassianIcon from "@atlaskit/icon/glyph/emoji/atlassian";
import AccountsUIWrapper from "../components/AccountsUIWrapper";

const AppSwitcherComponent = props => (
  <GlobalItem
    {...props}
    icon={AppSwitcherIcon}
    id="test"
    onClick={() => console.log("AppSwitcher clicked")}
  />
);

const Global = () => (
  <GlobalNavigation
    productIcon={EmojiAtlassianIcon}
    productHref="#"
    onProductClick={() => console.log("product clicked")}
    onCreateClick={() => console.log("create clicked")}
    onSearchClick={() => console.log("search clicked")}
    onStarredClick={() => console.log("starred clicked")}
    onNotificationClick={() => console.log("notification clicked")}
    appSwitcherComponent={AppSwitcherComponent}
    appSwitcherTooltip="Switch to ..."
    helpItems={() => <div />}
    onSettingsClick={() => console.log("settings clicked")}
    loginHref="#login"
  />
);

export default Global;
