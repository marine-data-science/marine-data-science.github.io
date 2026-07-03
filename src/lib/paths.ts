import path from "node:path";
import { withBasePath } from "./site";

export const ROOT_DIR = process.cwd();
export const CONTENT_ROOT = path.join(ROOT_DIR, "content");

export function toPosixPath(value: string): string {
  return value.split(path.sep).join("/");
}

export function isRemoteUrl(value: string): boolean {
  return /^https?:\/\//i.test(value);
}

export function contentAssetUrl(sourceFile: string, src: string): string {
  if (isRemoteUrl(src)) {
    return src;
  }

  const resolved = path.resolve(path.dirname(sourceFile), src);
  const relative = path.relative(CONTENT_ROOT, resolved);

  if (relative.startsWith("..") || path.isAbsolute(relative)) {
    throw new Error(`Content asset escapes source boundary: ${src}`);
  }

  return withBasePath(`/content-assets/${toPosixPath(relative)}`);
}
