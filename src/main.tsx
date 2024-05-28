import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import { store } from "./app/store";
import "./index.css";
import "./fonts";
import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import theme from "./theme";

const container = document.getElementById("root");

if (container) {
	const root = createRoot(container);

	root.render(
		<React.StrictMode>
			<Provider store={store}>
				<ThemeProvider theme={theme}>
					<CssBaseline />
					<App />
				</ThemeProvider>
			</Provider>
		</React.StrictMode>,
	);
} else {
	throw new Error(
		"Root element with ID 'root' was not found in the document. Ensure there is a corresponding HTML element with the ID 'root' in your HTML file.",
	);
}
