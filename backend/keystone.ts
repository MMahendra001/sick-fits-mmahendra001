import 'dotenv/config';
import { config, createSchema } from '@keystone-next/keystone/schema';
import { User } from './schemas/User';
import { createAuth } from '@keystone-next/auth';
import { withItemData, statelessSessions } from '@keystone-next/keystone/session';

const databaseURL =
  process.env.DATABASE_URL || 'mongodb://localhost/keystone-sick-fits-tutorial';

const sessionConfig = {
  maxAge: 60 * 60 * 24 * 365, // How long they stay signed in?
  secret: process.env.COOKIE_SECRET,
};

const { withAuth } = createAuth({
  listKey: 'User',
  identityField: 'email',
  secretField: 'password',
  initFirstItem: {
    fields: ['name', 'email', 'password'],
    // TODO: Add initial roles here.
  }
});

export default withAuth(
  config({
    server: {
      cors: {
        origin: [process.env.FRONTEND_URL],
        credentials: true,
      },
    },
    db: {
      adapter: 'mongoose',
      url: databaseURL,
      // TODO: Add Data Seeding Here.
    },
    lists: createSchema({
      // Schema items go in here
      User
    }),
    ui: {
      // Show the UI only for people who pass this test.
      isAccessAllowed: ({ session }) => {
        // console.log(session);
        return !!session?.data;
      },
    },
    session: withItemData(statelessSessions(sessionConfig), {
      User: `id name email`,
    })
  }));
