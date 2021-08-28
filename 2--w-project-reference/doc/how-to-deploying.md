# Demo on how to deploy

Initializing deployment: 

```
% rush init-deploy -p web-app-1              # create deployment configuration
```

Change `includeDevDependencies` to `true` in `common/config/rush/deploy.json`


```
% rush deploy -p web-app-1                   # this produce a deploy folder at <monorepo>/common/deploy

% cp -a ./common/deploy/ ~/Desktop/deploy/   # must copy with `-a` to preserver hard link, `copy -r` will not work.

% cd ~/Desktop/deploy/

% cd apps/web-app-1

% pnpm build

% cd build/

% http-server
```




