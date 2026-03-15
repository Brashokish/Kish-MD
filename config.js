function parseOwners(value, fallback) {
  if (!value) return fallback;
  return value
    .split(',')
    .map(v => v.trim())
    .filter(Boolean);
}

export default {
  prefix: '!',
  mode: 'public',
  owners: ['YOUR PHONE NUMBER'],
  fakePresence: true,
  autoViewStatus: true,
  autoReactStatus: true,
  antiDelete: true,
  port: 8002,
};

