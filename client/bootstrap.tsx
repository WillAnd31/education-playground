import * as React from "react";
import * as ReactDOM from "react-dom";

const injectTapEventPlugin = require('react-tap-event-plugin');
injectTapEventPlugin();

import { Main } from "./app/main/components";

require('./styles/global.scss');

import { MuiThemeProvider, lightBaseTheme, getMuiTheme } from 'material-ui/styles';
const theme = getMuiTheme(lightBaseTheme);

const App = () => (
	<MuiThemeProvider muiTheme={theme}>
		<Main/>
	</MuiThemeProvider>
);

ReactDOM.render(
	<App/>,
	document.getElementsByTagName('willand')[0]
);