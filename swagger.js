const { codegen } = require("swagger-axios-codegen");

codegen({
	methodNameMode: "operationId",
	remoteUrl: "http://localhost:1609/api-json",
	outputDir: "./service",
	useStaticMethod: true,
	modelMode: "interface",
});
