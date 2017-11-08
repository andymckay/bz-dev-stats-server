const envs = {
  ADMINS: ['eperelman@mozilla.com', 'ehumphries@mozilla.com'],
  JWT_ISSUER: 'https://auth.mozilla.auth0.com/',
  JWKS_URI: 'https://auth.mozilla.auth0.com/.well-known/jwks.json'
};

// Set environment variables to their default values if not defined
Object
  .keys(envs)
  .forEach(env => !(env in process.env) && (process.env[env] = envs[env]));

export default envs;
