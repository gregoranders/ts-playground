const strip: RegExp[] = [
  /^refs\/tags\//,
  /^refs\/heads\//,
  /^\//,
];

export const normalizeBranchName = (branch: string) => {
  let clean = branch;
  strip.forEach((regex) => {
    clean = clean.replace(regex, "");
  });
  return clean;
};
