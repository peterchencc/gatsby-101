module.exports = {
  apps : [{
    name: 'gatsby-101',
    script: 'app.js',

    // Options reference: https://pm2.io/doc/en/runtime/reference/ecosystem-file/
    args: 'one two',
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'development'
    },
    env_production: {
      NODE_ENV: 'production'
    }
  }],

  deploy : {
    production : {
      user : 'deploy',
      host : '139.162.42.127',
      ref  : 'origin/master',
      repo : 'git@github.com:peterchencc/gatsby-101.git',
      path : '/home/deploy/gatsby-101',
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production'
    }
  }
};
