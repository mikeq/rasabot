import * as express from 'express';
import * as bodyParser from 'body-parser';
import { graphqlExpress } from 'apollo-server-express';
import Schema from './schema/schema';

const app = express();
app.set('port', process.env.PORT || 3010);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.json({ message: 'Rasabot express server' });
});

app.use('/graphql', graphqlExpress({
  schema: Schema,
}));

app.listen(app.get('port'), () => {
  console.log(`Server running on port ${app.get('port')} in ${app.get('env')} mode`);
  console.log('Press CTRL+C tp stop\n');
});
