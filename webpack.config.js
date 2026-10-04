import path from "node:path";

export default {
    mode: "development",
    entry: "./src/index.html",
    output: {
        filename: "index.js",
        path: path.resolve(import.meta.dirname, "dist"),
        clean: true,
    },
    devtool: "eval-source-map",
    devServer: {
        watchFiles: ["./src/*"],
    },
    module: {
        rules: [
            { 
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: "asset/resource", 
            },
        ],
    },
}