import { hashSync } from 'bcrypt-ts-edge';

// How many regular users you want:
const USER_COUNT = 98;

// Pre-hash once (faster than hashing per user)
const adminPwd = hashSync('Admin123!', 10);
const userPwd  = hashSync('123456', 10);

// Exactly 2 admins
const admins = [
  {
    name: 'Admin One',
    email: 'admin1@example.com',
    password: adminPwd,
    role: 'admin',
    emailVerified: new Date(), // optional
  },
  {
    name: 'Admin Two',
    email: 'admin2@example.com',
    password: adminPwd,
    role: 'admin',
    emailVerified: new Date(), // optional
  },
];

// Many regular users
const users = Array.from({ length: USER_COUNT }, (_, i) => ({
  name: `User ${i + 1}`,
  email: `user${i + 1}@example.com`,
  password: userPwd,
  role: 'user',
  // image/emailVerified are optional; omitted
}));

const sampleData = {
  users: [...admins, ...users],
};

export default sampleData;
