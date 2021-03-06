import { resolve } from 'path'
export default {
    webpack(config, env, helpers) {
        
        if( env.production ) {
            config.output.publicPath = "/cardano-meta-handler/";
        }
        config.resolve.alias["preact-cli-entrypoint"] = resolve(
            process.cwd(),
            "src",
            "index"
        )
        config.resolve.alias["react"] = 'preact/compat'
        config.resolve.alias["react-dom"] = 'preact/compat'
    }
}
