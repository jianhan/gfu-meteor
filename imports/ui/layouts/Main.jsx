import React, { Component } from "react";
import AccountsUIWrapper from "../components/AccountsUIWrapper";
import Page, { Grid, GridColumn } from "@atlaskit/page";
import { LayoutManager, NavigationProvider } from "@atlaskit/navigation-next";
import { Link } from "react-router-dom";
import Global from "./GlobalNavigation";

// App component - represents the whole app
export default class Main extends Component {
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
                <GridColumn medium={12}>
                  <Link to="/about-us">About Us</Link>
                  <a href="{{pathFor 'pages.about-us' }}" title="test" />
                  {this.props.content}
                </GridColumn>
              </Grid>
            </div>
          </LayoutManager>
        </NavigationProvider>
      </Page>
    );
  }
}
