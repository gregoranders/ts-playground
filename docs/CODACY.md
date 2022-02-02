# Codacy on localhost

[Home](../README.md)

## Docker image sizes

```sh
codacy/codacy-analysis-cli           414MB
codacy/codacy-eslint                1.02GB
```

### Initial docker images

```sh
#!/usr/bin/env sh

docker pull codacy/codacy-analysis-cli

# vim: tw=78 ft=sh ts=2 sw=2 sts=2 nu:
```

### Script for codacy

```sh
#!/usr/bin/env sh

CODE_DIRECTORY=$(pwd)

docker run \
  --interactive --tty --rm \
  --env CODACY_CODE="$CODACY_CODE" \
  --volume "$CODACY_CODE":$CODACY_CODE \
  --volume /var/run/docker.sock:/var/run/docker.sock \
  --volume /tmp:/tmp \
  codacy/codacy-analysis-cli \
    analyze --tool <TOOL-SHORT-NAME> --directory "$CODACY_CODE"

# vim: tw=78 ft=sh ts=2 sw=2 sts=2 nu:
```

### CLI for codacy

```sh
docker run --interactive --tty --rm --env CODACY_CODE=\"$PWD\" --volume \"$PWD\":\"$PWD\" --volume /var/run/docker.sock:/var/run/docker.sock --volume /tmp:/tmp codacy/codacy-analysis-cli analyze --directory \"$PWD\"
```

```sh
docker run --interactive --tty --rm --env CODACY_CODE=\"$PWD\" --volume \"$PWD\":\"$PWD\" --volume /var/run/docker.sock:/var/run/docker.sock --volume /tmp:/tmp codacy/codacy-analysis-cli validate-configuration --directory \"$PWD\"
```

or

```sh
 npm run codacy
```
