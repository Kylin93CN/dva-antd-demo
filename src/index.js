import dva from 'dva';
import './index.css';
import RouterConfig from './router'; // es6

// 1. Initialize
const app = dva();

// 2. Plugins
// app.use({});

// 3. Model
// app.model(require('./models/example').default);

// 4. Router
app.router(RouterConfig);

// 5. Start
app.start('#root');
