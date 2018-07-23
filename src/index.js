import dva from 'dva';
import './index.css';
import RouterConfig from './router'; // es6
import counter from './models/counter';
import { createBrowserHistory as createHistory } from 'history';

// 1. Initialize
const app = dva({
  history: createHistory()
});

// 2. Plugins
// app.use({});

// 3. Model
// require('./models').default.forEach(key => app.model(key.default)); 引入index.js中所有model
app.model(counter);

// 4. Router
app.router(RouterConfig);

// 5. Start
app.start('#root');
