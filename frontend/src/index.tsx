import * as React from "react";
import { createRoot } from "react-dom/client";
import { Root } from "./routes/root";
import { Other } from "./routes/other";
import { Homepage } from "./routes/homepage";
import { Page } from "./components/page";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from "@apollo/client";

import "./styles/global.scss";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: (
          <Page title="Home">
            <Homepage />
          </Page>
        ),
      },
      {
        path: "/other",
        element: (
          <Page title="Other page">
            <Other />
          </Page>
        ),
      },
    ],
  },
]);

const client = new ApolloClient({
  uri: "/api/graphql",
  cache: new InMemoryCache(),
});

const container = document.getElementById("app");
createRoot(container).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <RouterProvider router={router} />
    </ApolloProvider>
  </React.StrictMode>
);
