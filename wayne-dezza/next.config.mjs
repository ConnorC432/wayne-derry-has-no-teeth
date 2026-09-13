/** @type {import('next').NextConfig} */
const isGithubActions = process.env.GITHUB_ACTIONS === "true";
const repositoryName = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "";
const isUserOrOrgPagesSite = repositoryName.toLowerCase().endsWith(".github.io");
const basePath = isGithubActions && !isUserOrOrgPagesSite ? `/${repositoryName}` : "";

const nextConfig = {
	output: "export",
	images: {
		unoptimized: true,
	},
	basePath,
	assetPrefix: basePath,
	trailingSlash: true,
};

export default nextConfig;
