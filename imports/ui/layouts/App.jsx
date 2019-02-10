import React, { Component } from "react";
import AccountsUIWrapper from "../components/AccountsUIWrapper";
import Badge from "@atlaskit/badge";
import Page, { Grid, GridColumn } from "@atlaskit/page";
import EmojiAtlassianIcon from "@atlaskit/icon/glyph/emoji/atlassian";
import {
  GlobalItem,
  LayoutManager,
  NavigationProvider
} from "@atlaskit/navigation-next";
import AppSwitcherIcon from "@atlaskit/icon/glyph/app-switcher";

import GlobalNavigation from "@atlaskit/global-navigation";

const AppSwitcherComponent = props => (
  <GlobalItem
    {...props}
    icon={AppSwitcherIcon}
    id="test"
    onClick={() => console.log("AppSwitcher clicked")}
  />
);

// TODO: make onClicks targets show up on page instead of console.logs
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

// App component - represents the whole app
export default class App extends Component {
  render() {
    return (
      <Page>
        <NavigationProvider>
          <LayoutManager
            globalNavigation={Global}
            productNavigation={() => null}
            containerNavigation={() => null}
          >
            <div css={{ padding: "32px 40px" }}>
              <Grid>
                <GridColumn medium={8}>
                  {this.props.content}
                  <h1>Main heading</h1>
                  <p>
                    Lorem ipsum dolor sit amet and consectetur adipisicing elit.
                    Blanditiis voluptatum perspiciatis doloribus dignissimos
                    accusamus
                    <Badge>{1000}</Badge>
                    <AccountsUIWrapper />
                  </p>
                </GridColumn>
                <GridColumn medium={4}>
                  <h2>Sidebar</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Blanditiis voluptatum perspiciatis doloribus dignissimos
                    accusamus commodi, nobis ut, error iusto, quas vitae
                    nesciunt consequatur possimus labore! Mollitia est quis
                    minima asperiores.
                  </p>
                </GridColumn>
                <GridColumn>
                  <h2>Content below which takes up remaining space</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Blanditiis voluptatum perspiciatis doloribus dignissimos
                    accusamus commodi, nobis ut, error iusto, quas vitae
                    nesciunt consequatur possimus labore! Mollitia est quis
                    minima asperiores.
                  </p>
                </GridColumn>
              </Grid>
            </div>
          </LayoutManager>
        </NavigationProvider>
      </Page>
    );
  }
}
