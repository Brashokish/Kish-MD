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
  geminiApiKey: "AIzaSyCx9mTjPhylwXwLH5Z2yYVoUUDW1MZ47u0",
  owners: ['254735905972'],
  fakePresence: true,
  autoViewStatus: true,
  autoReactStatus: true,
  antiDelete: true,
  chatbot: false,
  port: 8002,
};
